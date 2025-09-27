"use client";
import React from "react";
import { Button } from "../ui/Button";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#EBFFFD] to-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="self-start mt-10 lg:mt-14">
            {/* Live Location Badge */}
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium inline-flex items-center mb-6">
              <MapPin className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              We are live in Patna. Same day slots available today
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
              All-in-one healthcare.
              <br />
              <span className="text-primary-600">One app. Anytime.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-md sm:max-w-lg">
              Medicines, homecare, doctor consults, lab tests, elder care, and
              surgeries, under one trusted ecosystem.
            </p>

            {/* App Store & Ratings */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/images/Mediversal 24_7 logo.png"
                  alt="App Store"
                  width={135}
                  height={40}
                  className="h-8 sm:h-10"
                />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">
                    4.8
                  </span>
                  <div className="flex text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Rated by 100,000+ users
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="brand"
                size="lg"
                className="flex items-center justify-center w-full sm:w-auto"
              >
                Get The App
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center justify-center w-full sm:w-auto"
              >
                Know More
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/images/phone.svg"
              alt="Phone Mockup"
              width={300}
              height={450}
              className="w-64 sm:w-80 md:w-96 lg:w-[400px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
