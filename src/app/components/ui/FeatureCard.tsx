"use client";
import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  linkText?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden  border border-gray-200">
      <div className="flex flex-col sm:flex-row h-full">
        {/* Image Section - Left Side */}
        <div className="w-full sm:w-2/5 relative min-h-[200px] sm:min-h-[180px]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Content Section - Right Side */}
        <div className="flex-1 p-6 sm:p-4 flex flex-col justify-between">
          {/* Top Content */}
          <div>
            <h3 className="text-xl sm:text-lg font-normal text-gray-900 ">
              {title}
            </h3>

            <p className="text-gray-600 text-[10px] sm:text-[12px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
