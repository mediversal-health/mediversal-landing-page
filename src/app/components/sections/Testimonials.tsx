import React from "react";
import { Card } from "../ui/Card";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../../utils/constants";
import Image from "next/image";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            What our customers say
          </h2>
          <p className="text-[14px] text-gray-600">
            Trusted by thousands of patients and healthcare providers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={index}
              className="relative h-full flex flex-col justify-between"
            >
              {/* Large quote icon */}
              <div className="mb-6">
                <Quote className="h-12 w-12 text-gray-600 fill-current" />
              </div>

              {/* Testimonial text */}
              <div className="flex-grow">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {testimonial.content}
                </p>
              </div>

              {/* Author info with image */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
                <div className="w-16 h-16 bg-gray-300 rounded-full ml-4 flex-shrink-0">
                  {testimonial.avatar && (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full rounded-full object-cover"
                    />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
