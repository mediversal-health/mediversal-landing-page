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
          <div className="self-start mt-14">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
              <MapPin className="inline-block mr-2 h-4 w-4" />
              We are live in Patna. Same day slots available today
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              All-in-one healthcare.
              <br />
              <span className="text-primary-600">One app. Anytime.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Medicines, homecare, doctor consults, lab tests, elder care, and
              surgeries, under one trusted ecosystem.
            </p>
            <div className="mb-8">
              <div className="flex items-start gap-y-6 mb-4">
                <Image
                  src="/images/Mediversal 24_7 logo.png"
                  alt="App Store"
                  width={135}
                  height={40}
                  className="mr-4"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="ml-2 text-gray-700 fon">4.8</span>
                <div className="flex text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="text-gray-600 text-[14px]">
                  Rated by 100,000+ users
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="brand"
                size="lg"
                className="flex items-center justify-center"
              >
                Get The App
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center justify-center"
              >
                Know More
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/phone.svg"
              alt="Phone Mockup"
              width={400}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
