"use client";
import React from "react";

export default function Background() {
  return (
    <>
      <div
        className="fixed inset-0 -z-20 w-full h-full"
        style={{
          background: "linear-gradient(to bottom, #090614, #0C0614, #100716)",
          backgroundSize: "100% 100%",
        }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none"
        style={{
          opacity: 0.9,
          mixBlendMode: "normal",
          isolation: "isolate",
        }}
      >
        <div
          className="absolute top-0 right-0 w-[90%] h-[70%] opacity-45"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(249, 94, 7, 0.6) 0%, rgba(249, 94, 7, 0.3) 50%, rgba(249, 94, 7, 0) 80%)",
            filter: "blur(120px)",
            transform: "translate(10%, -15%) rotate(-15deg) skew(10deg, 5deg)",
            borderRadius: "65% 35% 45% 55% / 40% 60% 40% 60%",
          }}
        />
        <div
          className="absolute top-[25%] left-0 w-[65%] h-[45%] opacity-35"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 106, 61, 0.4) 0%, rgba(255, 69, 0, 0.2) 50%, rgba(255, 69, 0, 0) 75%)",
            filter: "blur(140px)",
            transform: "translate(-20%, 0%) rotate(10deg) skew(-5deg, 10deg)",
            borderRadius: "55% 45% 70% 30% / 55% 45% 55% 45%",
          }}
        />
        <div
          className="absolute bottom-0 right-[10%] w-[55%] h-[45%] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 79, 0, 0.45) 0%, rgba(255, 79, 0, 0.15) 45%, rgba(255, 79, 0, 0) 75%)",
            filter: "blur(130px)",
            transform: "translate(0%, 20%) rotate(-20deg) skew(5deg, -10deg)",
            borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%",
          }}
        />
        <div
          className="absolute top-[10%] left-[5%] w-[40%] h-[25%] opacity-25"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, rgba(255, 106, 61, 0.6) 0%, rgba(255, 106, 61, 0) 70%)",
            filter: "blur(80px)",
            transform: "rotate(-5deg)",
          }}
        />
        <div
          className="absolute bottom-[15%] left-[15%] w-[35%] h-[30%] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(249, 94, 7, 0.3) 0%, rgba(255, 69, 0, 0.1) 60%, transparent 80%)",
            filter: "blur(100px)",
            transform: "rotate(15deg)",
            borderRadius: "60% 40% 50% 50% / 40% 60% 40% 60%",
          }}
        />
        <div
          className="absolute top-[50%] left-0 w-full h-[40%] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 100, 10, 0.5) 0%, rgba(255, 100, 10, 0.2) 50%, rgba(255, 100, 10, 0) 85%)",
            filter: "blur(130px)",
            transform: "translateY(-50%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-[150%] h-[70%] opacity-25"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 120, 30, 0.4) 0%, rgba(255, 80, 0, 0.2) 40%, transparent 80%)",
            filter: "blur(80px)",
            transform: "rotate(15deg) translateY(-20%)",
          }}
        />
        <div
          className="absolute bottom-0 left-[25%] w-[70%] h-[60%] opacity-40"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 100, 20, 0.5) 0%, rgba(255, 80, 10, 0.2) 50%, transparent 80%)",
            filter: "blur(150px)",
            transform: "translateY(30%)",
            borderRadius: "50% 50% 40% 60% / 60% 50% 50% 40%",
          }}
        />
        <div
          className="absolute top-[40%] left-[50%] w-[60%] h-[50%] opacity-40"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 95, 0, 0.6) 0%, rgba(255, 95, 0, 0.3) 40%, rgba(255, 95, 0, 0) 75%)",
            filter: "blur(100px)",
            transform: "translate(-50%, -50%)",
            animation: "pulse 15s infinite alternate ease-in-out",
          }}
        />
        <div
          className="absolute top-[5%] left-[50%] w-[35%] h-[20%] opacity-35"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 120, 20, 0.4) 0%, rgba(255, 120, 20, 0.1) 50%, transparent 80%)",
            filter: "blur(70px)",
            transform: "translate(-50%, 0%) rotate(5deg)",
            borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
          }}
        />
        <div
          className="absolute bottom-[8%] left-[50%] w-[45%] h-[25%] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(230, 80, 0, 0.5) 0%, rgba(230, 80, 0, 0.2) 40%, transparent 75%)",
            filter: "blur(100px)",
            transform: "translate(-50%, 0%) rotate(-10deg)",
            borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%",
          }}
        />
        <div
          className="absolute top-[35%] right-0 w-[15%] h-[45%] opacity-30"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(249, 94, 7, 0.3) 70%, rgba(249, 94, 7, 0.5) 100%)",
            filter: "blur(60px)",
            transform: "skew(0deg, 30deg)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            backgroundColor: "rgba(255, 100, 0, 0.03)",
          }}
        />
      </div>
      <style jsx global>{`
        @keyframes pulse {
          0% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(0.9);
          }
          100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }
      `}</style>
    </>
  );
}
