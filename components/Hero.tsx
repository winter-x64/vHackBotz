import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <Card
      id="hero"
      className="relative w-full rounded-b-0 shadow-none min-h-screen flex flex-col items-start justify-center bg-transparent overflow-visible border-0"
    >
      <CardContent className="p-0 w-full border-0">
        <div className="container mx-auto px-4 z-10 backdrop-blur-lg">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-inter font-bold text-white leading-tight mb-6">
              Your Gateway to a
              <br />
              Smarter, More
              <br />
              Connected <span className="text-white">Home</span>
              <br />
              Experience!
            </h1>

            <p className="text-white/80 text-base font-inter mb-8 max-w-[450px]">
              Lorem ipsum dolor sit amet consectetur. Nibh feugiat nisi lacus
              feugiat nisi amet tincidunt amet sed morbi. Consequat in amet
              risus sed integer pellentesque. Dolor arcu sed
            </p>

            <div className="flex flex-row gap-4">
              <Button className="bg-[#ff6a3d] hover:bg-[#ff6a3d]/90 text-white font-medium px-6 py-2 rounded-full border-0">
                Download
              </Button>
              <Button
                variant="outline"
                className="border-0 bg-transparent text-white hover:bg-[#ff6a3d]/10 font-medium px-6 py-2 rounded-full"
              >
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
