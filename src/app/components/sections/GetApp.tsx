import React from "react";
import { Apple, Play } from "lucide-react";
import Image from "next/image";

export const GetApp: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-medium text-gray-900 mb-2">
              Get the app instantly
            </h2>
            <p className="text-gray-600 mb-8 text-[14px]">
              Download our app and start your healthcare journey today.
              Available on all platforms.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>Send Link</Button>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 border border-gray-500 rounded-lg px-4 py-2 hover:shadow-md transition">
                <Apple className="h-6 w-6 text-gray-800" />
                <span className="font-medium text-gray-900">
                  Download on App Store
                </span>
              </div>
              <div className="flex items-center gap-2 border border-gray-500 rounded-lg px-4 py-2 hover:shadow-md transition">
                <Play className="h-6 w-6 text-green-600" />
                <span className="font-medium text-gray-900">
                  Get it on Google Play
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
              src={"/images/OR.png"}
              height={200}
              width={200}
              alt="QR Code"
              className="border-1 border-gray-500 rounded-2xl"
            />
            <p className="text-sm text-gray-600 text-center">
              Or scan with your phone camera to get the app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
