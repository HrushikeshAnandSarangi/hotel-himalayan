"use client";

import React from "react";
import Image from "next/image";
import {
  Compass,
  Coffee,
  UtensilsCrossed,
  Sun,
  Backpack,
  CheckCircle2,
  MountainSnow,
  MapPin,
} from "lucide-react";
import TiltCard from "./TiltCard";

export default function AboutSection() {
  const highlights = [
    {
      icon: Coffee,
      title: "The Kettle Is Always Ready",
      desc: "Fresh morning tea on the balcony or terrace as the first light touches the Kanchenjunga peaks.",
    },
    {
      icon: UtensilsCrossed,
      title: "Hot Home-Style Meals",
      desc: "Freshly prepared dining made with local produce, served hot straight from our on-site kitchen.",
    },
    {
      icon: Sun,
      title: "Sunset Storytelling Terrace",
      desc: "An open terrace where strangers and families turn into storytelling circles as dusk settles.",
    },
    {
      icon: Backpack,
      title: "Your Basecamp in Pelling",
      desc: "Whether chasing peaks with a heavy rucksack or taking a quiet break from work, this is home.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Symmetrical Ambient Light Circles */}
      <div className="absolute top-1/2 left-[-100px] -translate-y-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Symmetrical Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs uppercase tracking-widest mb-3 font-semibold shadow-sm">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>About the Hotel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4 font-serif">
            A front-row seat to West Sikkim.
          </h2>

          {/* Symmetrical Divider Line with Center Blue Anchor */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-300" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-300" />
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-serif">
            Honest mountain hospitality perched high along the tranquil ridges of Chumbong.
          </p>
        </div>

        {/* Bilateral 2-Column Symmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Left Column: Hospitality Narrative Card */}
          <div className="bg-white rounded-3xl border border-blue-200/90 p-7 sm:p-9 shadow-[0_16px_40px_rgba(30,58,138,0.06)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[11px] font-bold uppercase tracking-wider text-blue-800 mb-4 border border-blue-200/80">
                <MountainSnow className="w-3.5 h-3.5 text-blue-600" />
                <span>The Mountain Philosophy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 font-serif">
                Honest Mountain Hospitality
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 font-serif">
                Hotel Himalayan started with a very simple thought: when you come
                to the mountains, you shouldn&apos;t have to crane your neck or
                hike an hour just to catch a glimpse of the skyline.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-serif">
                Perched on the quiet slopes of Chumbong in Pelling, we offer honest
                mountain hospitality without unnecessary noise. The kettle is
                always ready, the kitchen serves hot home-style meals made with
                local produce, and the open terrace turns strangers into
                storytelling circles as soon as the sun dips below the snowline.
                Whether you are chasing peaks with a heavy rucksack or taking a
                quiet break from work, this is your basecamp.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-blue-100">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Front-row Kanchenjunga view</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Hot home-style local produce</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Open terrace circles</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Peaceful Chumbong basecamp</span>
              </div>
            </div>
          </div>

          {/* Right Column: Symmetrical 3D Crest Card & Ridge Metrics */}
          <TiltCard
            maxTilt={6}
            perspective={1100}
            className="bg-white rounded-3xl border border-blue-200/90 p-7 sm:p-9 shadow-[0_16px_40px_rgba(30,58,138,0.06),0_0_0_1px_rgba(255,255,255,1)_inset] flex flex-col justify-between"
          >
            {/* Centered Crest Logo */}
            <div className="flex flex-col items-center text-center pb-6 border-b border-blue-100 transform translate-z-10">
              <div className="h-28 w-auto relative mb-3">
                <Image
                  src="/logo.png"
                  alt="Hotel Himalayan Official Seal"
                  width={280}
                  height={140}
                  className="h-full w-auto object-contain drop-shadow-[0_4px_12px_rgba(30,58,138,0.12)]"
                />
              </div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-blue-900 font-bold">
                AUTHENTIC SIKKIM RETREAT • PELLING
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-center my-4 font-serif">
              Wake up to unobstructed vistas of the world&apos;s third highest peak.
              An altitude of pure alpine stillness just minutes from Pelling market.
            </p>

            {/* Symmetrical 4-Metric Grid with Blue Detailing */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200/80 text-center">
                <span className="text-2xl font-bold text-blue-950 font-serif block">
                  7,200 ft
                </span>
                <span className="text-[10px] sm:text-[11px] text-blue-800 uppercase tracking-wider font-semibold">
                  Ridge Elevation
                </span>
              </div>
              <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200/80 text-center">
                <span className="text-2xl font-bold text-blue-600 font-serif block">
                  180°
                </span>
                <span className="text-[10px] sm:text-[11px] text-blue-800 uppercase tracking-wider font-semibold">
                  Direct Skyline
                </span>
              </div>
              <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200/80 text-center">
                <span className="text-2xl font-bold text-blue-950 font-serif block">
                  Chumbong
                </span>
                <span className="text-[10px] sm:text-[11px] text-blue-800 uppercase tracking-wider font-semibold">
                  Quiet Slopes
                </span>
              </div>
              <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200/80 text-center">
                <span className="text-2xl font-bold text-blue-600 font-serif block">
                  Pelling
                </span>
                <span className="text-[10px] sm:text-[11px] text-blue-800 uppercase tracking-wider font-semibold">
                  West Sikkim
                </span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Symmetrical 4-Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <TiltCard
                key={idx}
                maxTilt={6}
                perspective={900}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-blue-200/80 shadow-[0_10px_25px_rgba(30,58,138,0.05)] hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between text-center items-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-all shadow-sm">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif">
                    {item.desc}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
