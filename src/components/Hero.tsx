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
  // Mouse position normalized (-1 to 1) for physics-based parallax window view
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
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-screen max-w-[100vw] overflow-hidden flex flex-col justify-end items-center bg-white select-none pb-12 sm:pb-16"
    >
      {/* =========================================================================
          FULL 100VH SVG MOUNTAIN MOTION ANIMATION (SHADES OF BLUE & ICY TIPS)
          - Spans the complete 100vh canvas from summit sky to basecamp slopes
          - Pure shades of blue, white, and icy cyan (zero brown, zero gray patch)
          - Razor-sharp icy snow-caps & tips with breathing luminescence
          - Multi-altitude moving clouds (high wisps, volumetric cumulus, valley mist)
          - Natural interactive mouse-tracking parallax depth
         ========================================================================= */}

      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <defs>
            {/* Morning High-Altitude Sky: Soft Azure-to-Ice Dawn */}
            <linearGradient
              id="alpineSkyBlue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="35%" stopColor="#dbeafe" />
              <stop offset="70%" stopColor="#eff6ff" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            {/* Subtle Amber Morning Radiance behind Central Kanchenjunga */}
            <radialGradient
              id="summitDawnGlow"
              cx="0.5"
              cy="0.22"
              r="0.48"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.5" />
              <stop offset="35%" stopColor="#dbeafe" stopOpacity="0.25" />
              <stop offset="70%" stopColor="#eff6ff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>

            {/* =========================================================
                ICE & SNOW GRADIENTS FOR SUMMIT PEAKS
               ========================================================= */}
            {/* Sunlit Glacial Ice-Tip */}
            <linearGradient
              id="iceTipLit"
              x1="0.2"
              y1="0"
              x2="0.8"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#f0fdff" />
              <stop offset="65%" stopColor="#cffafe" />
              <stop offset="100%" stopColor="#a5f3fc" />
            </linearGradient>

            {/* Shaded Glacial Ice */}
            <linearGradient
              id="iceTipShade"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#cffafe" />
              <stop offset="40%" stopColor="#7dd3fc" />
              <stop offset="80%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* =========================================================
                SHADES OF BLUE FOR MOUNTAIN ROCK DETAILING (NO BROWN)
               ========================================================= */}
            {/* Sunlit Rock Ridge: Vibrant Mountain Blue / Cobalt */}
            <linearGradient
              id="rockBlueLit"
              x1="0.3"
              y1="0"
              x2="0.7"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="35%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            {/* Shaded Rock Ridge: Deep Alpine Navy / Midnight Cobalt */}
            <linearGradient
              id="rockBlueDark"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="40%" stopColor="#1e3a8a" />
              <stop offset="75%" stopColor="#172554" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Secondary Blue Strata (Crags & Couloirs) */}
            <linearGradient
              id="rockBlueStrata"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>

            {/* Midground Ridge Slopes: Rich Royal Blue-Navy */}
            <linearGradient
              id="midRidgeBlue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="35%" stopColor="#2563eb" />
              <stop offset="70%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#172554" />
            </linearGradient>

            {/* Seamless Lower Valley Fade into Pure White (Zero Gray Patch) */}
            <linearGradient
              id="valleyBlueClean"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#2563eb" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#93c5fd" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Volumetric Cloud Gradients */}
            <linearGradient
              id="cloudShadeWhite"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#f0f9ff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.65" />
            </linearGradient>

            <linearGradient
              id="cloudShadeAmber"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient
              id="mistDriftGrad"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="25%" stopColor="#e0f2fe" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#f0f9ff" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Summit Specular Filter */}
            <filter
              id="summitIceGlow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              colorInterpolationFilters="linearRGB"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Cloud Soft Shadow Filter */}
            <filter id="cloudSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="7" />
              <feOffset dx="0" dy="7" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.08" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Full-Height Alpine Sky (Spans 100vh) */}
          <rect width="1920" height="1080" fill="url(#alpineSkyBlue)" />

          {/* 2. Morning Sun Dawn Radiance behind High Summits */}
          <circle cx="960" cy="240" r="440" fill="url(#summitDawnGlow)" />

          {/* =========================================================
              3. HIGH-ALTITUDE MOVING CLOUDS (DRIFTING SLOW)
             ========================================================= */}
          <g className="animate-cloud-slow opacity-85">
            <g filter="url(#cloudSoftShadow)" transform="translate(160, 60)">
              <ellipse cx="260" cy="90" rx="145" ry="44" fill="url(#cloudShadeWhite)" />
              <ellipse cx="340" cy="75" rx="115" ry="54" fill="url(#cloudShadeWhite)" />
              <ellipse cx="190" cy="95" rx="95" ry="38" fill="url(#cloudShadeWhite)" />
              <ellipse cx="420" cy="98" rx="85" ry="34" fill="url(#cloudShadeWhite)" />
            </g>

            <g filter="url(#cloudSoftShadow)" transform="translate(1140, 90)">
              <ellipse cx="240" cy="85" rx="155" ry="46" fill="url(#cloudShadeAmber)" />
              <ellipse cx="320" cy="68" rx="125" ry="56" fill="url(#cloudShadeWhite)" />
              <ellipse cx="160" cy="90" rx="98" ry="40" fill="url(#cloudShadeWhite)" />
              <ellipse cx="410" cy="94" rx="88" ry="34" fill="url(#cloudShadeWhite)" />
            </g>
          </g>

          {/* =========================================================
              4. CONTINUOUS VOLUMETRIC CUMULUS CLOUDS (DRIFTING RIGHT)
             ========================================================= */}
          <g className="animate-cloud-continuous opacity-90">
            <g filter="url(#cloudSoftShadow)" transform="translate(700, 140)">
              <ellipse cx="120" cy="70" rx="90" ry="40" fill="url(#cloudShadeWhite)" />
              <ellipse cx="185" cy="55" rx="100" ry="48" fill="url(#cloudShadeAmber)" />
              <ellipse cx="255" cy="62" rx="85" ry="42" fill="url(#cloudShadeWhite)" />
              <ellipse cx="320" cy="72" rx="70" ry="34" fill="url(#cloudShadeWhite)" />
            </g>

            <g filter="url(#cloudSoftShadow)" transform="translate(-60, 170)">
              <ellipse cx="160" cy="65" rx="115" ry="44" fill="url(#cloudShadeWhite)" />
              <ellipse cx="245" cy="50" rx="130" ry="54" fill="url(#cloudShadeWhite)" />
              <ellipse cx="340" cy="62" rx="100" ry="42" fill="url(#cloudShadeAmber)" />
            </g>

            <g filter="url(#cloudSoftShadow)" transform="translate(1460, 150)">
              <ellipse cx="140" cy="60" rx="105" ry="40" fill="url(#cloudShadeWhite)" />
              <ellipse cx="215" cy="48" rx="115" ry="50" fill="url(#cloudShadeWhite)" />
              <ellipse cx="295" cy="62" rx="90" ry="38" fill="url(#cloudShadeAmber)" />
            </g>
          </g>

          {/* =========================================================================
              5. THE KANCHENJUNGA RANGE (8,586m) - DETAILED IN SHADES OF BLUE & ICY TIPS
              - Soaring icy crystalline peaks reaching into the upper viewport
              - Rock strata, couloirs, and ridges textured in rich shades of blue
              - Zero brown
              - Mouse parallax depth
             ========================================================================= */}
          <g
            style={{
              transform: `translate3d(${mouseOffset.x * 12}px, ${
                mouseOffset.y * 6
              }px, 0)`,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* -----------------------------------------------------------
                LEFT FLANK SUMMITS (Yalung Kang & Kabru Massif: x=120 to 740)
               ----------------------------------------------------------- */}
            {/* Western Satellite Ridge (Shades of Blue) */}
            <polygon
              points="120,780 290,420 440,780"
              fill="url(#rockBlueLit)"
            />
            <polygon
              points="290,420 440,780 390,780"
              fill="url(#rockBlueDark)"
            />
            {/* Deep Blue Rock Strata Couloirs */}
            <polyline
              points="290,420 280,520 250,610 210,780"
              stroke="#0f172a"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <polyline
              points="290,420 320,530 350,640 370,780"
              stroke="#1e3a8a"
              strokeWidth="3.5"
              fill="none"
            />

            {/* Icy Tip: Western Satellite Summit */}
            <polygon
              points="210,510 290,420 340,490 310,480 270,510 250,490"
              fill="url(#iceTipLit)"
              filter="url(#summitIceGlow)"
            />
            <polygon
              points="290,420 340,490 320,490 290,440"
              fill="url(#iceTipShade)"
            />

            {/* Secondary Left Pyramid (Kabru North: Peak at y=320) */}
            <polygon
              points="380,780 570,320 740,780"
              fill="url(#rockBlueLit)"
            />
            <polygon
              points="570,320 740,780 660,780"
              fill="url(#rockBlueDark)"
            />
            <polygon
              points="510,480 570,440 620,490 560,510"
              fill="url(#rockBlueStrata)"
            />
            <polygon
              points="480,580 570,540 650,600 550,620"
              fill="url(#rockBlueDark)"
            />
            <polyline
              points="570,320 540,430 490,560 440,780"
              stroke="#0f172a"
              strokeWidth="5"
              fill="none"
            />
            <polyline
              points="570,320 600,440 640,580 680,780"
              stroke="#1e3a8a"
              strokeWidth="4"
              fill="none"
            />

            {/* Icy Snow-Cap & Tips: Kabru Summit */}
            <polygon
              points="480,430 570,320 640,410 610,400 580,440 540,400 510,430"
              fill="url(#iceTipLit)"
              filter="url(#summitIceGlow)"
            />
            <polygon
              points="570,320 640,410 620,410 575,340"
              fill="url(#iceTipShade)"
            />
            {/* Glacial Couloir (Snow Chute) */}
            <polygon
              points="550,410 565,470 555,540 540,480"
              fill="#e0f2fe"
              opacity="0.9"
            />

            {/* -----------------------------------------------------------
                CENTRAL MASSIVE KANCHENJUNGA MAIN SUMMIT (8,586m)
                Soars majestically to (x: 960, y: 190) in upper viewport!
               ----------------------------------------------------------- */}
            <polygon
              points="640,820 960,190 960,820"
              fill="url(#rockBlueLit)"
            />
            <polygon
              points="960,190 1280,820 960,820"
              fill="url(#rockBlueDark)"
            />

            {/* Rock Strata & Crags on Central Face (Shades of Blue) */}
            <polygon
              points="840,410 960,360 960,450 870,470"
              fill="url(#rockBlueStrata)"
            />
            <polygon
              points="960,360 1080,420 1040,480 960,450"
              fill="#0f172a"
            />
            <polygon
              points="780,540 960,480 960,590 820,610"
              fill="url(#rockBlueLit)"
            />
            <polygon
              points="960,480 1140,560 1100,630 960,590"
              fill="url(#rockBlueDark)"
            />

            {/* Central Razor Spine & Ridges */}
            <polyline
              points="960,190 955,340 965,490 960,650 960,820"
              stroke="#020617"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <polyline
              points="960,190 880,380 790,560 710,820"
              stroke="#1e3a8a"
              strokeWidth="4"
              fill="none"
            />
            <polyline
              points="960,190 1040,390 1130,580 1210,820"
              stroke="#0f172a"
              strokeWidth="4.5"
              fill="none"
            />

            {/* GLISTENING ICY TIPS & SUMMIT SNOW-CAP (MAIN PEAK) */}
            <polygon
              points="820,380 960,190 960,340 920,320 890,370 850,350"
              fill="url(#iceTipLit)"
              className="animate-summit-glow"
            />
            <polygon
              points="960,190 1090,370 1050,360 1020,390 980,340 960,340"
              fill="url(#iceTipShade)"
            />

            {/* Gleaming Razor Crest Tip with Ice Glow */}
            <polygon
              points="960,190 930,240 960,235 990,240"
              fill="#ffffff"
              filter="url(#summitIceGlow)"
              className="animate-summit-glow"
            />

            {/* Glacial Chutes cascading down the blue rock face */}
            <polygon
              points="910,340 930,420 915,510 895,430"
              fill="#ffffff"
              opacity="0.95"
            />
            <polygon
              points="980,350 1010,440 995,530 975,430"
              fill="#bae6fd"
              opacity="0.85"
            />
            <polygon
              points="860,460 885,550 865,630 845,540"
              fill="#f0f9ff"
              opacity="0.9"
            />

            {/* -----------------------------------------------------------
                RIGHT FLANK SUMMITS (Pandim & Siniolchu: x=1140 to 1820)
               ----------------------------------------------------------- */}
            <polygon
              points="1140,780 1330,290 1520,780"
              fill="url(#rockBlueLit)"
            />
            <polygon
              points="1330,290 1520,780 1440,780"
              fill="url(#rockBlueDark)"
            />
            <polyline
              points="1330,290 1300,420 1260,560 1220,780"
              stroke="#1e3a8a"
              strokeWidth="4"
              fill="none"
            />
            <polyline
              points="1330,290 1370,440 1410,590 1460,780"
              stroke="#0f172a"
              strokeWidth="4.5"
              fill="none"
            />

            {/* Icy Snow-Cap: Pandim Peak */}
            <polygon
              points="1260,400 1330,290 1410,380 1370,370 1340,410 1300,370"
              fill="url(#iceTipLit)"
              filter="url(#summitIceGlow)"
            />
            <polygon
              points="1330,290 1410,380 1380,380 1335,310"
              fill="url(#iceTipShade)"
            />

            {/* Far Eastern Needle Peak (Siniolchu) */}
            <polygon
              points="1420,780 1610,370 1800,780"
              fill="url(#rockBlueLit)"
            />
            <polygon
              points="1610,370 1800,780 1730,780"
              fill="url(#rockBlueDark)"
            />
            <polygon
              points="1540,460 1610,370 1670,440 1640,430 1610,470 1575,440"
              fill="url(#iceTipLit)"
              filter="url(#summitIceGlow)"
            />
            <polygon
              points="1610,370 1670,440 1650,440 1615,390"
              fill="url(#iceTipShade)"
            />
          </g>

          {/* =========================================================
              6. ATMOSPHERIC MID-PASS MIST DRIFT (ANIMATED LAYER)
             ========================================================= */}
          <g className="animate-mist-slow opacity-80">
            <path
              d="M-200,560 Q260,510 740,550 T1680,520 T2200,570 L2200,680 L-200,680 Z"
              fill="url(#mistDriftGrad)"
            />
          </g>

          {/* =========================================================
              7. MIDGROUND SINGALILA & PELLING FOOTHILL RIDGES
              - Textured in shades of blue
              - Parallax factor (0.05x)
             ========================================================= */}
          <g
            style={{
              transform: `translate3d(${mouseOffset.x * 20}px, ${
                mouseOffset.y * 10
              }px, 0)`,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <polygon
              points="0,880 0,660 280,570 580,690 860,560 1050,680 1050,880"
              fill="url(#midRidgeBlue)"
              fillOpacity="0.95"
            />
            <polygon
              points="980,880 980,670 1260,550 1520,680 1760,590 1920,650 1920,880"
              fill="url(#rockBlueDark)"
              fillOpacity="0.95"
            />
            <polyline
              points="0,660 280,570 580,690 860,560 1260,550 1520,680 1760,590 1920,650"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="2.5"
              strokeOpacity="0.75"
            />
          </g>

          {/* =========================================================
              8. LOW DRIFTING VALLEY CLOUDS (ANIMATED LAYER)
             ========================================================= */}
          <g className="animate-cloud-opposite opacity-85">
            <path
              d="M-300,670 Q240,620 740,660 T1660,630 T2280,680 L2280,780 L-300,780 Z"
              fill="url(#mistDriftGrad)"
            />
          </g>

          {/* =========================================================
              9. CLEAN LOWER VALLEY SLOPE (NO GRAY PATCH)
              - Softly dissolves into pure white at 100vh base
             ========================================================= */}
          <path
            d="M0,1080 L0,780 Q240,730 520,770 T1120,720 T1680,760 Q1820,730 1920,770 L1920,1080 Z"
            fill="url(#valleyBlueClean)"
          />

          {/* 10. Delicate Panoramic Picture-Window Diagonal Sheen */}
          <polygon
            points="280,0 440,0 120,1080 0,1080"
            fill="#ffffff"
            className="animate-window-reflection"
          />
          <polygon
            points="780,0 960,0 460,1080 320,1080"
            fill="#ffffff"
            className="animate-window-reflection"
          />
        </svg>
      </div>

      {/* Picture-Window Architectural Perimeter */}
      <div className="absolute inset-2 sm:inset-4 lg:inset-6 rounded-3xl sm:rounded-[2.5rem] border border-blue-200/40 pointer-events-none shadow-[inset_0_0_80px_rgba(255,255,255,0.7)]" />

      {/* =========================================================================
          CONTENT OVERLAY: STARTS FROM MID-MOUNTAIN (AS REQUESTED)
          - Upper half is open, showcasing the soaring icy summits and moving clouds
          - Starts at mid-mountain down with clean readability and bilateral symmetry
          - Hook line -> Sub lines -> Two buttons -> Small subscript Google rating
         ========================================================================= */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 text-center flex flex-col items-center">
        {/* Soft Glassmorphic Frosted Reading Surface */}
        <div className="w-full bg-white/75 backdrop-blur-md rounded-3xl p-6 sm:p-9 border border-white/90 shadow-[0_20px_50px_-10px_rgba(30,58,138,0.08),0_0_0_1px_rgba(255,255,255,0.95)_inset]">
          {/* Exact Layout Hook Line */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-950 mb-4 leading-[1.18] font-serif">
            Experience the Himalayas up close, right from your morning tea.
          </h1>

          {/* Exact Layout Sub-Lines */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed mb-8 font-serif">
            Out on this ridge in Pelling, Kanchenjunga doesn&apos;t feel like a
            distant backdrop. She sits right in front of you, shedding her coat
            of morning mist and catching the first amber light while the rest of
            the valley is still asleep.
          </p>

          {/* Symmetrical Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-56 py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs uppercase tracking-widest shadow-[0_8px_25px_rgba(37,99,235,0.35)] border border-blue-500/80 transition-all duration-300 cursor-pointer hover:shadow-[0_12px_32px_rgba(37,99,235,0.45)] flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-white" />
              <span>Check Availability</span>
            </button>

            <a
              href="#rooms"
              className="w-full sm:w-56 py-3.5 px-6 rounded-2xl border border-blue-300 bg-white hover:bg-blue-50 active:scale-95 text-blue-900 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:border-blue-400 flex items-center justify-center gap-2"
            >
              <BedDouble className="w-4 h-4 text-blue-600" />
              <span>View Rooms</span>
            </a>
          </div>

          {/* Small Subscript Google Rating Mention (As Requested) */}
          <div className="mt-4 pt-2">
            <a
              href={gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-700 transition-colors cursor-pointer group font-serif"
            >
              <div className="flex text-blue-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <span className="font-semibold text-slate-900 ml-0.5">
                4.2 / 5.0 on Google Maps
              </span>
              <span className="text-slate-400">•</span>
              <span className="group-hover:underline">
                100+ verified traveler reviews
              </span>
              <ExternalLink className="w-2.5 h-2.5 text-blue-600 ml-0.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
