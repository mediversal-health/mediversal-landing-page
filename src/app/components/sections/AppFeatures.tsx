"use client";
import React from "react";
import { Card } from "../ui/Card";
import { APP_FEATURES } from "../../utils/constants";
import Image from "next/image";

export const AppFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-start mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            App Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APP_FEATURES.map((feature, index) => (
            <Card key={index} className="p-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border rounded-xl p-2 sm:p-0.5 border-gray-300">
                {/* Image */}
                <div className="w-full sm:w-1/3 flex-shrink-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={300}
                    className="w-full h-auto sm:h-full rounded-t-lg sm:rounded-l-lg object-cover"
                  />
                </div>

                {/* Text */}
                <div className="w-full sm:w-2/3 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-[14px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
