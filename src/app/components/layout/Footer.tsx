import { Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 p-2 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/Mediversal 24_7 logo.png"
                  alt="Logo"
                  height={100}
                  width={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted healthcare companion. Access quality healthcare
              anytime, anywhere with our comprehensive telemedicine platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <div className=" bg-gray-400 p-2 rounded-full">
                  <Facebook className="h-5 w-5" />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <div className=" bg-gray-400 p-2 rounded-full">
                  <Youtube className="h-5 w-5" />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <div className=" bg-gray-400 p-2 rounded-full">
                  <Linkedin className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="md:col-span-1 md:ml-auto">
            <h3 className="text-xl font-medium uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://gwsmediversal.in/contacts"
                  className="text-gray-400 hover:text-white text-[14px]"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://gwsmediversal.in/privacy-policy"
                  className="text-gray-400 hover:text-white text-[14px]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://gwsmediversal.in/term-and-conditions"
                  className="text-gray-400 hover:text-white text-[14px]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2024 Mediversal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
