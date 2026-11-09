"use client";

import React from "react";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Compass,
  Clock,
} from "lucide-react";

export default function LocationSection() {
  const gmapsUrl =
    "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=27.305437,88.241066&destination_place_id=ChIJGaO-3n2G5jkRfbdfrpWW_rA";

  return (
    <section id="location" className="py-28 bg-[#f8fbff] relative overflow-hidden">
      {/* =========================================================================
          AMBIENT MOTION LAYER: Ornate Blue SVG Pattern Spread Throughout Section
          ========================================================================= */}
      
      {/* 1. Full-Section Top Architectural Filigree Frieze */}
      <div className="absolute top-0 inset-x-0 w-full h-12 sm:h-16 md:h-20 overflow-hidden pointer-events-none select-none z-0 opacity-80 border-b border-blue-200/50">
        <img
          src="/patterns/ornate-border-top.svg"
          alt=""
          className="w-full h-full object-fill opacity-90"
        />
      </div>

      {/* 2. Full-Section Bottom Architectural Filigree Frieze */}
      <div className="absolute bottom-0 inset-x-0 w-full h-12 sm:h-16 md:h-20 overflow-hidden pointer-events-none select-none z-0 opacity-80 border-t border-blue-200/50">
        <img
          src="/patterns/ornate-border-bottom.svg"
          alt=""
          className="w-full h-full object-fill opacity-90"
        />
      </div>

      {/* 3. Repeating Ambient Motif Backdrop across the entire section width with slow breathing motion */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: `url('/patterns/ornate-border-top.svg')`,
          backgroundRepeat: "repeat",
          backgroundSize: "680px auto",
          animation: "patternDrift 60s linear infinite",
        }}
      />

      {/* 4. Subtle Crystalline Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200/35 rounded-full blur-3xl pointer-events-none animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none animate-pulse duration-10000 delay-1000" />

      {/* =========================================================================
          CONTENT LAYER
          ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header (Pure Typography, Zero Glass Pills) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight font-serif mb-4">
            How to Reach Us
          </h2>

          {/* Symmetrical Ornamental Diamond Anchor */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-2 h-2 rotate-45 bg-blue-700 shadow-sm" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <p className="text-base sm:text-lg text-slate-700 font-serif leading-relaxed">
            Hotel Himalayan is located along quiet Chumbong Road, just a few minutes outside the main Pelling market area.
          </p>
        </div>

        {/* Masterpiece Architectural Centerpiece: Framed on ALL Sides by the Blue Ornate Pattern */}
        <div className="relative rounded-3xl overflow-hidden border border-blue-200/90 shadow-[0_20px_50px_rgba(10,25,59,0.08)] bg-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_28px_60px_rgba(10,25,59,0.13)]">
          {/* Card Top Ornate SVG Border */}
          <div className="w-full h-14 sm:h-18 md:h-20 bg-[#dcecf9] border-b border-blue-200/70 overflow-hidden relative select-none flex items-center justify-center">
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
                <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl overflow-hidden border border-blue-200 shadow-sm bg-white min-h-[380px] sm:min-h-[440px] group transition-all duration-300 hover:border-blue-400">
                  {/* Map Header Bar */}
                  <div className="py-2.5 px-4 bg-blue-50/70 border-b border-blue-100 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-blue-950 font-bold font-serif flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      Hotel Himalayan Satellite & Road View
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
                      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 transition-all duration-300 hover:bg-blue-50 hover:border-blue-200">
                        <span className="text-xs uppercase tracking-wider text-blue-900 font-bold block mb-1">
                          GPS Coordinates & Elevation
                        </span>
                        <p className="text-sm text-blue-950 font-mono font-semibold flex items-center gap-2">
                          <Compass className="w-4 h-4 text-blue-600" />
                          27.305437° N, 88.241066° E
                        </p>
                        <p className="text-xs text-blue-800 font-serif mt-1">
                          Altitude: ~7,200 ft above sea level • Quiet Chumbong slopes
                        </p>
                      </div>

                      {/* Local Taxi Tip */}
                      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 transition-all duration-300 hover:bg-blue-50 hover:border-blue-200">
                        <span className="text-xs uppercase tracking-wider text-blue-900 font-bold block mb-1 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          Local Taxi Navigation Tip
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed">
                          Daily shared jeeps arrive at the Pelling taxi stand. From there, Hotel Himalayan is a short 5-minute local ride down scenic Chumbong Road.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Symmetrical Rectangular Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-blue-100">
                    <a
                      href={gmapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.35)] transition-all duration-300 cursor-pointer"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group py-3.5 px-4 rounded-xl border border-blue-300 hover:bg-blue-50 hover:border-blue-400 text-blue-900 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm"
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

          {/* Card Bottom Ornate SVG Border */}
          <div className="w-full h-14 sm:h-18 md:h-20 bg-[#dcecf9] border-t border-blue-200/70 overflow-hidden relative select-none flex items-center justify-center">
            <img
              src="/patterns/ornate-border-bottom.svg"
              alt="Ornate Blue Bottom Border"
              className="w-full h-full object-fill pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
