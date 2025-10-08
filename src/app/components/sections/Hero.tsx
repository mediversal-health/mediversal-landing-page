"use client";
import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#EBFFFD] to-white py-12 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="self-start mt-10 lg:mt-14 text-center lg:text-left flex flex-col items-center lg:items-start">
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

            {/* App Logo */}
            <div className="mb-8">
              <Image
                src="/images/Mediversal 24_7 logo.png"
                alt="App Store"
                width={150}
                height={50}
                className="h-10 sm:h-12"
              />
            </div>

            {/* Get The App Button */}
            <div className="flex">
              <Button
                variant="brand"
                size="lg"
                className="flex items-center justify-center w-full sm:w-full text-lg sm:text-lg px-8 py-3"
                onClick={() =>
                  window.open("https://onelink.to/e7vbmn", "_blank")
                }
              >
                Get The App
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
