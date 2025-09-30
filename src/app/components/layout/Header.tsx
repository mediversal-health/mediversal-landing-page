"use client";
import React from "react";
import { PhoneCallIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
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
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/9608600380"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center px-2 sm:px-5 py-2"
              >
                <MessageCircleIcon className="h-5 w-5" />
                <span className="hidden sm:inline ml-2">WhatsApp</span>
              </Button>
            </a>

            {/* Call Button */}
            <a href="tel:9608600380">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center px-2 sm:px-5 py-2"
              >
                <PhoneCallIcon className="h-5 w-5" />
                <span className="hidden sm:inline ml-2">Call</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
