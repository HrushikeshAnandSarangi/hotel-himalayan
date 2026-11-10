"use client";

import React from "react";
import Image from "next/image";

const FILMSTRIP_FRAMES = [
  {
    src: "/about/skyline-morning.jpg",
    title: "Dawn Over Kanchenjunga",
    subtitle: "05:42 AM • Balcony Ridge",
    vignette: "I",
  },
  {
    src: "/about/morning-tea.jpg",
    title: "The Morning Tea Ritual",
    subtitle: "Fresh local brew & mountain air",
    vignette: "II",
  },
  {
    src: "/about/homestyle-kitchen.jpg",
    title: "Homestyle Mountain Kitchen",
    subtitle: "Locally sourced organic produce",
    vignette: "III",
  },
  {
    src: "/about/sunset-terrace.jpg",
    title: "Open Storytelling Terrace",
    subtitle: "Dusk over the alpine snowline",
    vignette: "IV",
  },
  {
    src: "/gallery/kanchenjunga-morning.jpg",
    title: "Unbroken 180° Horizon",
    subtitle: "Chumbong Peak • 7,200 FT",
    vignette: "V",
  },
];

const AngledFilmstrip = React.memo(function AngledFilmstrip() {
  return (
    <div className="w-full relative my-14 sm:my-20 overflow-hidden py-6 select-none">
      {/* Dynamic Angled / Tilted Filmstrip Container */}
      <div
        className="w-[125vw] sm:w-[120vw] -ml-[10vw] bg-[#071f33] py-4 sm:py-5 border-y-2 border-[#124a72]/60 shadow-[0_14px_32px_rgba(3,20,34,0.28)] relative overflow-hidden"
        style={{
          transform: "rotate(-2.2deg)",
          transformOrigin: "center center",
        }}
      >
        {/* Filmstrip Sprocket Holes Top & Bottom */}
        <div className="absolute top-1 inset-x-0 flex items-center justify-between px-2 opacity-30 pointer-events-none">
          {[...Array(38)].map((_, i) => (
            <span key={i} className="w-2.5 h-1.5 bg-white/60 rounded-xs inline-block" />
          ))}
        </div>
        <div className="absolute bottom-1 inset-x-0 flex items-center justify-between px-2 opacity-30 pointer-events-none">
          {[...Array(38)].map((_, i) => (
            <span key={i} className="w-2.5 h-1.5 bg-white/60 rounded-xs inline-block" />
          ))}
        </div>

        {/* GPU Parallax Moving Track driven directly by --about-p (Zero React Re-renders) */}
        <div
          className="flex items-center gap-4 sm:gap-6 px-6 sm:px-12"
          style={{
            transform:
              "translate3d(calc((var(--about-p, 0.35) - 0.35) * -240px), 0, 0)",
            willChange: "transform",
          }}
        >
          {FILMSTRIP_FRAMES.map((frame, idx) => (
            <div
              key={idx}
              className="relative w-64 sm:w-80 lg:w-96 h-36 sm:h-44 lg:h-48 shrink-0 rounded-lg overflow-hidden border border-white/20 bg-slate-900 group shadow-md"
            >
              <Image
                src={frame.src}
                alt={frame.title}
                fill
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.92]"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Central Circular Focus Ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/40 bg-slate-950/20 flex items-center justify-center group-hover:scale-110 group-hover:border-white transition-all duration-300">
                  <span className="font-editorial-mono text-[10px] text-white/85 font-bold uppercase tracking-wider">
                    {frame.vignette}
                  </span>
                </div>
              </div>

              {/* Caption Tag */}
              <div className="absolute bottom-2.5 left-3 right-3 text-white pointer-events-none font-serif">
                <h5 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                  {frame.title}
                </h5>
                <p className="text-[10px] sm:text-[11px] text-sky-200/80 font-mono tracking-wide">
                  {frame.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default AngledFilmstrip;
