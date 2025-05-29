"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/app/theme-toggle";
import { Zap } from "lucide-react";
import { navItems } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

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

    const handleHashChange = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
          setIsOpen(false);
          setActiveSection(target.hash.substring(1));
          setTimeOfLastClick(Date.now());
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleHashChange);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleHashChange);
      });
    };
  }, []);

  const NavLink = ({ item }: { item: (typeof navItems)[0] }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isActive = isHovered || item.name === activeSection;

    const linkClasses = isActive
      ? "transition-all duration-200 relative text-orange-500"
      : "opacity-70 transition-all duration-300 hover:opacity-100";

    return (
      <Link
        href={item.href}
        className={`relative ${linkClasses} flex items-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setActiveSection(item.name);
          setTimeOfLastClick(Date.now());
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
      <div className="hidden md:block bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg px-8 py-3 rounded-full border border-white border-opacity-40">
        <div className="flex items-center space-x-8 h-12">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-7 w-7 text-orange-500" />
              <span className="font-bold text-lg">vHackBotz</span>
            </Link>
          </div>

          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </div>

      <div className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg px-6 py-3 rounded-full border border-white border-opacity-40">
        <div className="flex items-center justify-between space-x-4">
          <Link href="#hero" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-orange-500" />
          </Link>

          <nav className="flex items-center space-x-4">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center ${
                  activeSection === item.name
                    ? "text-orange-500"
                    : "text-gray-600 dark:text-gray-300"
                }`}
                onClick={() => {
                  setActiveSection(item.name);
                }}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
