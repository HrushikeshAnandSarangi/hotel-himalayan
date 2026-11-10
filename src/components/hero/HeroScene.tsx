"use client";

import React, { useMemo } from "react";

interface HeroSceneProps {
  mouseOffset: { x: number; y: number };
}

interface PineConfig {
  id: string;
  cx: number;
  baseY: number;
  scale: number;
  flip?: boolean;
  darkColor: string;
  midColor: string;
  crownColor: string;
}

const FOUR_POINT_STARS = [
  { x: 165, y: 74, s: 1.0, delay: "0s" },
  { x: 480, y: 58, s: 1.2, delay: "1.3s" },
  { x: 865, y: 48, s: 1.1, delay: "2.4s" },
  { x: 1185, y: 72, s: 0.9, delay: "0.8s" },
  { x: 1680, y: 66, s: 1.15, delay: "1.9s" },
];

const TWINKLE_DOTS = [
  { cx: 290, cy: 115, r: 1.4, delay: "0.4s" },
  { cx: 615, cy: 96, r: 1.6, delay: "1.7s" },
  { cx: 740, cy: 52, r: 1.2, delay: "2.9s" },
  { cx: 1020, cy: 92, r: 1.5, delay: "0.9s" },
  { cx: 1320, cy: 110, r: 1.3, delay: "2.2s" },
  { cx: 1545, cy: 54, r: 1.7, delay: "1.1s" },
  { cx: 1810, cy: 108, r: 1.4, delay: "0.2s" },
];

const ICE_DUST_MOTES = [
  { cx: 210, cy: 195, r: 3.2, op: 0.65 },
  { cx: 410, cy: 255, r: 2.2, op: 0.5 },
  { cx: 590, cy: 168, r: 3.8, op: 0.58 },
  { cx: 750, cy: 295, r: 2.6, op: 0.7 },
  { cx: 920, cy: 188, r: 3.0, op: 0.5 },
  { cx: 1110, cy: 148, r: 2.4, op: 0.62 },
  { cx: 1270, cy: 315, r: 4.0, op: 0.55 },
  { cx: 1490, cy: 210, r: 2.5, op: 0.68 },
  { cx: 1665, cy: 285, r: 3.6, op: 0.52 },
  { cx: 1815, cy: 172, r: 2.3, op: 0.6 },
  { cx: 335, cy: 495, r: 3.0, op: 0.48 },
  { cx: 645, cy: 525, r: 2.4, op: 0.58 },
  { cx: 960, cy: 455, r: 3.5, op: 0.45 },
  { cx: 1390, cy: 515, r: 2.8, op: 0.52 },
  { cx: 1585, cy: 470, r: 3.4, op: 0.5 },
];

const BOKEH_SNOW_FLAKES = [
  { cx: 170, cy: 615, r: 5.5, op: 0.35 },
  { cx: 490, cy: 735, r: 6.5, op: 0.32 },
  { cx: 810, cy: 660, r: 4.5, op: 0.42 },
  { cx: 1020, cy: 805, r: 7.0, op: 0.28 },
  { cx: 1340, cy: 695, r: 5.2, op: 0.38 },
  { cx: 1715, cy: 625, r: 6.0, op: 0.32 },
  { cx: 710, cy: 885, r: 4.8, op: 0.45 },
  { cx: 1190, cy: 905, r: 5.5, op: 0.42 },
  { cx: 930, cy: 945, r: 4.2, op: 0.38 },
];

const HERO_PINES: PineConfig[] = [
  {
    id: "left-main",
    cx: 235,
    baseY: 970,
    scale: 1.06,
    darkColor: "#0a2a40",
    midColor: "#144464",
    crownColor: "#205d85",
  },
  {
    id: "left-sister",
    cx: 382,
    baseY: 932,
    scale: 0.66,
    flip: true,
    darkColor: "#123b57",
    midColor: "#1d577d",
    crownColor: "#2b6f9b",
  },
  {
    id: "mid-left-sapling",
    cx: 655,
    baseY: 842,
    scale: 0.34,
    darkColor: "#164362",
    midColor: "#215c82",
    crownColor: "#2e739e",
  },
  {
    id: "mid-right-sapling",
    cx: 1275,
    baseY: 836,
    scale: 0.36,
    flip: true,
    darkColor: "#164362",
    midColor: "#215c82",
    crownColor: "#2e739e",
  },
  {
    id: "right-sister",
    cx: 1525,
    baseY: 918,
    scale: 0.7,
    flip: true,
    darkColor: "#123b57",
    midColor: "#1d577d",
    crownColor: "#2b6f9b",
  },
  {
    id: "right-main",
    cx: 1685,
    baseY: 958,
    scale: 1.02,
    darkColor: "#0a2a40",
    midColor: "#144464",
    crownColor: "#205d85",
  },
];

/** Builds a deterministic organic stepped-conifer forest canopy across X=[-40..1960] */
function buildOrganicForestPath(
  bottomY: number,
  ridgeY: number,
  seedOffset: number,
  spacing: number,
  heightVar: number
): string {
  const pts: string[] = [`M-40,${bottomY}`, `L-40,${ridgeY}`];
  for (let x = -30; x <= 1950; x += spacing) {
    const n = Math.sin((x + seedOffset) * 0.017) * 0.6 + Math.cos((x + seedOffset) * 0.043) * 0.4;
    const h = 44 + Math.abs(Math.sin((x + seedOffset) * 0.091)) * heightVar;
    const w = spacing * (0.58 + Math.abs(Math.cos((x + seedOffset) * 0.05)) * 0.28);
    const base = ridgeY + n * 16;

    // 3 stepped conifer tiers per tree instead of a sharp robotic triangle
    pts.push(`L${(x - w * 0.85).toFixed(1)},${(base - h * 0.22).toFixed(1)}`);
    pts.push(`L${(x - w * 0.45).toFixed(1)},${(base - h * 0.28).toFixed(1)}`);
    pts.push(`L${(x - w * 0.58).toFixed(1)},${(base - h * 0.56).toFixed(1)}`);
    pts.push(`L${(x - w * 0.25).toFixed(1)},${(base - h * 0.62).toFixed(1)}`);
    pts.push(`L${x.toFixed(1)},${(base - h).toFixed(1)}`);
    pts.push(`L${(x + w * 0.25).toFixed(1)},${(base - h * 0.62).toFixed(1)}`);
    pts.push(`L${(x + w * 0.58).toFixed(1)},${(base - h * 0.56).toFixed(1)}`);
    pts.push(`L${(x + w * 0.45).toFixed(1)},${(base - h * 0.28).toFixed(1)}`);
    pts.push(`L${(x + w * 0.85).toFixed(1)},${(base - h * 0.22).toFixed(1)}`);
    pts.push(`L${(x + spacing * 0.5).toFixed(1)},${base.toFixed(1)}`);
  }
  pts.push(`L1960,${bottomY}`, "Z");
  return pts.join(" ");
}

/** Natural multi-bough Himalayan cedar with organic drooping snow blankets */
function SnowPine({
  cx,
  baseY,
  scale,
  flip = false,
  darkColor,
  midColor,
  crownColor,
}: PineConfig) {
  const mirror = flip ? -scale : scale;
  return (
    <g transform={`translate(${cx}, ${baseY}) scale(${mirror}, ${scale})`}>
      {/* Soft Indigo-Blue Snow Ground Contact Shadow */}
      <ellipse cx="0" cy="4" rx="84" ry="11" fill="#8fb8d4" opacity="0.45" />

      {/* Natural Tapered Trunk */}
      <path d="M-10,-46 L10,-46 L12,4 L-12,4 Z" fill="#3a2920" />
      <path d="M1,-46 L10,-46 L12,4 L0,4 Z" fill="#251913" opacity="0.72" />

      {/* Tier 5 (Broad Lower Boughs) */}
      <path
        d="M0,-195 C-38,-140 -78,-98 -114,-74 C-92,-58 -68,-64 -48,-72 C-24,-55 18,-52 46,-70 C72,-58 95,-60 112,-76 C76,-102 36,-142 0,-195 Z"
        fill={darkColor}
      />
      <path
        d="M0,-128 C-34,-108 -74,-90 -114,-74 C-86,-63 -64,-70 -44,-78 C-18,-62 18,-60 44,-76 C68,-66 90,-66 112,-76 C74,-92 34,-110 0,-128 Z"
        fill="url(#hero-snow-drape)"
      />

      {/* Tier 4 (Lower-Mid Boughs) */}
      <path
        d="M0,-252 C-34,-204 -68,-168 -96,-146 C-76,-132 -54,-138 -36,-146 C-16,-132 16,-130 38,-146 C58,-136 78,-136 94,-148 C66,-172 34,-208 0,-252 Z"
        fill={darkColor}
      />
      <path
        d="M0,-192 C-30,-174 -64,-158 -96,-146 C-72,-137 -52,-144 -34,-152 C-14,-139 14,-138 36,-152 C54,-143 74,-142 94,-148 C64,-162 32,-178 0,-192 Z"
        fill="url(#hero-snow-drape)"
      />

      {/* Tier 3 (Mid Boughs) */}
      <path
        d="M0,-306 C-28,-265 -54,-232 -78,-214 C-60,-200 -42,-206 -26,-212 C-10,-200 12,-200 28,-212 C44,-204 62,-204 76,-214 C54,-236 28,-268 0,-306 Z"
        fill={midColor}
      />
      <path
        d="M0,-252 C-24,-236 -52,-222 -78,-214 C-56,-205 -40,-212 -24,-218 C-10,-208 12,-208 26,-218 C42,-211 58,-210 76,-214 C50,-225 26,-238 0,-252 Z"
        fill="url(#hero-snow-drape)"
      />

      {/* Tier 2 (Upper Boughs) */}
      <path
        d="M0,-356 C-20,-322 -42,-292 -60,-276 C-46,-266 -30,-270 -18,-274 C-6,-266 8,-266 20,-274 C34,-268 48,-268 58,-276 C40,-294 20,-324 0,-356 Z"
        fill={crownColor}
      />
      <path
        d="M0,-308 C-18,-295 -40,-284 -60,-276 C-44,-268 -28,-274 -16,-279 C-6,-272 8,-272 18,-279 C32,-273 46,-272 58,-276 C38,-286 18,-296 0,-308 Z"
        fill="url(#hero-snow-drape)"
      />

      {/* Tier 1 (Apex Snow Spire) */}
      <path
        d="M0,-404 C-14,-378 -28,-354 -40,-336 C-28,-328 -16,-332 -8,-335 C0,-329 8,-329 14,-335 C24,-331 32,-330 38,-336 C26,-354 14,-378 0,-404 Z"
        fill={crownColor}
      />
      <path
        d="M0,-404 C-12,-384 -22,-366 -32,-350 C-20,-344 -10,-348 0,-346 C10,-348 20,-344 30,-350 C20,-366 10,-384 0,-404 Z"
        fill="#ffffff"
      />
    </g>
  );
}

/** Layered glowing soft dream cloud built from blurred translucent puffs */
function DreamCloud({
  cx,
  cy,
  scale = 1,
  tint = "#ffffff",
  underTint = "#cfe6f5",
}: {
  cx: number;
  cy: number;
  scale?: number;
  tint?: string;
  underTint?: string;
}) {
  return (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`}>
      <ellipse cx="0" cy="18" rx="140" ry="22" fill={underTint} opacity="0.55" filter="url(#hero-mist-soft)" />
      <ellipse cx="-55" cy="6" rx="68" ry="24" fill={tint} opacity="0.88" filter="url(#hero-cloud-soft)" />
      <ellipse cx="48" cy="8" rx="74" ry="22" fill={tint} opacity="0.86" filter="url(#hero-cloud-soft)" />
      <ellipse cx="-6" cy="-6" rx="82" ry="30" fill={tint} opacity="0.94" filter="url(#hero-cloud-soft)" />
    </g>
  );
}

export default function HeroScene({ mouseOffset }: HeroSceneProps) {
  const distantForest = useMemo(
    () => buildOrganicForestPath(830, 682, 130, 42, 34),
    []
  );
  const nearForest = useMemo(
    () => buildOrganicForestPath(870, 732, 490, 46, 40),
    []
  );

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        role="img"
        aria-label="Dreamlike panoramic landscape of Mt. Kanchenjunga surrounded by drifting morning mist, glowing cabin, and snow-dusted Himalayan pine forests"
      >
        <defs>
          {/* 1. Multi-Stop Ethereal Dawn Sky Gradient (7 Stops, LinearRGB) */}
          <linearGradient
            id="hero-sky-dream"
            x1="0"
            y1="0"
            x2="0.22"
            y2="1"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#528cb2" />
            <stop offset="18%" stopColor="#72abc9" />
            <stop offset="40%" stopColor="#9dcae3" />
            <stop offset="62%" stopColor="#c9e3f2" />
            <stop offset="78%" stopColor="#e5f2fa" />
            <stop offset="90%" stopColor="#f5f8fc" />
            <stop offset="100%" stopColor="#fff7ea" />
          </linearGradient>

          {/* 2. Atmospheric Aurora Mist Ribbon */}
          <linearGradient
            id="hero-aurora-veil"
            x1="0"
            y1="0"
            x2="1"
            y2="0.4"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0" />
            <stop offset="35%" stopColor="#e0f2fe" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#fef3c7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
          </linearGradient>

          {/* 3. Celestial Dawn Orb & Concentric Dream Halos */}
          <radialGradient
            id="hero-sun-halo"
            cx="50%"
            cy="50%"
            r="50%"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#fffef8" stopOpacity="0.95" />
            <stop offset="16%" stopColor="#fef3c7" stopOpacity="0.65" />
            <stop offset="42%" stopColor="#e0f2fe" stopOpacity="0.34" />
            <stop offset="72%" stopColor="#bae6fd" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
          </radialGradient>

          <radialGradient
            id="hero-sun-core"
            cx="50%"
            cy="50%"
            r="50%"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="62%" stopColor="#fffbeb" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
          </radialGradient>

          {/* 4. Volumetric Dawn Light Rays */}
          <linearGradient
            id="hero-ray-grad"
            x1="0.7"
            y1="0"
            x2="0.2"
            y2="1"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.42" />
            <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* 5. Mountain Aerial-Perspective Gradients */}
          <linearGradient
            id="hero-peak-shadow"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#092f4c" />
            <stop offset="45%" stopColor="#134870" />
            <stop offset="100%" stopColor="#2a6894" />
          </linearGradient>

          <linearGradient
            id="hero-peak-lit"
            x1="0"
            y1="0"
            x2="0.3"
            y2="1"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#256999" />
            <stop offset="50%" stopColor="#3882b0" />
            <stop offset="100%" stopColor="#72add1" />
          </linearGradient>

          <linearGradient
            id="hero-spur-indigo"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#0e3c61" />
            <stop offset="60%" stopColor="#1e5a85" />
            <stop offset="100%" stopColor="#528eb5" />
          </linearGradient>

          {/* 6. Alpenglow Lit Glacier & Cool Ice Shadow Sheets */}
          <linearGradient
            id="hero-glacier-lit"
            x1="1"
            y1="0"
            x2="0"
            y2="1"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#fff8ed" />
            <stop offset="28%" stopColor="#ffffff" />
            <stop offset="72%" stopColor="#e9f4fb" />
            <stop offset="100%" stopColor="#cbe2f2" />
          </linearGradient>

          <linearGradient
            id="hero-glacier-cool"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#f2f8fd" />
            <stop offset="58%" stopColor="#ddecf7" />
            <stop offset="100%" stopColor="#b8d5ea" />
          </linearGradient>

          <linearGradient
            id="hero-snow-drape"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="72%" stopColor="#eff7fc" />
            <stop offset="100%" stopColor="#cfe3f2" />
          </linearGradient>

          {/* 7. Soft Warm Cabin Window Glow */}
          <radialGradient
            id="hero-warm-lantern"
            cx="50%"
            cy="50%"
            r="50%"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" />
            <stop offset="38%" stopColor="#fbbf24" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>

          {/* 8. Sculpted Foreground Snowfield Gradients */}
          <linearGradient
            id="hero-meadow-mid"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#dfedf7" />
            <stop offset="65%" stopColor="#eef6fb" />
            <stop offset="100%" stopColor="#f8fbfe" />
          </linearGradient>

          <linearGradient
            id="hero-meadow-front"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            colorInterpolation="linearRGB"
          >
            <stop offset="0%" stopColor="#f2f8fc" />
            <stop offset="48%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fafbfd" />
          </linearGradient>

          {/* 9. Atmospheric Blur & Grain Filters (LinearRGB) */}
          <filter
            id="hero-mist-deep"
            x="-20%"
            y="-40%"
            width="140%"
            height="180%"
            colorInterpolationFilters="linearRGB"
          >
            <feGaussianBlur stdDeviation="28" />
          </filter>

          <filter
            id="hero-mist-soft"
            x="-20%"
            y="-40%"
            width="140%"
            height="180%"
            colorInterpolationFilters="linearRGB"
          >
            <feGaussianBlur stdDeviation="14" />
          </filter>

          <filter
            id="hero-cloud-soft"
            x="-15%"
            y="-25%"
            width="130%"
            height="150%"
            colorInterpolationFilters="linearRGB"
          >
            <feGaussianBlur stdDeviation="3.2" />
          </filter>

          <filter
            id="hero-glow-soft"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
            colorInterpolationFilters="linearRGB"
          >
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter
            id="hero-paper-depth"
            x="-15%"
            y="-15%"
            width="130%"
            height="135%"
            colorInterpolationFilters="linearRGB"
          >
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="8"
              floodColor="#072238"
              floodOpacity="0.2"
            />
          </filter>

          <filter
            id="hero-dream-grain"
            x="0"
            y="0"
            width="100%"
            height="100%"
            colorInterpolationFilters="linearRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>

        {/* =================================================================
            LAYER 0: LUMINOUS DAWN SKY, AURORA VEIL, STARS & SUN HALO
           ================================================================= */}
        <rect width="1920" height="1080" fill="url(#hero-sky-dream)" />

        {/* Ethereal Diagonal Atmospheric Aurora Veil */}
        <path
          d="M-100,260 Q480,140 1050,240 T2020,160 L2020,390 Q1440,340 880,410 T-100,450 Z"
          fill="url(#hero-aurora-veil)"
          filter="url(#hero-mist-deep)"
          opacity="0.7"
        />

        {/* Twinkling Stars & 4-Point Diamond Celestial Sparkles */}
        <g id="dream-stars">
          {TWINKLE_DOTS.map((dot, idx) => (
            <circle
              key={`dot-${idx}`}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill="#ffffff"
              className="animate-star-twinkle"
              style={{ animationDelay: dot.delay }}
            />
          ))}
          {FOUR_POINT_STARS.map((star, idx) => (
            <path
              key={`star4-${idx}`}
              d={`M${star.x},${star.y - 7 * star.s} Q${star.x},${star.y} ${star.x + 7 * star.s},${star.y} Q${star.x},${star.y} ${star.x},${star.y + 7 * star.s} Q${star.x},${star.y} ${star.x - 7 * star.s},${star.y} Q${star.x},${star.y} ${star.x},${star.y - 7 * star.s} Z`}
              fill="#ffffff"
              className="animate-star-twinkle"
              style={{ animationDelay: star.delay }}
            />
          ))}
        </g>

        {/* Veiled Dawn Celestial Orb & Volumetric Light Rays */}
        <g
          style={{
            transform: `translate3d(${mouseOffset.x * 2}px, ${mouseOffset.y * 1.5}px, 0)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          <circle cx="1445" cy="240" r="460" fill="url(#hero-sun-halo)" />
          <circle cx="1445" cy="240" r="245" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.16" />
          <circle cx="1445" cy="240" r="145" fill="none" stroke="#fef3c7" strokeWidth="1.2" opacity="0.22" />
          <circle cx="1445" cy="240" r="54" fill="url(#hero-sun-core)" filter="url(#hero-glow-soft)" />

          <g className="animate-ray-shimmer" style={{ mixBlendMode: "screen" }}>
            <polygon points="1445,240 810,760 970,760" fill="url(#hero-ray-grad)" />
            <polygon points="1445,240 1050,770 1230,770" fill="url(#hero-ray-grad)" />
            <polygon points="1445,240 1330,770 1550,770" fill="url(#hero-ray-grad)" />
            <polygon points="1445,240 1650,750 1860,750" fill="url(#hero-ray-grad)" />
          </g>
        </g>

        {/* =================================================================
            LAYER 1: DISTANT GHOSTLY OUTER HORIZONS + HIMALAYAN HAZE
           ================================================================= */}
        <g
          style={{
            transform: `translate3d(${mouseOffset.x * 4}px, ${mouseOffset.y * 2.5}px, 0)`,
            transition: "transform 0.45s ease-out",
          }}
        >
          <path
            d="M-40,680 L130,545 L265,570 L425,470 L585,515 L750,385 L905,435 L1065,305 L1240,390 L1410,305 L1570,395 L1735,345 L1885,435 L1960,490 L1960,720 L-40,720 Z"
            fill="#88b8d6"
            opacity="0.4"
          />
          <ellipse
            cx="960"
            cy="525"
            rx="1160"
            ry="105"
            fill="#ebf6fd"
            opacity="0.48"
            filter="url(#hero-mist-deep)"
            className="animate-mist-slow"
          />
        </g>

        {/* =================================================================
            LAYER 2: SOFT BLURRED DREAMSCAPE CLOUDS & ALPINE BIRDS
           ================================================================= */}
        <g
          style={{
            transform: `translate3d(${mouseOffset.x * 6}px, ${mouseOffset.y * 3.5}px, 0)`,
            transition: "transform 0.45s ease-out",
          }}
        >
          <g className="animate-alpine-birds" fill="#103854" opacity="0.72">
            <path d="M1225,188 Q1236,180 1247,186 Q1258,180 1269,188 Q1258,191 1247,188 Q1236,191 1225,188 Z" />
            <path d="M1268,208 Q1277,201 1286,206 Q1295,201 1304,208 Q1295,211 1286,209 Q1277,211 1268,208 Z" />
            <path d="M1298,175 Q1305,169 1312,173 Q1319,169 1326,175 Q1319,177 1312,175 Q1305,177 1298,175 Z" />
            <path d="M1312,225 Q1318,220 1325,223 Q1331,220 1338,225 Q1331,227 1325,225 Q1318,227 1312,225 Z" />
          </g>

          <g className="animate-paper-cloud-1" opacity="0.82">
            <DreamCloud cx={870} cy={175} scale={0.95} />
          </g>
          <g className="animate-paper-cloud-2" opacity="0.9">
            <DreamCloud cx={1675} cy={150} scale={1.08} tint="#fffef9" underTint="#dbeefa" />
          </g>
          <g className="animate-cloud-slow" opacity="0.58">
            <DreamCloud cx={560} cy={265} scale={0.72} />
            <DreamCloud cx={1195} cy={310} scale={0.84} />
          </g>
        </g>

        {/* =================================================================
            LAYER 3: SWEEPING KANCHENJUNGA MASSIF (SHADED & SCULPTED)
            - Upper-left ridge gently slopes lower for calm open-sky typography
            - Towering Kanchenjunga Main Summit rises majestically at x=1110
           ================================================================= */}
        <g
          filter="url(#hero-paper-depth)"
          style={{
            transform: `translate3d(${mouseOffset.x * 10}px, ${mouseOffset.y * 6}px, 0)`,
            transition: "transform 0.42s ease-out",
          }}
        >
          {/* 3A. Main Massif Body */}
          <path
            d="M-30,760 L-30,540 Q85,505 190,488 L305,512 Q415,455 510,432 L630,468 Q735,365 820,332 L935,382 Q1030,240 1110,192 Q1190,262 1265,315 L1385,258 Q1475,326 1555,362 L1675,310 Q1785,390 1880,440 L1950,492 L1950,760 Z"
            fill="url(#hero-peak-shadow)"
          />

          {/* 3B. Sunlit Eastern Faces & Glacial Arête Ridges */}
          <path
            d="M1110,192 Q1190,262 1265,315 L1385,258 Q1475,326 1555,362 L1675,310 Q1785,390 1880,440 L1950,492 L1950,760 L1065,760 L1085,485 Z"
            fill="url(#hero-peak-lit)"
          />
          <path
            d="M820,332 L935,382 L982,565 L835,760 L795,760 Z"
            fill="url(#hero-spur-indigo)"
          />
          <path
            d="M510,432 L630,468 L675,600 L505,760 L470,760 Z"
            fill="#144d75"
          />

          {/* Interlocking Secondary Mountain Spurs */}
          <path
            d="M1110,192 L1092,402 L1210,515 L1350,640 L1385,258 L1265,315 Z"
            fill="#286c99"
            opacity="0.72"
          />
          <path
            d="M1675,310 L1605,530 L1755,645 L1950,760 L1950,492 L1880,440 Z"
            fill="#1f5e8a"
            opacity="0.85"
          />

          {/* 3C. Cascading Sculpted Snow Caps & Ice Crevasses */}
          <g>
            {/* Eastern Lit Glacier Sheet (slight 2px underlap prevents subpixel seam) */}
            <path
              d="M1110,192 Q1190,262 1265,315 L1385,258 Q1475,326 1555,362 L1675,310 Q1785,390 1880,440 L1950,492 L1865,472 L1798,505 L1735,442 L1682,478 L1675,412 L1608,456 L1540,418 L1475,456 L1415,398 L1385,368 L1328,418 L1268,384 L1202,438 L1150,388 L1088,418 Z"
              fill="url(#hero-glacier-lit)"
            />

            {/* Western Shadowed Cool Snow Sheet */}
            <path
              d="M-30,540 Q85,505 190,488 L305,512 Q415,455 510,432 L630,468 Q735,365 820,332 L935,382 Q1030,240 1110,192 L1092,418 L1038,376 L988,425 L935,440 L885,400 L832,450 L820,396 L750,440 L692,416 L630,492 L562,462 L510,486 L452,462 L385,515 L305,536 L242,512 L185,532 L95,522 L-30,558 Z"
              fill="url(#hero-glacier-cool)"
            />

            {/* Wind-Blown Summit Snow Plume Drifting Softly Eastward */}
            <path
              d="M1110,192 Q1145,172 1195,182 Q1225,190 1245,186 Q1200,198 1152,202 Z"
              fill="#ffffff"
              opacity="0.65"
              filter="url(#hero-cloud-soft)"
            />
          </g>
        </g>

        {/* =================================================================
            LAYER 4: SILKY SEA OF VALLEY CLOUDS BETWEEN PEAKS & PINES
           ================================================================= */}
        <g id="dreamy-valley-mist">
          <ellipse
            cx="410"
            cy="655"
            rx="580"
            ry="72"
            fill="#eef7fd"
            opacity="0.68"
            filter="url(#hero-mist-deep)"
            className="animate-mist-slow"
          />
          <ellipse
            cx="1440"
            cy="635"
            rx="620"
            ry="78"
            fill="#f4faff"
            opacity="0.72"
            filter="url(#hero-mist-deep)"
            className="animate-mist-fast"
          />
          <ellipse
            cx="960"
            cy="676"
            rx="790"
            ry="54"
            fill="#ffffff"
            opacity="0.54"
            filter="url(#hero-mist-soft)"
            className="animate-mist-slow"
          />
        </g>

        {/* =================================================================
            LAYER 5: ORGANIC LAYERED CONIFER RIDGES + CHUMBONG SANCTUARY CABIN
           ================================================================= */}
        <g
          style={{
            transform: `translate3d(${mouseOffset.x * 14}px, ${mouseOffset.y * 8}px, 0)`,
            transition: "transform 0.38s ease-out",
          }}
        >
          {/* Distant Misty Pine Canopy */}
          <path d={distantForest} fill="#24577a" opacity="0.82" />

          {/* Inter-Ridge Veil */}
          <rect
            x="-40"
            y="675"
            width="2000"
            height="88"
            fill="#dff0fa"
            opacity="0.32"
            filter="url(#hero-mist-soft)"
          />

          {/* Near Foothill Pine Canopy */}
          <path d={nearForest} fill="#0c304b" />

          {/* Cozy Chumbong Ridge Cabin + Morning Tea Hearth Smoke + Prayer Flags (x=1040, well centered for Desktop & Mobile) */}
          <g id="chumbong-sanctuary-cabin" transform="translate(1038, 658)">
            {/* Prayer Flag Poles & Gently Fluttering Strings */}
            <line x1="-88" y1="64" x2="-88" y2="14" stroke="#082438" strokeWidth="2" />
            <line x1="108" y1="60" x2="108" y2="18" stroke="#082438" strokeWidth="2" />
            <g className="animate-prayer-flags">
              <path
                d="M-88,18 Q-45,32 -10,24"
                fill="none"
                stroke="#082438"
                strokeWidth="0.9"
                opacity="0.75"
              />
              <polygon points="-76,23 -68,25 -69,31 -77,29" fill="#38bdf8" opacity="0.8" />
              <polygon points="-62,26 -54,27 -55,33 -63,32" fill="#ffffff" opacity="0.9" />
              <polygon points="-48,27 -40,27 -41,33 -49,33" fill="#fbbf24" opacity="0.8" />
              <polygon points="-34,26 -26,25 -27,31 -35,32" fill="#34d399" opacity="0.75" />
              <polygon points="-20,25 -12,23 -13,29 -21,31" fill="#f87171" opacity="0.75" />
            </g>

            {/* Curling Hearth & Tea Kettle Chimney Smoke */}
            <g className="animate-smoke-rise">
              <path
                d="M66,6 Q58,-8 68,-22 Q78,-38 66,-56"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.55"
                filter="url(#hero-glow-soft)"
              />
              <path
                d="M66,4 Q72,-12 62,-28"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.45"
              />
            </g>

            {/* Chimney & Mountain Lodge Silhouette */}
            <rect x="61" y="4" width="10" height="22" fill="#072236" />
            <polygon points="-6,28 42,4 90,28 90,62 -6,62" fill="#072236" />
            <path d="M-14,30 L42,0 L98,30 L92,33 L42,6 L-8,33 Z" fill="#eef6fc" />
            {/* Cantilevered Morning Tea Deck */}
            <rect x="-26" y="46" width="24" height="3.5" fill="#092a42" />
            <line x1="-24" y1="49" x2="-24" y2="62" stroke="#092a42" strokeWidth="2" />

            {/* Warm Glowing Windows & Halo */}
            <circle cx="26" cy="40" r="24" fill="url(#hero-warm-lantern)" className="animate-lantern-glow" />
            <circle
              cx="58"
              cy="40"
              r="22"
              fill="url(#hero-warm-lantern)"
              className="animate-lantern-glow"
              style={{ animationDelay: "1.4s" }}
            />
            <rect x="20" y="34" width="12" height="12" rx="1.5" fill="#fef08a" />
            <rect x="52" y="34" width="12" height="12" rx="1.5" fill="#fde68a" />
            <rect x="38" y="42" width="8" height="18" rx="1" fill="#fbbf24" opacity="0.72" />
          </g>
        </g>

        {/* =================================================================
            LAYER 6: SCULPTED SNOWDRIFTS, BOULDERS, TRAIL & MIST
           ================================================================= */}
        <g
          style={{
            transform: `translate3d(${mouseOffset.x * 19}px, ${mouseOffset.y * 10}px, 0)`,
            transition: "transform 0.35s ease-out",
          }}
        >
          {/* Upper Glacial Snow Bank */}
          <path
            d="M-40,795 Q280,740 620,785 Q980,835 1360,760 Q1680,715 1960,770 L1960,960 L-40,960 Z"
            fill="#cde1ef"
          />

          {/* Flowing Mist Ribbon Skimming Foothills */}
          <ellipse
            cx="780"
            cy="788"
            rx="640"
            ry="36"
            fill="#ffffff"
            opacity="0.52"
            filter="url(#hero-mist-soft)"
            className="animate-mist-fast"
          />

          {/* Middle Rolling Snow Meadow */}
          <path
            d="M-40,860 Q360,795 760,854 Q1150,906 1540,826 Q1760,786 1960,836 L1960,1045 L-40,1045 Z"
            fill="url(#hero-meadow-mid)"
          />

          {/* Delicate Winding Snow Footpath Leading Upward Toward Cabin */}
          <path
            d="M1032,782 Q985,845 900,908 Q815,968 765,1085 L872,1085 Q915,968 975,905 Q1025,842 1046,782 Z"
            fill="#bfd8ea"
            opacity="0.58"
          />

          {/* Snow-Dusted Alpine Boulders for Natural Scale */}
          <g fill="#45718f">
            <path d="M770,895 Q785,876 812,882 Q832,886 838,900 Z" opacity="0.65" />
            <path d="M775,888 Q792,874 818,882 Q800,888 775,888 Z" fill="#ffffff" />
            <path d="M1115,918 Q1132,900 1158,906 Q1174,912 1178,924 Z" opacity="0.6" />
            <path d="M1120,912 Q1136,898 1162,906 Q1142,911 1120,912 Z" fill="#ffffff" />
          </g>

          {/* Soft Pale-Blue Snow Contour Crests Across Lower Meadow */}
          <path
            d="M-40,942 Q280,884 680,930 Q1100,978 1500,906 Q1740,874 1960,922 L1960,1085 L-40,1085 Z"
            fill="url(#hero-meadow-front)"
          />
          <path
            d="M380,1025 Q760,985 1120,1022 Q1450,1055 1820,1005"
            fill="none"
            stroke="#d7e8f3"
            strokeWidth="3"
            opacity="0.65"
          />
        </g>

        {/* =================================================================
            LAYER 7: LUSH BOTANICAL HIMALAYAN CEDAR PINES (6 TREES ACROSS DEPTHS)
           ================================================================= */}
        <g
          filter="url(#hero-paper-depth)"
          style={{
            transform: `translate3d(${mouseOffset.x * 24}px, ${mouseOffset.y * 13}px, 0)`,
            transition: "transform 0.32s ease-out",
          }}
        >
          {HERO_PINES.map((pine) => (
            <SnowPine key={pine.id} {...pine} />
          ))}
        </g>

        {/* =================================================================
            LAYER 8: DREAMY ICE-CRYSTAL DIAMOND DUST & FINE PAPER GRAIN
           ================================================================= */}
        <g className="animate-snowflake-sway">
          {ICE_DUST_MOTES.map((mote, i) => (
            <circle
              key={i}
              cx={mote.cx}
              cy={mote.cy}
              r={mote.r}
              fill="#ffffff"
              opacity={mote.op}
              filter="url(#hero-glow-soft)"
            />
          ))}
        </g>

        <g className="animate-snow-float-2">
          {BOKEH_SNOW_FLAKES.map((flake, i) => (
            <circle
              key={i}
              cx={flake.cx}
              cy={flake.cy}
              r={flake.r}
              fill="#ffffff"
              opacity={flake.op}
              filter="url(#hero-glow-soft)"
            />
          ))}
        </g>

        {/* Tactile Fine-Art Paper Grain Overlay */}
        <rect
          width="1920"
          height="1080"
          filter="url(#hero-dream-grain)"
          opacity="0.045"
          style={{ mixBlendMode: "overlay" }}
        />
      </svg>
    </div>
  );
}
