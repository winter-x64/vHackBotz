import React from "react";
import { Card } from "@/components/ui/card";
import { whyUs } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 container mx-auto px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold text-white text-center mb-16 md:mb-20 lg:mb-24">
        Why Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
        {whyUs.map((item, index) => (
          <Card
            key={item.title}
            className={`aspect-square ${
              index === 1 ? "lg:scale-100" : ""
            } bg-black/40 rounded-[30px] border-2 border-[#ff6a3d] transition-transform hover:scale-110 duration-300`}
          >
            <div className="p-6 md:p-10 h-full flex flex-col justify-between">
              <div className="mb-6 text-[#ff6a3d] text-3xl md:text-4xl">
                {item.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base lg:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
