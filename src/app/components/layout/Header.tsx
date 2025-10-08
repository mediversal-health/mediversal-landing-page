"use client";
import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";
import { MdPhone, MdWhatsapp } from "react-icons/md";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/Mediversal 24_7 logo.png"
                alt="Mediversal247"
                width={200}
                height={80}
                className="w-40 sm:w-56 lg:w-64 h-auto"
                priority
              />
            </Link>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
            <a
              href="https://wa.me/9608600380"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center px-2 sm:px-5 py-2 border-green-500 text-green-600 hover:bg-green-50 transition"
              >
                <MdWhatsapp className="h-6 w-6 text-green-600" />
                <span className="hidden sm:inline ml-2 font-medium">
                  WhatsApp
                </span>
              </Button>
            </a>

            {/* Call Button */}
            <a href="tel:9608600380">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center px-2 sm:px-5 py-2 border-[#0088b1] hover:bg-blue-50 transition relative"
              >
                <MdPhone className="h-6 w-6 text-[#0088b1] glow-phone" />
                <span className="hidden sm:inline ml-2 font-semibold text-[#0088b1]">
                  Call
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
