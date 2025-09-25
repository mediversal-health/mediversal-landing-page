import React from "react";

export const Partners: React.FC = () => {
  const partners = ["MAX", "APOLLO", "HDFC ERGO", "STAR", "TATA AIG"];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Partners & Insurers
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by leading healthcare providers and insurance companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow duration-300"
            >
              <span className="font-bold text-gray-600">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
