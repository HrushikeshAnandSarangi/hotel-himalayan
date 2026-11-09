"use client";

import React from "react";

export function StandingFigure({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-4 h-10 select-none pointer-events-none inline-block ${className}`}
    >
      {/* Head */}
      <circle cx="12" cy="7" r="4.5" fill="#061d30" />
      {/* Torso & Field Jacket */}
      <path d="M 8,13 L 16,13 L 15,30 L 9,30 Z" fill="#0284c7" />
      {/* Shoulder bag strap */}
      <line x1="8" y1="14" x2="15" y2="28" stroke="#061d30" strokeWidth="1.2" />
      {/* Arms */}
      <line x1="8" y1="14" x2="6" y2="28" stroke="#061d30" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="14" x2="17" y2="27" stroke="#061d30" strokeWidth="2" strokeLinecap="round" />
      {/* Trousers */}
      <rect x="9" y="30" width="3" height="20" fill="#061d30" rx="0.5" />
      <rect x="13" y="30" width="3" height="20" fill="#061d30" rx="0.5" />
      {/* Boots */}
      <rect x="7.5" y="49" width="4.5" height="3" fill="#061d30" rx="1" />
      <rect x="13" y="49" width="4.5" height="3" fill="#061d30" rx="1" />
    </svg>
  );
}

export function WalkingFigure({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-10 select-none pointer-events-none inline-block ${className}`}
    >
      {/* Head */}
      <circle cx="14" cy="7" r="4.5" fill="#061d30" />
      {/* Torso */}
      <path d="M 10,13 L 18,13 L 17,29 L 11,29 Z" fill="#061d30" />
      {/* Leading Arm */}
      <path d="M 11,15 L 7,24 L 5,30" stroke="#061d30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Trailing Arm */}
      <path d="M 17,15 L 21,24 L 23,28" stroke="#061d30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Striding Legs */}
      {/* Front Striding Leg */}
      <path d="M 12,29 L 7,42 L 5,52" stroke="#061d30" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Rear Striding Leg */}
      <path d="M 16,29 L 21,41 L 26,50" stroke="#061d30" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Shoes */}
      <line x1="3" y1="52" x2="7" y2="52" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="50" x2="28" y2="48" stroke="#061d30" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
