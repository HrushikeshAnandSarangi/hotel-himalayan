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
      className="relative h-screen w-full overflow-hidden flex flex-col justify-end items-center bg-[#f0f7ff] select-none pb-12 sm:pb-16"
    >
      {/* =========================================================================
          FULL 100VH MOUNTAIN & CLOUD ANIMATION
          - Fills the ENTIRE 100vh space from top to bottom (no empty white gaps)
          - Textured purely in SHADES OF BLUE with ICY TIPS (zero brown)
          - Multiple layers of moving clouds (high wisps, volumetric cumulus, valley mist)
          - Foothills and ridges extend all the way down to y=1080 (bottom of screen)
         ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            {/* Full 100vh Sky: Morning Dawn Blue Gradient */}
            <linearGradient
              id="fullSkyBlue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="35%" stopColor="#dbeafe" />
              <stop offset="70%" stopColor="#eff6ff" />
              <stop offset="100%" stopColor="#f8fbff" />
            </linearGradient>

            {/* Morning Sun Disc & Amber Radiance behind central Kanchenjunga */}
            <radialGradient
              id="sunAura"
              cx="0.5"
              cy="0.22"
              r="0.45"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.6" />
              <stop offset="30%" stopColor="#fed7aa" stopOpacity="0.3" />
              <stop offset="65%" stopColor="#dbeafe" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#eff6ff" stopOpacity="0" />
            </radialGradient>

            {/* =========================================================
                ICE & SNOW GRADIENTS FOR SUMMIT PEAKS
               ========================================================= */}
            <linearGradient
              id="iceCapLit"
              x1="0.2"
              y1="0"
              x2="0.8"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#f0fdff" />
              <stop offset="70%" stopColor="#cffafe" />
              <stop offset="100%" stopColor="#a5f3fc" />
            </linearGradient>

            <linearGradient
              id="iceCapShade"
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
                SHADES OF BLUE FOR MOUNTAIN ROCK FACES & CRAGS (NO BROWN)
               ========================================================= */}
            {/* Sunlit Rock Ridge: Brilliant Royal Blue / Cobalt */}
            <linearGradient
              id="rockCobaltLit"
              x1="0.3"
              y1="0"
              x2="0.7"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="35%" stopColor="#3b82f6" />
              <stop offset="70%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            {/* Shaded Rock Ridge: Deep Alpine Navy / Midnight Blue */}
            <linearGradient
              id="rockNavyDark"
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

            {/* Mountain Strata & Couloir Infill */}
            <linearGradient
              id="rockStrataBlue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="45%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>

            {/* Midground Ridge: Cobalt to Deep Navy */}
            <linearGradient
              id="midRidgeCobalt"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="30%" stopColor="#2563eb" />
              <stop offset="70%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#172554" />
            </linearGradient>

            {/* Foreground Slopes: Deep Midnight Blue extending to y=1080 */}
            <linearGradient
              id="foregroundDeepBlue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              colorInterpolation="linearRGB"
            >
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="35%" stopColor="#172554" />
              <stop offset="75%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#080e1a" />
            </linearGradient>

            {/* Volumetric Cloud Gradients */}
            <linearGradient
              id="cloudPureWhite"
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
              id="cloudAmberTouch"
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
              id="mistWaveGrad"
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

            {/* Cloud Soft Shadow */}
            <filter id="cloudShadowSoft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
              <feOffset dx="0" dy="8" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.08" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Full 100vh Sky Canvas */}
          <rect width="1920" height="1080" fill="url(#fullSkyBlue)" />

          {/* 2. Morning Sun Glow behind the Central Kanchenjunga Summit */}
          <circle cx="960" cy="220" r="420" fill="url(#sunAura)" />

          {/* =========================================================
              3. HIGH-ALTITUDE MOVING CLOUDS (DRIFTING SLOW)
             ========================================================= */}
          <g className="animate-cloud-slow opacity-85">
            <g filter="url(#cloudShadowSoft)" transform="translate(180, 50)">
              <ellipse cx="260" cy="90" rx="145" ry="44" fill="url(#cloudPureWhite)" />
              <ellipse cx="340" cy="75" rx="115" ry="54" fill="url(#cloudPureWhite)" />
              <ellipse cx="190" cy="95" rx="95" ry="38" fill="url(#cloudPureWhite)" />
              <ellipse cx="420" cy="98" rx="85" ry="34" fill="url(#cloudPureWhite)" />
            </g>

            <g filter="url(#cloudShadowSoft)" transform="translate(1120, 70)">
              <ellipse cx="240" cy="85" rx="155" ry="46" fill="url(#cloudAmberTouch)" />
              <ellipse cx="320" cy="68" rx="125" ry="56" fill="url(#cloudPureWhite)" />
              <ellipse cx="160" cy="90" rx="98" ry="40" fill="url(#cloudPureWhite)" />
              <ellipse cx="410" cy="94" rx="88" ry="34" fill="url(#cloudPureWhite)" />
            </g>
          </g>

          {/* =========================================================
              4. CONTINUOUS VOLUMETRIC CUMULUS CLOUDS (DRIFTING RIGHT)
             ========================================================= */}
          <g className="animate-cloud-continuous opacity-90">
            <g filter="url(#cloudShadowSoft)" transform="translate(680, 120)">
              <ellipse cx="120" cy="70" rx="90" ry="40" fill="url(#cloudPureWhite)" />
              <ellipse cx="185" cy="55" rx="100" ry="48" fill="url(#cloudAmberTouch)" />
              <ellipse cx="255" cy="62" rx="85" ry="42" fill="url(#cloudPureWhite)" />
              <ellipse cx="320" cy="72" rx="70" ry="34" fill="url(#cloudPureWhite)" />
            </g>

            <g filter="url(#cloudShadowSoft)" transform="translate(-70, 140)">
              <ellipse cx="160" cy="65" rx="115" ry="44" fill="url(#cloudPureWhite)" />
              <ellipse cx="245" cy="50" rx="130" ry="54" fill="url(#cloudPureWhite)" />
              <ellipse cx="340" cy="62" rx="100" ry="42" fill="url(#cloudAmberTouch)" />
            </g>

            <g filter="url(#cloudShadowSoft)" transform="translate(1440, 130)">
              <ellipse cx="140" cy="60" rx="105" ry="40" fill="url(#cloudPureWhite)" />
              <ellipse cx="215" cy="48" rx="115" ry="50" fill="url(#cloudPureWhite)" />
              <ellipse cx="295" cy="62" rx="90" ry="38" fill="url(#cloudAmberTouch)" />
            </g>
          </g>

          {/* =========================================================================
              5. THE HIGH KANCHENJUNGA ALPINE MASSIF (8,586m)
              - Textured in pure SHADES OF BLUE with ICY TIPS
              - Continuous mountain ridges spanning the width
              - Parallax tracking (0.02x)
             ========================================================================= */}
          <g
            style={{
              transform: `translate3d(${mouseOffset.x * 12}px, ${
                mouseOffset.y * 6
              }px, 0)`,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Western Satellite Flank (Yalung Kang & Kabru: x=0 to 760) */}
            <polygon
              points="0,850 0,620 180,510 320,380 480,560 620,340 780,620 780,850"
              fill="url(#rockCobaltLit)"
            />
            <polygon
              points="320,380 480,560 440,850 320,850"
              fill="url(#rockNavyDark)"
            />
            <polygon
              points="620,340 780,620 720,850 620,850"
              fill="url(#rockNavyDark)"
            />

            {/* Blue Strata Couloirs & Arrêtes on Western Ridge */}
            <polyline
              points="320,380 300,500 260,650 210,850"
              stroke="#0f172a"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
            />
            <polyline
              points="620,340 590,470 540,630 490,850"
              stroke="#0f172a"
              strokeWidth="5"
              fill="none"
            />
            <polyline
              points="620,340 650,490 690,660 730,850"
              stroke="#1e3a8a"
              strokeWidth="4"
              fill="none"
            />

            {/* Icy Snow-Cap on Kabru Summit (x=620, y=340) */}
            <polygon
              points="530,440 620,340 690,420 660,410 630,450 590,410 560,440"
              fill="url(#iceCapLit)"
            />
            <polygon
              points="620,340 690,420 670,420 625,360"
              fill="url(#iceCapShade)"
            />
            {/* Glacial Chute */}
            <polygon
              points="600,420 615,480 605,550 590,490"
              fill="#e0f2fe"
              opacity="0.9"
            />

            {/* Central Towering Kanchenjunga Main Summit (8,586m)
                Rises majestically to (x: 960, y: 150) */}
            <polygon
              points="580,880 960,150 960,880"
              fill="url(#rockCobaltLit)"
            />
            <polygon
              points="960,150 1340,880 960,880"
              fill="url(#rockNavyDark)"
            />

            {/* Intricate Blue Rock Strata on Central Face */}
            <polygon
              points="820,380 960,320 960,430 860,450"
              fill="url(#rockStrataBlue)"
            />
            <polygon
              points="960,320 1100,390 1060,460 960,430"
              fill="#0f172a"
            />
            <polygon
              points="760,530 960,460 960,580 810,600"
              fill="url(#rockCobaltLit)"
            />
            <polygon
              points="960,460 1160,540 1120,620 960,580"
              fill="url(#rockNavyDark)"
            />

            {/* Central Razor Spine & Ridges */}
            <polyline
              points="960,150 955,320 965,480 960,650 960,880"
              stroke="#020617"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <polyline
              points="960,150 870,360 770,550 680,850"
              stroke="#1e3a8a"
              strokeWidth="4"
              fill="none"
            />
            <polyline
              points="960,150 1050,370 1150,570 1240,850"
              stroke="#0f172a"
              strokeWidth="4.5"
              fill="none"
            />

            {/* GLISTENING ICY TIPS & SUMMIT SNOW-CAP (MAIN PEAK) */}
            <polygon
              points="810,360 960,150 960,320 920,295 885,350 845,330"
              fill="url(#iceCapLit)"
            />
            <polygon
              points="960,150 1110,350 1070,340 1040,370 990,320 960,320"
              fill="url(#iceCapShade)"
            />

            {/* Gleaming Razor Crest Tip */}
            <polygon
              points="960,150 925,210 960,205 995,210"
              fill="#ffffff"
            />

            {/* Cascading Snow Couloirs running down the blue rock face */}
            <polygon
              points="910,320 930,410 915,500 895,420"
              fill="#ffffff"
              opacity="0.95"
            />
            <polygon
              points="980,330 1010,430 995,520 975,420"
              fill="#bae6fd"
              opacity="0.85"
            />
            <polygon
              points="850,450 880,540 860,620 835,530"
              fill="#f0f9ff"
              opacity="0.9"
            />

            {/* Eastern Satellite Flank (Pandim & Siniolchu: x=1160 to 1920) */}
            <polygon
              points="1140,850 1330,280 1540,540 1660,350 1820,530 1920,460 1920,850"
              fill="url(#rockCobaltLit)"
            />
            <polygon
              points="1330,280 1540,540 1480,850 1330,850"
              fill="url(#rockNavyDark)"
            />
            <polygon
              points="1660,350 1820,530 1760,850 1660,850"
              fill="url(#rockNavyDark)"
            />

            {/* Pandim Peak Icy Snow-Cap (x=1330, y=280) */}
            <polygon
              points="1250,380 1330,280 1410,370 1375,360 1340,400 1300,360"
              fill="url(#iceCapLit)"
            />
            <polygon
              points="1330,280 1410,370 1385,370 1335,300"
              fill="url(#iceCapShade)"
            />

            {/* Siniolchu Needle Icy Snow-Cap (x=1660, y=350) */}
            <polygon
              points="1590,440 1660,350 1720,420 1690,410 1660,450 1625,420"
              fill="url(#iceCapLit)"
            />
            <polygon
              points="1660,350 1720,420 1700,420 1665,370"
              fill="url(#iceCapShade)"
            />
          </g>

          {/* =========================================================
              6. ATMOSPHERIC MID-PASS MIST DRIFT (ANIMATED LAYER)
             ========================================================= */}
          <g className="animate-mist-slow opacity-80">
            <path
              d="M-200,560 Q260,510 740,550 T1680,520 T2200,570 L2200,700 L-200,700 Z"
              fill="url(#mistWaveGrad)"
            />
          </g>

          {/* =========================================================
              7. MIDGROUND SINGALILA & PELLING RIDGES (SHADES OF BLUE)
              - Parallax factor (0.05x)
              - Rugged continuous mountain ridgelines
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
              points="0,960 0,640 280,550 580,670 860,540 1080,660 1340,530 1620,650 1920,560 1920,960"
              fill="url(#midRidgeCobalt)"
              fillOpacity="0.95"
            />
            {/* Shaded Mountain Ridge Creases */}
            <polygon
              points="860,540 1080,660 1020,960 860,960"
              fill="url(#rockNavyDark)"
              fillOpacity="0.8"
            />
            <polygon
              points="1340,530 1620,650 1560,960 1340,960"
              fill="url(#rockNavyDark)"
              fillOpacity="0.8"
            />
            {/* Mountain Ridge Rim Lighting */}
            <polyline
              points="0,640 280,550 580,670 860,540 1080,660 1340,530 1620,650 1920,560"
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
              d="M-300,680 Q240,630 740,670 T1660,640 T2280,690 L2280,820 L-300,820 Z"
              fill="url(#mistWaveGrad)"
            />
          </g>

          {/* =========================================================
              9. FOREGROUND CHUMBONG SLOPES EXTENDING TO Y=1080
              - Fills the ENTIRE bottom space (no empty white gaps)
              - Textured in deep midnight blue & navy
             ========================================================= */}
          <path
            d="M0,1080 L0,740 Q220,690 480,730 T1040,690 T1580,730 Q1780,690 1920,740 L1920,1080 Z"
            fill="url(#foregroundDeepBlue)"
          />
          {/* Ridge Rim Accent */}
          <path
            d="M0,740 Q220,690 480,730 T1040,690 T1580,730 Q1780,690 1920,740"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="3"
            strokeOpacity="0.5"
          />

          {/* Secondary Foothill Layer down to 1080 */}
          <path
            d="M0,1080 L0,880 Q320,830 720,870 T1480,840 T1920,880 L1920,1080 Z"
            fill="#0b192c"
          />
        </svg>
      </div>

      {/* =========================================================================
          CONTENT: DIRECTLY ON SCENE (ZERO GLASS EFFECT, ZERO OVERLAY BOX, ZERO GLOW)
          - Starts from mid-mountain level down
          - Symmetrical typography: White fill outlined with solid black
          - Action buttons and small subscript rating directly below
         ========================================================================= */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Exact Layout Hook Line: White fill with solid black outline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-3xl leading-[1.15] font-serif text-outlined-black">
          Experience the Himalayas up close, right from your morning tea.
        </h1>

        {/* Exact Layout Sub-Lines: White fill with solid black outline */}
        <p className="text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-8 font-serif text-outlined-black-sub">
          Out on this ridge in Pelling, Kanchenjunga doesn&apos;t feel like a
          distant backdrop. She sits right in front of you, shedding her coat
          of morning mist and catching the first amber light while the rest of
          the valley is still asleep.
        </p>

        {/* Symmetrical Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-56 py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs uppercase tracking-widest shadow-[0_8px_25px_rgba(37,99,235,0.4)] border border-blue-500 transition-all duration-300 cursor-pointer hover:shadow-[0_12px_32px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-4 h-4 text-white" />
            <span>Check Availability</span>
          </button>

          <a
            href="#rooms"
            className="w-full sm:w-56 py-3.5 px-6 rounded-2xl border-2 border-blue-600 bg-white hover:bg-blue-50 active:scale-95 text-blue-900 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:border-blue-700 flex items-center justify-center gap-2"
          >
            <BedDouble className="w-4 h-4 text-blue-600" />
            <span>View Rooms</span>
          </a>
        </div>

        {/* Small Subscript Google Rating Mention (Directly Below Buttons) */}
        <div className="mt-4 pt-1">
          <a
            href={gmapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs transition-colors cursor-pointer group font-serif text-outlined-black-sub font-semibold"
          >
            <div className="flex text-blue-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-blue-500 text-blue-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                />
              ))}
            </div>
            <span className="font-bold ml-0.5">
              4.2 / 5.0 on Google Maps
            </span>
            <span>•</span>
            <span className="group-hover:underline">
              100+ verified traveler reviews
            </span>
            <ExternalLink className="w-3 h-3 text-white ml-0.5" />
          </a>
        </div>
      </div>

      {/* Soft gradient fade into pure white space */}
      <div className="absolute bottom-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-transparent via-white/40 to-white pointer-events-none z-20" />
    </section>
  );
}
