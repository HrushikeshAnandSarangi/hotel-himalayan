"use client";

import React, { useState } from "react";
import {
  Star,
  ExternalLink,
  CalendarCheck,
  BedDouble,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenBookingWithRoom?: (roomName: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Normalized mouse coordinate (-1 to 1) for physics-based parallax window view
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
      className="relative h-screen w-screen max-w-[100vw] overflow-hidden flex flex-col justify-end bg-white select-none pb-12 sm:pb-16"
    >
      {/* =========================================================================
          WINDOW & CANVAS PANORAMIC VIEW:
          Looking out from Hotel Himalayan across the Kanchenjunga Range
          - High soaring icy peaks in the upper sky
          - Rich earthy brown rock detailing & couloirs
          - Multi-altitude moving clouds (high, mid, low)
          - Bottom smoothly dissolves into pure white (NO gray patch)
         ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <defs>
            {/* Morning Alpine Sky: Fresh crisp azure-to-white dawn */}
            <linearGradient
              id="alpineSky"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="30%" stopColor="#eff6ff" />
              <stop offset="65%" stopColor="#f8fbff" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            {/* Morning Sun Disk behind the high peaks */}
            <radialGradient
              id="sunAura"
              cx="0.5"
              cy="0.28"
              r="0.4"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#fef3c7" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#e0f2fe" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>

            {/* ICY PEAK SNOW GRADIENTS: Crystalline glaciers and sharp icy summits */}
            <linearGradient
              id="icePeakLit"
              x1="0.3"
              y1="0"
              x2="0.7"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#f0f9ff" />
              <stop offset="70%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>

            <linearGradient
              id="icePeakShaded"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="40%" stopColor="#bae6fd" />
              <stop offset="75%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            {/* MOUNTAIN ROCK BODY GRADIENTS: Rich earthy brown, slate rock strata */}
            {/* Rock Sunlit Face (Earthy Warm Brown / Sienna Stone) */}
            <linearGradient
              id="rockFaceLit"
              x1="0.2"
              y1="0"
              x2="0.8"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#785947" />
              <stop offset="30%" stopColor="#5c4335" />
              <stop offset="70%" stopColor="#453229" />
              <stop offset="100%" stopColor="#35261f" />
            </linearGradient>

            {/* Rock Shaded Face (Cool Deep Slate-Brown / Umber with Blue Tint) */}
            <linearGradient
              id="rockFaceShaded"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#4a3b34" />
              <stop offset="35%" stopColor="#382c26" />
              <stop offset="75%" stopColor="#261e1a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            {/* Midground Ridge: Rocky slopes and alpine foothills */}
            <linearGradient
              id="midRidgeRock"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#634c3e" />
              <stop offset="40%" stopColor="#4b392f" />
              <stop offset="80%" stopColor="#33251e" />
              <stop offset="100%" stopColor="#221813" />
            </linearGradient>

            {/* Lower Foothills & Slopes (Gentle earthy ridge dissolving to white) */}
            <linearGradient
              id="lowerSlopeGrad"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#42342c" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#5a493f" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#94a3b8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* MOVING CLOUD GRADIENTS: Volumetric, soft, ethereal */}
            <linearGradient
              id="cloudHighGrad"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#f8fafc" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient
              id="cloudMidGrad"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#f1f5f9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.1" />
            </linearGradient>

            {/* Summit Specular Filter */}
            <filter
              id="iceSparkle"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              colorInterpolationFilters="linearRGB"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Canvas Background Sky */}
          <rect width="1920" height="1080" fill="url(#alpineSky)" />

          {/* Morning Sun Glow in upper atmosphere */}
          <circle cx="960" cy="240" r="420" fill="url(#sunAura)" />

          {/* =========================================================
              LAYER 1: HIGH MOVING CLOUDS (High Cirrus & Altocumulus)
              Drifting gently across the upper sky behind peaks
             ========================================================= */}
          <g className="animate-cloud-slow">
            {/* High Cloud Formation Left */}
            <path
              d="M120,160 Q170,120 230,140 Q290,110 360,135 Q420,115 470,150 Q520,135 570,165 Q450,195 330,190 Q200,195 120,160 Z"
              fill="url(#cloudHighGrad)"
            />
            {/* High Cloud Formation Right */}
            <path
              d="M1350,140 Q1410,105 1480,125 Q1540,95 1620,120 Q1690,100 1750,135 Q1810,120 1860,155 Q1740,185 1600,180 Q1460,185 1350,140 Z"
              fill="url(#cloudHighGrad)"
            />
          </g>

          {/* =========================================================
              LAYER 2: KANCHENJUNGA MASSIF (High Soaring Snowy Peaks)
              Dominating the upper half of the window canvas!
              - Rocky brown bodies with jagged crags
              - Gleaming icy tips and snow couloirs
              - Interactive subtle parallax depth
             ========================================================= */}
          <g
            style={{
              transform: `translate3d(${mouseOffset.x * 10}px, ${
                mouseOffset.y * 5
              }px, 0)`,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* ---------------- FAR LEFT PEAK (Kabru Range) ---------------- */}
            {/* Rock Base */}
            <polygon
              points="80,680 280,310 440,680"
              fill="url(#rockFaceLit)"
            />
            <polygon
              points="280,310 440,680 390,680"
              fill="url(#rockFaceShaded)"
            />
            {/* Icy Tip (Snow Cap & Couloir) */}
            <polygon
              points="230,400 280,310 325,400 295,430 280,390 260,420"
              fill="url(#icePeakLit)"
              filter="url(#iceSparkle)"
            />
            <polygon
              points="280,310 325,400 305,390"
              fill="url(#icePeakShaded)"
            />

            {/* ---------------- MID-LEFT PEAK (Pandim Peak) ---------------- */}
            {/* Rock Base */}
            <polygon
              points="320,680 540,240 730,680"
              fill="url(#rockFaceLit)"
            />
            <polygon
              points="540,240 730,680 630,680"
              fill="url(#rockFaceShaded)"
            />
            {/* Rock Strata Details */}
            <polyline
              points="480,360 540,390 510,470 560,510 520,600"
              fill="none"
              stroke="#2e211a"
              strokeWidth="3"
              strokeOpacity="0.7"
            />
            {/* Icy Tip & Glacial Ridge */}
            <polygon
              points="475,340 540,240 605,345 565,370 540,330 510,365"
              fill="url(#icePeakLit)"
              filter="url(#iceSparkle)"
            />
            <polygon
              points="540,240 605,345 580,335"
              fill="url(#icePeakShaded)"
            />
            {/* Glacial Chute Running down */}
            <polygon
              points="535,330 545,330 560,460 550,460"
              fill="#ffffff"
              fillOpacity="0.75"
            />

            {/* ---------------- CENTRAL KANCHENJUNGA SUMMIT (8,586m) ---------------- */}
            {/* Massive Rocky Mountain Flanks (Brown Earthy Stone) */}
            <polygon
              points="640,700 960,140 960,700"
              fill="url(#rockFaceLit)"
            />
            <polygon
              points="960,140 1280,700 960,700"
              fill="url(#rockFaceShaded)"
            />
            {/* Rock Crags & Crevices */}
            <polyline
              points="840,320 960,360 900,480 960,540 880,680"
              fill="none"
              stroke="#261b15"
              strokeWidth="4"
              strokeOpacity="0.8"
            />
            <polyline
              points="960,360 1060,420 1010,510 1100,600 1040,690"
              fill="none"
              stroke="#1a1410"
              strokeWidth="4"
              strokeOpacity="0.8"
            />

            {/* Central Towering Icy Tip (Pure Snow & Crystalline Glaciers) */}
            <polygon
              points="870,270 960,140 1050,270 990,305 960,260 920,300"
              fill="url(#icePeakLit)"
              filter="url(#iceSparkle)"
              className="animate-summit-glow"
            />
            <polygon
              points="960,140 1050,270 1015,260"
              fill="url(#icePeakShaded)"
            />

            {/* Glacial Couloirs & Snow Tongues */}
            <polygon
              points="955,260 965,260 985,420 970,420"
              fill="#ffffff"
              fillOpacity="0.85"
            />
            <polygon
              points="915,295 930,300 920,390 910,385"
              fill="#e0f2fe"
              fillOpacity="0.8"
            />
            <polygon
              points="995,300 1010,295 1025,410 1010,410"
              fill="#bae6fd"
              fillOpacity="0.8"
            />

            {/* ---------------- MID-RIGHT PEAK (Siniolchu) ---------------- */}
            {/* Rock Base */}
            <polygon
              points="1190,680 1380,250 1580,680"
              fill="url(#rockFaceLit)"
            />
            <polygon
              points="1380,250 1580,680 1480,680"
              fill="url(#rockFaceShaded)"
            />
            {/* Icy Tip */}
            <polygon
              points="1320,350 1380,250 1445,355 1410,375 1380,340 1350,370"
              fill="url(#icePeakLit)"
              filter="url(#iceSparkle)"
            />
            <polygon
              points="1380,250 1445,355 1420,345"
              fill="url(#icePeakShaded)"
            />

            {/* ---------------- FAR RIGHT PEAK (Simvo) ---------------- */}
            {/* Rock Base */}
            <polygon
              points="1480,680 1660,330 1840,680"
              fill="url(#rockFaceLit)"
            />
            <polygon
              points="1660,330 1840,680 1760,680"
              fill="url(#rockFaceShaded)"
            />
            {/* Icy Tip */}
            <polygon
              points="1610,415 1660,330 1715,415 1680,440 1660,405 1635,435"
              fill="url(#icePeakLit)"
              filter="url(#iceSparkle)"
            />
            <polygon
              points="1660,330 1715,415 1690,405"
              fill="url(#icePeakShaded)"
            />
          </g>

          {/* =========================================================
              LAYER 3: MID-ALTITUDE MOVING CLOUDS (Across Mountain Ridge)
              Fluffy mountain cumulus drifting across mid-elevations
             ========================================================= */}
          <g className="animate-cloud-med">
            {/* Cloud Puffs 1 (Drifting across left ridge) */}
            <path
              d="M-60,360 Q10,310 80,330 Q150,290 240,320 Q320,295 390,335 Q460,310 520,350 Q420,390 300,385 Q170,390 -60,360 Z"
              fill="url(#cloudMidGrad)"
            />
            {/* Cloud Puffs 2 (Drifting across right pass) */}
            <path
              d="M1380,340 Q1450,290 1530,315 Q1610,280 1700,310 Q1780,285 1850,330 Q1920,310 1980,350 Q1860,390 1720,385 Q1560,390 1380,340 Z"
              fill="url(#cloudMidGrad)"
            />
          </g>

          {/* =========================================================
              LAYER 4: MIDGROUND ROCKY RIDGE & FOOTHILLS (Singalila Slopes)
              Rich earthy brown and slate strata with intermediate parallax
             ========================================================= */}
          <g
            style={{
              transform: `translate3d(${mouseOffset.x * 20}px, ${
                mouseOffset.y * 10
              }px, 0)`,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Mid Ridge Left Slopes */}
            <polygon
              points="0,820 0,540 280,450 560,570 840,460 1100,580 1100,820"
              fill="url(#midRidgeRock)"
              fillOpacity="0.95"
            />
            {/* Mid Ridge Right Slopes */}
            <polygon
              points="1020,820 1020,570 1280,450 1540,580 1780,470 1920,530 1920,820"
              fill="url(#rockFaceShaded)"
              fillOpacity="0.95"
            />
            {/* Crest Ridge Line Highlights in Earthy Slate */}
            <polyline
              points="0,540 280,450 560,570 840,460 1280,450 1540,580 1780,470 1920,530"
              fill="none"
              stroke="#8c6f5d"
              strokeWidth="2.5"
              strokeOpacity="0.6"
            />
          </g>

          {/* =========================================================
              LAYER 5: LOW VALLEY MIST & MOVING CLOUD WISP
              Floating gracefully across the mid-section
             ========================================================= */}
          <g className="animate-cloud-fast opacity-85">
            <path
              d="M-200,520 Q250,470 700,510 T1600,480 T2200,530 L2200,640 L-200,640 Z"
              fill="url(#cloudMidGrad)"
            />
          </g>

          {/* =========================================================
              LAYER 6: LOWER CHUMBONG SLOPES (Dissolving gently into White)
              No dark gray patch! Transitions directly to pure white!
             ========================================================= */}
          <path
            d="M0,1080 L0,660 Q220,590 520,640 T1040,590 T1580,630 Q1800,590 1920,650 L1920,1080 Z"
            fill="url(#lowerSlopeGrad)"
          />

          {/* =========================================================
              CLEAN BOTTOM FADE TO PURE WHITE:
              Guarantees the bottom is 100% pure white (#ffffff)
              seamlessly meeting the About section!
             ========================================================= */}
          <rect
            y="720"
            width="1920"
            height="360"
            fill="url(#lowerSlopeGrad)"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* =========================================================================
          WINDOW FRAME ACCENT:
          Subtle panoramic picture-window sheen giving the visual sensation
          of viewing Mt. Kanchenjunga through the luxury resort window
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none border-[6px] sm:border-[10px] border-white/60 shadow-[inset_0_0_80px_rgba(255,255,255,0.8)] z-10" />

      {/* Strong Pure White Bottom Fade: Seamless transition into the page */}
      <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-56 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none z-10" />

      {/* =========================================================================
          HERO CONTENT OVERLAY:
          Starts from the MID of the mountain down!
          - The icy mountain peaks tower freely in the upper window.
          - Text floats with elegant readability over the mid slopes.
          - Dual CTA buttons.
          - Google review as a subtle small subscript directly below buttons!
         ========================================================================= */}
      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6">
        {/* Soft Glassmorphic Readability Island */}
        <div className="p-6 sm:p-9 rounded-3xl bg-white/75 backdrop-blur-md border border-white/90 shadow-[0_16px_45px_rgba(30,58,138,0.06)] flex flex-col items-center">
          {/* Exact Layout Hook Line */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-slate-950 mb-4 max-w-3xl leading-[1.18] font-serif">
            Experience the Himalayas up close, right from your morning tea.
          </h1>

          {/* Exact Layout Sub-Lines */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl leading-relaxed mb-7 font-serif">
            Out on this ridge in Pelling, Kanchenjunga doesn&apos;t feel like a
            distant backdrop. She sits right in front of you, shedding her coat of
            morning mist and catching the first amber light while the rest of the
            valley is still asleep.
          </p>

          {/* Symmetrical Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-56 py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_8px_25px_rgba(37,99,235,0.35)] border border-blue-500/80 transition-all duration-300 cursor-pointer hover:shadow-[0_12px_30px_rgba(37,99,235,0.45)] flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-white" />
              <span>Check Availability</span>
            </button>

            <a
              href="#rooms"
              className="w-full sm:w-56 py-3.5 px-6 rounded-2xl border border-blue-300 bg-white/95 hover:bg-blue-50/90 active:scale-95 text-blue-900 font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_4px_16px_rgba(30,58,138,0.06)] hover:border-blue-400 flex items-center justify-center gap-2"
            >
              <BedDouble className="w-4 h-4 text-blue-600" />
              <span>View Rooms</span>
            </a>
          </div>

          {/* Google Rating Subscript directly below the buttons in small */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-600 font-serif">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-blue-600 text-blue-600"
                />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.2 / 5.0</span>
            <span className="text-slate-400">•</span>
            <span>100+ Verified Reviews on</span>
            <a
              href={gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline font-semibold inline-flex items-center gap-1"
            >
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3 text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
