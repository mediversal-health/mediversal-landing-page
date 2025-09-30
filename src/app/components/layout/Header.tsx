"use client";
import React from "react";
import { PhoneCallIcon } from "lucide-react";
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

          {/* Contact Us Button */}
          <div className="flex items-center mt-2 sm:mt-0">
            <a
              href="https://wa.me/9608600380"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="flex items-center px-3 sm:px-5 py-2 text-sm sm:text-base"
              >
                <PhoneCallIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
