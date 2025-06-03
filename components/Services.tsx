import React from "react";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold text-white text-center mb-12 md:mb-16">
        Services
      </h2>
      <div className="lg:hidden space-y-6">
        {services.map((service) => (
          <Card
            key={service.title}
            className="bg-black/40 rounded-[30px] border-2 border-[#ff6a3d] p-5 transition-transform hover:scale-[1.02]"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="bg-black/60 w-10 h-10 aspect-square rounded-[12px] flex items-center justify-center text-xl border-2 border-[#ff6a3d] text-[#ff6a3d]">
                {service.icon}
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="grid grid-cols-8 gap-6 mb-6">
          <Card className="col-span-1 aspect-square bg-black/40 rounded-[25px] border-2 border-[#ff6a3d] p-3 flex items-center justify-center">
            <div className="bg-black/60 w-16 h-16 rounded-[12px] border-2 border-[#ff6a3d] flex items-center justify-center text-2xl text-[#fbf6f5]">
              {services[0].icon}
            </div>
          </Card>
          <Card className="col-span-7 bg-black/40 rounded-[30px] border-2 border-[#ff6a3d] p-6">
            <h3 className="text-2xl font-semibold text-white mb-3">
              {services[0].title}
            </h3>
            <p className="text-gray-300">{services[0].description}</p>
          </Card>
        </div>

        <div className="grid grid-cols-8 gap-6 mb-6">
          <Card className="col-span-7 bg-black/40 rounded-[30px] border-2 border-[#ff6a3d] p-6">
            <h3 className="text-2xl font-semibold text-white mb-3">
              {services[1].title}
            </h3>
            <p className="text-gray-300">{services[1].description}</p>
          </Card>
          <Card className="col-span-1 aspect-square bg-black/40 rounded-[25px] border-2 border-[#ff6a3d] p-3 flex items-center justify-center">
            <div className="bg-black/60 w-16 h-16 rounded-[12px] border-2 border-[#ff6a3d] flex items-center justify-center text-2xl text-[#f1edeb]">
              {services[1].icon}
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-8 gap-6">
          <Card className="col-span-1 aspect-square bg-black/40 rounded-[25px] border-2 border-[#ff6a3d] p-3 flex items-center justify-center">
            <div className="bg-black/60 w-16 h-16 rounded-[12px] border-2 border-[#ff6a3d] flex items-center justify-center text-2xl text-[#f0e9e7]">
              {services[2].icon}
            </div>
          </Card>
          <Card className="col-span-7 bg-black/40 rounded-[30px] border-2 border-[#ff6a3d] p-6">
            <h3 className="text-2xl font-semibold text-white mb-3">
              {services[2].title}
            </h3>
            <p className="text-gray-300">{services[2].description}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
