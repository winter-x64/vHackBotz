import React from "react";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-16 md:py-24 container mx-auto px-4 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ff6a3d20_1px,transparent_1px)] bg-[length:20px_20px] opacity-20" />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold text-center mb-6 md:mb-8">
          OUR{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a3d] to-[#ff9d6a]">
            SERVICES
          </span>
        </h2>

        <div className="lg:hidden space-y-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="mobile-service-card transition-all hover:scale-[1.02] hover:-translate-y-1 duration-300"
            >
              <Card className="backdrop-blur-sm bg-black/40 rounded-[30px] border-2 border-[#ff6a3d]/70 p-5 hover:border-[#ff6a3d] hover:shadow-lg hover:shadow-[#ff6a3d]/20">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="bg-gradient-to-br from-black/80 to-black/60 w-12 h-12 aspect-square rounded-[16px] flex items-center justify-center text-xl border border-[#ff6a3d]/50 text-[#ff6a3d] shadow-inner">
                    {service.icon}
                  </div>
                  <div className="w-full sm:text-left flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 text-sm flex items-start"
                        >
                          <span className="text-[#ff6a3d] mr-2 text-lg leading-none">
                            •
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="hidden lg:block space-y-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="desktop-service-row grid grid-cols-8 gap-6"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="col-span-1 transition-all hover:scale-110 hover:-translate-y-2 duration-300 flex">
                    <Card className="aspect-square backdrop-blur-sm bg-black/40 rounded-[25px] border-2 border-[#ff6a3d]/70 p-3 flex items-center justify-center hover:border-[#ff6a3d] hover:shadow-lg hover:shadow-[#ff6a3d]/20 w-full">
                      <div className="bg-gradient-to-br from-black/80 to-black/60 w-16 h-16 rounded-[16px] border border-[#ff6a3d]/50 flex items-center justify-center text-2xl text-[#ff6a3d] shadow-inner">
                        {service.icon}
                      </div>
                    </Card>
                  </div>
                  <Card className="col-span-7 backdrop-blur-sm bg-black/40 rounded-[30px] border-2 border-[#ff6a3d]/70 p-6 transition-all duration-300 hover:border-[#ff6a3d] hover:shadow-lg hover:shadow-[#ff6a3d]/20 hover:-translate-y-1 flex flex-col">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-auto">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 flex items-start"
                        >
                          <span className="text-[#ff6a3d] mr-2 text-lg leading-none">
                            •
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </>
              ) : (
                <>
                  <Card className="col-span-7 backdrop-blur-sm bg-black/40 rounded-[30px] border-2 border-[#ff6a3d]/70 p-6 transition-all duration-300 hover:border-[#ff6a3d] hover:shadow-lg hover:shadow-[#ff6a3d]/20 hover:-translate-y-1 flex flex-col">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-auto">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 flex items-start"
                        >
                          <span className="text-[#ff6a3d] mr-2 text-lg leading-none">
                            •
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <div className="col-span-1 transition-all hover:scale-110 hover:-translate-y-2 duration-300 flex">
                    <Card className="aspect-square backdrop-blur-sm bg-black/40 rounded-[25px] border-2 border-[#ff6a3d]/70 p-3 flex items-center justify-center hover:border-[#ff6a3d] hover:shadow-lg hover:shadow-[#ff6a3d]/20 w-full">
                      <div className="bg-gradient-to-br from-black/80 to-black/60 w-16 h-16 rounded-[16px] border border-[#ff6a3d]/50 flex items-center justify-center text-2xl text-[#ff6a3d] shadow-inner">
                        {service.icon}
                      </div>
                    </Card>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
