"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { VIDEO_TESTIMONIALS } from "../../utils/constants";
import { Play, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export const VideoTestimonials: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            Real experiences from Patients
          </h2>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              onClick={() =>
                scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })
              }
            >
              <ChevronLeft color="black" size={24} />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex space-x-6 overflow-x-auto scrollbar-hide py-4"
          >
            {VIDEO_TESTIMONIALS.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>

          {canScrollRight && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              onClick={() =>
                scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })
              }
            >
              <ChevronRight color="black" size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

interface VideoCardProps {
  video: {
    title: string;
    url: string;
    name?: string;
    location?: string;
    description?: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex-shrink-0 group cursor-pointer">
      <div className="relative w-80 h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Video Player */}
        <ReactPlayer
          src={video.url}
          playing={isPlaying}
          controls={false}
          width="100%"
          height="100%"
          light={!isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Overlay Content */}
        {!isPlaying && (
          <>
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 flex items-center justify-center"
              >
                <Play size={4} className="text-gray-800" />
              </button>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
              {/* User Info */}
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-1">
                  {video.name || video.title}
                </h3>
                {video.location && (
                  <div className="flex items-center text-sm text-white/90 mb-2">
                    <MapPin size={14} className="mr-1" />
                    <span>{video.location}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Description below video */}
      <div className="mt-4 px-2">
        <p className="text-gray-700 font-medium"></p>
      </div>
    </div>
  );
};
