"use client";

import React from "react";
import { useEffect, useState } from "react";

interface BackgroundProps {
  scale: string;
  opacity: string;
  position?: string;
  overflow?: string;
  theme?: "light" | "dark";
}

const Background: React.FC<BackgroundProps> = ({
  scale,
  opacity,
  position,
  overflow,
  theme = "dark",
}) => {
  const [mouseXpercentage, setMouseXPercentage] = useState<number>(0);
  const [mouseYpercentage, setMouseYPercentage] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newMouseXPercentage = Math.round((event.pageX / windowWidth) * 100);
      const newMouseYPercentage = Math.round(
        (event.pageY / windowHeight) * 100
      );

      setMouseXPercentage(newMouseXPercentage);
      setMouseYPercentage(newMouseYPercentage);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const backgroundStyle: React.CSSProperties = {
    background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #ff6a3d, ${
      theme === "light" ? "#010714" : "#010714"
    })`,
  };

  return (
    <React.Fragment>
      <div
        className={`radial-gradient-styling absolute ${position} left-0 h-full w-full -z-[1]   ${opacity} ${scale} ${overflow}`}
        style={backgroundStyle}
      />
    </React.Fragment>
  );
};

export default Background;
