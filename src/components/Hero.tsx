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
  // Mouse position normalized (-1 to 1) for tactile 3D paper shadowbox parallax
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
      className="relative h-screen w-full overflow-hidden flex flex-col justify-end items-center bg-[#ede7dc] select-none pb-12 sm:pb-16"
    >
      {/* =========================================================================
          LAYERED 3D PAPERCUT / PAPER CRAFT SHADOWBOX SCENE
          - Tactile physical cardstock layers with directional drop-shadows
          - Warm oatmeal/parchment background (#ede7dc)
          - Vibrant terracotta/vermillion circular paper sun (#ee6926)
          - Symmetrical snow-capped paper mountain with center fold & jagged snow cuts
          - Flat-bottomed floating paper clouds casting shadows onto the sun
          - Layered rolling blue papercut foothills/waves at the base
          - Framed by perimeter cloud arches
         ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            {/* 1. Standard Paper Cutout Drop Shadow */}
            <filter id="paperShadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="6"
                floodColor="#1a1612"
                floodOpacity="0.22"
              />
            </filter>

            {/* 2. Deep Paper Cutout Drop Shadow (for Sun & Main Mountain) */}
            <filter id="deepPaperShadow" x="-25%" y="-25%" width="150%" height="160%">
              <feDropShadow
                dx="0"
                dy="14"
                stdDeviation="11"
                floodColor="#14110d"
                floodOpacity="0.28"
              />
            </filter>

            {/* 3. Soft Paper Cutout Drop Shadow (for Floating Clouds & Snow Cap) */}
            <filter id="softPaperShadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow
                dx="0"
                dy="5"
                stdDeviation="4"
                floodColor="#181410"
                floodOpacity="0.18"
              />
            </filter>

            {/* 4. Mountain Drop Shadow onto Sun & Sky */}
            <filter id="mountainShadow" x="-25%" y="-25%" width="150%" height="160%">
              <feDropShadow
                dx="0"
                dy="16"
                stdDeviation="12"
                floodColor="#06121e"
                floodOpacity="0.35"
              />
            </filter>

            {/* 5. Wave Paper Drop Shadow */}
            <filter id="waveShadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow
                dx="0"
                dy="9"
                stdDeviation="7"
                floodColor="#071524"
                floodOpacity="0.25"
              />
            </filter>
          </defs>

          {/* -----------------------------------------------------------------
              LAYER 0: Canvas Base (Warm Oatmeal / Craft Paper Parchment)
             ----------------------------------------------------------------- */}
          <rect width="1920" height="1080" fill="#ede7dc" />

          {/* -----------------------------------------------------------------
              LAYER 1: Rear Framing Clouds (Deepest Paper Cutout Tier)
              Parallax Rate: 3px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#paperShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 4}px, ${mouseOffset.y * 3}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* Top-left rear cloud cluster */}
            <path
              d="M-40,-30 L-40,240 Q40,250 90,200 Q150,220 220,170 Q300,190 390,130 Q470,120 520,60 Q560,0 540,-30 Z"
              fill="#dfd7c8"
            />
            {/* Top-right rear cloud cluster */}
            <path
              d="M1960,-30 L1960,240 Q1880,250 1830,200 Q1770,220 1700,170 Q1620,190 1530,130 Q1450,120 1400,60 Q1360,0 1380,-30 Z"
              fill="#dfd7c8"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 2: Middle Framing Clouds (Intermediate Paper Cutout Tier)
              Parallax Rate: 6px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#paperShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 6}px, ${mouseOffset.y * 4}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* Top-left intermediate clouds */}
            <path
              d="M-20,-20 L-20,180 Q30,190 80,150 Q130,170 190,130 Q260,150 340,90 Q400,90 440,30 Q470,-10 450,-20 Z"
              fill="#e7e0d3"
            />
            {/* Top-right intermediate clouds */}
            <path
              d="M1940,-20 L1940,180 Q1890,190 1840,150 Q1790,170 1730,130 Q1660,150 1580,90 Q1520,90 1480,30 Q1450,-10 1470,-20 Z"
              fill="#e7e0d3"
            />
            {/* Top center arch billow */}
            <path
              d="M600,-20 Q700,60 820,40 Q960,85 1100,40 Q1220,60 1320,-20 Z"
              fill="#ece5d8"
            />
            {/* Left side billows */}
            <path
              d="M-20,260 Q50,280 60,340 Q110,380 90,440 Q140,490 80,550 Q30,590 -20,580 Z"
              fill="#ebe4d6"
            />
            {/* Right side billows */}
            <path
              d="M1940,260 Q1870,280 1860,340 Q1810,380 1830,440 Q1780,490 1840,550 Q1890,590 1940,580 Z"
              fill="#ebe4d6"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 3: The Big Sun (Vibrant Terracotta / Vermillion Paper Circle)
              Center: (960, 360), Radius: 300
              Parallax Rate: 8px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#deepPaperShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 8}px, ${mouseOffset.y * 5}px, 0)`,
              transition: "transform 0.45s ease-out",
            }}
          >
            <circle cx="960" cy="360" r="300" fill="#ee6926" />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 4: Floating Horizontal Cutout Clouds Across Sun & Sky
              Flat bottoms with scalloped rounded tops, casting soft paper shadows
              Parallax Rate: 12px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#softPaperShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 7}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* Cloud 1: Upper Left (Intersects sun's left perimeter) */}
            {/* Base: y=250, x from 520 to 760 */}
            <path
              d="M520,250 L760,250 
                 Q755,225 730,225 
                 Q715,195 675,195 
                 Q640,175 600,195 
                 Q560,190 545,220 
                 Q525,225 520,250 Z"
              fill="#faf7f1"
            />

            {/* Cloud 2: Lower Left (Below Cloud 1, intersects mountain slope) */}
            {/* Base: y=380, x from 420 to 720 */}
            <path
              d="M420,380 L720,380 
                 Q715,350 685,350 
                 Q665,315 620,315 
                 Q575,290 530,315 
                 Q485,310 460,345 
                 Q430,350 420,380 Z"
              fill="#faf7f1"
            />

            {/* Cloud 3: Upper Right (Small shelf, high above sun's shoulder) */}
            {/* Base: y=160, x from 1160 to 1380 */}
            <path
              d="M1160,160 L1380,160 
                 Q1375,135 1350,135 
                 Q1330,110 1295,110 
                 Q1260,95 1225,110 
                 Q1195,110 1180,135 
                 Q1165,140 1160,160 Z"
              fill="#faf7f1"
            />

            {/* Cloud 4: Mid Right (Major cloud across right side of the sun) */}
            {/* Base: y=270, x from 1120 to 1460 */}
            <path
              d="M1120,270 L1460,270 
                 Q1455,240 1420,240 
                 Q1395,200 1345,200 
                 Q1295,170 1240,200 
                 Q1190,195 1160,235 
                 Q1130,240 1120,270 Z"
              fill="#faf7f1"
            />

            {/* Cloud 5: Lower Right (Hovering near right slope of mountain) */}
            {/* Base: y=390, x from 1200 to 1500 */}
            <path
              d="M1200,390 L1500,390 
                 Q1495,365 1465,365 
                 Q1440,335 1395,335 
                 Q1355,315 1315,335 
                 Q1275,330 1250,360 
                 Q1220,365 1200,390 Z"
              fill="#faf7f1"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 5: Symmetrical Snow-Capped Mountain (Mount Kanchenjunga)
              Peak Tip: (960, 420) overlapping the lower half of the sun
              Base: y=940, spreading wide from x=320 to x=1600
              Parallax Rate: 16px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#mountainShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 15}px, ${mouseOffset.y * 9}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* Mountain Body: Dark Blue Shadow Facet (Left Face) */}
            <path
              d="M960,420 
                 L320,960 
                 L960,960 
                 Z"
              fill="#0a3d64"
            />

            {/* Mountain Body: Medium Cerulean Facet (Right Face) */}
            <path
              d="M960,420 
                 L1600,960 
                 L960,960 
                 Z"
              fill="#165a88"
            />

            {/* Mountain Internal Paper Fold Ridge Line (Deep Indigo Shadow) */}
            <path
              d="M960,420 
                 L952,560 
                 L968,660 
                 L950,780 
                 L960,960 
                 L946,960 
                 L938,780 
                 L954,660 
                 L938,560 
                 Z"
              fill="#062b48"
              opacity="0.8"
            />

            {/* Mountain Secondary Right Facet Shade (Adding 3D Paper Form) */}
            <path
              d="M960,420 
                 L1280,960 
                 L1600,960 
                 Z"
              fill="#226e9c"
              opacity="0.55"
            />

            {/* -------------------------------------------------------------
                LAYER 5.5: Cut-Paper Snow Cap
                Folded paper look: Left face pure white (#ffffff), right face
                slightly shaded (#ede7dc) with authentic jagged geometric snow lines
               ------------------------------------------------------------- */}
            <g filter="url(#softPaperShadow)">
              {/* Left Snow Slope (Pure Bright White #ffffff) */}
              <path
                d="M960,420 
                   L960,740 
                   L940,710 
                   L920,740 
                   L880,680 
                   L860,710 
                   L820,640 
                   L790,670 
                   L740,610 
                   L700,640 
                   L660,590 
                   L610,630 
                   L560,580 
                   Z"
                fill="#ffffff"
              />

              {/* Right Snow Slope (Soft Tinted White #f2ece2) */}
              <path
                d="M960,420 
                   L1360,580 
                   L1310,630 
                   L1260,590 
                   L1220,640 
                   L1170,610 
                   L1140,670 
                   L1100,640 
                   L1060,710 
                   L1040,680 
                   L1000,740 
                   L980,710 
                   L960,740 
                   Z"
                fill="#f2ece2"
              />

              {/* Center Crease / Paper Fold Line on Snow */}
              <path
                d="M960,420 
                   L956,540 
                   L964,640 
                   L954,710 
                   L960,740 
                   L964,710 
                   L972,640 
                   L964,540 
                   Z"
                fill="#d8d0c2"
                opacity="0.7"
              />
            </g>
          </g>

          {/* -----------------------------------------------------------------
              LAYER 6: Rolling Paper Waves / Foothills (Layer 1 - Rear Blue)
              Color: #4e8cb4 (Cornflower Blue Cardstock)
              Parallax Rate: 18px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#waveShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 17}px, ${mouseOffset.y * 10}px, 0)`,
              transition: "transform 0.38s ease-out",
            }}
          >
            {/* Left Rear Wave */}
            <path
              d="M-40,760 
                 Q180,690 380,740 
                 Q580,790 760,730 
                 L760,980 
                 L-40,980 
                 Z"
              fill="#4e8cb4"
            />
            {/* Right Rear Wave */}
            <path
              d="M1960,760 
                 Q1740,690 1540,740 
                 Q1340,790 1160,730 
                 L1160,980 
                 L1960,980 
                 Z"
              fill="#4e8cb4"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 7: Rolling Paper Waves / Foothills (Layer 2 - Deep Navy Blue)
              Color: #0e2e4a (Deep Navy Cardstock)
              Parallax Rate: 21px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#waveShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 20}px, ${mouseOffset.y * 12}px, 0)`,
              transition: "transform 0.35s ease-out",
            }}
          >
            {/* Sweeping deep crest across left and center */}
            <path
              d="M-40,840 
                 Q220,770 460,820 
                 Q720,870 960,790 
                 Q1220,870 1480,810 
                 Q1720,770 1960,830 
                 L1960,1080 
                 L-40,1080 
                 Z"
              fill="#0e2e4a"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 8: Rolling Paper Waves / Foothills (Layer 3 - Cerulean Blue)
              Color: #1b5680 (Slate Blue Cardstock)
              Parallax Rate: 24px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#waveShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 23}px, ${mouseOffset.y * 13}px, 0)`,
              transition: "transform 0.35s ease-out",
            }}
          >
            <path
              d="M-40,910 
                 Q180,840 440,900 
                 Q680,950 940,880 
                 Q1220,950 1480,870 
                 Q1720,840 1960,910 
                 L1960,1080 
                 L-40,1080 
                 Z"
              fill="#1b5680"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 9: Rolling Paper Waves / Foothills (Layer 4 - Soft Cyan Blue)
              Color: #6d9ebf (Soft Ocean Cyan Cardstock)
              Parallax Rate: 26px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#waveShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 26}px, ${mouseOffset.y * 14}px, 0)`,
              transition: "transform 0.32s ease-out",
            }}
          >
            <path
              d="M-40,970 
                 Q260,900 560,960 
                 Q840,1010 1100,940 
                 Q1380,990 1660,920 
                 Q1840,910 1960,960 
                 L1960,1080 
                 L-40,1080 
                 Z"
              fill="#6d9ebf"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 10: Foreground Base Wave (Layer 5 - Midnight Navy)
              Color: #081a2e (Grounding Foothill Layer down to 1080)
              Parallax Rate: 28px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#waveShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 28}px, ${mouseOffset.y * 15}px, 0)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <path
              d="M-40,1020 
                 Q320,960 680,1010 
                 Q1040,1060 1400,990 
                 Q1680,960 1960,1020 
                 L1960,1080 
                 L-40,1080 
                 Z"
              fill="#081a2e"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 11: Outer Paper Shadowbox Border Frame
              Color: #0e2a47 (Refined dark border framing the art piece)
             ----------------------------------------------------------------- */}
          <rect
            x="0"
            y="0"
            width="1920"
            height="1080"
            fill="none"
            stroke="#0e2a47"
            strokeWidth="16"
            className="hidden sm:block"
          />
        </svg>
      </div>

      {/* =========================================================================
          CONTENT: AUTHORITATIVE TYPOGRAPHY & INTERACTIVE ACTIONS
          - Positioned gracefully in the lower third
          - High-contrast Plantin Pro serif with subtle paper shadow
          - Terracotta Action Button matching the papercut Sun (#ee6926)
          - Off-white paper button for Rooms (#faf7f0)
          - Verified Google rating subscript
         ========================================================================= */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Exact Layout Hook Line */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-3xl leading-[1.15] font-serif text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          Experience the Himalayas up close, right from your morning tea.
        </h1>

        {/* Exact Layout Sub-Lines */}
        <p className="text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-8 font-serif text-blue-50 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          Out on this ridge in Pelling, Kanchenjunga doesn&apos;t feel like a
          distant backdrop. She sits right in front of you, shedding her coat
          of morning mist and catching the first amber light while the rest of
          the valley is still asleep.
        </p>

        {/* Symmetrical Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Action Button: Vibrant Papercut Terracotta matching the Sun */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-56 py-3.5 px-6 rounded-2xl bg-[#ee6926] hover:bg-[#d85515] active:scale-95 text-white font-bold text-xs uppercase tracking-widest shadow-[0_8px_25px_rgba(238,105,38,0.45)] border border-[#ff8547]/60 transition-all duration-300 cursor-pointer hover:shadow-[0_12px_32px_rgba(238,105,38,0.6)] flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-4 h-4 text-white" />
            <span>Check Availability</span>
          </button>

          {/* Secondary Action Button: Crisp Off-White Cardstock */}
          <a
            href="#rooms"
            className="w-full sm:w-56 py-3.5 px-6 rounded-2xl border-2 border-[#165a88] bg-[#faf7f0] hover:bg-white active:scale-95 text-[#0a3d64] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:border-[#0a3d64] flex items-center justify-center gap-2"
          >
            <BedDouble className="w-4 h-4 text-[#165a88]" />
            <span>View Rooms</span>
          </a>
        </div>

        {/* Small Subscript Google Rating Mention (Directly Below Buttons) */}
        <div className="mt-4 pt-1">
          <a
            href={gmapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs transition-colors cursor-pointer group font-serif text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] font-semibold"
          >
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
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

      {/* Gentle Bottom Transition into Clean White Space */}
      <div className="absolute bottom-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-transparent via-[#081a2e]/40 to-white pointer-events-none z-20" />
    </section>
  );
}
