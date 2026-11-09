"use client";

import React, { useState } from "react";
import { Star, ExternalLink } from "lucide-react";

interface HeroProps {
  onOpenBooking?: () => void;
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
      className="relative h-screen w-full overflow-hidden flex flex-col justify-start bg-[#548fae] select-none"
    >
      {/* =========================================================================
          LAYERED 3D PAPERCUT HIMALAYAN ALPINE SCENE
          - Continuous, sweeping Kanchenjunga mountain range across the entire horizon
          - Moving cut-paper clouds powered by Lottie motion design principles
          - Moving falling snowflakes, star flakes & soaring alpine birds
          - Dense pine forest treeline across the foothills
          - Rolling white paper snow meadows & slopes
          - Two symmetrical foreground pine trees draped in fresh snow
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

            {/* 2. Deep Paper Cutout Drop Shadow (for major Mountain Range & Trees) */}
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
              LAYER 1: Soaring Alpine Birds (Lottie Gliding Arc Motion)
              Parallax Rate: 3px
             ----------------------------------------------------------------- */}
          <g
            className="animate-alpine-birds"
            style={{
              transform: `translate3d(${mouseOffset.x * 3}px, ${mouseOffset.y * 2}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* V-formation birds soaring high across the alpine sky */}
            <path
              d="M1380,170 Q1390,162 1400,168 Q1410,162 1420,170 Q1410,174 1400,171 Q1390,174 1380,170 Z"
              fill="#061f33"
            />
            <path
              d="M1415,190 Q1423,183 1432,188 Q1440,183 1448,190 Q1440,193 1432,191 Q1424,193 1415,190 Z"
              fill="#061f33"
            />
            <path
              d="M1445,215 Q1452,209 1460,213 Q1467,209 1474,215 Q1467,218 1460,216 Q1453,218 1445,215 Z"
              fill="#061f33"
            />
            <path
              d="M1475,240 Q1481,235 1488,239 Q1494,235 1500,240 Q1494,242 1488,241 Q1482,242 1475,240 Z"
              fill="#061f33"
            />
            <path
              d="M1430,155 Q1437,150 1444,154 Q1450,150 1456,155 Q1450,157 1444,156 Q1438,157 1430,155 Z"
              fill="#061f33"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 2: MOVING PAPERCUT CLOUDS (Lottie Motion Skill)
              - Multiplane drifting arcs with natural ease-in-out physics
              - Ambient falling snowflakes & star flakes
              Parallax Rate: 6px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#softPaperShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 6}px, ${mouseOffset.y * 4}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* Cloud 1 (Left): Drifts on a natural curved arc via animate-paper-cloud-1 */}
            <g className="animate-paper-cloud-1">
              <path
                d="M160,170 L420,170 
                   Q415,135 385,135 
                   Q365,95 320,95 
                   Q275,70 235,95 
                   Q195,90 175,125 
                   Q165,140 160,170 Z"
                fill="#fbfbfd"
              />
            </g>

            {/* Cloud 2 (Right): Drifts on counter-motion arc via animate-paper-cloud-2 */}
            <g className="animate-paper-cloud-2">
              <path
                d="M1340,140 L1680,140 
                   Q1675,110 1645,110 
                   Q1620,75 1575,75 
                   Q1530,50 1480,75 
                   Q1435,70 1405,105 
                   Q1375,110 1340,140 Z"
                fill="#fbfbfd"
              />
            </g>

            {/* Cloud 3 (High-altitude central wisp): Slow ambient float */}
            <g className="animate-cloud-slow">
              <path
                d="M780,110 L1040,110 
                   Q1035,85 1010,85 
                   Q990,60 950,60 
                   Q915,40 875,60 
                   Q840,55 820,80 
                   Q800,85 780,110 Z"
                fill="#f8fafd"
                opacity="0.9"
              />
            </g>

            {/* Ambient Falling Snowflakes & 6-Point Star Flakes (Lottie Swaying Motion) */}
            <g className="animate-snowflake-sway">
              {/* Papercut Circular Snowflakes */}
              <circle cx="280" cy="70" r="4.5" fill="#ffffff" />
              <circle cx="360" cy="55" r="3.5" fill="#ffffff" />
              <circle cx="480" cy="105" r="5" fill="#ffffff" />
              <circle cx="580" cy="80" r="4" fill="#ffffff" />
              <circle cx="720" cy="120" r="5" fill="#ffffff" />
              <circle cx="860" cy="75" r="4.5" fill="#ffffff" />
              <circle cx="1060" cy="85" r="4" fill="#ffffff" />
              <circle cx="1180" cy="65" r="5.5" fill="#ffffff" />
              <circle cx="1270" cy="110" r="3.5" fill="#ffffff" />
              <circle cx="1740" cy="100" r="5" fill="#ffffff" />
              <circle cx="1830" cy="75" r="4" fill="#ffffff" />

              <circle cx="220" cy="230" r="4" fill="#ffffff" />
              <circle cx="460" cy="210" r="4.5" fill="#ffffff" />
              <circle cx="560" cy="190" r="3.5" fill="#ffffff" />
              <circle cx="680" cy="170" r="5" fill="#ffffff" />
              <circle cx="800" cy="210" r="4" fill="#ffffff" />
              <circle cx="1120" cy="200" r="4.5" fill="#ffffff" />
              <circle cx="1240" cy="180" r="5" fill="#ffffff" />
              <circle cx="1720" cy="210" r="4" fill="#ffffff" />

              {/* 6-Point Papercut Star Flakes */}
              <g transform="translate(340, 90) scale(0.85)">
                <line x1="0" y1="-9" x2="0" y2="9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="-7.8" y1="-4.5" x2="7.8" y2="4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="-7.8" y1="4.5" x2="7.8" y2="-4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              </g>
              <g transform="translate(640, 100) scale(0.9)">
                <line x1="0" y1="-9" x2="0" y2="9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="-7.8" y1="-4.5" x2="7.8" y2="4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="-7.8" y1="4.5" x2="7.8" y2="-4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              </g>
              <g transform="translate(1220, 130) scale(0.95)">
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="-8.6" y1="-5" x2="8.6" y2="5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="-8.6" y1="5" x2="8.6" y2="-5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              </g>
              <g transform="translate(1760, 150) scale(0.8)">
                <line x1="0" y1="-9" x2="0" y2="9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="-7.8" y1="-4.5" x2="7.8" y2="4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="-7.8" y1="4.5" x2="7.8" y2="-4.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            </g>
          </g>

          {/* -----------------------------------------------------------------
              LAYER 3: THE SWEEPING KANCHENJUNGA MOUNTAIN RANGE (MASSIV PANORAMA)
              - Continuous, interconnected alpine mountain range spanning edge to edge!
              - Towering central Main Summit (8,586m) with interlocking arêtes
              - Western ridge system (Kabru, Talung, Yalung Kang) on the left
              - Eastern ridge system (Kanchenjunga South, Pandim, Siniolchu) on the right
              - Multi-tier striated geological paper bands & cascading snow blankets
              Parallax Rate: 12px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#deepPaperShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 7}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* 3A. Rear Mountain Body Silhouette (Spanning 0 to 1920 across horizon) */}
            <path
              d="M-20,740 
                 L-20,530 
                 L140,440 
                 L240,470 
                 L380,350 
                 L520,400 
                 L680,310 
                 L820,360 
                 L960,200 
                 L1120,330 
                 L1260,280 
                 L1420,370 
                 L1560,320 
                 L1720,410 
                 L1840,460 
                 L1940,530 
                 L1940,740 
                 Z"
              fill="#08304c"
            />

            {/* 3B. Mountain Lit Facets & Ridge Walls (Cerulean Blue Cardstock #165682) */}
            <path
              d="M960,200 L1120,330 L1260,280 L1420,370 L1560,320 L1720,410 L1940,530 L1940,740 L960,740 Z"
              fill="#155580"
            />
            {/* Western Face Lit Facets on sub-ridges */}
            <path
              d="M380,350 L520,400 L680,310 L820,360 L960,740 L380,740 Z"
              fill="#10476e"
            />

            {/* 3C. Secondary Mountain Spurs / Interlocking Foreground Ridges */}
            {/* Center-Left Spur (Deep Cobalt #072a44) */}
            <path
              d="M680,310 L520,520 L660,610 L820,540 L960,740 L680,740 Z"
              fill="#093656"
            />
            {/* Center-Right Spur (Cerulean Spur #1c618e) */}
            <path
              d="M960,200 L952,430 L1080,520 L1220,620 L1380,540 L1260,280 Z"
              fill="#1c618e"
            />
            {/* Far Right Spur (Alpine Marine #16517a) */}
            <path
              d="M1560,320 L1460,510 L1620,630 L1800,560 L1940,740 L1560,740 Z"
              fill="#16517a"
            />
            {/* Far Left Spur (Slate Navy #124364) */}
            <path
              d="M380,350 L260,510 L420,620 L580,550 L380,740 Z"
              fill="#124364"
            />

            {/* 3D. Horizontal Striated Paper Bands (From Reference Image 1) */}
            <path
              d="M-20,630 L180,580 L440,640 L740,580 L1020,650 L1340,590 L1640,650 L1940,600 L1940,660 L1640,710 L1340,650 L1020,710 L740,640 L440,700 L180,640 L-20,690 Z"
              fill="#226a97"
              opacity="0.85"
            />
            <path
              d="M120,530 L380,480 L660,540 L960,490 L1260,550 L1560,500 L1820,560 L1760,600 L1560,550 L1260,600 L960,540 L660,590 L380,530 L120,580 Z"
              fill="#195982"
              opacity="0.9"
            />

            {/* 3E. Central Arête Spine Ridge (Sharp Paper Fold) */}
            <path
              d="M960,200 L950,380 L968,480 L948,600 L960,740 L944,740 L936,600 L954,480 L938,380 Z"
              fill="#031b2c"
              opacity="0.95"
            />

            {/* -------------------------------------------------------------
                3F. CONTINUOUS INTERCONNECTED SNOW CAPS & GLACIERS
                - Blankets the entire panoramic mountain range!
                - Sits on the summits, saddles, and cascading glacial slopes
                - Pure white cardstock (#ffffff) with soft drop shadow
               ------------------------------------------------------------- */}
            <g filter="url(#softPaperShadow)">
              {/* Continuous Western Snow Cap (Left Ridge to Central Peak) */}
              <path
                d="M-20,530 
                   L60,500 L140,440 L240,470 L380,350 L520,400 L680,310 L820,360 L960,200 
                   L960,440 
                   L945,410 L930,445 L895,395 L875,420 L840,370 L810,400 L765,355 L740,385 L690,345 
                   L660,375 L620,335 L585,365 L540,325 L505,355 L460,315 L430,345 L385,305 
                   L355,335 L310,295 L275,325 L230,285 L200,315 L150,275 L120,305 L70,265 L35,295 
                   L-20,530 Z"
                fill="#ffffff"
              />

              {/* Continuous Eastern Snow Cap (Central Peak to Right Ridge) */}
              <path
                d="M960,200 
                   L1120,330 L1260,280 L1420,370 L1560,320 L1720,410 L1840,460 L1940,530 
                   L1890,510 L1840,480 L1790,520 L1750,475 L1715,510 L1670,465 L1635,500 L1590,455 
                   L1555,490 L1510,445 L1475,480 L1430,435 L1395,470 L1350,425 L1315,460 L1270,415 
                   L1235,450 L1190,405 L1155,440 L1110,395 L1075,430 L1030,385 L995,420 L960,440 
                   Z"
                fill="#f1f5fa"
              />

              {/* Main Summit Center Snow Crease */}
              <path
                d="M960,200 L956,320 L964,380 L960,440 L964,380 L968,320 Z"
                fill="#d2dce6"
                opacity="0.8"
              />

              {/* Hanging Glacial Paper Facets on Mid-Flanks */}
              <path
                d="M620,440 L720,410 L700,470 L640,480 Z"
                fill="#ffffff"
                opacity="0.9"
              />
              <path
                d="M1200,420 L1300,390 L1280,450 L1220,460 Z"
                fill="#f3f6fa"
                opacity="0.9"
              />
            </g>
          </g>

          {/* -----------------------------------------------------------------
              LAYER 4: Dense Himalayan Pine Forest Treeline across Foothills
              Y-Range: 600 to 800
              Parallax Rate: 16px
             ----------------------------------------------------------------- */}
          <g
            filter="url(#forestShadow)"
            style={{
              transform: `translate3d(${mouseOffset.x * 16}px, ${mouseOffset.y * 9}px, 0)`,
              transition: "transform 0.38s ease-out",
            }}
          >
            {/* 1. Back Pine Treeline (Lighter Slate Navy #194566) */}
            <path
              d="M-20,740 
                 L-20,660 L10,630 L25,660 L40,625 L55,660 L70,635 L85,660 L100,620 L115,660 
                 L130,630 L145,660 L160,625 L175,660 L190,635 L205,660 L220,620 L235,660 
                 L250,630 L265,660 L280,625 L295,660 L310,635 L325,660 L340,620 L355,660 
                 L370,630 L385,660 L400,625 L415,660 L430,635 L445,660 L460,620 L475,660 
                 L490,630 L505,660 L520,625 L535,660 L550,635 L565,660 L580,620 L595,660 
                 L610,630 L625,660 L640,625 L655,660 L670,635 L685,660 L700,620 L715,660 
                 L730,630 L745,660 L760,625 L775,660 L790,635 L805,660 L820,620 L835,660 
                 L850,630 L865,660 L880,625 L895,660 L910,635 L925,660 L940,620 L955,660 
                 L970,630 L985,660 L1000,625 L1015,660 L1030,635 L1045,660 L1060,620 L1075,660 
                 L1090,630 L1105,660 L1120,625 L1135,660 L1150,635 L1165,660 L1180,620 L1195,660 
                 L1210,630 L1225,660 L1240,625 L1255,660 L1270,635 L1285,660 L1300,620 L1315,660 
                 L1330,630 L1345,660 L1360,625 L1375,660 L1390,635 L1405,660 L1420,620 L1435,660 
                 L1450,630 L1465,660 L1480,625 L1495,660 L1510,635 L1525,660 L1540,620 L1555,660 
                 L1570,630 L1585,660 L1600,625 L1615,660 L1630,635 L1645,660 L1660,620 L1675,660 
                 L1690,630 L1705,660 L1720,625 L1735,660 L1750,635 L1765,660 L1780,620 L1795,660 
                 L1810,630 L1825,660 L1840,625 L1855,660 L1870,635 L1885,660 L1900,620 L1915,660 
                 L1940,630 L1940,800 L-20,800 Z"
              fill="#194566"
            />

            {/* 2. Front Dense Pine Treeline (Deep Midnight Navy #06233a) */}
            <path
              d="M-20,800 
                 L-20,700 L20,650 L35,695 L60,640 L80,700 L105,655 L125,695 L150,645 L170,700 
                 L195,650 L215,695 L240,640 L260,700 L285,655 L305,695 L330,645 L350,700 
                 L375,650 L395,695 L420,640 L440,700 L465,655 L485,695 L510,645 L530,700 
                 L555,650 L575,695 L600,640 L620,700 L645,655 L665,695 L690,645 L710,700 
                 L735,650 L755,695 L780,640 L800,700 L825,655 L845,695 L870,645 L890,700 
                 L915,650 L935,695 L960,640 L980,700 L1005,655 L1025,695 L1050,645 L1070,700 
                 L1095,650 L1115,695 L1140,640 L1160,700 L1185,655 L1205,695 L1230,645 L1250,700 
                 L1275,650 L1295,695 L1320,640 L1340,700 L1365,655 L1385,695 L1410,645 L1430,700 
                 L1455,650 L1475,695 L1500,640 L1520,700 L1545,655 L1565,695 L1590,645 L1610,700 
                 L1635,650 L1655,695 L1680,640 L1700,700 L1725,655 L1745,695 L1770,645 L1790,700 
                 L1815,650 L1835,695 L1860,640 L1880,700 L1905,655 L1925,695 L1940,650 
                 L1940,860 L-20,860 Z"
              fill="#06233a"
            />
          </g>

          {/* -----------------------------------------------------------------
              LAYER 5: Rolling Papercut Snow Meadows & Slopes
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
              d="M-20,800 
                 Q280,740 620,780 
                 Q960,820 1320,750 
                 Q1640,700 1940,760 
                 L1940,960 
                 L-20,960 
                 Z"
              fill="#d7e5ee"
            />

            {/* Middle Snow Hill: Crisp Soft White (#eaf1f6) */}
            <path
              d="M-20,860 
                 Q340,800 740,850 
                 Q1140,900 1520,820 
                 Q1740,780 1940,830 
                 L1940,1040 
                 L-20,1040 
                 Z"
              fill="#eaf1f6"
            />

            {/* Foreground Snow Meadow: Pure Bright White (#ffffff) */}
            <path
              d="M-20,930 
                 Q260,870 640,910 
                 Q1080,960 1480,890 
                 Q1720,860 1940,910 
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
          MARGIN INDICATOR: VERTICAL SCROLL EXPLORATION (Left Edge)
         ========================================================================= */}
      <div className="hidden md:flex absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-30 pointer-events-none select-none">
        <div className="w-[1px] h-10 bg-[#08233a]/25" />
        <span
          className="font-editorial-mono text-[9px] tracking-[0.3em] uppercase text-[#08233a]/75 font-semibold"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL TO EXPLORE
        </span>
        <span className="text-xs text-[#1472d2] animate-bounce">↓</span>
        <div className="w-[1px] h-10 bg-[#08233a]/25" />
      </div>

      {/* =========================================================================
          ARCHITECTURAL & EXPEDITION ANNOTATION (Upper Right Sky)
         ========================================================================= */}
      <div className="hidden lg:block absolute top-24 right-8 xl:right-14 z-20 pointer-events-none font-editorial-mono text-[11px] text-[#061d30]/85 tracking-wider leading-relaxed select-none">
        <div className="flex items-center gap-1.5 text-[#1472d2] font-bold text-[10px] uppercase mb-1">
          <span>+</span>
          <span>EXPEDITION NOTE</span>
          <span className="w-8 h-[1px] bg-[#1472d2]/40" />
        </div>
        <p className="font-bold text-[#061d30]">KANCHENJUNGA RANGE • 8,586 M</p>
        <p className="text-[#08233a]/80">CHUMBONG RIDGE • ELEV. 7,200 FT</p>
        <p className="text-[#08233a]/70">FIRST LIGHT: 05:42 AM IST</p>
      </div>

      {/* =========================================================================
          VISTA & CONDITIONS CARD (Bottom Right)
         ========================================================================= */}
      <div className="hidden md:block absolute bottom-8 right-6 lg:right-12 z-20 pointer-events-none bg-white/75 backdrop-blur-md border border-[#124a72]/20 rounded-xl p-3.5 font-editorial-mono text-[10px] sm:text-[11px] text-[#061d30] shadow-sm select-none">
        <div className="flex items-center justify-between text-[#1472d2] font-bold uppercase mb-1.5 border-b border-[#124a72]/15 pb-1">
          <span>VISTA CONDITIONS</span>
          <span>+</span>
        </div>
        <div className="space-y-0.5 text-[#08233a]/85 font-medium">
          <div>ELEVATION: <span className="font-bold text-[#061d30]">7,200 FT</span></div>
          <div>RANGE: <span className="font-bold text-[#061d30]">180° UNBROKEN PEAKS</span></div>
          <div>AIR: <span className="font-bold text-[#061d30]">CRISP ALPINE HIGH</span></div>
          <div className="text-[10px] text-[#08233a]/70 pt-0.5">27.3054° N • 88.2411° E</div>
        </div>
      </div>

      {/* =========================================================================
          INDIGENOUS FLORA CARD (Bottom Left)
         ========================================================================= */}
      <div className="hidden lg:block absolute bottom-8 left-20 xl:left-24 z-20 pointer-events-none bg-white/70 backdrop-blur-md border border-[#124a72]/20 rounded-xl p-3 font-editorial-mono text-[10px] text-[#061d30] shadow-sm select-none">
        <div className="flex items-center justify-between text-[#1472d2] font-bold uppercase mb-1 border-b border-[#124a72]/15 pb-1">
          <span>INDIGENOUS FLORA</span>
          <span>+</span>
        </div>
        <div className="space-y-0.5 text-[#08233a]/80">
          <div>• RHODODENDRON ARBOREUM</div>
          <div>• EAST HIMALAYAN BLUE PINE</div>
          <div>• WILD ALPINE JUNIPER</div>
        </div>
      </div>

      {/* =========================================================================
          MAIN EDITORIAL HOOK LINE: BLENDED INTO THE SCENE (Left Aligned)
          - Tall condensed woodblock / letterpress lettering (Reference Style)
          - "THE" highlighted in vivid sky blue (#1472d2)
          - Delicate sub-line note & quiet accent
          - Zero noisy marketing CTA buttons or paragraphs
         ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-28 sm:pt-32 lg:pt-36 flex flex-col items-start select-none">
        {/* Subtle Verified Google Rating Tag */}
        <div className="mb-4 sm:mb-5">
          <a
            href={gmapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#124a72]/20 text-xs text-[#061d30] hover:bg-white transition-all shadow-sm group"
          >
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-[11px]">4.2 / 5.0</span>
            <span className="text-[#08233a]/75 text-[11px] font-sans">• 100+ Google Reviews</span>
            <ExternalLink className="w-3 h-3 text-[#1472d2] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Tall Condensed Letterpress Headline */}
        <h1 className="font-hero-condensed uppercase tracking-tight">
          <span className="block text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[102px] xl:text-[118px] leading-[0.88] text-[#061d30] drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]">
            EXPERIENCE
          </span>
          <span className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[102px] xl:text-[118px] leading-[0.88]">
            <span className="text-[#1472d2] drop-shadow-[0_2px_5px_rgba(255,255,255,0.5)]">
              THE
            </span>
            <span className="text-[#061d30] drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]">
              HIMALAYAS
            </span>
          </span>
        </h1>

        {/* Quiet Subtitle Note & Accent Rule */}
        <div className="mt-4 sm:mt-5 max-w-md">
          <p className="text-xs sm:text-sm md:text-base font-serif italic text-[#08233a] font-semibold leading-relaxed tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
            Up close from your morning tea • Chumbong, West Sikkim
          </p>
          <div className="w-12 h-[2px] bg-[#1472d2] mt-2.5 rounded-full" />
        </div>
      </div>
    </section>
  );
}
