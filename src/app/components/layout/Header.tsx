"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown, PhoneCallIcon } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b-1 border-gray-200">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/Mediversal 24_7 logo.png"
              alt="Logo"
              width={250}
              height={100}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 items-center">
            <a
              href="#"
              className="text-gray-900 hover:text-primary-500 px-3 py-2 text-lg font-medium"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-primary-500 px-3 py-2 text-lg font-medium"
            >
              Why
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-primary-500 px-3 py-2 text-lg font-medium"
            >
              Stories
            </a>
            <div className="relative group">
              <button className="text-gray-800 hover:text-primary-500 px-3 py-2 text-lg font-medium flex items-center">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center space-x-4 rounded-full">
              <Button variant="outline" size="lg" className="flex items-center">
                <PhoneCallIcon className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-primary-500 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900"
              >
                Products
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-800"
              >
                Why
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-800"
              >
                Stories
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-800"
              >
                More
              </a>
              <div className="pt-4 space-y-2 text-gray-800 ">
                <Button size="sm" className="w-full text-gray-800">
                  <PhoneCallIcon className="mr-2 h-4 w-4 text-gray-800" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
