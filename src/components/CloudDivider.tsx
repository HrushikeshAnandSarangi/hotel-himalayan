import React from "react";

interface CloudDividerProps {
  position?: "top" | "bottom";
  flip?: boolean;
  className?: string;
  fillColor?: string;
  accentColor?: string;
}

export default function CloudDivider({
  position = "bottom",
  flip = false,
  className = "",
  fillColor = "#ffffff",
  accentColor = "#e8f3fc",
}: CloudDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none select-none leading-none ${className} ${
        flip ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
      >
        {/* Soft atmospheric mist layer */}
        <path
          d="M0,96 L0,48 Q70,22 160,38 Q250,12 360,34 Q470,8 590,30 Q700,16 800,38 Q900,12 1020,34 Q1130,8 1240,28 Q1350,14 1440,42 L1440,96 Z"
          fill={accentColor}
          opacity="0.75"
        />
        {/* Primary cumulus cloud bank transitioning into solid space */}
        <path
          d="M0,96 L0,62 Q90,38 190,56 Q310,24 430,52 Q560,26 690,54 Q820,22 950,52 Q1070,26 1190,54 Q1310,32 1440,64 L1440,96 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
