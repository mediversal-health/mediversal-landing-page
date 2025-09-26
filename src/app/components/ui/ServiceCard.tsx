import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  subtitle,
  price,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow bg-white">
      <div className="relative flex h-56">
        {/* Left image section */}
        <div className="w-1/2 h-full">
          <Image
            src={image}
            alt={title}
            height={100}
            width={100}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right content with diagonal cut */}
        <div className="w-1/2 bg-[#184C73] text-white flex flex-col justify-center px-6 relative">
          <div className="absolute left-[-40px] top-0 bottom-0 w-20 bg-[#184C73] transform -skew-x-12"></div>

          <h3 className="text-lg font-semibold relative z-10">{title}</h3>
          <p className="text-sm text-gray-200 relative z-10">{subtitle}</p>
          <p className="mt-2 text-base font-medium relative z-10">
            starting from <span className="text-xl font-bold">₹{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
