import React from "react";
import { Card } from "../ui/Card";
import { APP_FEATURES } from "../../utils/constants";
import Image from "next/image";

export const AppFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            App Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for complete healthcare management in one
            powerful app
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APP_FEATURES.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
