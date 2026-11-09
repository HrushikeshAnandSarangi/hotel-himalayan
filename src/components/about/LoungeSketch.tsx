"use client";

import React from "react";

export default function LoungeSketch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none pointer-events-none ${className}`}
    >
      <defs>
        <pattern id="loungeHatch" width="5" height="5" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#061d30" strokeWidth="0.7" opacity="0.3" />
        </pattern>
        <pattern id="slatHatch" width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#061d30" strokeWidth="1.2" opacity="0.4" />
        </pattern>
      </defs>

      {/* =====================================================================
          ARCHITECTURAL PERSPECTIVE CEILING & TIMBER SLAT WALL
         ===================================================================== */}
      {/* Ceiling Beam Grid in 2-point perspective */}
      <path d="M 20,40 L 400,90 L 520,130" stroke="#061d30" strokeWidth="2" />
      <path d="M 20,40 L 20,380" stroke="#061d30" strokeWidth="2.5" />
      <path d="M 400,90 L 400,390" stroke="#061d30" strokeWidth="1.8" />

      {/* Vertical Pine Timber Slats Screen (Left Background) */}
      {[...Array(26)].map((_, i) => {
        const x = 30 + i * 14;
        const topY = 42 + i * 1.8;
        return (
          <g key={i}>
            <line x1={x} y1={topY} x2={x} y2="380" stroke="#061d30" strokeWidth="1.8" />
            <line x1={x + 3} y1={topY + 1} x2={x + 3} y2="380" stroke="#061d30" strokeWidth="0.8" opacity="0.5" />
          </g>
        );
      })}

      {/* =====================================================================
          SUSPENDED ARCHITECTURAL PENDANT LIGHTS (Staggered Cloud of Fixtures)
         ===================================================================== */}
      <g id="pendantLamps">
        {/* Cord 1 & Lamp */}
        <line x1="160" y1="60" x2="160" y2="130" stroke="#061d30" strokeWidth="1.2" />
        <rect x="148" y="130" width="24" height="28" stroke="#061d30" strokeWidth="1.5" fill="#fef3c7" opacity="0.85" />
        <line x1="148" y1="144" x2="172" y2="144" stroke="#061d30" strokeWidth="1" />

        {/* Cord 2 & Lamp */}
        <line x1="190" y1="65" x2="190" y2="110" stroke="#061d30" strokeWidth="1.2" />
        <rect x="178" y="110" width="24" height="32" stroke="#061d30" strokeWidth="1.5" fill="#fef3c7" opacity="0.9" />
        <line x1="178" y1="126" x2="202" y2="126" stroke="#061d30" strokeWidth="1" />

        {/* Cord 3 & Lamp */}
        <line x1="220" y1="68" x2="220" y2="140" stroke="#061d30" strokeWidth="1.2" />
        <rect x="208" y="140" width="24" height="26" stroke="#061d30" strokeWidth="1.5" fill="#fef3c7" opacity="0.85" />
        <line x1="208" y1="153" x2="232" y2="153" stroke="#061d30" strokeWidth="1" />

        {/* Cord 4 & Lamp */}
        <line x1="175" y1="62" x2="175" y2="165" stroke="#061d30" strokeWidth="1.2" />
        <rect x="163" y="165" width="24" height="30" stroke="#061d30" strokeWidth="1.5" fill="#fef3c7" opacity="0.8" />
        <line x1="163" y1="180" x2="187" y2="180" stroke="#061d30" strokeWidth="1" />
      </g>

      {/* =====================================================================
          GEOMETRIC BOOKSHELF / DISPLAY LATTICE (Right Background)
         ===================================================================== */}
      <g id="displayLattice">
        {/* Diamond / Diagonal timber bookshelf structure */}
        <rect x="410" y="140" width="105" height="180" stroke="#061d30" strokeWidth="2" fill="#f8fafc" />
        <line x1="410" y1="140" x2="515" y2="245" stroke="#061d30" strokeWidth="1.5" />
        <line x1="410" y1="215" x2="515" y2="320" stroke="#061d30" strokeWidth="1.5" />
        <line x1="410" y1="245" x2="515" y2="140" stroke="#061d30" strokeWidth="1.5" />
        <line x1="410" y1="320" x2="515" y2="215" stroke="#061d30" strokeWidth="1.5" />
        {/* Books and ceramics on shelves */}
        <rect x="425" y="210" width="18" height="24" stroke="#061d30" strokeWidth="1" fill="#061d30" />
        <rect x="445" y="214" width="14" height="20" stroke="#061d30" strokeWidth="1" fill="#0284c7" opacity="0.8" />
        <circle cx="485" cy="225" r="7" stroke="#061d30" strokeWidth="1" fill="#f1f5f9" />
      </g>

      {/* =====================================================================
          LUSH POTTED HIMALAYAN INDOOR BOTANICALS (Left Corner)
         ===================================================================== */}
      <g id="indoorPlants">
        {/* Tall terracotta / stone pot */}
        <polygon points="45,280 85,280 80,360 50,360" stroke="#061d30" strokeWidth="2" fill="#cbd5e1" />
        <line x1="42" y1="280" x2="88" y2="280" stroke="#061d30" strokeWidth="2" />
        {/* Hatching on pot */}
        <polygon points="50,285 80,285 76,355 54,355" fill="url(#loungeHatch)" opacity="0.5" />

        {/* Fanned Himalayan Fern & Bamboo Palm Fronds */}
        <path d="M 65,280 Q 40,240 25,200 Q 20,160 25,120" stroke="#061d30" strokeWidth="2" fill="none" />
        <path d="M 65,280 Q 55,220 50,170 Q 45,130 55,90" stroke="#061d30" strokeWidth="2" fill="none" />
        <path d="M 65,280 Q 75,220 85,170 Q 95,130 90,95" stroke="#061d30" strokeWidth="2" fill="none" />
        <path d="M 65,280 Q 95,240 115,200 Q 125,160 120,130" stroke="#061d30" strokeWidth="2" fill="none" />
        {/* Palm Frond Leaves (Hand-drawn stippling / leaf strokes) */}
        {[...Array(14)].map((_, i) => (
          <path
            key={i}
            d={`M ${40 + (i % 5) * 12},${130 + i * 10} Q ${30 + (i % 5) * 8},${125 + i * 10} ${20 + (i % 4) * 10},${135 + i * 10}`}
            stroke="#061d30"
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </g>

      {/* =====================================================================
          HANDWOVEN ROUND AREA RUG (Foreground Oval in Perspective)
         ===================================================================== */}
      <g id="areaRug">
        {/* Outer Ellipse */}
        <ellipse cx="260" cy="370" rx="190" ry="55" stroke="#061d30" strokeWidth="2" fill="#f8fafc" />
        {/* Inner concentric textured rings */}
        <ellipse cx="260" cy="370" rx="175" ry="50" stroke="#061d30" strokeWidth="1" strokeDasharray="5 3" />
        <ellipse cx="260" cy="370" rx="155" ry="44" stroke="#061d30" strokeWidth="1" strokeDasharray="4 2" />
        <ellipse cx="260" cy="370" rx="130" ry="36" stroke="#061d30" strokeWidth="0.8" strokeDasharray="3 2" />
        {/* Stippled fringe edge */}
        <ellipse cx="260" cy="370" rx="185" ry="53" stroke="#0284c7" strokeWidth="0.8" opacity="0.4" />
      </g>

      {/* =====================================================================
          MID-CENTURY ALPINE ARMCHAIRS & TEA TABLE (Focal Furniture)
         ===================================================================== */}
      {/* Chair 1 (Left Wicker / Wooden Lounge Chair) */}
      <g id="leftChair">
        {/* Timber Legs */}
        <line x1="160" y1="365" x2="150" y2="400" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="180" y1="360" x2="185" y2="395" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="210" y1="355" x2="220" y2="390" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
        {/* Curved Bucket Seat Base */}
        <path d="M 145,340 C 145,365 225,365 225,340 C 225,320 145,320 145,340 Z" stroke="#061d30" strokeWidth="2.2" fill="#edf2f7" />
        {/* Woven Backrest Rattan Pattern */}
        <path d="M 148,335 C 145,290 220,290 222,335 Z" stroke="#061d30" strokeWidth="2" fill="#f1f5f9" />
        <path d="M 152,332 C 150,296 216,296 218,332" stroke="#061d30" strokeWidth="1" strokeDasharray="4 2" />
        {/* Cushion */}
        <ellipse cx="185" cy="336" rx="32" ry="12" stroke="#061d30" strokeWidth="1.5" fill="#cbd5e1" />
      </g>

      {/* Low Round Coffee / Tea Table (Center) */}
      <g id="teaTable">
        {/* Tripod Timber Legs */}
        <line x1="250" y1="350" x2="240" y2="385" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="275" y1="350" x2="275" y2="388" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="300" y1="350" x2="310" y2="385" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
        {/* Table Top (Perspective Oval) */}
        <ellipse cx="275" cy="346" rx="42" ry="14" stroke="#061d30" strokeWidth="2.5" fill="#f8fafc" />
        <ellipse cx="275" cy="348" rx="42" ry="14" stroke="#061d30" strokeWidth="1.5" fill="#e2e8f0" />
        {/* Tea Kettle & Two Cups on Table */}
        {/* Cast Iron Mountain Kettle */}
        <rect x="268" y="334" width="12" height="10" stroke="#061d30" strokeWidth="1.5" fill="#061d30" rx="1" />
        <path d="M 270,334 C 270,328 278,328 278,334" stroke="#061d30" strokeWidth="1.2" fill="none" />
        {/* Spout */}
        <line x1="268" y1="338" x2="264" y2="335" stroke="#061d30" strokeWidth="1.5" />
        {/* Ceramic Teacups */}
        <ellipse cx="258" cy="344" rx="3.5" ry="2" stroke="#061d30" strokeWidth="1.2" fill="#ffffff" />
        <ellipse cx="292" cy="344" rx="3.5" ry="2" stroke="#061d30" strokeWidth="1.2" fill="#ffffff" />
      </g>

      {/* Chair 2 (Right Wicker Lounge Chair) */}
      <g id="rightChair">
        <line x1="330" y1="355" x2="320" y2="390" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="360" y1="360" x2="365" y2="395" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="390" y1="365" x2="400" y2="400" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 325,340 C 325,365 405,365 405,340 C 405,320 325,320 325,340 Z" stroke="#061d30" strokeWidth="2.2" fill="#edf2f7" />
        <path d="M 328,335 C 325,290 400,290 402,335 Z" stroke="#061d30" strokeWidth="2" fill="#f1f5f9" />
        <path d="M 332,332 C 330,296 396,296 398,332" stroke="#061d30" strokeWidth="1" strokeDasharray="4 2" />
        <ellipse cx="365" cy="336" rx="32" ry="12" stroke="#061d30" strokeWidth="1.5" fill="#cbd5e1" />
      </g>

      {/* Perspective Construction Guide Lines (Dashed) */}
      <line x1="20" y1="380" x2="400" y2="390" stroke="#0284c7" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
      <line x1="400" y1="390" x2="520" y2="410" stroke="#0284c7" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
    </svg>
  );
}
