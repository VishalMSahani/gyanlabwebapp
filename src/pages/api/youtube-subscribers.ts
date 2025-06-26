import type { NextApiRequest, NextApiResponse } from 'next';
import type { YouTubeApiResponse } from '@/lib/types/youtube';
import { fetchChannelStats, fetchTopVideos, fetchPlaylists } from '@/lib/services/youtube';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<YouTubeApiResponse>
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const API_KEY = process.env.YOUTUBE_API_KEY;

  if (!API_KEY) {
    console.error('YouTube API key is not configured');
    return res.status(500).json({ error: 'Service temporarily unavailable' });
  }

  try {
    // Fetch all data in parallel for better performance
    const [stats, videos, playlists] = await Promise.allSettled([
      fetchChannelStats(API_KEY),
      fetchTopVideos(API_KEY),
      fetchPlaylists(API_KEY)
    ]);

    // Handle results
    const channelStats = stats.status === 'fulfilled' ? stats.value : null;
    const videoData = videos.status === 'fulfilled' ? videos.value : [];
    const playlistData = playlists.status === 'fulfilled' ? playlists.value : [];

    // If channel stats failed, return error
    if (!channelStats) {
      console.error('Failed to fetch channel statistics:', stats.status === 'rejected' ? stats.reason : 'Unknown error');
      return res.status(503).json({ error: 'YouTube service temporarily unavailable' });
    }

    // Log partial failures for monitoring
    if (videos.status === 'rejected') {
      console.warn('Failed to fetch videos:', videos.reason);
    }
    if (playlists.status === 'rejected') {
      console.warn('Failed to fetch playlists:', playlists.reason);
    }

    // Return successful response
    return res.status(200).json({
      subscriberCount: channelStats.subscriberCount || '0',
      videoCount: channelStats.videoCount || '0',
      viewCount: channelStats.viewCount || '0',
      videos: videoData,
      playlists: playlistData,
    });

  } catch (error) {
    // Handle different types of errors
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('YouTube API request timed out');
        return res.status(504).json({ error: 'Request timeout' });
      }
      
      console.error('YouTube API error:', error.message);
      
      // Don't expose internal error messages to client
      if (error.message.includes('YouTube API')) {
        return res.status(503).json({ error: 'YouTube service temporarily unavailable' });
      }
    }

    console.error('Unexpected error in YouTube API handler:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
