"use client";

import React, { useState } from "react";
import HeroScene from "./hero/HeroScene";

interface HeroProps {
  onOpenBooking?: () => void;
  onOpenBookingWithRoom?: (roomName: string) => void;
}

export default function Hero({}: HeroProps) {
  // Normalized mouse coordinates (-1 to 1) for gentle multiplane spatial depth
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    if (!clientWidth || !clientHeight) return;
    const x = (e.clientX / clientWidth - 0.5) * 2;
    const y = (e.clientY / clientHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[calc(100vh-76px)] md:h-[calc(100vh-106px)] min-h-[540px] overflow-hidden flex flex-col justify-start bg-[#82b6d6] select-none"
    >
      {/* Dreamlike Layered Himalayan Alpine Scene */}
      <HeroScene mouseOffset={mouseOffset} />

      {/* Simplified Editorial Hook Blended Seamlessly Into the Clear Upper-Left Sky */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-8 sm:pt-10 md:pt-12 lg:pt-14 flex flex-col items-start pointer-events-none select-none">
        <h1 className="font-hero-condensed uppercase tracking-tight">
          <span className="block text-[13vw] sm:text-[9.5vw] md:text-[7.5vw] lg:text-[84px] xl:text-[98px] leading-[0.88] text-[#061d30] drop-shadow-[0_2px_10px_rgba(255,255,255,0.65)]">
            EXPERIENCE
          </span>
          <span className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 text-[13vw] sm:text-[9.5vw] md:text-[7.5vw] lg:text-[84px] xl:text-[98px] leading-[0.88]">
            <span className="text-[#0284c7] drop-shadow-[0_2px_12px_rgba(255,255,255,0.75)]">
              THE
            </span>
            <span className="text-[#061d30] drop-shadow-[0_2px_10px_rgba(255,255,255,0.65)]">
              HIMALAYAS
            </span>
          </span>
        </h1>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-serif italic text-[#08253d] font-semibold tracking-wide drop-shadow-[0_1px_6px_rgba(255,255,255,0.85)]">
          Up close from your morning tea • Chumbong, West Sikkim
        </p>
      </div>
    </section>
  );
}
