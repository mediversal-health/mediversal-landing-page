"use client";
import React from "react";
import { Apple, Play } from "lucide-react";
import Image from "next/image";

export const GetApp: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Get the app instantly
            </h2>
            <p className="text-gray-600 mb-8 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              Download our app and start your healthcare journey today.
              Available on all platforms.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              {/* App Store */}
              <div
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/in/app/mediversal247/id6747696221",
                    "_blank"
                  )
                }
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:shadow-md transition w-full sm:w-auto justify-center cursor-pointer"
              >
                <Apple className="h-6 w-6 text-gray-800" />
                <span className="font-medium text-gray-900 text-sm sm:text-base">
                  Download on App Store
                </span>
              </div>

              {/* Google Play */}
              <div
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.mediversal_app",
                    "_blank"
                  )
                }
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:shadow-md transition w-full sm:w-auto justify-center cursor-pointer"
              >
                <Play className="h-6 w-6 text-green-600" />
                <span className="font-medium text-gray-900 text-sm sm:text-base">
                  Get it on Google Play
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - QR Codes */}
          <div className="flex justify-center lg:justify-end gap-6 mt-8 lg:mt-0">
            {/* App Store QR */}
            <div
              onClick={() =>
                window.open(
                  "https://apps.apple.com/in/app/mediversal247/id6747696221",
                  "_blank"
                )
              }
              className="cursor-pointer flex flex-col items-center"
            >
              <Image
                src={"/images/QR_Apple.png"}
                height={180}
                width={180}
                alt="App Store QR Code"
                className="border border-gray-300 rounded-2xl"
              />
              <span className="text-sm text-gray-600 mt-2">App Store</span>
            </div>

            {/* Play Store QR */}
            <div
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.mediversal_app",
                  "_blank"
                )
              }
              className="cursor-pointer flex flex-col items-center"
            >
              <Image
                src={"/images/QR.png"}
                height={180}
                width={180}
                alt="Google Play QR Code"
                className="border border-gray-300 rounded-2xl"
              />
              <span className="text-sm text-gray-600 mt-2">Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
