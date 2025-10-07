"use client";
import React, { useState } from "react";
import { Apple, Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export const GetApp: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sendViaWhatsApp, setSendViaWhatsApp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendLink = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    setIsLoading(true);
    const appLink = "https://onelink.to/e7vbmn";
    const message = `Download the Mediversal247 app: ${appLink}`;

    // Remove any spaces or special characters from phone number
    const cleanedNumber = phoneNumber.replace(/\D/g, "");

    if (sendViaWhatsApp) {
      // WhatsApp link format
      const whatsappUrl = `https://wa.me/91${cleanedNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    } else {
      // SMS link format
      const smsUrl = `sms:+91${cleanedNumber}?body=${encodeURIComponent(
        message
      )}`;
      window.open(smsUrl, "_blank");
    }

    setIsLoading(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Get the app Instantly
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-[14px] max-w-md mx-auto lg:mx-0">
              Enter your number and we&apos;ll send you the download link via
              WhatsApp or SMS.
            </p>

            {/* Phone Number Input Section */}
            <div className="mb-8 max-w-md mx-auto lg:mx-0">
              <div className="flex gap-2 mb-4">
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 w-20">
                  <span className="text-gray-700 font-medium">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Enter number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  maxLength={10}
                  className="flex-1 border text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                />
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <span className="text-gray-600">
                  {sendViaWhatsApp ? "Send via WhatsApp" : "Send via SMS"}
                </span>
                <button
                  onClick={() => setSendViaWhatsApp(!sendViaWhatsApp)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    sendViaWhatsApp ? "bg-green-300" : "bg-blue-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      sendViaWhatsApp ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Send Button */}
              <button
                onClick={handleSendLink}
                disabled={isLoading}
                className="w-full bg-[#0088B1] text-white font-medium py-2 px-6 rounded-lg "
              >
                {isLoading ? "Sending..." : "Send app link"}
              </button>
            </div>

            <p className="text-gray-500 text-xs mb-4 max-w-md mx-auto lg:mx-0">
              We&apos;ll send a one-tap link. Toggle WhatsApp/SMS below.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2">
              {/* App Store */}
              <div
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/in/app/mediversal247/id6747696221",
                    "_blank"
                  )
                }
                className="flex items-center gap-2  rounded-lg px-2 py-2 w-full sm:w-auto justify-center cursor-pointer"
              >
                <Image
                  src={"/images/App store.svg"}
                  alt="Phone Mockup"
                  height={150}
                  width={150}
                />
              </div>
              {/* Google Play */}
              <div
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.mediversal_app",
                    "_blank"
                  )
                }
                className="flex items-center gap-2 rounded-lg px-2 py-2 w-full sm:w-auto justify-center cursor-pointer"
              >
                <Image
                  src={"/images/Play store.svg"}
                  alt="Phone Mockup"
                  height={150}
                  width={150}
                />
              </div>
            </div>
          </div>

          {/* Right Content - QR Code */}
          <div className="flex justify-center lg:justify-end gap-6 mt-0 lg:mt-0">
            {/* App Store QR */}
            {/* App Store QR */}
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="p-1 rounded-3xl bg-[length:200%_200%] bg-[#0088b1]"
              >
                <Image
                  src={"/images/QR.svg"}
                  height={300}
                  width={300}
                  alt="App QR Code"
                  className="rounded-3xl bg-white"
                />
              </motion.div>

              <span className="text-sm text-gray-600 mt-3">
                Or scan this QR code with your phone camera
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
