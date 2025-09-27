"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { VIDEO_TESTIMONIALS } from "../../utils/constants";
import { Play, MapPin } from "lucide-react";

export const VideoTestimonials: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

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
          className="flex space-x-6 overflow-x-auto scrollbar-hide py-4 cursor-grab active:cursor-grabbing"
        >
          {VIDEO_TESTIMONIALS.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
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
    <div className="flex-shrink-0 w-80 cursor-pointer">
      <div className="relative h-[450px] border-gray-300 border-2 rounded-2xl overflow-hidden ">
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

        {/* Overlay when not playing */}
        {!isPlaying && (
          <>
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-lg"
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
                <p className="text-sm text-white/80 mt-1">
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
