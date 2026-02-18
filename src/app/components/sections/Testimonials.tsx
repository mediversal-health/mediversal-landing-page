import React from "react";
import { Card } from "../ui/Card";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../../utils/constants";
import Image from "next/image";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-start mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2 md:mb-4">
            What our customers say
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Trusted by thousands of patients and healthcare providers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={index}
              className="relative w-full max-w-[350px] sm:max-w-none sm:w-auto h-auto min-h-[400px] md:min-h-[450px] lg:h-[480px] flex flex-col justify-between bg-[#F2F4F5] shadow-xl p-4 sm:p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4 md:mb-6">
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#2D8DED] fill-current" />
              </div>

              <div className="flex-grow">
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-8 line-clamp-6 md:line-clamp-none">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-2">
                <div className="flex-1 min-w-0 pr-2">
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-0.5 truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    {testimonial.role}
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-300 rounded-full flex-shrink-0 ml-2 sm:ml-4">
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
