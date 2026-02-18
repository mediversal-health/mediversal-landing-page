"use client";
import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import VectorBg from "../../../../public/images/Vector 86.png";

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br lg:h-[725px]  from-[#EBFFFD] to-white py-12 lg:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <Image
          src={VectorBg}
          alt=""
          className="w-full h-auto"
          priority={false}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="self-start mt-10 lg:mt-14 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
              All-in-one healthcare.
              <br />
              <span className="text-primary-600">One app. Anytime.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-md sm:max-w-lg">
              Medicines, homecare, doctor consults, lab tests, elder care, and
              surgeries, under one trusted ecosystem.
            </p>

            <div className="mb-8">
              <Image
                src="/images/Mediversal 24_7 logo.png"
                alt="Mediversal 24/7 Logo"
                width={200}
                height={70}
              />
            </div>

            <div className="flex">
              <Button
                variant="brand"
                size="lg"
                className="flex items-center justify-center w-full sm:w-full text-lg sm:text-lg px-8 py-3 cursor-pointer"
                onClick={() =>
                  window.open("https://onelink.to/e7vbmn", "_blank")
                }
              >
                Get The App
              </Button>
            </div>
          </div>

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
