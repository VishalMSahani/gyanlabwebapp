"use client"
import { Users, BookOpen, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const ChannelStats = () => {
  const iconMap = {
    "Subscribers": <Users className="h-12 w-12 text-red-600" />,
    "Educational Videos": <BookOpen className="h-12 w-12 text-red-600" />,
    "Total Views": <Play className="h-12 w-12 text-red-600" />,
  };

  const [view, setView] = useState<string | null >(null)
  const [subscriber, setSubscriber] = useState<number | null >(null)
  const [video, setVideo] = useState<string | null >(null)

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await fetch('/api/youtube-subscribers');
        const data = await res.json();
        setSubscriber(data.subscriberCount);
        setView(data.viewCount);
        setVideo(data.videoCount);
      } catch (err) {
        console.error('Failed to fetch subscriber count', err);
      }
    };

    fetchSubscribers();
  }, []);

  const formatCount = (count: string | number | null) => {
    if (!count) return '0';
    const num = typeof count === 'string' ? parseInt(count) : count;
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M+';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K+';
    return num + '+';
  };

  
const stats = [
  { label: 'Subscribers', value: formatCount(subscriber) },
  { label: 'Educational Videos', value: video}, // Static
  { label: 'Total Views', value: formatCount(view) },
  // { label: 'Positive Feedback', value: '95%' }, // Static
];

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-sm">
            Our YouTube Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering students through quality educational content
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center text-center p-8 bg-white rounded-2xl shadow-lg border-t-4 border-red-200 hover:scale-105 hover:shadow-2xl transition-transform duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {iconMap[stat.label as keyof typeof iconMap]}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={stat.value}
                  className="text-4xl font-extrabold text-gray-900 mb-2 mt-2 tracking-tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {stat.value}
                </motion.div>
              </AnimatePresence>
              <p className="text-gray-600 text-lg font-medium mt-1">
                {stat.label}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-400/60 via-red-200/0 to-red-400/60 opacity-70 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelStats;
