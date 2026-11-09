"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  MapPin,
  ExternalLink,
  CalendarCheck,
  BedDouble,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenBookingWithRoom?: (roomName: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Mouse position normalized (-1 to 1) for physics-based parallax depth
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    const x = (e.clientX / clientWidth - 0.5) * 2;
    const y = (e.clientY / clientHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const gmapsLink =
    "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y";

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-screen max-w-[100vw] overflow-hidden flex flex-col justify-center items-center bg-white px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* =========================================================================
          SVG MOUNTAIN MOTION DESIGN SYSTEM
          - Layered vector parallax (Kanchenjunga Massif, Singalila Ridge, Chumbong foothills)
          - Multi-stop linear & radial gradients (color-interpolation="linearRGB")
          - Continuous ambient mist drift loops (motion-design principle)
          - Breathing summit glow reflecting the first amber dawn light
         ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <defs>
            {/* Sky Background: Pure white transitioning to ethereal high-altitude ice blue */}
            <linearGradient
              id="himalayanSky"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#f8fbff" />
              <stop offset="75%" stopColor="#eaf2fc" />
              <stop offset="100%" stopColor="#dbeafe" />
            </linearGradient>

            {/* Amber Dawn Aura behind Kanchenjunga Central Summit */}
            <radialGradient
              id="dawnAura"
              cx="0.5"
              cy="0.38"
              r="0.45"
              fx="0.5"
              fy="0.35"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.45" />
              <stop offset="35%" stopColor="#dbeafe" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#eff6ff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>

            {/* Back Mountain: Kanchenjunga Lit Snow Face (Left Facet) */}
            <linearGradient
              id="peakSnowLit"
              x1="0.3"
              y1="0"
              x2="0.7"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#f0f7ff" />
              <stop offset="75%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#bfdbfe" />
            </linearGradient>

            {/* Back Mountain: Kanchenjunga Shaded Face (Right Facet) */}
            <linearGradient
              id="peakSnowShaded"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="45%" stopColor="#93c5fd" />
              <stop offset="80%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            {/* Mid-Ground Mountain Ridge: Alpine Cobalt Gradients */}
            <linearGradient
              id="midRidgeLit"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="30%" stopColor="#60a5fa" />
              <stop offset="70%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            <linearGradient
              id="midRidgeDark"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="40%" stopColor="#2563eb" />
              <stop offset="85%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>

            {/* Foreground Chumbong Ridge: Deep Slate/Navy Silhouette */}
            <linearGradient
              id="foregroundRidge"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="35%" stopColor="#1e3a8a" />
              <stop offset="75%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Mist Layer 1 Gradient */}
            <linearGradient
              id="mistGrad1"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="25%" stopColor="#f0f7ff" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#dbeafe" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Mist Layer 2 Gradient */}
            <linearGradient
              id="mistGrad2"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#e0effe" stopOpacity="0" />
              <stop offset="20%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#f8fbff" stopOpacity="0.8" />
              <stop offset="80%" stopColor="#e0f2fe" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#e0effe" stopOpacity="0" />
            </linearGradient>

            {/* Summit Specular Filter */}
            <filter
              id="summitGlow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              colorInterpolationFilters="linearRGB"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Canvas Background */}
          <rect width="1920" height="1080" fill="url(#himalayanSky)" />

          {/* Amber/Golden Dawn Radiance behind High Summits */}
          <circle cx="960" cy="420" r="480" fill="url(#dawnAura)" />

          {/* =========================================================
              LAYER 1: DISTANT MT. KANCHENJUNGA MASSIF (8,586m)
              Slight parallax factor (0.02x)
             ========================================================= */}
          <g
            style={{
              transform: `translate3d(${mouseOffset.x * 12}px, ${
                mouseOffset.y * 6
              }px, 0)`,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="animate-mountain-enter"
          >
            {/* Distant Left Satellites (Kabru & Pandim peaks) */}
            <polygon
              points="140,780 320,530 460,780"
              fill="url(#peakSnowLit)"
            />
            <polygon
              points="320,530 460,780 430,780"
              fill="url(#peakSnowShaded)"
            />

            <polygon
              points="360,780 540,460 710,780"
              fill="url(#peakSnowLit)"
            />
            <polygon
              points="540,460 710,780 620,780"
              fill="url(#peakSnowShaded)"
            />

            {/* Central Towering Kanchenjunga Crest */}
            {/* Main Western Face (Lit by first morning sun) */}
            <polygon
              points="680,780 960,320 960,780"
              fill="url(#peakSnowLit)"
            />
            {/* Main Eastern Face (Shaded alpine crest) */}
            <polygon
              points="960,320 1240,780 960,780"
              fill="url(#peakSnowShaded)"
            />

            {/* Summit Golden Sheen Tip with Breathing Glow */}
            <polygon
              points="960,320 910,400 960,390 1010,400"
              fill="#ffffff"
              filter="url(#summitGlow)"
              className="animate-summit-glow"
            />

            {/* Distant Right Satellites (Siniolchu & Simvo peaks) */}
            <polygon
              points="1210,780 1380,480 1540,780"
              fill="url(#peakSnowLit)"
            />
            <polygon
              points="1380,480 1540,780 1460,780"
              fill="url(#peakSnowShaded)"
            />

            <polygon
              points="1480,780 1650,560 1820,780"
              fill="url(#peakSnowLit)"
            />
            <polygon
              points="1650,560 1820,780 1740,780"
              fill="url(#peakSnowShaded)"
            />
          </g>

          {/* =========================================================
              LAYER 2: AMBIENT HIGH-ALTITUDE MIST (Back Drift)
             ========================================================= */}
          <g className="animate-mist-slow opacity-85">
            <path
              d="M-200,680 Q280,620 760,670 T1720,630 T2200,690 L2200,830 L-200,830 Z"
              fill="url(#mistGrad1)"
            />
          </g>

          {/* =========================================================
              LAYER 3: MID-GROUND SINGALILA RIDGELINE & FOOTHILLS
              Medium parallax factor (0.05x)
             ========================================================= */}
          <g
            style={{
              transform: `translate3d(${mouseOffset.x * 24}px, ${
                mouseOffset.y * 12
              }px, 0)`,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Mid Ridge Left Flank */}
            <polygon
              points="0,860 0,690 260,610 520,740 780,590 1020,720 1020,860"
              fill="url(#midRidgeLit)"
              fillOpacity="0.9"
            />
            {/* Mid Ridge Right Flank */}
            <polygon
              points="960,860 960,710 1220,580 1490,720 1730,620 1920,670 1920,860"
              fill="url(#midRidgeDark)"
              fillOpacity="0.9"
            />
            {/* Interlaced Ridge Crest Highlights */}
            <polyline
              points="0,690 260,610 520,740 780,590 1220,580 1490,720 1730,620 1920,670"
              fill="none"
              stroke="#bfdbfe"
              strokeWidth="2.5"
              strokeOpacity="0.6"
            />
          </g>

          {/* =========================================================
              LAYER 4: VALLEY DRIFTING CLOUDS & MIST (Opposite Drift)
             ========================================================= */}
          <g className="animate-mist-fast opacity-90">
            <path
              d="M-300,740 Q220,680 720,730 T1680,690 T2300,750 L2300,910 L-300,910 Z"
              fill="url(#mistGrad2)"
            />
          </g>

          {/* =========================================================
              LAYER 5: FOREGROUND CHUMBONG RIDGE SILHOUETTE
              Full grounding parallax factor (0.08x)
             ========================================================= */}
          <g
            style={{
              transform: `translate3d(${mouseOffset.x * 38}px, ${
                mouseOffset.y * 16
              }px, 0)`,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Chumbong Ridge Contour framing the lower canvas */}
            <path
              d="M0,1080 L0,840 Q180,780 420,820 T960,770 T1500,810 Q1740,770 1920,830 L1920,1080 Z"
              fill="url(#foregroundRidge)"
            />
            {/* Subtle Top Skyline Rim Lighting on Front Ridge */}
            <path
              d="M0,840 Q180,780 420,820 T960,770 T1500,810 Q1740,770 1920,830"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="3"
              strokeOpacity="0.45"
            />
          </g>

          {/* Bottom Atmosphere Fade (soft blend into the white page) */}
          <rect
            y="940"
            width="1920"
            height="140"
            fill="url(#himalayanSky)"
            fillOpacity="0.25"
          />
        </svg>
      </div>

      {/* =========================================================================
          SYMMETRICAL HERO CONTENT OVERLAY (STRICTLY REQUESTED ELEMENTS ONLY)
          1. Hook Line
          2. Sub Lines
          3. Two CTA Buttons: [ Check Availability ] [ View Rooms ]
          4. Google Reviews Strip
         ========================================================================= */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center pt-16 sm:pt-20">
        {/* Exact Layout Hook Line */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-slate-950 mb-6 max-w-4xl leading-[1.15] font-serif filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)]">
          Experience the Himalayas up close, right from your morning tea.
        </h1>

        {/* Exact Layout Sub-Lines */}
        <p className="text-base sm:text-lg md:text-xl text-slate-800 max-w-3xl leading-relaxed mb-10 font-serif filter drop-shadow-[0_1px_8px_rgba(255,255,255,0.95)]">
          Out on this ridge in Pelling, Kanchenjunga doesn&apos;t feel like a
          distant backdrop. She sits right in front of you, shedding her coat of
          morning mist and catching the first amber light while the rest of the
          valley is still asleep.
        </p>

        {/* Symmetrical Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-60 py-4 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(37,99,235,0.38)] border border-blue-500/80 transition-all duration-300 cursor-pointer hover:shadow-[0_14px_36px_rgba(37,99,235,0.48)] flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-4 h-4 text-white" />
            <span>Check Availability</span>
          </button>

          <a
            href="#rooms"
            className="w-full sm:w-60 py-4 px-8 rounded-2xl border border-blue-300 bg-white/95 hover:bg-blue-50/90 active:scale-95 text-blue-900 font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_6px_20px_rgba(30,58,138,0.08)] hover:border-blue-400 flex items-center justify-center gap-2"
          >
            <BedDouble className="w-4 h-4 text-blue-600" />
            <span>View Rooms</span>
          </a>
        </div>

        {/* Verified Google Reviews Rating Strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/90 shadow-[0_8px_25px_rgba(30,58,138,0.08)] text-xs sm:text-sm text-slate-800">
          <div className="flex items-center gap-1.5">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-blue-600 text-blue-600"
                />
              ))}
            </div>
            <span className="font-bold text-slate-950 ml-1">4.2 / 5.0</span>
          </div>

          <span className="text-blue-300 hidden sm:inline">•</span>
          <span className="font-medium text-slate-700">
            100+ Verified Traveler Reviews
          </span>

          <span className="text-blue-300 hidden sm:inline">•</span>
          <a
            href={gmapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 font-semibold underline decoration-blue-400 underline-offset-4 flex items-center gap-1 transition-colors"
          >
            <span>Verified on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
