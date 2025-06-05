"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { whyUs } from "@/lib/constants";

export default function WhyUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 container mx-auto px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-[#ff6a3d]/20 to-[#ff8a00]/20 blur-3xl animate-float-slow -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-[#ff6a3d]/15 to-[#ff4d00]/15 blur-3xl animate-float -z-10" />

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold text-white text-center mb-16">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a3d] to-[#ff9d6a]">
          Why
        </span>{" "}
        Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto relative">
        {whyUs.map((item, index) => (
          <div
            key={item.title}
            className="card-container transition-all duration-300 relative flex"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              transitionDelay: `${index * 50}ms`,
              transform: `translateY(${(index % 3) * 10}px)`,
              cursor: "pointer",
            }}
          >
            <div
              className="absolute inset-0 rounded-[30px] -z-10 transition-all duration-700"
              style={{
                background: `radial-gradient(circle at ${
                  hoveredCard === index ? "65% 35%" : "50% 50%"
                }, rgba(255,106,61,0.4) 0%, transparent 70%)`,
                opacity: hoveredCard === index ? 0.8 : 0,
                filter: "blur(20px)",
                transform: hoveredCard === index ? "scale(1.2)" : "scale(1)",
              }}
            />

            <Card
              className="aspect-square group bg-black/20 backdrop-filter backdrop-blur-xl rounded-[30px] border-2 border-[#ff6a3d] transition-all duration-500 overflow-hidden relative hover:scale-[1.03] w-full"
              style={{
                boxShadow:
                  hoveredCard === index
                    ? "0 10px 40px -10px rgba(255,106,61,0.4)"
                    : "0 10px 30px -15px rgba(0,0,0,0.5)",
              }}
            >
              <div className="absolute inset-0 rounded-[30px] overflow-hidden">
                <div
                  className="absolute inset-0 rounded-[30px] transition-all duration-700"
                  style={{
                    background: `linear-gradient(${
                      hoveredCard === index ? "135deg" : "45deg"
                    }, #ff6a3d 0%, #ff8a00 50%, #ff6a3d 100%)`,
                    opacity: hoveredCard === index ? 0.2 : 0.1,
                    backgroundSize:
                      hoveredCard === index ? "200% 200%" : "100% 100%",
                    animation:
                      hoveredCard === index
                        ? "gradient-shift 3s ease infinite"
                        : "none",
                  }}
                />
              </div>

              <div
                className="absolute inset-[2px] rounded-[28px] bg-gradient-to-br from-black/90 to-black/80 p-6 md:p-10 h-full flex flex-col justify-between backdrop-blur-sm overflow-hidden transition-all duration-500"
                style={{
                  boxShadow:
                    hoveredCard === index
                      ? "inset 1px 1px 1px rgba(255,106,61,0.1), inset -1px -1px 1px rgba(0,0,0,0.3)"
                      : "none",
                }}
              >
                <div className="absolute -top-[150px] -right-[150px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#ff6a3d]/30 to-[#ff8a00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

                <div
                  className="icon-container mb-6 transition-all duration-300 ease-out relative"
                  style={{
                    color: hoveredCard === index ? "#ff8a00" : "#ff6a3d",
                    transform:
                      hoveredCard === index ? "scale(1.1)" : "scale(1)",
                    fontSize: "2rem",
                    filter:
                      hoveredCard === index
                        ? "drop-shadow(0 0 8px rgba(255,106,61,0.7))"
                        : "none",
                  }}
                >
                  {item.icon}
                </div>

                <div className="space-y-4 relative">
                  <h3
                    className="text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 ease-out"
                    style={{
                      color: hoveredCard === index ? "#ff6a3d" : "white",
                      transform:
                        hoveredCard === index
                          ? "translateY(-2px)"
                          : "translateY(0)",
                      textShadow:
                        hoveredCard === index
                          ? "0 0 10px rgba(255,106,61,0.4)"
                          : "none",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm md:text-base lg:text-lg transition-all duration-300 ease-out"
                    style={{
                      color:
                        hoveredCard === index
                          ? "rgba(255, 255, 255, 1)"
                          : "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes float-slow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}
