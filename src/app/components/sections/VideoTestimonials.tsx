import React from "react";
import { VIDEO_TESTIMONIALS } from "../../utils/constants";
import { PlayButton } from "../common/PlayButton";

export const VideoTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real experiences from Patients
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our community about their healthcare journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_TESTIMONIALS.map((video, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <PlayButton />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">{video.title}</h3>
                <p className="text-gray-600">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
