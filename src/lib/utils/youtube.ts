import { YOUTUBE_CONFIG } from '../constants/youtube';

// Utility function to create fetch with timeout
export async function fetchWithTimeout(
  url: string, 
  options: RequestInit = {}, 
  timeout: number = YOUTUBE_CONFIG.API_TIMEOUT
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Utility function to handle YouTube API errors
export function handleYouTubeApiError(status: number, endpoint: string): never {
  let errorMessage = 'Failed to fetch data from YouTube API';
  
  switch (status) {
    case 400:
      errorMessage = 'Invalid request to YouTube API';
      break;
    case 401:
      errorMessage = 'YouTube API authentication failed';
      break;
    case 403:
      errorMessage = 'YouTube API access forbidden';
      break;
    case 404:
      errorMessage = 'YouTube channel not found';
      break;
    case 429:
      errorMessage = 'YouTube API rate limit exceeded';
      break;
    case 500:
      errorMessage = 'YouTube API server error';
      break;
    default:
      errorMessage = `YouTube API error (${status})`;
  }
  
  console.error(`YouTube API Error [${endpoint}]: ${status}`);
  throw new Error(errorMessage);
} 