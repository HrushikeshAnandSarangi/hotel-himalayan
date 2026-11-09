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
      className="relative h-screen w-full overflow-hidden flex flex-col justify-end items-center bg-[#548fae] select-none pb-12 sm:pb-16"
    >
      {/* =========================================================================
          LAYERED 3D PAPERCUT HIMALAYAN ALPINE SCENE
          - Authentic textured papercraft style with directional drop-shadows
          - Three majestic snow-capped peaks (Kanchenjunga massif)
          - Deep pine tree forest (treeline) across the foothills
          - Rolling white paper snow slopes & meadows
          - Two symmetrical foreground pine trees draped in fresh snow
          - Fluffy cut-paper clouds, floating snowflakes & soaring alpine birds
          - Multiplane interactive 3D mouse parallax
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
                floodColor="#071d2e"
                floodOpacity="0.28"
              />
            </filter>

            {/* 2. Deep Paper Cutout Drop Shadow (for major Mountain Peaks & Trees) */}
            <filter id="deepPaperShadow" x="-25%" y="-25%" width="150%" height="160%">
              <feDropShadow
                dx="0"
                dy="14"
                stdDeviation="10"
                floodColor="#041422"
                floodOpacity="0.38"
              />
            </filter>

            {/* 3. Soft Paper Cutout Drop Shadow (for Clouds, Snow Caps & Flakes) */}
            <filter id="softPaperShadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow
                dx="0"
                dy="5"
                stdDeviation="4"
                floodColor="#051928"
                floodOpacity="0.22"
              />
            </filter>

            {/* 4. Forest Treeline Drop Shadow */}
            <filter id="forestShadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow
                dx="0"
                dy="10"
                stdDeviation="7"
                floodColor="#020e17"
                floodOpacity="0.35"
              />
            </filter>

            {/* 5. Snow Slope Drop Shadow */}
            <filter id="snowSlopeShadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="6"
                floodColor="#0b283d"
                floodOpacity="0.22"
              />
            </filter>

            {/* Sky Subtle Linear Paper Gradient */}
            <linearGradient id="skyPaperGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4f88a7" />
              <stop offset="55%" stopColor="#5d96b4" />
              <stop offset="100%" stopColor="#6ea6c3" />
            </linearGradient>
          </defs>

          {/* -----------------------------------------------------------------
              LAYER 0: Alpine Blue Paper Sky Canvas
             ----------------------------------------------------------------- */}
          <rect width="1920" height="1080" fill="url(#skyPaperGrad)" />

          {/* -----------------------------------------------------------------
              LAYER 1: Soaring Alpine Birds (Formation in High Sky)
              Parallax Rate: 3px
             ----------------------------------------------------------------- */}
          <g
            style={{
              transform: `translate3d(${mouseOffset.x * 3}px, ${mouseOffset.y * 2}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
            opacity="0.85"
          >
            {/* V-formation birds soaring high across the right sky */}
            <path
              d="M1380,180 Q1390,172 1400,178 Q1410,172 1420,180 Q1410,184 1400,181 Q1390,184 1380,180 Z"
              fill="#061f33"
            />
            <path
              d="M1415,200 Q1423,193 1432,198 Q1440,193 1448,200 Q1440,203 1432,201 Q1424,203 1415,200 Z"
              fill="#061f33"
            />
            <path
              d="M1445,225 Q1452,219 1460,223 Q1467,219 1474,225 Q1467,228 1460,226 Q1453,228 1445,225 Z"
              fill="#061f33"
            />
            <path
              d="M1475,250 Q1481,245 1488,249 Q1494,245 1500,250 Q1494,252 1488,251 Q1482,252 1475,250 Z"
              fill="#061f33"
            />
            <path
              d="M1430,165 Q1437,160 1444,164 Q1450,160 1456,165 Q1450,167 1444,166 Q1438,167 1430,165 Z"
              fill="#061f33"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 2: Puffy Papercut Clouds & Falling Snowflakes / Stars
              Parallax Rate: 6px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#softPaperShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 6}px, ${mouseOffset.y * 4}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* Left Cloud: Puffy, flat-bottomed paper cloud */}
            {/* Base: y=180, width: 260px (x=160 to 420) */}
            <path
              d="M160,180 L420,180 
                 Q415,145 385,145 
                 Q365,105 320,105 
                 Q275,80 235,105 
                 Q195,100 175,135 
                 Q165,150 160,180 Z"
              fill="#fbfbfd"
            />

            {/* Right Cloud: Major puffy paper cloud */}
            {/* Base: y=150, width: 340px (x=1340 to 1680) */}
            <path
              d="M1340,150 L1680,150 
                 Q1675,120 1645,120 
                 Q1620,85 1575,85 
                 Q1530,60 1480,85 
                 Q1435,80 1405,115 
                 Q1375,120 1340,150 Z"
              fill="#fbfbfd"
            />

            {/* Scattered Papercut Snowflakes & 6-Point Stars */}
            {/* Snowflakes (Paper Circles) */}
            <circle cx="280" cy="80" r="4.5" fill="#ffffff" />
            <circle cx="360" cy="65" r="3.5" fill="#ffffff" />
            <circle cx="480" cy="115" r="5" fill="#ffffff" />
            <circle cx="580" cy="90" r="4" fill="#ffffff" />
            <circle cx="720" cy="130" r="5" fill="#ffffff" />
            <circle cx="860" cy="85" r="4.5" fill="#ffffff" />
            <circle cx="1060" cy="95" r="4" fill="#ffffff" />
            <circle cx="1180" cy="75" r="5.5" fill="#ffffff" />
            <circle cx="1270" cy="120" r="3.5" fill="#ffffff" />
            <circle cx="1740" cy="110" r="5" fill="#ffffff" />
            <circle cx="1830" cy="85" r="4" fill="#ffffff" />

            <circle cx="220" cy="240" r="4" fill="#ffffff" />
            <circle cx="460" cy="220" r="4.5" fill="#ffffff" />
            <circle cx="560" cy="200" r="3.5" fill="#ffffff" />
            <circle cx="680" cy="180" r="5" fill="#ffffff" />
            <circle cx="800" cy="220" r="4" fill="#ffffff" />
            <circle cx="1120" cy="210" r="4.5" fill="#ffffff" />
            <circle cx="1240" cy="190" r="5" fill="#ffffff" />
            <circle cx="1720" cy="220" r="4" fill="#ffffff" />

            {/* 6-Point Star Flakes */}
            <g transform="translate(340, 100) scale(0.85)">
              <line x1="0" y1="-9" x2="0" y2="9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-7.8" y1="-4.5" x2="7.8" y2="4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-7.8" y1="4.5" x2="7.8" y2="-4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </g>
            <g transform="translate(640, 110) scale(0.9)">
              <line x1="0" y1="-9" x2="0" y2="9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-7.8" y1="-4.5" x2="7.8" y2="4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-7.8" y1="4.5" x2="7.8" y2="-4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </g>
            <g transform="translate(1220, 140) scale(0.95)">
              <line x1="0" y1="-10" x2="0" y2="10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-8.6" y1="-5" x2="8.6" y2="5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-8.6" y1="5" x2="8.6" y2="-5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </g>
            <g transform="translate(1760, 160) scale(0.8)">
              <line x1="0" y1="-9" x2="0" y2="9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-7.8" y1="-4.5" x2="7.8" y2="4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-7.8" y1="4.5" x2="7.8" y2="-4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </g>

          {/* -----------------------------------------------------------------
              LAYER 3: THE THREE-PEAK MOUNTAIN RANGE (Kanchenjunga Massif)
              - Central Tall Summit (960, 260)
              - Left Flanking Peak (460, 360)
              - Right Flanking Peak (1460, 380)
              Parallax Rate: 12px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#deepPaperShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 7}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* === 1. LEFT FLANKING PEAK === */}
            <g>
              {/* Rock Body - Left Shade */}
              <path
                d="M460,360 L120,680 L460,680 Z"
                fill="#0b3858"
              />
              {/* Rock Body - Right Lit */}
              <path
                d="M460,360 L780,680 L460,680 Z"
                fill="#175680"
              />
              {/* Stratified Rock Bands */}
              <path
                d="M340,480 L460,480 L560,530 L520,560 L440,510 L300,520 Z"
                fill="#206694"
                opacity="0.8"
              />
              {/* Snow Cap on Left Peak */}
              <g filter="url(#softPaperShadow)">
                <path
                  d="M460,360 
                     L460,490 
                     L445,470 
                     L430,495 
                     L400,455 
                     L380,480 
                     L350,440 
                     L320,465 
                     L280,430 
                     Z"
                  fill="#ffffff"
                />
                <path
                  d="M460,360 
                     L640,430 
                     L605,465 
                     L570,440 
                     L540,480 
                     L515,455 
                     L490,495 
                     L475,470 
                     L460,490 
                     Z"
                  fill="#f1f5f9"
                />
              </g>
            </g>

            {/* === 2. RIGHT FLANKING PEAK === */}
            <g>
              {/* Rock Body - Left Shade */}
              <path
                d="M1460,380 L1140,680 L1460,680 Z"
                fill="#0b3858"
              />
              {/* Rock Body - Right Lit */}
              <path
                d="M1460,380 L1800,680 L1460,680 Z"
                fill="#175680"
              />
              {/* Stratified Rock Bands */}
              <path
                d="M1360,500 L1460,500 L1560,540 L1520,570 L1440,530 L1320,540 Z"
                fill="#206694"
                opacity="0.8"
              />
              {/* Snow Cap on Right Peak */}
              <g filter="url(#softPaperShadow)">
                <path
                  d="M1460,380 
                     L1460,500 
                     L1445,480 
                     L1430,505 
                     L1400,470 
                     L1380,495 
                     L1350,455 
                     L1320,480 
                     L1280,445 
                     Z"
                  fill="#ffffff"
                />
                <path
                  d="M1460,380 
                     L1640,445 
                     L1605,480 
                     L1570,455 
                     L1540,495 
                     L1515,470 
                     L1490,505 
                     L1475,480 
                     L1460,500 
                     Z"
                  fill="#f1f5f9"
                />
              </g>
            </g>

            {/* === 3. CENTRAL MAIN SUMMIT (Mount Kanchenjunga) === */}
            {/* Peak: (960, 260), Base: (420 to 1500, y=720) */}
            <g>
              {/* Mountain Body - Left Shadow Face */}
              <path
                d="M960,260 L420,720 L960,720 Z"
                fill="#072d47"
              />
              {/* Mountain Body - Right Lit Face */}
              <path
                d="M960,260 L1500,720 L960,720 Z"
                fill="#124a72"
              />
              {/* Center Fold Crease Line */}
              <path
                d="M960,260 L952,440 L968,540 L952,650 L960,720 L946,720 L940,650 L954,540 L942,440 Z"
                fill="#031a2c"
                opacity="0.9"
              />

              {/* Horizontal Paper Stratified Rock Layers (From Image 1) */}
              <path
                d="M780,480 L960,440 L1140,480 L1100,530 L960,490 L820,530 Z"
                fill="#1a5a85"
              />
              <path
                d="M680,560 L960,520 L1240,560 L1200,610 L960,570 L720,610 Z"
                fill="#246a99"
              />
              <path
                d="M580,640 L960,600 L1340,640 L1300,690 L960,650 L620,690 Z"
                fill="#174f75"
              />

              {/* Majestic Folded Paper Snow Cap */}
              <g filter="url(#softPaperShadow)">
                {/* Left Snow Slope (Pure Bright White #ffffff) */}
                <path
                  d="M960,260 
                     L960,460 
                     L945,435 
                     L930,465 
                     L900,420 
                     L880,445 
                     L840,395 
                     L820,420 
                     L780,375 
                     L750,405 
                     L710,360 
                     Z"
                  fill="#ffffff"
                />
                {/* Right Snow Slope (Soft Tone #f3f6fa) */}
                <path
                  d="M960,260 
                     L1210,360 
                     L1170,405 
                     L1140,375 
                     L1100,420 
                     L1080,395 
                     L1040,445 
                     L1020,420 
                     L990,465 
                     L975,435 
                     L960,460 
                     Z"
                  fill="#f3f6fa"
                />
                {/* Center Fold Crease Line on Snow */}
                <path
                  d="M960,260 L956,360 L964,420 L960,460 L964,420 L968,360 Z"
                  fill="#d4dde6"
                  opacity="0.8"
                />
              </g>
            </g>
          </g>

          {/* -----------------------------------------------------------------
              LAYER 4: Dense Himalayan Pine Forest Treeline across Foothills
              Y-Range: 580 to 780
              Parallax Rate: 16px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#forestShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 16}px, ${mouseOffset.y * 9}px, 0)`,
              transition: "transform 0.38s ease-out",
            }}
          >
            {/* 1. Back Pine Treeline (Lighter Slate Navy #1a4869) */}
            <path
              d="M-20,720 
                 L-20,640 L10,610 L25,640 L40,605 L55,640 L70,615 L85,640 L100,600 L115,640 
                 L130,610 L145,640 L160,605 L175,640 L190,615 L205,640 L220,600 L235,640 
                 L250,610 L265,640 L280,605 L295,640 L310,615 L325,640 L340,600 L355,640 
                 L370,610 L385,640 L400,605 L415,640 L430,615 L445,640 L460,600 L475,640 
                 L490,610 L505,640 L520,605 L535,640 L550,615 L565,640 L580,600 L595,640 
                 L610,610 L625,640 L640,605 L655,640 L670,615 L685,640 L700,600 L715,640 
                 L730,610 L745,640 L760,605 L775,640 L790,615 L805,640 L820,600 L835,640 
                 L850,610 L865,640 L880,605 L895,640 L910,615 L925,640 L940,600 L955,640 
                 L970,610 L985,640 L1000,605 L1015,640 L1030,615 L1045,640 L1060,600 L1075,640 
                 L1090,610 L1105,640 L1120,605 L1135,640 L1150,615 L1165,640 L1180,600 L1195,640 
                 L1210,610 L1225,640 L1240,605 L1255,640 L1270,615 L1285,640 L1300,600 L1315,640 
                 L1330,610 L1345,640 L1360,605 L1375,640 L1390,615 L1405,640 L1420,600 L1435,640 
                 L1450,610 L1465,640 L1480,605 L1495,640 L1510,615 L1525,640 L1540,600 L1555,640 
                 L1570,610 L1585,640 L1600,605 L1615,640 L1630,615 L1645,640 L1660,600 L1675,640 
                 L1690,610 L1705,640 L1720,605 L1735,640 L1750,615 L1765,640 L1780,600 L1795,640 
                 L1810,610 L1825,640 L1840,605 L1855,640 L1870,615 L1885,640 L1900,600 L1915,640 
                 L1940,610 L1940,780 L-20,780 Z"
              fill="#194566"
            />

            {/* 2. Front Dense Pine Treeline (Deep Midnight Navy #06233a) */}
            <path
              d="M-20,780 
                 L-20,680 L20,630 L35,675 L60,620 L80,680 L105,635 L125,675 L150,625 L170,680 
                 L195,630 L215,675 L240,620 L260,680 L285,635 L305,675 L330,625 L350,680 
                 L375,630 L395,675 L420,620 L440,680 L465,635 L485,675 L510,625 L530,680 
                 L555,630 L575,675 L600,620 L620,680 L645,635 L665,675 L690,625 L710,680 
                 L735,630 L755,675 L780,620 L800,680 L825,635 L845,675 L870,625 L890,680 
                 L915,630 L935,675 L960,620 L980,680 L1005,635 L1025,675 L1050,625 L1070,680 
                 L1095,630 L1115,675 L1140,620 L1160,680 L1185,635 L1205,675 L1230,625 L1250,680 
                 L1275,630 L1295,675 L1320,620 L1340,680 L1365,635 L1385,675 L1410,625 L1430,680 
                 L1455,630 L1475,675 L1500,620 L1520,680 L1545,635 L1565,675 L1590,625 L1610,680 
                 L1635,630 L1655,675 L1680,620 L1700,680 L1725,635 L1745,675 L1770,625 L1790,680 
                 L1815,630 L1835,675 L1860,620 L1880,680 L1905,635 L1925,675 L1940,630 
                 L1940,840 L-20,840 Z"
              fill="#06233a"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 5: Rolling Papercut Snow Meadows / Slopes
              Parallax Rate: 20px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#snowSlopeShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 20}px, ${mouseOffset.y * 11}px, 0)`,
              transition: "transform 0.35s ease-out",
            }}
          >
            {/* Upper Snow Hill: Soft Tinted Cardstock (#d7e5ee) */}
            <path
              d="M-20,780 
                 Q280,720 620,760 
                 Q960,800 1320,730 
                 Q1640,680 1940,740 
                 L1940,940 
                 L-20,940 
                 Z"
              fill="#d7e5ee"
            />

            {/* Middle Snow Hill: Crisp Soft White (#eaf1f6) */}
            <path
              d="M-20,840 
                 Q340,780 740,830 
                 Q1140,880 1520,800 
                 Q1740,760 1940,810 
                 L1940,1020 
                 L-20,1020 
                 Z"
              fill="#eaf1f6"
            />

            {/* Foreground Snow Meadow: Pure Bright White (#ffffff) */}
            <path
              d="M-20,910 
                 Q260,850 640,890 
                 Q1080,940 1480,870 
                 Q1720,840 1940,890 
                 L1940,1080 
                 L-20,1080 
                 Z"
              fill="#ffffff"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 6: Symmetrical Foreground Papercut Pine Trees (Hero Trees)
              - Left Tree: base at x=280, y=980
              - Right Tree: base at x=1640, y=960
              - Stacked scalloped branch tiers with fresh white paper snow blankets!
              Parallax Rate: 26px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#deepPaperShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 25}px, ${mouseOffset.y * 14}px, 0)`,
              transition: "transform 0.32s ease-out",
            }}
          >
            {/* === LEFT FOREGROUND HERO PINE TREE === */}
            <g>
              {/* Brown Cardstock Trunk */}
              <rect x="270" y="940" width="22" height="48" fill="#543722" rx="3" />

              {/* Tier 4 (Bottom Largest Foliage) */}
              <path
                d="M281,770 
                   L170,890 Q200,915 240,900 Q281,920 322,900 Q362,915 392,890 Z"
                fill="#0b2e42"
              />
              {/* Snow Blanket on Tier 4 */}
              <path
                d="M281,850 L170,890 Q200,908 240,896 Q281,912 322,896 Q362,908 392,890 L281,850 Z"
                fill="#ffffff"
                filter="url(#softPaperShadow)"
              />

              {/* Tier 3 (Middle-Lower Foliage) */}
              <path
                d="M281,710 
                   L190,810 Q215,830 250,818 Q281,835 312,818 Q347,830 372,810 Z"
                fill="#12435e"
              />
              {/* Snow Blanket on Tier 3 */}
              <path
                d="M281,780 L190,810 Q215,824 250,814 Q281,828 312,814 Q347,824 372,810 L281,780 Z"
                fill="#ffffff"
                filter="url(#softPaperShadow)"
              />

              {/* Tier 2 (Middle-Upper Foliage) */}
              <path
                d="M281,650 
                   L210,740 Q235,758 260,748 Q281,760 302,748 Q327,758 352,740 Z"
                fill="#1a5575"
              />
              {/* Snow Blanket on Tier 2 */}
              <path
                d="M281,715 L210,740 Q235,752 260,744 Q281,755 302,744 Q327,752 352,740 L281,715 Z"
                fill="#ffffff"
                filter="url(#softPaperShadow)"
              />

              {/* Tier 1 (Top Crown Foliage) */}
              <path
                d="M281,600 
                   L230,670 Q255,685 281,680 Q307,685 332,670 Z"
                fill="#24678d"
              />
              {/* Snow Crown on Tip */}
              <path
                d="M281,600 L250,645 Q265,655 281,650 Q297,655 312,645 Z"
                fill="#ffffff"
                filter="url(#softPaperShadow)"
              />
            </g>

            {/* === RIGHT FOREGROUND HERO PINE TREE === */}
            <g>
              {/* Brown Cardstock Trunk */}
              <rect x="1630" y="930" width="20" height="42" fill="#543722" rx="3" />

              {/* Tier 4 (Bottom Largest Foliage) */}
              <path
                d="M1640,780 
                   L1540,890 Q1568,912 1604,898 Q1640,918 1676,898 Q1712,912 1740,890 Z"
                fill="#0b2e42"
              />
              {/* Snow Blanket on Tier 4 */}
              <path
                d="M1640,855 L1540,890 Q1568,906 1604,894 Q1640,910 1676,894 Q1712,906 1740,890 L1640,855 Z"
                fill="#ffffff"
                filter="url(#softPaperShadow)"
              />

              {/* Tier 3 (Middle-Lower Foliage) */}
              <path
                d="M1640,720 
                   L1560,815 Q1582,832 1614,822 Q1640,838 1666,822 Q1698,832 1720,815 Z"
                fill="#12435e"
              />
              {/* Snow Blanket on Tier 3 */}
              <path
                d="M1640,785 L1560,815 Q1582,827 1614,818 Q1640,830 1666,818 Q1698,827 1720,815 L1640,785 Z"
                fill="#ffffff"
                filter="url(#softPaperShadow)"
              />

              {/* Tier 2 (Middle-Upper Foliage) */}
              <path
                d="M1640,665 
                   L1578,745 Q1600,762 1622,752 Q1640,764 1658,752 Q1680,762 1702,745 Z"
                fill="#1a5575"
              />
              {/* Snow Blanket on Tier 2 */}
              <path
                d="M1640,725 L1578,745 Q1600,756 1622,748 Q1640,758 1658,748 Q1680,756 1702,745 L1640,725 Z"
                fill="#ffffff"
                filter="url(#softPaperShadow)"
              />

              {/* Tier 1 (Top Crown Foliage) */}
              <path
                d="M1640,620 
                   L1595,685 Q1618,698 1640,694 Q1662,698 1685,685 Z"
                fill="#24678d"
              />
              {/* Snow Crown on Tip */}
              <path
                d="M1640,620 L1612,660 Q1626,670 1640,666 Q1654,670 1668,660 Z"
                fill="#ffffff"
                filter="url(#softPaperShadow)"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* =========================================================================
          CONTENT: AUTHORITATIVE TYPOGRAPHY & INTERACTIVE ACTIONS
          - High-contrast Plantin Pro serif with soft paper shadow
          - Vibrant alpine cerulean action button (#0284c7)
          - Crisp cardstock off-white button for Rooms (#ffffff)
          - Verified Google rating subscript
         ========================================================================= */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Exact Layout Hook Line */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-3xl leading-[1.15] font-serif text-white drop-shadow-[0_2px_8px_rgba(2,15,26,0.95)]">
          Experience the Himalayas up close, right from your morning tea.
        </h1>

        {/* Exact Layout Sub-Lines */}
        <p className="text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-8 font-serif text-sky-100 drop-shadow-[0_2px_6px_rgba(2,15,26,0.9)]">
          Out on this ridge in Pelling, Kanchenjunga doesn&apos;t feel like a
          distant backdrop. She sits right in front of you, shedding her coat
          of morning mist and catching the first amber light while the rest of
          the valley is still asleep.
        </p>

        {/* Symmetrical Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Action Button: Vibrant Alpine Sapphire / Cerulean */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-56 py-3.5 px-6 rounded-2xl bg-[#0284c7] hover:bg-[#0369a1] active:scale-95 text-white font-bold text-xs uppercase tracking-widest shadow-[0_8px_25px_rgba(2,132,199,0.45)] border border-[#38bdf8]/50 transition-all duration-300 cursor-pointer hover:shadow-[0_12px_32px_rgba(2,132,199,0.6)] flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-4 h-4 text-white" />
            <span>Check Availability</span>
          </button>

          {/* Secondary Action Button: Crisp Off-White Cardstock */}
          <a
            href="#rooms"
            className="w-full sm:w-56 py-3.5 px-6 rounded-2xl border-2 border-[#124a72] bg-white hover:bg-slate-50 active:scale-95 text-[#072d47] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:border-[#072d47] flex items-center justify-center gap-2"
          >
            <BedDouble className="w-4 h-4 text-[#0284c7]" />
            <span>View Rooms</span>
          </a>
        </div>

        {/* Small Subscript Google Rating Mention (Directly Below Buttons) */}
        <div className="mt-4 pt-1">
          <a
            href={gmapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs transition-colors cursor-pointer group font-serif text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] font-semibold"
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
      <div className="absolute bottom-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none z-20" />
    </section>
  );
}
