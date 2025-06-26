"use client"
import { UserPlus, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const YouTubeHero = () => {
  const [subscriberCount, setSubscriberCount] = useState<string | null>(null);

  const formatCount = (count: number) => {
    if (count >= 1_000_000) return (count / 1_000_000).toFixed(1) + 'M';
    if (count >= 1_000) return (count / 1_000).toFixed(1) + 'K';
    return count.toString();
  };

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await fetch('/api/youtube-subscribers');
        const data = await res.json();
        setSubscriberCount(data.subscriberCount);
      } catch (err) {
        console.error('Failed to fetch subscriber count', err);
      }
    };

    fetchSubscribers();
  }, []);

  

  return (
    <section className="bg-gradient-to-br from-red-50 to-red-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gyanlab <br/><span className="text-red-600">YouTube Channel</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access our comprehensive library of educational videos covering all major subjects. 
              Get a preview of our teaching methodology and learn at your own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="cursor-pointer"
              href="https://youtube.com/@gyanlabap?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-red-600 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                <UserPlus className="h-5 w-5" />
                <span>Subscribe Channel {subscriberCount && `(${formatCount(Number(subscriberCount))})`}</span>
              </button>
            </a>
            <a className="cursor-pointer"
              href="https://youtube.com/@gyanlabap?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              >
              <button 
              className="border-2 cursor-pointer border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
                <ExternalLink className="h-5 w-5" />
                <span>Visit YouTube</span>
              </button>
              </a>
            </div>
          </div>
          <div>
        <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/IZktAgn5c8s?autoplay=1&mute=1"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
     
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeHero;
