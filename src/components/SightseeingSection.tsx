"use client";

import React from "react";
import {
  Compass,
  MapPin,
  Clock,
  Sparkles,
  MountainSnow,
  Trees,
  Droplets,
  Eye,
  PhoneCall,
} from "lucide-react";
import TiltCard from "./TiltCard";

export default function SightseeingSection() {
  const attractions = [
    {
      name: "Rabdentse Ruins",
      time: "15 mins away",
      desc: "Walk through mossy oak forests to find the stone remains of Sikkim’s 17th-century capital, framed against wide-open valley views.",
      icon: Trees,
      tag: "Ancient Capital",
    },
    {
      name: "Pemayangtse Monastery",
      time: "10 mins away",
      desc: "One of the oldest and most revered monasteries in the state, filled with ancient murals and wooden Buddhist sculptures.",
      icon: Compass,
      tag: "Historic Sanctuary",
    },
    {
      name: "Pelling Skywalk & Chenrezig Statue",
      time: "20 mins away",
      desc: "Walk along a transparent glass walkway suspended over lush hills, leading to a massive seated statue of the deity Chenrezig.",
      icon: Sparkles,
      tag: "Glass Skywalk",
    },
    {
      name: "Rimbi & Kanchenjunga Waterfalls",
      time: "30 to 45 mins away",
      desc: "Roaring mountain streams cutting straight through sheer black rock faces, perfect for a day drive.",
      icon: Droplets,
      tag: "Glacial Cascades",
    },
    {
      name: "Khecheopalri Lake",
      time: "1 hour away",
      desc: "A sacred wish-fulfilling lake where local lore says the birds pick away every fallen leaf to keep the surface pristine.",
      icon: Eye,
      tag: "Sacred Wish Lake",
    },
  ];

  return (
    <section id="nearby" className="py-24 bg-[#f8fbff] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs uppercase tracking-widest mb-3 font-semibold shadow-sm">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Nearby Spots & Things to Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4 font-serif">
            The trails around Pelling are worth stepping out for.
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            The peaks might keep you glued to the balcony all morning, but the trails around Pelling are worth stepping out for.
          </p>
        </div>

        {/* 3D Tilt Attractions Grid with Spatial Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {attractions.map((spot, idx) => {
            const Icon = spot.icon;
            return (
              <TiltCard
                key={idx}
                maxTilt={7}
                perspective={1000}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-blue-200/90 hover:border-blue-500 shadow-[0_14px_35px_rgba(30,58,138,0.06),0_0_0_1px_rgba(255,255,255,1)_inset] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-sm">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] tracking-wider uppercase font-bold px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900">
                      {spot.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-serif mb-2 leading-snug">
                    {spot.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {spot.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-blue-100 flex items-center justify-between text-xs text-blue-900 font-medium">
                  <span className="flex items-center gap-1 font-bold text-blue-950">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    Pelling Circuit
                  </span>
                  <span className="flex items-center gap-1 text-slate-700 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    {spot.time}
                  </span>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Taxi / Sightseeing Assistance Note */}
        <div className="mt-14 p-6 rounded-3xl bg-white border border-blue-200/90 flex flex-col sm:flex-row items-center justify-between gap-5 max-w-4xl mx-auto shadow-[0_12px_35px_rgba(30,58,138,0.06)]">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 shrink-0 shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-950 block">
                Local Sightseeing & Taxi Arrangements
              </span>
              <span className="text-xs text-slate-600">
                Let us know the evening before, and our desk can organize reliable local drivers for day trips.
              </span>
            </div>
          </div>
          <a
            href="tel:+919304957835"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Inquire Sightseeing Taxi</span>
          </a>
        </div>
      </div>
    </section>
  );
}
