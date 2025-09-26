import React from "react";
import { Card } from "../ui/Card";
import { APP_FEATURES } from "../../utils/constants";
import Image from "next/image";

export const AppFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            App Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APP_FEATURES.map((feature, index) => (
            <Card key={index}>
              <div className="flex items-center gap-4 border rounded-xl p-0.5 border-gray-300">
                <div className="w-1/3 flex-shrink-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={400}
                    className="w-full h-full rounded-l-lg object-fill"
                  />
                </div>
                <div className="w-3/3">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-[14px]">
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
