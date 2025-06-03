"use client";

import React from "react";

interface BackgroundProps {
  scale?: string;
  opacity?: string;
  position?: string;
  overflow?: string;
}

const Background: React.FC<BackgroundProps> = ({
  scale = "scale-100",
  opacity = "opacity-100",
  position = "fixed",
  overflow = "overflow-hidden",
}) => {
  return (
    <div
      className={`w-full h-full ${position} top-0 left-0 -z-[1] ${overflow}`}
    >
      {/* Main background with image */}
      <div
        className={`absolute inset-0 ${scale} ${opacity}`}
        style={{
          backgroundImage: 'url("/background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "normal",
        }}
      >
        {/* Subtle overlay to enhance contrast with content */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  );
};

export default Background;
