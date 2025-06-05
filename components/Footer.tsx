"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { socialLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex justify-start">
            <Link href="#hero" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-orange-500" />
              <span className="font-bold text-lg title">vHackBotz</span>
            </Link>
          </div>

          <div className="flex justify-end space-x-4">
            {socialLinks.map((link) => (
              <div
                key={link.label}
                className="transition-transform hover:-translate-y-1"
              >
                <Link
                  href={link.href}
                  className="text-white-500 hover:text-orange-500 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
