import React from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { QRCode } from "../common/QRCode";

export const GetApp: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get the app instantly
            </h2>
            <p className="text-gray-600 mb-8">
              Download our app and start your healthcare journey today.
              Available on all platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>Send Link</Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src="/api/placeholder/150/50"
                alt="Download on App Store"
                className="h-12 w-auto"
              />
              <img
                src="/api/placeholder/150/50"
                alt="Get it on Google Play"
                className="h-12 w-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <QRCode />
            <p className="mt-4 text-sm text-gray-600">
              Or scan with your phone camera to get the app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
