"use client";
import React from "react";
import { FeatureCard } from "../ui/FeatureCard";
import { APP_FEATURES } from "../../utils/constants";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {APP_FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
