// YouTube API Response Types
export interface YouTubeChannelResponse {
  items: Array<{
    statistics: {
      subscriberCount: string;
      videoCount: string;
      viewCount: string;
    };
  }>;
}

export interface YouTubeSearchResponse {
  items: Array<{
    id: {
      videoId: string;
    };
  }>;
}

export interface YouTubeVideosResponse {
  items: Array<{
    id: string;
    statistics: {
      viewCount: string;
      likeCount: string;
      commentCount: string;
    };
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
      publishedAt: string;
    };
  }>;
}

export interface YouTubePlaylistsResponse {
  items: Array<{
    id: string;
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
      publishedAt: string;
    };
    contentDetails: {
      itemCount: number;
    };
  }>;
}

// API Response Type
export interface YouTubeApiResponse {
  subscriberCount?: string;
  error?: string;
  viewCount?: string;
  videoCount?: string;
  videos?: YouTubeVideosResponse['items'];
  playlists?: YouTubePlaylistsResponse['items'];
} 