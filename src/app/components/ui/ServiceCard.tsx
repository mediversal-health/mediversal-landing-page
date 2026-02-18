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
        <div className="w-1/2 h-full">
          <Image
            src={image}
            alt={title}
            height={100}
            width={100}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 bg-[#184C73] text-white flex flex-col justify-between px-6 py-6 relative">
          <div className="absolute left-[-25px] top-0 bottom-0 w-20 bg-[#184C73] transform -skew-x-12"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-base text-[#D3D7D8]">{subtitle}</p>
          </div>

          <div className="relative z-10">
            <p className="text-base font-medium text-[#B3DCE8]">
              Starting from <br />
              <span className="text-xl font-bold">{price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
