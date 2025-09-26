"use client";
import React from "react";
import { PhoneCallIcon } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/main_logo.svg"
              alt="Mediversal247"
              width={250}
              height={100}
            />
          </div>

          {/* Contact Us Button */}
          <div className="flex items-center">
            <Link href="https://gwsmediversal.in/contacts">
              <Button variant="outline" size="lg" className="flex items-center">
                <PhoneCallIcon className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
