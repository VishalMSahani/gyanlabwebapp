import { YOUTUBE_CONFIG } from '../constants/youtube';
import { fetchWithTimeout, handleYouTubeApiError } from '../utils/youtube';
import type { 
  YouTubeChannelResponse, 
  YouTubeSearchResponse, 
  YouTubeVideosResponse, 
  YouTubePlaylistsResponse 
} from '../types/youtube';

// Fetch channel statistics
export async function fetchChannelStats(apiKey: string): Promise<YouTubeChannelResponse['items'][0]['statistics']> {
  const response = await fetchWithTimeout(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CONFIG.CHANNEL_ID}&key=${apiKey}`
  );

  if (!response.ok) {
    handleYouTubeApiError(response.status, 'channels');
  }

  const data = await response.json() as YouTubeChannelResponse;
  const stats = data?.items?.[0]?.statistics;

  if (!stats) {
    throw new Error('Channel statistics not found');
  }

  return stats;
}

// Fetch top videos
export async function fetchTopVideos(apiKey: string): Promise<YouTubeVideosResponse['items']> {
  const searchResponse = await fetchWithTimeout(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${YOUTUBE_CONFIG.CHANNEL_ID}&part=snippet&order=viewCount&maxResults=${YOUTUBE_CONFIG.MAX_VIDEOS}&type=video`
  );

  if (!searchResponse.ok) {
    handleYouTubeApiError(searchResponse.status, 'search');
  }

  const searchData = await searchResponse.json() as YouTubeSearchResponse;
  
  if (!searchData.items || searchData.items.length === 0) {
    return [];
  }

  const videoIds = searchData.items.map(item => item.id.videoId).join(',');
  
  const videosResponse = await fetchWithTimeout(
    `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=statistics,snippet`
  );

  if (!videosResponse.ok) {
    handleYouTubeApiError(videosResponse.status, 'videos');
  }

  const videosData = await videosResponse.json() as YouTubeVideosResponse;
  return videosData.items || [];
}

// Fetch playlists
export async function fetchPlaylists(apiKey: string): Promise<YouTubePlaylistsResponse['items']> {
  const response = await fetchWithTimeout(
    `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${YOUTUBE_CONFIG.CHANNEL_ID}&maxResults=${YOUTUBE_CONFIG.MAX_PLAYLISTS}&key=${apiKey}`
  );

  if (!response.ok) {
    handleYouTubeApiError(response.status, 'playlists');
  }

  const data = await response.json() as YouTubePlaylistsResponse;
  return data.items || [];
} 