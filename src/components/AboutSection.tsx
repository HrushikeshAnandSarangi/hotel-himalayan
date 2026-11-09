"use client";

import React from "react";
import Image from "next/image";
import {
  Compass,
  Coffee,
  UtensilsCrossed,
  Sun,
  Backpack,
  MountainSnow,
  CheckCircle2,
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
      desc: "An open terrace where travelers and families gather into storytelling circles as dusk settles.",
    },
    {
      icon: Backpack,
      title: "Your Basecamp in Pelling",
      desc: "Whether chasing peaks with a heavy rucksack or taking a quiet break from work, this is home.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Blue Ambient Aura */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/35 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs uppercase tracking-widest mb-3 font-semibold shadow-sm">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>About the Hotel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4 font-serif">
            A front-row seat to West Sikkim.
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300 mx-auto mb-6" />
        </div>

        {/* Story & Perspective Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: 3D Tilt Card with Official Logo & Elevation Metrics */}
          <div className="lg:col-span-5">
            <TiltCard
              maxTilt={7}
              perspective={1100}
              className="bg-white/95 rounded-3xl border border-blue-200/90 p-7 sm:p-8 shadow-[0_20px_50px_-10px_rgba(30,58,138,0.1),0_0_0_1px_rgba(255,255,255,1)_inset]"
            >
              {/* Logo Presentation in Card */}
              <div className="mb-6 pb-6 border-b border-blue-100 flex flex-col items-center text-center transform translate-z-10">
                <div className="h-28 w-auto relative mb-3">
                  <Image
                    src="/logo.png"
                    alt="Hotel Himalayan Seal"
                    width={280}
                    height={140}
                    className="h-full w-auto object-contain drop-shadow-[0_4px_12px_rgba(30,58,138,0.12)]"
                  />
                </div>
                <span className="text-[11px] tracking-[0.25em] uppercase text-blue-800 font-bold">
                  AUTHENTIC SIKKIM RETREAT
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Hotel Himalayan started with a very simple thought: when you come to the mountains, you shouldn&apos;t have to crane your neck or hike an hour just to catch a glimpse of the skyline.
              </p>

              {/* Quick Stats Grid with Blue Detailing */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-blue-100">
                <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200/80 text-left">
                  <span className="text-2xl font-bold text-blue-950 font-serif">7,200 ft</span>
                  <span className="block text-[11px] text-blue-800 uppercase tracking-wider font-semibold mt-0.5">
                    Ridge Elevation
                  </span>
                </div>
                <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200/80 text-left">
                  <span className="text-2xl font-bold text-blue-600 font-serif">180°</span>
                  <span className="block text-[11px] text-blue-800 uppercase tracking-wider font-semibold mt-0.5">
                    Direct Skyline
                  </span>
                </div>
                <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200/80 text-left">
                  <span className="text-2xl font-bold text-blue-950 font-serif">Chumbong</span>
                  <span className="block text-[11px] text-blue-800 uppercase tracking-wider font-semibold mt-0.5">
                    Quiet Slopes
                  </span>
                </div>
                <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200/80 text-left">
                  <span className="text-2xl font-bold text-blue-600 font-serif">Pelling</span>
                  <span className="block text-[11px] text-blue-800 uppercase tracking-wider font-semibold mt-0.5">
                    West Sikkim
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Exact Layout Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl border border-blue-200/90 p-7 sm:p-8 shadow-[0_16px_40px_rgba(30,58,138,0.06)]">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 font-serif">
                Honest Mountain Hospitality
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Hotel Himalayan started with a very simple thought: when you come to the mountains, you shouldn&apos;t have to crane your neck or hike an hour just to catch a glimpse of the skyline.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Perched on the quiet slopes of Chumbong in Pelling, we offer honest mountain hospitality without unnecessary noise. The kettle is always ready, the kitchen serves hot home-style meals made with local produce, and the open terrace turns strangers into storytelling circles as soon as the sun dips below the snowline. Whether you are chasing peaks with a heavy rucksack or taking a quiet break from work, this is your basecamp.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Unobstructed front-row Kanchenjunga view</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Hot home-style meals with local produce</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Open terrace storytelling circles</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Peaceful Chumbong slopes without noise</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars Grid with Motion & Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <TiltCard
                key={idx}
                maxTilt={6}
                perspective={900}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-blue-200/80 shadow-[0_12px_30px_rgba(30,58,138,0.06)] hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
