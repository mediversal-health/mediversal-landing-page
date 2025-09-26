import React from "react";
import { ServiceCard } from "../ui/ServiceCard";
import { SERVICES } from "../../utils/constants";

export const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            Know what you pay
          </h2>
          <p className="text-[14px] text-gray-600">
            Transparent pricing for all our healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              subtitle={service.description}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
