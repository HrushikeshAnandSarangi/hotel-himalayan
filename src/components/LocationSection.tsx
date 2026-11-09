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
  Clock,
  Sparkles,
} from "lucide-react";
import TiltCard from "./TiltCard";

export default function LocationSection() {
  const gmapsUrl =
    "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=27.305437,88.241066&destination_place_id=ChIJGaO-3n2G5jkRfbdfrpWW_rA";

  return (
    <section id="location" className="py-24 bg-[#f8fbff] relative overflow-hidden">
      {/* Delicate background ambient blue glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Symmetrical Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs uppercase tracking-widest mb-3 font-semibold shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Transit & Directions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4 font-serif">
            How to Reach Us
          </h2>

          {/* Symmetrical Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-300" />
            <div className="w-2 h-2 rotate-45 bg-blue-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-300" />
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-serif">
            Hotel Himalayan is located along quiet Chumbong Road, just a few minutes outside the main Pelling market area.
          </p>
        </div>

        {/* Masterpiece Centerpiece: Blue Ornate Architectural Frame Card */}
        <div className="relative mb-16 rounded-3xl overflow-hidden border border-blue-300/60 shadow-[0_24px_55px_rgba(14,28,64,0.18)] bg-[#0e1c40]">
          {/* Authentic Ornate Blue Pattern Backdrop (matching reference architecture) */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none bg-[length:100%_auto] md:bg-cover bg-top bg-no-repeat opacity-95"
            style={{ backgroundImage: `url('/patterns/blue-ornate-frame@2x.jpg')` }}
          />

          {/* Content Layer with generous breathing room */}
          <div className="relative z-10 px-6 sm:px-12 md:px-16 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-300/40 bg-blue-950/80 text-blue-200 text-[11px] sm:text-xs uppercase tracking-widest font-medium mb-5 backdrop-blur-md shadow-inner">
              <Navigation className="w-3.5 h-3.5 text-blue-300" />
              <span>Chumbong Road • Pelling, West Sikkim • 7,200 ft</span>
            </div>

            {/* Grand Condensed Uppercase Headline */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.08] mb-4 font-serif">
              PELLING IS ON A RIDGE.
              <br />
              <span className="text-blue-100">GETTING HERE IS EFFORTLESS.</span>
            </h3>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-serif mb-8 leading-relaxed font-light">
              Located along scenic Chumbong Road, just 5 minutes outside the main Pelling market area.
            </p>

            {/* Rectangular Outlined Action Buttons (matching [ PLAN YOUR VISIT ] style) */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              <a
                href={gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 border border-blue-200/80 bg-white/10 hover:bg-white hover:text-[#0e1c40] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)] backdrop-blur-md cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-blue-300 group-hover:text-[#0e1c40] transition-colors" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-300 group-hover:text-[#0e1c40] transition-colors" />
              </a>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 border border-blue-300/60 bg-blue-600/30 hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] backdrop-blur-md cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Coordinates & Taxi Tip Bar */}
            <div className="mt-8 pt-6 border-t border-blue-300/20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-blue-200/90 font-serif">
              <span className="flex items-center gap-1.5 font-mono">
                <Compass className="w-3.5 h-3.5 text-blue-300" />
                27.305437° N, 88.241066° E
              </span>
              <span className="hidden sm:inline-block text-blue-400/50">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-300" />
                Local Taxi: 5-minute ride from Pelling Taxi Stand
              </span>
            </div>
          </div>
        </div>

        {/* Bilateral Symmetrical 2-Column Map & Address Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          {/* Left Column: Interactive Embedded Map */}
          <div className="rounded-3xl overflow-hidden border border-blue-200/90 shadow-[0_16px_40px_rgba(30,58,138,0.08)] bg-white flex flex-col justify-between">
            <div className="p-4 bg-blue-50/70 border-b border-blue-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-xs uppercase tracking-wider text-blue-950 font-bold">
                  Hotel Himalayan Google Maps View
                </span>
              </div>
              <span className="text-[11px] text-blue-800 font-mono font-medium">
                27.3054° N • 88.2411° E
              </span>
            </div>

            <div className="relative flex-1 w-full min-h-[360px]">
              <iframe
                title="Hotel Himalayan Location Map"
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

          {/* Right Column: Symmetrical Coordinates & Verified Card */}
          <TiltCard
            maxTilt={6}
            perspective={1100}
            className="bg-white border border-blue-200/90 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-[0_16px_40px_rgba(30,58,138,0.06),0_0_0_1px_rgba(255,255,255,1)_inset]"
          >
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-blue-800 font-bold mb-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Verified Google Maps Listing</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-serif mb-4">
                Hotel Himalayan
              </h3>

              <div className="space-y-3.5 text-sm text-slate-700 mb-6">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200/70">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-blue-900 font-bold block">
                      Address
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium mt-0.5 font-serif">
                      Chumbong Road, Pelling, West Sikkim, 737113
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200/70">
                  <Navigation className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-blue-900 font-bold block">
                      GPS Coordinates
                    </span>
                    <p className="text-xs sm:text-sm text-blue-950 font-mono font-semibold mt-0.5">
                      27.305437° N, 88.241066° E
                    </p>
                    <span className="text-[11px] text-blue-700 font-medium font-serif">
                      Altitude: ~7,200 ft above sea level
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200/70 text-xs text-slate-700 font-serif">
                  <span className="text-blue-900 font-bold block mb-1">
                    Local Taxi Tip:
                  </span>
                  Once you arrive at the Pelling taxi stand, we are a short 5-minute local ride down Chumbong Road.
                </div>
              </div>
            </div>

            {/* Symmetrical Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-blue-100">
              <a
                href={gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(37,99,235,0.3)] transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
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
          </TiltCard>
        </div>

        {/* Decorative Delicate Filigree Ribbon Divider */}
        <div className="w-full flex justify-center mb-10 overflow-hidden opacity-60">
          <img
            src="/patterns/blue-filigree-border.png"
            alt=""
            className="h-7 w-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Symmetrical 3-Column Transit Route Cards */}
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
