"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { aboutUs } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 container mx-auto px-4"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold text-white text-center mb-16">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a3d] to-[#ff9d6a]">
          ABOUT
        </span>{" "}
        US
      </h2>

      <div className="relative rounded-3xl bg-black/30 p-10 backdrop-blur-xl mb-24 border border-white/5 max-w-4xl mx-auto shadow-[0_0_15px_rgba(255,106,61,0.15)]">
        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#ff6a3d] rounded-tl-3xl"/>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#ff6a3d] rounded-br-3xl"/>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ff6a3d]/5 to-transparent rounded-3xl pointer-events-none"/>

        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {aboutUs.headline}
        </h3>
        <h4 className="text-xl md:text-2xl text-[#ff6a3d] font-medium mb-6">
          {aboutUs.subheadline}
        </h4>
        <p className="text-white/80 leading-relaxed text-lg backdrop-blur-sm rounded-xl py-4">
          {aboutUs.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {aboutUs.content.map((item, index) => (
          <div key={item.title} className="perspective-1000">
            <Card className="relative bg-gradient-to-br from-black/60 via-black/50 to-black/30 backdrop-blur-lg border-0 overflow-hidden group hover:shadow-[0_0_25px_rgba(255,106,61,0.2)] transition-all duration-500 h-full transform-gpu hover:translate-z-10 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a3d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ff6a3d] to-transparent"/>

              <div className="p-8 h-full flex flex-col relative z-10">
                <span className="text-[#ff6a3d]/50 text-sm font-mono mb-2">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff6a3d] transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="w-12 h-1 bg-[#ff6a3d] mb-4 group-hover:w-20 transition-all duration-300"/>
                <p className="text-white/70 text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
