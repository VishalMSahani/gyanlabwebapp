"use client"
import { useEffect, useState } from "react";

type Video = {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high?: { url: string };
      default?: { url: string };
    };
  };
  statistics?: {
    viewCount?: string;
    likeCount?: string;
  };
};

const FeaturedVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/youtube-subscribers');
        const data = await res.json();
        setVideos(Array.isArray(data.videos) ? data.videos : []);
      } catch {
        setError('Failed to fetch videos');
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>;
  }

  const formatCount = (count: string | number | null) => {
    if (!count) return '0';
    const num = typeof count === 'string' ? parseInt(count) : count;
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M+';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K+';
    return num + '+';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Videos</h2>
          <p className="text-xl text-gray-600">Popular videos that have helped thousands of students</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden">

                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0ute=1`}
                  title="YouTube video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{video.snippet.title}</h3>
                {/* <p className="text-gray-600 text-sm mb-4">{video.snippet.description}</p> */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{formatCount(video.statistics?.viewCount || "Failed to fetch")} views</span>
                  <span>❤️ {video.statistics?.likeCount || 0}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
