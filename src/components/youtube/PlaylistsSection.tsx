"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

type Playlist = {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default?: { url: string };
      high?: { url: string };
    };
  };
  contentDetails?: {
    itemCount?: number;
  };
};

const PlaylistsSection = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const res = await fetch('/api/youtube-subscribers');
        const data = await res.json();
        // Defensive: check for playlists array
        setPlaylists(Array.isArray(data.playlists) ? data.playlists.slice(0, 10) : []);
      } catch {
        setError('Failed to fetch playlists');
      } finally {
        setLoading(false);
      }
    };
    fetchPlaylists();
  }, []);

  

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subject Playlists</h2>
          <p className="text-xl text-gray-600">Organized content by subjects and topics</p>
        </div>
        {loading ? (
          <div className="text-center text-gray-500">Loading playlists...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playlists.map((playlist: Playlist, index: number) => {
              const thumbnailUrl = playlist.snippet?.thumbnails?.high?.url || playlist.snippet?.thumbnails?.default?.url || "";
              console.log('Thumbnail URL:', thumbnailUrl);
              return (
                <div key={playlist.id || index} 
                className="bg-white flex flex-col justify-between h-full
                shadow-lg rounded-xl p-6 hover:bg-gray-50 border-2 border-secondary/20
                transition-colors duration-200 cursor-pointer ">
                <div>
                      <div className="relative mb-4">
                        <Image
                          src={thumbnailUrl}
                          alt={playlist.snippet?.title}
                          width={320}
                          height={190}
                          className="w-full h-[190px] object-cover rounded-lg"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{playlist.snippet?.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{playlist.snippet?.description || 'No description available.'}</p>
                </div>
                  <div className="mt-3 flex justify-between items-center  ">
                  <p className="font-semibold text-gray-500">{playlist.contentDetails?.itemCount || 0} Videos</p>
                    <a
                      href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      Watch Playlist
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlaylistsSection;
