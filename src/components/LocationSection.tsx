"use client";

import React from "react";
import {
  MapPin,
  Navigation,
  Compass,
  ExternalLink,
  Car,
  Plane,
  Train,
} from "lucide-react";
import TiltCard from "./TiltCard";

export default function LocationSection() {
  const gmapsUrl =
    "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=27.305437,88.241066&destination_place_id=ChIJGaO-3n2G5jkRfbdfrpWW_rA";

  return (
    <section id="location" className="py-24 bg-[#fbfdff] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header (No Glass Tags / Pills) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight font-serif mb-4">
            How to Reach Us
          </h2>

          {/* Symmetrical Delicate Ornamental Anchor */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-300" />
            <div className="w-1.5 h-1.5 rotate-45 bg-blue-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-300" />
          </div>

          <p className="text-base sm:text-lg text-slate-700 font-serif leading-relaxed">
            Hotel Himalayan is located along quiet Chumbong Road, just a few minutes outside the main Pelling market area.
          </p>
        </div>

        {/* Masterpiece Architectural Centerpiece: Framed on ALL Sides by the Blue Ornate SVG Pattern */}
        <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-blue-200/90 shadow-[0_20px_50px_rgba(10,25,59,0.08)] bg-white mb-16">
          {/* Top Ornate SVG Border */}
          <div className="w-full h-14 sm:h-18 md:h-22 bg-[#dcecf9] border-b border-blue-200/70 overflow-hidden relative select-none flex items-center justify-center">
            <img
              src="/patterns/ornate-border-top.svg"
              alt="Ornate Blue Top Border"
              className="w-full h-full object-fill pointer-events-none"
            />
          </div>

          {/* Middle Body with Left and Right Ornate SVG Borders */}
          <div className="relative flex flex-row items-stretch">
            {/* Left Ornate SVG Border (Tablets & Desktops) */}
            <div className="hidden md:block w-8 lg:w-10 xl:w-12 shrink-0 bg-[#dcecf9] border-r border-blue-200/70 overflow-hidden relative select-none">
              <img
                src="/patterns/ornate-border-left.svg"
                alt="Ornate Blue Left Border"
                className="w-full h-full object-fill pointer-events-none"
              />
            </div>

            {/* Center Core: The Map & Location Hub */}
            <div className="flex-1 p-6 sm:p-9 lg:p-11 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                {/* Left: The Interactive Google Map Window */}
                <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl overflow-hidden border border-blue-200 shadow-sm bg-white min-h-[380px] sm:min-h-[440px]">
                  {/* Subtle Map Header Bar */}
                  <div className="py-2.5 px-4 bg-blue-50/70 border-b border-blue-100 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-blue-950 font-bold font-serif">
                      Hotel Himalayan Satellite & Terrain View
                    </span>
                    <span className="text-[11px] text-blue-700 font-mono font-medium">
                      27.3054° N • 88.2411° E
                    </span>
                  </div>

                  {/* Real Embedded Interactive Map */}
                  <div className="relative flex-1 w-full min-h-[340px]">
                    <iframe
                      title="Hotel Himalayan Interactive Location Map"
                      src="https://maps.google.com/maps?q=27.305437,88.241066&hl=en&z=15&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>

                {/* Right: Verified Location Hub */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-serif mb-2">
                      Hotel Himalayan
                    </h3>
                    <p className="text-sm text-slate-600 font-serif mb-6 leading-relaxed">
                      Chumbong Road, Pelling, West Sikkim, 737113
                    </p>

                    <div className="space-y-4 mb-8">
                      {/* GPS & Elevation */}
                      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                        <span className="text-xs uppercase tracking-wider text-blue-900 font-bold block mb-1">
                          GPS & Elevation
                        </span>
                        <p className="text-sm text-blue-950 font-mono font-semibold">
                          27.305437° N, 88.241066° E
                        </p>
                        <p className="text-xs text-blue-800 font-serif mt-0.5">
                          Elevation: ~7,200 ft above sea level
                        </p>
                      </div>

                      {/* Local Taxi Tip */}
                      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                        <span className="text-xs uppercase tracking-wider text-blue-900 font-bold block mb-1">
                          Local Taxi Navigation
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed">
                          Daily shared jeeps arrive at the Pelling taxi stand. From there, Hotel Himalayan is a short 5-minute local ride down scenic Chumbong Road.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Symmetrical Rectangular Outlined Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-blue-100">
                    <a
                      href={gmapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,99,235,0.25)] transition-all cursor-pointer"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl border border-blue-300 hover:bg-blue-50 text-blue-900 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                    >
                      <Navigation className="w-4 h-4 text-blue-600" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Ornate SVG Border (Tablets & Desktops) */}
            <div className="hidden md:block w-8 lg:w-10 xl:w-12 shrink-0 bg-[#dcecf9] border-l border-blue-200/70 overflow-hidden relative select-none">
              <img
                src="/patterns/ornate-border-right.svg"
                alt="Ornate Blue Right Border"
                className="w-full h-full object-fill pointer-events-none"
              />
            </div>
          </div>

          {/* Bottom Ornate SVG Border */}
          <div className="w-full h-14 sm:h-18 md:h-22 bg-[#dcecf9] border-t border-blue-200/70 overflow-hidden relative select-none flex items-center justify-center">
            <img
              src="/patterns/ornate-border-bottom.svg"
              alt="Ornate Blue Bottom Border"
              className="w-full h-full object-fill pointer-events-none"
            />
          </div>
        </div>

        {/* Symmetrical 3-Column Transit Route Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Nearest Airports */}
          <TiltCard
            maxTilt={6}
            perspective={900}
            className="bg-white p-7 sm:p-8 rounded-3xl border border-blue-200/80 shadow-[0_10px_25px_rgba(30,58,138,0.05)] text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
                <Plane className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-950 font-serif mb-2">
                Nearest Airports
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
                <li>
                  <strong className="text-blue-950">Bagdogra Airport (IXB):</strong> 135 km (approx. 4.5 to 5.5 hours by taxi)
                </li>
                <li>
                  <strong className="text-blue-950">Pakyong Airport (PYG):</strong> 110 km (approx. 4 hours)
                </li>
              </ul>
            </div>
          </TiltCard>

          {/* Nearest Railway Stations */}
          <TiltCard
            maxTilt={6}
            perspective={900}
            className="bg-white p-7 sm:p-8 rounded-3xl border border-blue-200/80 shadow-[0_10px_25px_rgba(30,58,138,0.05)] text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
                <Train className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-950 font-serif mb-2">
                Nearest Railway Stations
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
                <strong className="text-blue-950">New Jalpaiguri (NJP) / Siliguri Junction:</strong> 130 km (approx. 4.5 to 5 hours by vehicle via Legship).
              </p>
            </div>
          </TiltCard>

          {/* By Shared Cab or Taxi */}
          <TiltCard
            maxTilt={6}
            perspective={900}
            className="bg-white p-7 sm:p-8 rounded-3xl border border-blue-200/80 shadow-[0_10px_25px_rgba(30,58,138,0.05)] text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
                <Car className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-950 font-serif mb-2">
                By Shared Cab or Taxi
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
                Shared jeeps run daily to Pelling from Siliguri, NJP, Gangtok, and Jorethang. Once you arrive at the Pelling taxi stand, we are a short 5-minute local ride down Chumbong Road.
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
