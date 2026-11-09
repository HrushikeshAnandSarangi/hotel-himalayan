"use client";

import React from "react";

export default function VerandaSketch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none pointer-events-none ${className}`}
    >
      <defs>
        {/* Subtle architectural hatching pattern */}
        <pattern id="verandaHatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#061d30" strokeWidth="0.7" opacity="0.3" />
        </pattern>
        <pattern id="verandaHatchDense" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="4" stroke="#061d30" strokeWidth="0.8" opacity="0.45" />
        </pattern>
      </defs>

      {/* Roof Cornice & Eaves */}
      <path d="M 20,40 L 500,40 L 500,52 L 20,52 Z" stroke="#061d30" strokeWidth="2" fill="#f8fafc" />
      <path d="M 30,52 L 490,52 L 480,68 L 40,68 Z" stroke="#061d30" strokeWidth="1.5" fill="#edf2f7" />
      {/* Dentil molding under eaves */}
      {[...Array(28)].map((_, i) => (
        <rect
          key={i}
          x={45 + i * 15.5}
          y="54"
          width="9"
          height="10"
          stroke="#061d30"
          strokeWidth="1"
          fill="#061d30"
          opacity="0.8"
        />
      ))}

      {/* Roof Shading / Hatching */}
      <rect x="25" y="42" width="470" height="8" fill="url(#verandaHatchDense)" opacity="0.4" />

      {/* Stone Masonry Wall Background */}
      <rect x="40" y="68" width="440" height="340" stroke="#061d30" strokeWidth="1.5" fill="#fafbfc" />
      {/* Stone ashlar joint lines */}
      <line x1="40" y1="120" x2="480" y2="120" stroke="#061d30" strokeWidth="0.8" opacity="0.3" strokeDasharray="8 4" />
      <line x1="40" y1="180" x2="480" y2="180" stroke="#061d30" strokeWidth="0.8" opacity="0.3" strokeDasharray="10 5" />
      <line x1="40" y1="240" x2="480" y2="240" stroke="#061d30" strokeWidth="0.8" opacity="0.3" strokeDasharray="8 4" />
      <line x1="40" y1="300" x2="480" y2="300" stroke="#061d30" strokeWidth="0.8" opacity="0.3" strokeDasharray="12 6" />

      {/* =====================================================================
          ARCHED FRENCH BALCONY WINDOWS (Left & Right Pair)
         ===================================================================== */}
      {/* Left Arch Window */}
      <g id="leftArch">
        {/* Outer Stone Arch & Jambs */}
        <path
          d="M 90,340 L 90,170 C 90,115 190,115 190,170 L 190,340 Z"
          stroke="#061d30"
          strokeWidth="2.5"
          fill="#f1f5f9"
        />
        {/* Inner Window Frame */}
        <path
          d="M 98,338 L 98,172 C 98,125 182,125 182,172 L 182,338 Z"
          stroke="#061d30"
          strokeWidth="1.5"
          fill="#e2e8f0"
        />
        {/* Transom Radial Fanlight */}
        <path d="M 98,172 L 182,172" stroke="#061d30" strokeWidth="2" />
        <path d="M 140,172 L 140,126" stroke="#061d30" strokeWidth="1.2" />
        <path d="M 140,172 L 112,142" stroke="#061d30" strokeWidth="1.2" />
        <path d="M 140,172 L 168,142" stroke="#061d30" strokeWidth="1.2" />

        {/* Central Mullion & Glazing Bars */}
        <line x1="140" y1="172" x2="140" y2="338" stroke="#061d30" strokeWidth="2" />
        <line x1="98" y1="220" x2="182" y2="220" stroke="#061d30" strokeWidth="1" />
        <line x1="98" y1="268" x2="182" y2="268" stroke="#061d30" strokeWidth="1" />
        <line x1="98" y1="316" x2="182" y2="316" stroke="#061d30" strokeWidth="1" />

        {/* Diagonal architectural glass reflection streaks */}
        <line x1="104" y1="230" x2="124" y2="200" stroke="#0284c7" strokeWidth="1.5" opacity="0.6" />
        <line x1="150" y1="240" x2="174" y2="205" stroke="#0284c7" strokeWidth="1.5" opacity="0.6" />
        <line x1="104" y1="280" x2="126" y2="250" stroke="#0284c7" strokeWidth="1.5" opacity="0.6" />

        {/* Stone Arch Voussoirs Hatching */}
        <path d="M 85,170 C 85,108 195,108 195,170" stroke="#061d30" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      {/* Center Arch Window (Focal Window) */}
      <g id="centerArch">
        {/* Outer Stone Arch & Jambs */}
        <path
          d="M 210,340 L 210,160 C 210,95 330,95 330,160 L 330,340 Z"
          stroke="#061d30"
          strokeWidth="3"
          fill="#f1f5f9"
        />
        {/* Inner Window Frame */}
        <path
          d="M 218,338 L 218,162 C 218,105 322,105 322,162 L 322,338 Z"
          stroke="#061d30"
          strokeWidth="1.8"
          fill="#e2e8f0"
        />
        {/* Keystone at crown of arch */}
        <polygon points="262,90 278,90 274,112 266,112" stroke="#061d30" strokeWidth="1.5" fill="#cbd5e1" />

        {/* Transom Radial Fanlight */}
        <path d="M 218,162 L 322,162" stroke="#061d30" strokeWidth="2.2" />
        <path d="M 270,162 L 270,106" stroke="#061d30" strokeWidth="1.5" />
        <path d="M 270,162 L 236,126" stroke="#061d30" strokeWidth="1.5" />
        <path d="M 270,162 L 304,126" stroke="#061d30" strokeWidth="1.5" />
        <path d="M 270,162 L 222,145" stroke="#061d30" strokeWidth="1.2" />
        <path d="M 270,162 L 318,145" stroke="#061d30" strokeWidth="1.2" />

        {/* French Double Door Center Mullion & Window Panes */}
        <line x1="270" y1="162" x2="270" y2="338" stroke="#061d30" strokeWidth="2.2" />
        <line x1="218" y1="215" x2="322" y2="215" stroke="#061d30" strokeWidth="1.2" />
        <line x1="218" y1="265" x2="322" y2="265" stroke="#061d30" strokeWidth="1.2" />
        <line x1="218" y1="315" x2="322" y2="315" stroke="#061d30" strokeWidth="1.2" />

        {/* Architectural Glass Reflections */}
        <line x1="225" y1="230" x2="255" y2="185" stroke="#0284c7" strokeWidth="1.8" opacity="0.6" />
        <line x1="285" y1="240" x2="315" y2="195" stroke="#0284c7" strokeWidth="1.8" opacity="0.6" />
        <line x1="225" y1="285" x2="255" y2="240" stroke="#0284c7" strokeWidth="1.8" opacity="0.6" />

        {/* Brass Door Handles */}
        <line x1="266" y1="250" x2="266" y2="262" stroke="#061d30" strokeWidth="2" strokeLinecap="round" />
        <line x1="274" y1="250" x2="274" y2="262" stroke="#061d30" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Right Arch Window */}
      <g id="rightArch">
        <path
          d="M 350,340 L 350,170 C 350,115 450,115 450,170 L 450,340 Z"
          stroke="#061d30"
          strokeWidth="2.5"
          fill="#f1f5f9"
        />
        <path
          d="M 358,338 L 358,172 C 358,125 442,125 442,172 L 442,338 Z"
          stroke="#061d30"
          strokeWidth="1.5"
          fill="#e2e8f0"
        />
        <path d="M 358,172 L 442,172" stroke="#061d30" strokeWidth="2" />
        <line x1="400" y1="172" x2="400" y2="338" stroke="#061d30" strokeWidth="2" />
        <line x1="358" y1="220" x2="442" y2="220" stroke="#061d30" strokeWidth="1" />
        <line x1="358" y1="268" x2="442" y2="268" stroke="#061d30" strokeWidth="1" />
        <line x1="358" y1="316" x2="442" y2="316" stroke="#061d30" strokeWidth="1" />
      </g>

      {/* =====================================================================
          HANGING VINTAGE COPPER ALPINE LANTERN (Center Veranda)
         ===================================================================== */}
      <g id="hangingLantern">
        {/* Chain from Eaves */}
        <line x1="270" y1="68" x2="270" y2="100" stroke="#061d30" strokeWidth="1.5" strokeDasharray="3 2" />
        {/* Lantern Cap */}
        <polygon points="262,100 278,100 274,106 266,106" stroke="#061d30" strokeWidth="1.2" fill="#061d30" />
        <polygon points="258,106 282,106 277,114 263,114" stroke="#061d30" strokeWidth="1.2" fill="#061d30" />
        {/* Glass Enclosure */}
        <polygon points="263,114 277,114 275,130 265,130" stroke="#061d30" strokeWidth="1.2" fill="#fef3c7" opacity="0.85" />
        {/* Warm Filament Glow */}
        <circle cx="270" cy="122" r="2.5" fill="#f59e0b" />
        {/* Base Finial */}
        <polygon points="265,130 275,130 270,136" stroke="#061d30" strokeWidth="1.2" fill="#061d30" />
      </g>

      {/* =====================================================================
          ORNATE WROUGHT-IRON BALUSTRADE & VERANDA RAILING
         ===================================================================== */}
      <g id="wroughtIronRailing">
        {/* Balcony Plinth / Stone Slab Base */}
        <rect x="30" y="380" width="460" height="24" stroke="#061d30" strokeWidth="2" fill="#e2e8f0" />
        <rect x="35" y="382" width="450" height="6" fill="#cbd5e1" opacity="0.5" />
        {/* Main Railing Top Cap */}
        <rect x="25" y="325" width="470" height="6" stroke="#061d30" strokeWidth="2" fill="#061d30" rx="1" />
        <rect x="30" y="333" width="460" height="3" stroke="#061d30" strokeWidth="1" fill="#061d30" />
        <rect x="30" y="375" width="460" height="4" stroke="#061d30" strokeWidth="1.5" fill="#061d30" />

        {/* Stanchions (Heavier support posts) */}
        <rect x="35" y="326" width="7" height="54" fill="#061d30" />
        <rect x="195" y="326" width="7" height="54" fill="#061d30" />
        <rect x="338" y="326" width="7" height="54" fill="#061d30" />
        <rect x="478" y="326" width="7" height="54" fill="#061d30" />

        {/* Decorative Wrought Iron Balusters with Scrolls & Trefoils */}
        {[...Array(30)].map((_, i) => {
          const bx = 50 + i * 14.2;
          return (
            <g key={i}>
              <line x1={bx} y1="334" x2={bx} y2="375" stroke="#061d30" strokeWidth="1.5" />
              {/* Central Ornate Knob */}
              <circle cx={bx} cy="354" r="2.2" fill="#061d30" />
              {/* Subtle Scrollwork / Ring */}
              {i % 2 === 0 && (
                <circle cx={bx} cy="342" r="3" stroke="#061d30" strokeWidth="1" fill="none" />
              )}
            </g>
          );
        })}
      </g>

      {/* =====================================================================
          CLIMBING ALPINE IVY / RHODODENDRON VINES (Top Right & Edges)
         ===================================================================== */}
      <g id="climbingIvy" stroke="#061d30" strokeWidth="1.2" fill="#061d30">
        {/* Main Vines from right edge */}
        <path d="M 490,70 Q 460,90 470,120 Q 480,140 450,160 Q 430,170 440,200 Q 450,220 435,240" fill="none" />
        <path d="M 500,100 Q 475,130 460,170 Q 450,210 470,250" fill="none" strokeWidth="1" />
        {/* Clusters of Ivy Leaves with Fine Pen Stippling */}
        <path d="M 458,95 Q 450,90 455,82 Q 465,85 458,95 Z" />
        <path d="M 472,112 Q 462,110 466,102 Q 476,106 472,112 Z" />
        <path d="M 445,135 Q 436,132 440,124 Q 450,128 445,135 Z" />
        <path d="M 460,155 Q 450,152 454,144 Q 464,148 460,155 Z" />
        <path d="M 432,175 Q 422,172 426,164 Q 436,168 432,175 Z" />
        <path d="M 442,198 Q 432,195 436,187 Q 446,191 442,198 Z" />
        <path d="M 425,225 Q 415,222 419,214 Q 429,218 425,225 Z" />
        <path d="M 440,248 Q 430,245 434,237 Q 444,241 440,248 Z" />
      </g>

      {/* Architectural Hatching Shadows (Ground Plane) */}
      <line x1="20" y1="406" x2="500" y2="406" stroke="#061d30" strokeWidth="1.5" />
      <line x1="40" y1="412" x2="480" y2="412" stroke="#061d30" strokeWidth="1" strokeDasharray="6 3" />
      <line x1="60" y1="418" x2="460" y2="418" stroke="#061d30" strokeWidth="0.8" strokeDasharray="4 2" />
    </svg>
  );
}
