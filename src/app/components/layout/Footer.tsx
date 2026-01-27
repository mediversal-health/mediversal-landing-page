"use client";
import { Facebook, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Footer: React.FC = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="bg-[#121719] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image
              src="/images/Mediversal 24_7 logo.png"
              alt="Logo"
              height={150}
              width={150}
              className="object-contain"
            />

            <p className="mt-4 text-sm font-semibold">Mediversal247</p>

            <p className="text-gray-400 mt-2 max-w-md text-sm sm:text-base">
              Your trusted healthcare companion. Access quality healthcare
              anytime, anywhere with our comprehensive telemedicine platform.
            </p>

            {/* Contact Row */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              {/* Email */}
              <a
                href="mailto:info@mediversal247.in"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-blue-500/5 border border-blue-500/20 px-4 py-2 rounded-lg hover:from-blue-600/20 hover:to-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm sm:text-base font-medium text-white">
                  info@mediversal247.in
                </span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/mediversal247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-600/5 border border-blue-400/20 px-4 py-2 rounded-lg hover:from-blue-500/20 hover:to-indigo-600/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-blue-500" />
                <span className="text-sm sm:text-base">
                  Follow us on Facebook
                </span>
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="md:ml-auto">
            <h3 className="text-lg sm:text-xl font-medium mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    window.open("https://onelink.to/e7vbmn", "_blank")
                  }
                <a
                  href="https://gwsmediversal.in/contacts"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open(
                      "https://gwsmediversal.in/privacy-policy",
                      "_blank",
                    )
                  }
                <a
                  href="https://gwsmediversal.in/privacy-policy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open(
                      "https://gwsmediversal.in/term-and-conditions",
                      "_blank",
                    )
                  }
                <a
                  href="https://gwsmediversal.in/term-and-conditions"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {getCurrentYear()}{" "}
            <span className="font-medium text-white">Mediversal247</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Mediversal Healthcare Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};
