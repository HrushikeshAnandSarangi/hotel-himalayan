"use client";

import React, { useState, useEffect, useRef } from "react";
import VerandaSketch from "./about/VerandaSketch";
import LoungeSketch from "./about/LoungeSketch";
import MonasterySketch from "./about/MonasterySketch";
import { StandingFigure, WalkingFigure } from "./about/ScaleFigures";
import AngledFilmstrip from "./about/AngledFilmstrip";

export default function AboutSection() {
  const [scrollProgress, setScrollProgress] = useState(0.5);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Motion Design Skill: Smooth scroll-driven multiplane parallax
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalDistance = rect.height + windowHeight;
          const currentPos = windowHeight - rect.top;
          const progress = Math.max(0, Math.min(1, currentPos / totalDistance));
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax Layer Offsets (Motion Personality: Premium / decel)
  const filmstripX = (scrollProgress - 0.35) * -240;
  const verandaY = (scrollProgress - 0.25) * -45;
  const loungeY = (scrollProgress - 0.55) * -40;
  const monasteryY = (scrollProgress - 0.75) * -35;
  const walkingFigureX = (scrollProgress - 0.45) * 40;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#fafbfd] text-[#061d30] py-20 sm:py-28 lg:py-36 overflow-hidden select-none border-t border-sky-100"
    >
      {/* =========================================================================
          ARCHITECTURAL PERSPECTIVE GUIDE LINES (Dashed Blueprint Projection Lines)
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 select-none">
        <svg
          viewBox="0 0 1920 2400"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Main Diagonal Perspective Axis Lines */}
          <line
            x1="0"
            y1="250"
            x2="1920"
            y2="750"
            stroke="#0284c7"
            strokeWidth="1.2"
            strokeDasharray="8 6"
          />
          <line
            x1="0"
            y1="820"
            x2="1920"
            y2="1350"
            stroke="#0284c7"
            strokeWidth="1.2"
            strokeDasharray="8 6"
          />
          <line
            x1="0"
            y1="1400"
            x2="1920"
            y2="1920"
            stroke="#0284c7"
            strokeWidth="1.2"
            strokeDasharray="8 6"
          />
          <line
            x1="1920"
            y1="300"
            x2="0"
            y2="1600"
            stroke="#061d30"
            strokeWidth="0.8"
            strokeDasharray="10 8"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* =======================================================================
            ZONE 1: RETREAT ARCHIVES (Standing Figure, Editorial Title, Veranda Sketch)
           ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          {/* Left Column: Human Scale Figure + Section Heading */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <StandingFigure />
              <div>
                <span className="font-editorial-mono text-[11px] uppercase tracking-[0.25em] text-[#0284c7] font-bold block">
                  01 / RETREAT ARCHIVES
                </span>
                <span className="text-[10px] text-slate-500 font-serif">
                  CHUMBONG DIARY • ELEV. 7,200 FT
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-[#061d30] leading-[1.15]">
              A front-row seat to West Sikkim.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-serif leading-relaxed max-w-md">
              Perched on the serene high ridge of Chumbong in Pelling, Hotel
              Himalayan overlooks the unbroken Kanchenjunga massif. An honest
              hilltop retreat designed for unhurried travelers, morning tea
              rituals, and silent starry nights.
            </p>
          </div>

          {/* Right Column: Hand-Drawn Veranda & Balcony Sketch with Parallax */}
          <div
            className="lg:col-span-7 transition-transform duration-100 ease-out"
            style={{
              transform: `translate3d(0, ${verandaY}px, 0)`,
              willChange: "transform",
            }}
          >
            <div className="relative p-2 sm:p-4 bg-white/70 backdrop-blur-xs rounded-2xl border border-slate-200/80 shadow-[0_15px_40px_rgba(6,29,48,0.06)]">
              <VerandaSketch />
              {/* Technical Caption Tag */}
              <div className="absolute bottom-4 right-6 bg-white/90 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-md font-editorial-mono text-[10px] text-[#061d30]">
                <span>ARCH. DETAIL // </span>
                <span className="font-bold text-[#0284c7]">BALCONY VISTA</span>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================================
            ZONE 2: ANGLED DYNAMIC FILMSTRIP (Photo Ribbon with Parallax Glide)
           ======================================================================= */}
        <AngledFilmstrip parallaxX={filmstripX} />

        {/* =======================================================================
            ZONE 3: HOSPITALITY PHILOSOPHY (Dark Stamp Block + Narrative + Walking Figure)
           ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-16 sm:my-24">
          {/* Left: Solid Dark Midnight Stamp Block (Reference Style) */}
          <div className="lg:col-span-3">
            <div className="w-full sm:w-60 h-44 sm:h-52 bg-[#071f33] text-white p-6 rounded-xl border border-[#124a72]/50 shadow-[0_12px_32px_rgba(7,31,51,0.25)] flex flex-col justify-between">
              <div>
                <span className="font-editorial-mono text-[9px] uppercase tracking-[0.25em] text-sky-300 block mb-1">
                  PHILOSOPHY
                </span>
                <h4 className="text-base sm:text-lg font-bold font-serif leading-tight">
                  HONEST MOUNTAIN HOSPITALITY
                </h4>
              </div>
              <div className="pt-4 border-t border-white/15">
                <span className="font-editorial-mono text-[10px] text-slate-300 block">
                  CHUMBONG RIDGE • 01 / 04
                </span>
                <span className="text-[10px] text-sky-200 font-serif">
                  NO NOISE • JUST SKY
                </span>
              </div>
            </div>
          </div>

          {/* Center: Refined Editorial Story Narrative */}
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg lg:text-xl font-serif text-[#08233a] leading-relaxed italic">
              &ldquo;Hotel Himalayan started with a very simple thought: when
              you come to the mountains, you shouldn&apos;t have to crane your
              neck or hike an hour just to catch a glimpse of the skyline. Perched
              on the quiet slopes of Chumbong in Pelling, we offer honest mountain
              hospitality without unnecessary noise.&rdquo;
            </p>
          </div>

          {/* Right: Architectural Walking Traveler Figure with Parallax Drift */}
          <div
            className="lg:col-span-2 hidden sm:flex items-center justify-center transition-transform duration-100 ease-out"
            style={{
              transform: `translate3d(${walkingFigureX}px, 0, 0)`,
              willChange: "transform",
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <WalkingFigure />
              <span className="font-editorial-mono text-[9px] uppercase tracking-widest text-slate-400">
                TRAVELER
              </span>
            </div>
          </div>
        </div>

        {/* =======================================================================
            ZONE 4: THE SANCTUARY / ENVIRONMENT HEADING (Center Roman Typography)
           ======================================================================= */}
        <div className="text-center max-w-2xl mx-auto my-16 sm:my-24">
          <div className="w-12 h-[1px] bg-[#0284c7] mx-auto mb-4" />
          <span className="font-editorial-mono text-[11px] uppercase tracking-[0.3em] text-[#0284c7] font-bold block mb-1">
            ENVIRONMENT • 02
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#061d30] tracking-tight">
            THE SANCTUARY
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-serif mt-3 leading-relaxed max-w-lg mx-auto">
            The kettle is always ready, the kitchen serves hot home-style meals
            made with local produce, and the open terrace turns strangers into
            storytelling circles as soon as the sun dips below the snowline.
          </p>
        </div>

        {/* =======================================================================
            ZONE 5: THE TEA LOUNGE & HEARTH (Hand-Drawn Interior Sketch + Basecamp Info)
           ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-14 sm:my-20">
          {/* Left: Architectural Sketch of the Tea Lounge & Hearth */}
          <div
            className="lg:col-span-7 transition-transform duration-100 ease-out"
            style={{
              transform: `translate3d(0, ${loungeY}px, 0)`,
              willChange: "transform",
            }}
          >
            <div className="p-3 sm:p-5 bg-white/75 backdrop-blur-xs rounded-2xl border border-slate-200/80 shadow-[0_15px_40px_rgba(6,29,48,0.06)]">
              <LoungeSketch />
            </div>
          </div>

          {/* Right: Basecamp Description & Editorial Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#0284c7] font-bold block">
              BASECAMP ARCHITECTURE // 03
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold font-serif text-[#061d30] tracking-tight">
              THE HEARTH & TERRACE
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-serif leading-relaxed">
              Whether you are chasing peaks with a heavy rucksack or taking a
              quiet break from work, this is your basecamp. Wooden floors, hot
              copper tea kettles, comfortable wicker armchairs, and wide-open
              balconies bathed in morning light.
            </p>
            <div className="pt-3 border-t border-slate-200 font-editorial-mono text-[10px] text-slate-500 space-y-1">
              <div>LOCATION: CHUMBONG RIDGE • WEST SIKKIM</div>
              <div>CLIMATE: TEMPERATE ALPINE • CLEAR SKIES</div>
            </div>
          </div>
        </div>

        {/* =======================================================================
            ZONE 6: SACRED RIDGE & MONASTERY PANORAMA (History + Monastery Sketch)
           ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-14 sm:my-20">
          {/* Left: Monastic History & Heritage Narrative */}
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            <span className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#0284c7] font-bold block">
              CULTURAL SURROUNDINGS // 04
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold font-serif text-[#061d30] tracking-tight">
              PEMAYANGTSE & THE SACRED RIDGE
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-serif leading-relaxed">
              Just minutes from our gates lie the mossy stone ruins of Rabdentse
              Palace and the sacred 300-year-old Pemayangtse Monastery. Prayer
              flags flutter across the pine slopes while Kanchenjunga watches
              over the valley in golden amber silence.
            </p>
            <div className="pt-3 border-t border-slate-200 font-editorial-mono text-[10px] text-slate-500 space-y-1">
              <div>ELEVATION: 7,200 FT // 2,195 M</div>
              <div>COORDINATES: 27.3054° N • 88.2411° E</div>
            </div>
          </div>

          {/* Right: Hand-Drawn Monastery Pagoda & Ridge Sketch with Parallax */}
          <div
            className="lg:col-span-7 order-1 lg:order-2 transition-transform duration-100 ease-out"
            style={{
              transform: `translate3d(0, ${monasteryY}px, 0)`,
              willChange: "transform",
            }}
          >
            <div className="p-3 sm:p-5 bg-white/75 backdrop-blur-xs rounded-2xl border border-slate-200/80 shadow-[0_15px_40px_rgba(6,29,48,0.06)]">
              <MonasterySketch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
