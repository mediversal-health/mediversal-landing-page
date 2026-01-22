"use client";

import { Facebook } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Footer: React.FC = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="bg-[#121719] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className=" p-2 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/Mediversal 24_7 logo.png"
                  alt="Logo"
                  height={150}
                  width={150}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="mt-2 text-sm font-semibold text-white text-left py-2">
              Mediversal247
            </p>

            <p className="text-gray-400 mb-4 max-w-md text-sm sm:text-base">
              Comprehensive healthcare services delivered to your doorstep with
              transparency and care.
            </p>

            {/* Social Icons */}
            {/* <div className="flex space-x-3 mt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <div className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition">
                  <Facebook className="h-5 w-5" />
                </div>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="YouTube"
              >
                <div className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition">
                  <Youtube className="h-5 w-5" />
                </div>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <div className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition">
                  <Linkedin className="h-5 w-5" />
                </div>
              </a>
            </div> */}
          </div>

          {/* Support Links */}
          <div className="md:col-span-1 md:ml-auto mt-8 md:mt-0">
            <h3 className="text-xl sm:text-2xl font-medium tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://gwsmediversal.in/contacts"
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://gwsmediversal.in/privacy-policy"
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://gwsmediversal.in/term-and-conditions"
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 px-6">
          {/* Footer text */}
          <p className="text-gray-400 text-sm text-left">
            © {getCurrentYear()}{" "}
            <span className="font-medium">
              Mediversal247, All rights reserved.
            </span>
          </p>
          <span className="font-medium text-gray-400 text-sm text-left">
            Mediversal Healthcare Pvt Ltd
          </span>

          <div className="flex items-start justify-start mt-10 space-x-2">
            <Image
              src="/images/vector-facebook-social-media-icon-illustration_534308-21672 1.svg"
              alt="Logo"
              height={24}
              width={24}
              className="object-cover"
            />

            <a
              href="https://www.facebook.com/mediversal247" // <-- replace with your real page
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="block text-sm font-medium text-gray-400 mt-1">
                Like us on Facebook
              </span>

              <div className="p-2 rounded-lg -ml-10 mt-2 flex items-start justify-start">
                <Image
                  src="/images/Frame 2147227728 (1).svg"
                  alt="Logo"
                  height={220}
                  width={220}
                  className="object-cover"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
