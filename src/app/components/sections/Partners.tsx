import React from "react";
import Image from "next/image";

export const Partners: React.FC = () => {
  const partners = [
    { name: "MAX", logo: "/images/max.png" },
    { name: "APOLLO", logo: "/images/apollo.png" },
    { name: "HDFC ERGO", logo: "/images/hdfc.png" },
    { name: "STAR", logo: "/images/star.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            Partners & Insurers
          </h2>
          <p className="text-[14px] text-gray-600">
            Trusted by leading healthcare providers and insurance companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className=" rounded-lg flex items-center justify-center  p-2"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
