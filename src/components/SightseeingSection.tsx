"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

export default function SightseeingSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const spots = [
    {
      name: "Rabdentse Ruins",
      time: "15 mins away",
      desc: "Walk through mossy oak forests to find the stone remains of Sikkim’s 17th-century capital, framed against wide-open valley views.",
      image: "/spots/rabdentse-ruins.jpg",
    },
    {
      name: "Pemayangtse Monastery",
      time: "10 mins away",
      desc: "One of the oldest and most revered monasteries in the state, filled with ancient murals and wooden Buddhist sculptures.",
      image: "/spots/pemayangtse-monastery.jpg",
    },
    {
      name: "Pelling Skywalk & Chenrezig",
      time: "20 mins away",
      desc: "Walk along a transparent glass walkway suspended over lush hills, leading to a massive seated statue of the deity Chenrezig.",
      image: "/spots/pelling-skywalk.jpg",
    },
    {
      name: "Rimbi & Kanchenjunga Falls",
      time: "30 to 45 mins away",
      desc: "Roaring mountain streams cutting straight through sheer black rock faces, perfect for a day drive.",
      image: "/spots/kanchenjunga-waterfalls.jpg",
    },
    {
      name: "Khecheopalri Lake",
      time: "1 hour away",
      desc: "A sacred wish-fulfilling lake where local lore says the birds pick away every fallen leaf to keep the surface pristine.",
      image: "/spots/khecheopalri-lake.jpg",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = direction === "left" ? -380 : 380;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="nearby" className="section-deferred py-28 lg:py-32 bg-white relative overflow-hidden select-none">
      {/* Background Ambient Depth (GPU-free radial washes instead of blur-3xl) */}
      <div
        className="absolute top-1/2 -left-48 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(219,234,254,0.48) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 -right-48 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(219,234,254,0.4) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =====================================================================
            EDITORIAL SECTION HEADER (Strictly Enforced Typography & Rhythm)
           ===================================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight font-serif mb-4">
            Nearby Spots & Things to Do
          </h2>

          {/* Symmetrical Ornamental Diamond Anchor */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-2 h-2 rotate-45 bg-blue-700 shadow-sm" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <p className="text-base sm:text-lg text-slate-700 font-serif leading-relaxed">
            Sacred lakes, 17th-century monastery ruins, and glass skywalks, all within a short scenic drive along the quiet ridge.
          </p>
        </div>

        {/* =====================================================================
            CIRCULAR CAROUSEL SLIDER (Smooth Spring Physics & Lottie Motion Easing)
           ===================================================================== */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-blue-900 shadow-[0_8px_25px_rgba(30,58,138,0.18)] border border-blue-200/90 hover:border-blue-500 hover:shadow-[0_12px_32px_rgba(37,99,235,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center cursor-pointer"
            aria-label="Scroll nearby spots left"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>

          {/* Circular Cards Carousel Track */}
          <div
            ref={carouselRef}
            className="flex items-center gap-6 sm:gap-8 lg:gap-10 overflow-x-auto scroll-smooth py-6 px-12 sm:px-14 lg:px-16 w-full justify-start sm:justify-center no-scrollbar snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {spots.map((spot, idx) => (
              <div
                key={idx}
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full aspect-square shrink-0 overflow-hidden relative border-2 border-blue-200/90 hover:border-blue-600 shadow-[0_16px_40px_rgba(30,58,138,0.14)] hover:shadow-[0_24px_55px_rgba(37,99,235,0.28)] hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group cursor-pointer snap-center flex items-center justify-center text-center"
              >
                {/* Full-bleed Photo */}
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  className="object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay for High Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/40 group-hover:via-slate-950/50 transition-colors duration-300" />

                {/* Circular Content Overlay */}
                <div className="relative z-10 px-5 sm:px-6 flex flex-col items-center justify-center text-center max-w-[85%]">
                  {/* Time Distance Badge */}
                  <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold text-blue-300 mb-2 font-mono">
                    <Clock className="w-3 h-3 text-blue-400" />
                    <span>{spot.time}</span>
                  </div>

                  {/* Spot Name */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white font-serif tracking-tight mb-2 leading-snug drop-shadow-md">
                    {spot.name}
                  </h3>

                  {/* Spot Description */}
                  <p className="text-xs sm:text-sm text-slate-200 font-serif leading-relaxed line-clamp-3">
                    {spot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-blue-900 shadow-[0_8px_25px_rgba(30,58,138,0.18)] border border-blue-200/90 hover:border-blue-500 hover:shadow-[0_12px_32px_rgba(37,99,235,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center cursor-pointer"
            aria-label="Scroll nearby spots right"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>
        </div>
      </div>
    </section>
  );
}
