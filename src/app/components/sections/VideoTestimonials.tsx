"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { VIDEO_TESTIMONIALS } from "../../utils/constants";
import { Play, MapPin } from "lucide-react";

export const VideoTestimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grabbing";
      scrollRef.current.style.userSelect = "none";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollRef.current) {
        scrollRef.current.style.cursor = "grab";
        scrollRef.current.style.userSelect = "auto";
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.userSelect = "auto";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Add touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Prevent page scroll when dragging
    const preventDefault = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventDefault);
    };
  }, [isDragging]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Real experiences from Patients
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide py-4 cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {VIDEO_TESTIMONIALS.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>

        {/* Scroll indicators */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollLeft -= 400;
              }
            }}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            ←
          </button>
          <div className="flex space-x-2">
            {VIDEO_TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollLeft = index * 336; // Adjust based on card width + gap
                  }
                }}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400"
              />
            ))}
          </div>
          <button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollLeft += 400;
              }
            }}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            →
          </button>
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
    thumbnail?: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex-shrink-0 w-80">
      <div className="relative h-[450px] border-gray-300 border-2 rounded-2xl overflow-hidden">
        {/* Video Player */}
        <ReactPlayer
          src={video.url}
          playing={isPlaying}
          controls={false}
          width="100%"
          height="100%"
          light={video.thumbnail || !isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Overlay when not playing */}
        {!isPlaying && (
          <>
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
              >
                <Play size={36} className="text-gray-900" />
              </button>
            </div>

            {/* Bottom details */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
              <h3 className="text-white text-lg font-semibold">
                {video.name || video.title}
              </h3>
              {video.location && (
                <div className="flex items-center text-sm text-white/90">
                  <MapPin size={14} className="mr-1" />
                  <span>{video.location}</span>
                </div>
              )}
              {video.description && (
                <p className="text-sm text-white/80 mt-1 line-clamp-2">
                  {video.description}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
