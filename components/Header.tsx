"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY < 100) {
        setActiveSection("Home");
        return;
      }

      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(
              section.charAt(0).toUpperCase() + section.slice(1)
            );
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ item }: { item: (typeof navItems)[0] }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isActive = isHovered || item.name === activeSection;

    const linkClasses = isActive
      ? "transition-all duration-200 relative text-orange-500"
      : "opacity-70 transition-all duration-300 hover:opacity-100";

    const smoothScroll = (element: HTMLElement) => {
      const yOffset = -90;
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    };

    return (
      <Link
        href={item.href}
        className={`relative ${linkClasses} flex items-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          e.preventDefault();
          setActiveSection(item.name);
          setIsOpen(false);
          const element = document.getElementById(item.href.substring(1));
          if (element) {
            smoothScroll(element);
          }
        }}
      >
        <span className="relative px-1">
          {item.name}
          {isActive && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 transition-all duration-300" />
          )}
        </span>
      </Link>
    );
  };

  return (
    <header className="fixed z-50 transition-all duration-300 w-max mx-auto left-0 right-0 top-8">
      <div className="hidden md:block bg-black/40 backdrop-filter backdrop-blur-md shadow-lg px-8 py-3 rounded-full border border-orange-500 border-opacity-40">
        <div className="flex items-center space-x-8 h-12">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-1">
              <Image
                src="/vhackbotz.svg"
                alt="vHackBotz Logo"
                width={32}
                height={32}
                className="text-orange-500"
              />
              <span className="font-bold text-xl title">vHackBotz</span>
            </Link>
          </div>

          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>
        </div>
      </div>

      <div className="md:hidden bg-black/40 backdrop-blur-md shadow-lg px-6 py-3 rounded-full border border-orange-500 border-opacity-40">
        <div className="flex items-center justify-between space-x-4">
          <Link href="#hero" className="flex items-center">
            <Image
              src="/vhackbotz.svg"
              alt="vHackBotz Logo"
              width={32}
              height={32}
              className="text-orange-500"
            />
          </Link>

          <nav className="flex items-center space-x-4">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center ${
                  activeSection === item.name
                    ? "text-orange-500"
                    : "text-gray-300"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.name);
                  const element = document.getElementById(
                    item.href.substring(1)
                  );
                  if (element) {
                    const yOffset = -90;
                    const targetPosition =
                      element.getBoundingClientRect().top +
                      window.scrollY +
                      yOffset;

                    window.scrollTo({
                      top: targetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
