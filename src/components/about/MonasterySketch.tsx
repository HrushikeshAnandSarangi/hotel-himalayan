"use client";

import React from "react";

export default function MonasterySketch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none pointer-events-none ${className}`}
    >
      <defs>
        <pattern id="shingleHatch" width="6" height="4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="4" x2="6" y2="4" stroke="#061d30" strokeWidth="0.8" opacity="0.4" />
          <line x1="3" y1="0" x2="3" y2="4" stroke="#061d30" strokeWidth="0.6" opacity="0.3" />
        </pattern>
        <pattern id="mountainHatch" width="5" height="5" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#0284c7" strokeWidth="0.7" opacity="0.35" />
        </pattern>
      </defs>

      {/* =====================================================================
          DISTANT KANCHENJUNGA MOUNTAIN RANGE SILHOUETTE (Fine Pen Linework)
         ===================================================================== */}
      {/* Highest Peak Crest */}
      <path
        d="M 10,240 L 90,205 L 160,175 L 240,125 L 290,145 L 360,95 L 420,135 L 480,115 L 550,150"
        stroke="#061d30"
        strokeWidth="1.8"
      />
      {/* Mountain Ridge Snow Ridges & Facets */}
      <path
        d="M 240,125 L 220,165 L 190,195 L 140,230 L 100,260"
        stroke="#061d30"
        strokeWidth="1.2"
        strokeDasharray="4 2"
      />
      <path
        d="M 360,95 L 350,140 L 320,175 L 300,210"
        stroke="#061d30"
        strokeWidth="1.2"
        strokeDasharray="4 2"
      />
      <path
        d="M 480,115 L 470,155 L 440,190"
        stroke="#061d30"
        strokeWidth="1.2"
        strokeDasharray="4 2"
      />
      {/* Shaded Mountain slope */}
      <polygon
        points="360,95 420,135 480,115 550,150 550,220 350,220"
        fill="url(#mountainHatch)"
        opacity="0.3"
      />

      {/* Hillside Pine Tree Clusters on the Ridges */}
      <g stroke="#061d30" strokeWidth="1" fill="#061d30">
        {[...Array(16)].map((_, i) => {
          const px = 20 + i * 22;
          const py = 210 + (i % 3) * 12;
          return (
            <path
              key={i}
              d={`M ${px},${py} L ${px - 5},${py + 18} L ${px - 2},${py + 16} L ${px - 8},${py + 30} L ${px + 8},${py + 30} L ${px + 2},${py + 16} L ${px + 5},${py + 18} Z`}
              fill="#061d30"
              opacity="0.75"
            />
          );
        })}
      </g>

      {/* Traditional Sikkimese Stone Hill Terraces & Village Rooflines */}
      <path
        d="M 20,320 L 120,300 L 220,310 L 320,290 L 420,310 L 540,295"
        stroke="#061d30"
        strokeWidth="2"
      />
      <path
        d="M 10,350 L 140,335 L 260,345 L 380,330 L 500,340 L 550,335"
        stroke="#061d30"
        strokeWidth="2.2"
      />

      {/* Village Gable Roofs in foreground */}
      <polygon points="50,310 90,290 130,310 130,330 50,330" stroke="#061d30" strokeWidth="1.5" fill="#f1f5f9" />
      <polygon points="140,305 180,285 220,305 220,325 140,325" stroke="#061d30" strokeWidth="1.5" fill="#f1f5f9" />
      <polygon points="230,315 265,298 300,315 300,335 230,335" stroke="#061d30" strokeWidth="1.5" fill="#f1f5f9" />

      {/* =====================================================================
          HISTORIC MULTI-TIERED MONASTERY PAGODA (Right Focal Point)
         ===================================================================== */}
      <g id="monasteryPagoda">
        {/* Tier 3 (Base Level) */}
        <rect x="420" y="270" width="70" height="45" stroke="#061d30" strokeWidth="2.5" fill="#ffffff" />
        {/* Lower Eaves Roof with Upturned Flared Corners */}
        <path
          d="M 405,270 Q 455,264 505,270 L 495,255 Q 455,250 415,255 Z"
          stroke="#061d30"
          strokeWidth="2"
          fill="#061d30"
        />
        <rect x="408" y="268" width="94" height="3" fill="#cbd5e1" />
        {/* Shingle texture */}
        <polygon points="415,256 495,256 503,269 407,269" fill="url(#shingleHatch)" opacity="0.6" />

        {/* Tier 2 (Middle Observation Level) */}
        <rect x="430" y="215" width="50" height="40" stroke="#061d30" strokeWidth="2" fill="#ffffff" />
        {/* Monastery Windows with Timber Lattice */}
        <rect x="440" y="224" width="12" height="18" stroke="#061d30" strokeWidth="1.5" fill="#0284c7" opacity="0.8" />
        <rect x="458" y="224" width="12" height="18" stroke="#061d30" strokeWidth="1.5" fill="#0284c7" opacity="0.8" />
        <line x1="446" y1="224" x2="446" y2="242" stroke="#061d30" strokeWidth="1" />
        <line x1="464" y1="224" x2="464" y2="242" stroke="#061d30" strokeWidth="1" />

        {/* Middle Eaves Roof with Sweeping Curves */}
        <path
          d="M 416,215 Q 455,208 494,215 L 485,202 Q 455,198 425,202 Z"
          stroke="#061d30"
          strokeWidth="2"
          fill="#061d30"
        />
        <polygon points="425,203 485,203 492,214 418,214" fill="url(#shingleHatch)" opacity="0.6" />

        {/* Tier 1 (Top Shrine Level) */}
        <rect x="438" y="168" width="34" height="34" stroke="#061d30" strokeWidth="2" fill="#ffffff" />
        <rect x="448" y="176" width="14" height="16" stroke="#061d30" strokeWidth="1.2" fill="#f8fafc" />

        {/* Upper Pyramidal Hi-Roof */}
        <path
          d="M 425,168 Q 455,160 485,168 L 476,145 Q 455,140 434,145 Z"
          stroke="#061d30"
          strokeWidth="2"
          fill="#061d30"
        />
        <polygon points="434,145 476,145 483,167 427,167" fill="url(#shingleHatch)" opacity="0.7" />

        {/* Monastery Pinnacle & Gold Victory Banner (Gilded Dhvaja Spire) */}
        <line x1="455" y1="140" x2="455" y2="85" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
        {/* Tiered discs on spire */}
        <ellipse cx="455" cy="130" rx="9" ry="2.5" stroke="#061d30" strokeWidth="1.2" fill="#f59e0b" />
        <ellipse cx="455" cy="120" rx="7.5" ry="2" stroke="#061d30" strokeWidth="1.2" fill="#f59e0b" />
        <ellipse cx="455" cy="110" rx="6" ry="1.8" stroke="#061d30" strokeWidth="1.2" fill="#f59e0b" />
        <ellipse cx="455" cy="100" rx="4.5" ry="1.5" stroke="#061d30" strokeWidth="1.2" fill="#f59e0b" />
        {/* Golden Crescent Moon & Sun Finial */}
        <circle cx="455" cy="85" r="4" stroke="#061d30" strokeWidth="1.2" fill="#fbbf24" />
        <path d="M 453,81 Q 458,85 453,89" stroke="#061d30" strokeWidth="1" fill="none" />

        {/* Buddhist Prayer Flags fluttering from Monastery Spire */}
        <path
          d="M 455,105 Q 480,120 515,130 Q 535,135 555,138"
          stroke="#061d30"
          strokeWidth="1.2"
          strokeDasharray="2 1"
          fill="none"
        />
        {/* Lungta Prayer Flags */}
        <polygon points="465,112 473,116 471,123 463,119" fill="#0284c7" stroke="#061d30" strokeWidth="0.8" />
        <polygon points="478,118 486,122 484,129 476,125" fill="#ffffff" stroke="#061d30" strokeWidth="0.8" />
        <polygon points="492,123 500,126 498,133 490,130" fill="#f59e0b" stroke="#061d30" strokeWidth="0.8" />
        <polygon points="506,127 514,130 512,137 504,134" fill="#10b981" stroke="#061d30" strokeWidth="0.8" />
      </g>

      {/* Perspective Blueprint / Construction Guide Lines */}
      <line x1="20" y1="365" x2="540" y2="350" stroke="#0284c7" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
      <line x1="40" y1="372" x2="520" y2="360" stroke="#0284c7" strokeWidth="0.8" strokeDasharray="4 2" opacity="0.3" />
    </svg>
  );
}
