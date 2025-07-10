"use client";

import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 w-full">
          <div className="flex items-center">
            <Link href="#hero" className="flex items-center space-x-3 group">
              <Image
                src="/vhackbotz.svg"
                alt="vHackBotz Logo"
                width={36}
                height={36}
                className="flex-shrink-0 transition-transform group-hover:scale-105"
              />
              <span className="font-bold text-xl title leading-none transition-colors group-hover:text-orange-500">
                vHackBotz
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <div
                key={link.label}
                className="transition-all duration-200 hover:-translate-y-1 hover:scale-110"
              >
                <Link
                  href={link.href}
                  className=" hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 p-2 rounded-lg"
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
