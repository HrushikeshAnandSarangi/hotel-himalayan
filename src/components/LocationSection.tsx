"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Compass,
  Clock,
  Mountain,
} from "lucide-react";

const TRANSIT_STAGES = [
  {
    step: "01",
    label: "ARRIVAL HUB",
    title: "Bagdogra (IXB) / NJP Rail",
    detail:
      "~135 km scenic Teesta & Rangit river valley ascent (4.5–5 hrs) via Melli, Jorethang & Legship.",
  },
  {
    step: "02",
    label: "MARKET LINK",
    title: "Pelling Taxi Stand",
    detail:
      "Regular shared jeeps and private cabs arrive at Pelling market; ask for serene Chumbong Road.",
  },
  {
    step: "03",
    label: "BASECAMP • 7,200 FT",
    title: "Hotel Himalayan Ridge",
    detail:
      "A short 5-minute climb above town bustle opens directly onto Kanchenjunga sunrises.",
  },
];

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  const gmapsUrl =
    "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=27.305437,88.241066&destination_place_id=ChIJGaO-3n2G5jkRfbdfrpWW_rA";

  // Lazy-mount heavy third-party Google Maps iframe only when user nears the section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || shouldLoadMap) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoadMap]);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="section-deferred py-24 sm:py-28 lg:py-32 bg-[#fafbfd] text-[#061d30] relative overflow-hidden"
    >
      {/* Subtle Architectural Blueprint Projection Lines (Matching About Theme) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 select-none">
        <svg
          viewBox="0 0 1920 1000"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <line
            x1="0"
            y1="140"
            x2="1920"
            y2="480"
            stroke="#0284c7"
            strokeWidth="1"
            strokeDasharray="8 6"
          />
          <line
            x1="1920"
            y1="180"
            x2="0"
            y2="780"
            stroke="#061d30"
            strokeWidth="0.8"
            strokeDasharray="10 8"
            opacity="0.45"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* =====================================================================
            ARCHITECTURAL EDITORIAL HEADER
           ===================================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="font-editorial-mono text-[11px] uppercase tracking-[0.25em] text-[#0284c7] font-bold block mb-3">
            05 / WAYFINDING &amp; TRANSIT • WEST SIKKIM
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#061d30] tracking-tight font-serif mb-4">
            How to Reach Us
          </h2>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#0284c7]/60" />
            <div className="w-2 h-2 rotate-45 bg-[#0284c7]" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#0284c7]/60" />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-serif leading-relaxed">
            Nestled along quiet Chumbong Road, five minutes above Pelling
            market with open alpine ridge views.
          </p>
        </div>

        {/* =====================================================================
            EXPEDITION ROUTE PROGRESSION (3 Editorial Journey Cards)
           ===================================================================== */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {/* Desktop dashed connecting route track */}
          <div
            className="hidden md:block absolute top-1/2 left-[14%] right-[14%] border-t border-dashed border-[#0284c7]/40 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />

          {TRANSIT_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="relative bg-white/95 rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_8px_24px_rgba(6,29,48,0.04)] hover:border-[#0284c7]/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-editorial-mono text-[10px] tracking-[0.2em] font-bold text-[#0284c7] uppercase">
                  {stage.step} • {stage.label}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#061d30] font-serif mb-1.5">
                {stage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-serif leading-relaxed">
                {stage.detail}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================================
            MAIN ARCHITECTURAL HUB (Live Map Window + Alpine Basecamp Card)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT: Sleek Interactive Satellite Map Card */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_14px_36px_rgba(6,29,48,0.07)] bg-white min-h-[380px] sm:min-h-[450px]">
            {/* Midnight Blueprint Bar */}
            <div className="py-3 px-4 sm:px-5 bg-[#071f33] text-white flex items-center justify-between">
              <span className="font-editorial-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-sky-200 font-semibold flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>Chumbong Topography &amp; Road View</span>
              </span>
              <span className="font-editorial-mono text-[10px] sm:text-[11px] text-slate-300">
                27.3054° N • 88.2411° E
              </span>
            </div>

            {/* Lazy-Mounted Google Maps Embed */}
            <div className="relative flex-1 w-full min-h-[330px] bg-[#edf4fa]">
              {shouldLoadMap ? (
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
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 font-editorial-mono text-xs gap-2">
                  <Compass className="w-5 h-5 text-[#0284c7]" />
                  <span>Loading Pelling Road Map...</span>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Architectural Coordinate Stamp + Practical Transit Guide */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            {/* Dark Midnight Ridge Stamp (Echoes About Philosophy Stamp) */}
            <div className="bg-[#071f33] text-white p-6 sm:p-7 rounded-2xl border border-[#124a72]/60 shadow-[0_14px_34px_rgba(7,31,51,0.2)]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-sky-300 font-bold">
                  BASECAMP LOCATION
                </span>
                <Mountain className="w-4 h-4 text-[#38bdf8]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mb-1.5">
                Hotel Himalayan
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-serif leading-relaxed mb-5">
                Chumbong Road, Pelling, West Sikkim, 737113
              </p>

              <div className="pt-4 border-t border-white/15 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 font-editorial-mono text-[10px] sm:text-[11px]">
                <div>
                  <span className="text-[9px] text-slate-400 uppercase block mb-0.5">
                    GPS COORDINATES
                  </span>
                  <span className="text-sky-200 font-semibold whitespace-nowrap">
                    27.3054° N, 88.2411° E
                  </span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 uppercase block mb-0.5">
                    RIDGE ALTITUDE
                  </span>
                  <span className="text-sky-200 font-semibold whitespace-nowrap">
                    ~7,200 FT (2,195 M)
                  </span>
                </div>
              </div>
            </div>

            {/* Clean Navigation Note */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_8px_24px_rgba(6,29,48,0.04)] flex-1 flex flex-col justify-between">
              <div className="mb-5">
                <span className="font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#0284c7] font-bold flex items-center gap-1.5 mb-2">
                  <Clock className="w-3.5 h-3.5 text-[#0284c7]" />
                  <span>LOCAL TRANSIT NOTE</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-600 font-serif leading-relaxed">
                  Shared jeeps arrive daily at the Pelling taxi stand. From the
                  stand, Hotel Himalayan is a scenic 5-minute drive along quiet
                  Chumbong Road. Need a reliable pickup from NJP, Siliguri, or
                  Bagdogra? Our desk arranges vetted mountain drivers directly.
                </p>
              </div>

              {/* Dual Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 hover:border-[#061d30] text-[#061d30] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#0284c7]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
