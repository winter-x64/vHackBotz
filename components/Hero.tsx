"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { lazy } from "react";
import Link from "next/link";

const Earth = lazy(() => import("@/components/ui/globe"));

export default function Hero() {
  return (
    <Card
      id="hero"
      className="relative w-full shadow-none min-h-screen flex flex-col items-center md:items-start justify-center bg-transparent overflow-visible border-0"
    >
      <CardContent className="p-0 w-full border-0 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="flex flex-col justify-center text-center md:text-left col-span-1 lg:col-span-5 order-2 lg:order-1 lg:pr-8">
              <div className="relative mb-6 md:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  <span className="block mb-3 text-white relative">
                    <span className="relative inline-block">
                      WE BUILD
                      <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#ff6a3d]/80 to-transparent rounded-full" />
                    </span>
                  </span>
                  <span className="block mb-3 text-white relative">
                    <span className="relative inline-block">
                      WHAT WE WISH
                      <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#ff6a3d]/80 to-transparent rounded-full" />
                    </span>
                  </span>
                  <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a3d] to-[#ff8a5d]">
                    EXISTED
                    <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-gradient-to-r from-[#ff6a3d] to-transparent rounded-full" />
                  </span>
                </h1>
              </div>

              <p className="text-white/80 text-sm sm:text-base md:text-lg font-inter mb-8 md:mb-10 max-w-[500px] mx-auto md:mx-0 leading-relaxed">
                We blend design, development, and experimentation
                to craft standout digital products. From custom websites and
                brand identities to our own tools, we help you build with
                confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-2 mb-8 sm:mb-12 mx-auto md:mx-0">
                <Link href="#contact">
                  <InteractiveHoverButton className="bg-orange-500 text-white cursor-pointer">
                    Work with us
                  </InteractiveHoverButton>
                </Link>

                <Link href="#works">
                  <Button
                    variant="outline"
                    className="border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 px-5 py-3 sm:px-8 sm:py-4 rounded-2xl font-medium transition-all duration-300 cursor-pointer w-full sm:w-auto"
                  >
                    See our work
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center col-span-1 lg:col-span-7 order-1 lg:order-2">
              <div className="relative w-full h-full max-w-[800px] aspect-square transform-gpu">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full scale-150 flex items-center justify-center">
                    <Earth
                      baseColor={[1, 0.416, 0.24]}
                      markerColor={[1, 0.54, 0.36]}
                      glowColor={[1, 0.416, 0.24]}
                      scale={1.0}
                      className="max-w-[500px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
