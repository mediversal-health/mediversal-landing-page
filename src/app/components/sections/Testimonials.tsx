import React from "react";
import { Card } from "../ui/Card";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../utils/constants";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What our customers say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by thousands of patients and healthcare providers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="relative">
              <Quote className="h-8 w-8 text-primary-500 mb-4" />
              <p className="text-gray-700 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
