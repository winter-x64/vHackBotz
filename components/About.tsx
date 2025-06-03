import React from "react";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold text-white text-center mb-12 md:mb-16">
        About Us
      </h2>

      <Card className="w-full aspect-video bg-black/40 rounded-[40px] border-2 border-[#ff6a3d] p-6 md:p-8">
        {/* Content will be added here */}
      </Card>
    </section>
  );
}
