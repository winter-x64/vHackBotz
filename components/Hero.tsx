"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
export default function Hero() {
  return (
    <Card
      id="hero"
      className="relative w-full shadow-none min-h-screen flex flex-col items-start justify-center bg-transparent overflow-visible border-0"
    >
      <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] bg-gradient-conic from-blue-600/30 via-transparent to-violet-700/30 rounded-full filter blur-[80px] animate-[spin_20s_linear_infinite] opacity-70"/>
      <div className="absolute bottom-1/4 right-1/3 w-[25vw] h-[25vw] bg-gradient-conic from-[#ff6a3d]/20 via-transparent to-cyan-500/20 rounded-full filter blur-[70px] animate-[spin_15s_linear_infinite_reverse] opacity-60"/>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05] pointer-events-none"/>

      <CardContent className="p-0 w-full border-0 relative z-10">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="flex flex-col justify-center text-left col-span-1 lg:col-span-5 order-2 lg:order-1 lg:pr-8">
              <div className="relative mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  <span className="block mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 relative">
                    <span className="relative inline-block">
                      Hack<span className="text-[#ff6a3d]">.</span>
                      <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#ff6a3d]/80 to-transparent rounded-full"/>
                    </span>
                  </span>
                  <span className="block mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 relative">
                    <span className="relative inline-block">
                      Build<span className="text-[#ff6a3d]">.</span>
                      <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#ff6a3d]/80 to-transparent rounded-full"/>
                    </span>
                  </span>
                  <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a3d] to-[#ff8a5d]">
                    Dominate<span className="text-white">.</span>
                    <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-gradient-to-r from-[#ff6a3d] to-transparent rounded-full"/>
                  </span>
                </h1>
              </div>

              <p className="text-white/80 text-base md:text-lg font-inter mb-10 max-w-[500px] leading-relaxed">
                Pioneering the next generation of AI-powered solutions. Our
                startup transforms complex business challenges into scalable
                technology advantages, driving innovation in an ever-evolving
                digital landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mt-2 mb-12">
                <InteractiveHoverButton className="bg-orange-500 text-white cursor-pointer">
                  Get Started
                </InteractiveHoverButton>

                <Button
                  variant="outline"
                  className="border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-medium transition-all duration-300 cursor-pointer"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>

            <div className="flex justify-center items-center col-span-1 lg:col-span-7 order-1 lg:order-2">
              <div className="relative w-full max-w-[600px] aspect-square perspective-[1500px] transform-gpu">
                <div
                  className="absolute inset-0 flex items-center justify-center transform hover:scale-105 transition-all duration-700 will-change-transform hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-full h-[90%] rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl p-8 shadow-[0_10px_50px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-white/20 transition-all duration-500 transform-gpu hover:[transform:rotateY(10deg)_rotateX(5deg)]">
                    <div className="absolute top-6 left-6 w-20 h-1 bg-gradient-to-r from-[#ff6a3d] to-transparent rounded-full"/>
                    <div className="absolute top-12 left-6 w-10 h-1 bg-gradient-to-r from-[#ff6a3d] to-transparent rounded-full"/>

                    <div className="flex flex-col items-center justify-center h-full gap-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#ff6a3d]/20 to-blue-500/20 flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,106,61,0.3)]">
                        <span className="text-white text-3xl font-bold">
                          HC
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <span className="text-white/80 text-xl font-medium tracking-wide">
                          Our Tech Vision
                        </span>
                        <div className="flex gap-3 mt-2">
                          <span className="text-[#ff6a3d] font-bold text-base px-3 py-1 rounded-full bg-[#ff6a3d]/10 border border-[#ff6a3d]/30">
                            Hack
                          </span>
                          <span className="text-blue-400 font-bold text-base px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
                            Build
                          </span>
                          <span className="text-purple-400 font-bold text-base px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
                            Dominate
                          </span>
                        </div>
                      </div>
                    </div>
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