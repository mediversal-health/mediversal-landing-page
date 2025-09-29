"use client";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Footer: React.FC = () => {
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
            <p className="text-gray-400 mb-4 max-w-md text-sm sm:text-base">
              Your trusted healthcare companion. Access quality healthcare
              anytime, anywhere with our comprehensive telemedicine platform.
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
            <h3 className="text-xl sm:text-2xl font-medium uppercase tracking-wider mb-4">
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
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © 2024 Mediversal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
