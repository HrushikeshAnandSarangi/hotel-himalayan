"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Compass,
  Coffee,
  UtensilsCrossed,
  Sun,
  MountainSnow,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface StoryBeat {
  id: string;
  tag: string;
  badge: string;
  title: string;
  quote: string;
  body: string;
  details: string[];
  image: string;
  caption: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const storyBeats: StoryBeat[] = [
    {
      id: "skyline",
      tag: "THE SKYLINE PHILOSOPHY",
      badge: "CHUMBONG RIDGE • 7,200 FT",
      title: "No Hiking Needed for the Horizon",
      quote:
        "When you come to the mountains, you shouldn't have to crane your neck or hike an hour just to catch a glimpse of the skyline.",
      body: "Hotel Himalayan started with a very simple thought. Perched on the quiet slopes of Chumbong in Pelling, Kanchenjunga doesn't feel like a distant backdrop. She sits right in front of you, shedding her coat of morning mist and catching the first amber light while the rest of the valley is still asleep.",
      details: [
        "Straight-on Kanchenjunga panorama right from your room",
        "Front-row seat without exhausting uphill climbs",
        "Pristine mountain stillness away from town noise",
      ],
      image: "/about/skyline-morning.jpg",
      caption: "Direct Kanchenjunga Skyline from Hotel Himalayan Balcony",
      icon: MountainSnow,
    },
    {
      id: "hospitality",
      tag: "HONEST HOSPITALITY",
      badge: "FIRST LIGHT RITUAL",
      title: "The Kettle Is Always Ready",
      quote:
        "We offer honest mountain hospitality without unnecessary noise. The kettle is always ready, and the kitchen serves hot home-style meals.",
      body: "Perched on the quiet slopes of Chumbong, we provide authentic mountain hospitality. The kettle is always bubbling with hot tea, ready for your morning contemplation on the balcony or terrace as the first light strikes the snowline.",
      details: [
        "Steaming Himalayan tea served fresh from early dawn",
        "Warm, honest Sikkimese care without unnecessary noise",
        "Comfortable wooden interiors and 24/7 hot geyser water",
      ],
      image: "/about/morning-tea.jpg",
      caption: "Hot Morning Tea on the Terrace as the Peaks Catch Amber Sun",
      icon: Coffee,
    },
    {
      id: "kitchen",
      tag: "LOCAL PRODUCE & DINING",
      badge: "IN-HOUSE KITCHEN",
      title: "Hot Home-Style Meals Made Fresh",
      quote:
        "The kitchen serves hot home-style meals made with local produce, comforting comfort foods and Sikkimese dishes cooked to order.",
      body: "Nothing warms you up after a crisp morning trek like a freshly prepared mountain meal. We cook with farm-fresh local produce, serving comfort food, authentic Sikkimese specialties, and hearty meals prepared with care throughout the day.",
      details: [
        "Farm-fresh local ingredients sourced from valley growers",
        "Steaming Sikkimese recipes and comforting everyday favorites",
        "Freshly prepared breakfast, lunch, and dinner daily",
      ],
      image: "/about/homestyle-kitchen.jpg",
      caption: "Freshly Cooked Home-Style Meals in our In-House Dining Room",
      icon: UtensilsCrossed,
    },
    {
      id: "terrace",
      tag: "COMMUNITY BASECAMP",
      badge: "OPEN OBSERVATION DECK",
      title: "Sunset Storytelling on the Open Terrace",
      quote:
        "The open terrace turns strangers into storytelling circles as soon as the sun dips below the snowline. This is your basecamp.",
      body: "Whether you are chasing peaks with a heavy rucksack or taking a quiet break from work, this is your basecamp. As dusk falls and the mountain peaks turn amber-rose, the rooftop observation deck becomes a welcoming haven for shared stories under starry alpine skies.",
      details: [
        "360-degree observation deck with mountain sightlines",
        "Sunset storytelling circles as the snowline dims",
        "Basecamp assistance for taxi bookings, trails & permits",
      ],
      image: "/about/sunset-terrace.jpg",
      caption: "Storytelling Observation Terrace Under the Evening Snowline",
      icon: Sun,
    },
  ];

  // Synchronized scroll tracking for parallax image switching and laser tracer line
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress of this section through the viewport (0 to 1)
      const totalDist = rect.height - viewportHeight * 0.5;
      const currentDist = -rect.top + viewportHeight * 0.25;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));
      setScrollProgress(progress);

      // Determine active story beat by checking each step card's position
      let closestIdx = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const box = el.getBoundingClientRect();
        const elCenter = box.top + box.height / 2;
        const targetCenter = viewportHeight * 0.45;
        const dist = Math.abs(elCenter - targetCenter);

        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBeat = (index: number) => {
    const el = stepRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden select-none">
      {/* Symmetrical Ambient Light Circles in Pure Blue Tint */}
      <div className="absolute top-1/4 left-[-100px] w-96 h-96 bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 right-[-100px] w-96 h-96 bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =====================================================================
            SYMMETRICAL SECTION HEADER
           ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs uppercase tracking-[0.2em] mb-3 font-semibold shadow-sm font-serif">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>About the Hotel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4 font-serif">
            A front-row seat to West Sikkim.
          </h2>

          {/* Symmetrical Center Anchor Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-serif">
            Perched on the quiet slopes of Chumbong in Pelling, offering honest mountain hospitality without unnecessary noise.
          </p>
        </div>

        {/* =====================================================================
            2-COLUMN PARALLAX & TRACED STORYTELLING CONTAINER
            - Side 1: Sticky Image Frame with Parallax Crossfade
            - Side 2: Scrolling Story Beats with Synchronized Laser Tracing
           ===================================================================== */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20 relative">
          {/* ===================================================================
              SIDE 1 (LEFT): STICKY PARALLAX IMAGE STACK
             =================================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 z-20">
            <div className="relative h-[380px] sm:h-[460px] lg:h-[530px] w-full rounded-3xl overflow-hidden border border-blue-200/90 shadow-[0_25px_60px_-15px_rgba(30,58,138,0.18)] bg-slate-900 group">
              {/* Image Stack with Smooth Crossfade & Parallax Zoom */}
              {storyBeats.map((beat, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={beat.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={beat.image}
                      alt={beat.caption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                      priority={idx === 0}
                    />
                    {/* Cinematic Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/30" />
                  </div>
                );
              })}

              {/* Floating Top Glass Badge: Active Beat Indicator */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-md font-serif">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span>BEAT 0{activeIndex + 1} / 04</span>
                <span className="text-blue-300">•</span>
                <span className="text-slate-600">{storyBeats[activeIndex].tag}</span>
              </div>

              {/* Floating Bottom Glass Caption & Interactive Thumbnails */}
              <div className="absolute bottom-4 inset-x-4 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-200/90 shadow-xl flex items-center justify-between font-serif">
                <div className="pr-2">
                  <span className="text-[10px] tracking-[0.2em] font-bold text-blue-700 uppercase block">
                    {storyBeats[activeIndex].badge}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-950 line-clamp-1 mt-0.5">
                    {storyBeats[activeIndex].caption}
                  </p>
                </div>

                {/* Symmetrical Step Jumper Dots */}
                <div className="flex items-center gap-1.5 pl-3 border-l border-blue-100 shrink-0">
                  {storyBeats.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToBeat(i)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activeIndex === i
                          ? "w-6 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                          : "w-2 bg-blue-200 hover:bg-blue-400"
                      }`}
                      aria-label={`Jump to beat ${i + 1}`}
                      title={`Jump to beat 0${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================================
              SIDE 2 (RIGHT): SCROLLING STORY BEATS WITH TEXT TRACING
             =================================================================== */}
          <div className="lg:col-span-7 relative pl-0 sm:pl-8">
            {/* Continuous Vertical Glowing Blue Tracing Track */}
            <div className="absolute left-2.5 top-8 bottom-8 w-1 bg-blue-100/80 rounded-full overflow-hidden hidden sm:block">
              {/* Dynamic Progress Fill */}
              <div
                className="w-full bg-gradient-to-b from-blue-400 via-blue-600 to-blue-700 transition-all duration-200 rounded-full"
                style={{ height: `${Math.min(100, Math.max(8, scrollProgress * 100))}%` }}
              />
            </div>

            {/* Pulsing Laser Bead travelling with scroll */}
            <div
              className="absolute left-[7px] w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,1)] hidden sm:block pointer-events-none transition-all duration-200 -translate-y-1/2"
              style={{ top: `${Math.min(94, Math.max(6, scrollProgress * 100))}%` }}
            />

            {/* Story Beat Cards */}
            <div className="space-y-12">
              {storyBeats.map((beat, idx) => {
                const isActive = activeIndex === idx;
                const Icon = beat.icon;

                return (
                  <div
                    key={beat.id}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    onClick={() => scrollToBeat(idx)}
                    className={`relative p-6 sm:p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "bg-white border-2 border-blue-600 shadow-[0_20px_50px_rgba(37,99,235,0.12),0_0_0_1px_rgba(37,99,235,0.3)] translate-x-0 sm:translate-x-1"
                        : "bg-white/80 border border-blue-100 hover:border-blue-300 hover:bg-white opacity-60 hover:opacity-90 shadow-sm"
                    }`}
                  >
                    {/* Top Row: Node Index + Beat Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {/* Numerical Step Node */}
                        <div
                          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center font-serif text-sm font-bold transition-all duration-300 ${
                            isActive
                              ? "bg-blue-600 text-white shadow-[0_0_16px_rgba(37,99,235,0.5)] scale-105"
                              : "bg-blue-50 text-blue-900 border border-blue-200"
                          }`}
                        >
                          0{idx + 1}
                        </div>

                        <div>
                          <span
                            className={`text-[10px] tracking-[0.22em] uppercase font-bold transition-colors font-serif block ${
                              isActive ? "text-blue-600" : "text-slate-400"
                            }`}
                          >
                            {beat.tag}
                          </span>
                          <span className="text-[11px] text-slate-500 font-sans tracking-wider">
                            {beat.badge}
                          </span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-blue-50 text-blue-600 border border-blue-200"
                            : "text-slate-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Headline with Traced Underline */}
                    <div className="relative mb-3">
                      <h3
                        className={`text-xl sm:text-2xl font-bold font-serif transition-colors duration-300 ${
                          isActive ? "text-slate-950" : "text-slate-700"
                        }`}
                      >
                        {beat.title}
                      </h3>

                      {/* Animated Traced Blue Line Under Title */}
                      <div className="mt-2 h-0.5 w-full bg-blue-100 overflow-hidden rounded-full">
                        <div
                          className={`h-full bg-blue-600 transition-all duration-700 rounded-full ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Traced Quote Callout */}
                    <div
                      className={`my-4 p-4 rounded-2xl border-l-4 transition-all duration-500 ${
                        isActive
                          ? "bg-blue-50/70 border-blue-600 text-blue-950 shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-500"
                      }`}
                    >
                      <p className="text-xs sm:text-sm font-semibold italic font-serif leading-relaxed">
                        &ldquo;{beat.quote}&rdquo;
                      </p>
                    </div>

                    {/* Narrative Body Text */}
                    <p
                      className={`text-sm sm:text-base leading-relaxed font-serif mb-5 transition-colors duration-300 ${
                        isActive ? "text-slate-800" : "text-slate-600"
                      }`}
                    >
                      {beat.body}
                    </p>

                    {/* Feature Details List */}
                    <div className="space-y-2 pt-3 border-t border-blue-50">
                      {beat.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 text-xs sm:text-sm font-medium"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                              isActive ? "text-blue-600" : "text-blue-400"
                            }`}
                          />
                          <span
                            className={`font-serif transition-colors ${
                              isActive ? "text-slate-900" : "text-slate-600"
                            }`}
                          >
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Active Indicator Chip */}
                    {isActive && (
                      <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-semibold text-blue-700 font-serif border-t border-blue-100/70">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          <span>SYNCHRONIZED WITH SCENE 0{idx + 1}</span>
                        </span>
                        <span className="text-blue-500 flex items-center gap-0.5">
                          <span>Scroll to explore</span>
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================================
            SYMMETRICAL 4-METRIC RIDGE CREST BAR
           ===================================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-5 rounded-2xl border border-blue-200/90 text-center shadow-sm hover:border-blue-400 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold text-blue-950 font-serif block">
              7,200 ft
            </span>
            <span className="text-[10px] sm:text-[11px] text-blue-800 uppercase tracking-widest font-semibold font-serif mt-1 block">
              Ridge Elevation
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-blue-200/90 text-center shadow-sm hover:border-blue-400 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold text-blue-600 font-serif block">
              180°
            </span>
            <span className="text-[10px] sm:text-[11px] text-blue-800 uppercase tracking-widest font-semibold font-serif mt-1 block">
              Kanchenjunga Skyline
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-blue-200/90 text-center shadow-sm hover:border-blue-400 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold text-blue-950 font-serif block">
              Chumbong
            </span>
            <span className="text-[10px] sm:text-[11px] text-blue-800 uppercase tracking-widest font-semibold font-serif mt-1 block">
              Quiet Slopes
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-blue-200/90 text-center shadow-sm hover:border-blue-400 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold text-blue-600 font-serif block">
              Pelling
            </span>
            <span className="text-[10px] sm:text-[11px] text-blue-800 uppercase tracking-widest font-semibold font-serif mt-1 block">
              West Sikkim Basecamp
            </span>
          </div>
        </div>

        {/* =====================================================================
            GOLDEN SUNRISE SIGHTLINE WINDOW BANNER
           ===================================================================== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(30,58,138,0.05)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-blue-900 font-bold block mb-0.5 font-serif">
                Optimal Mountain Sightline Window
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-950 font-serif">
                Golden Sunrise over Kanchenjunga: 05:30 AM – 07:15 AM
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-serif mt-1 max-w-2xl leading-relaxed">
                Peak visibility is at its clearest during crisp morning hours from October to May, unobstructed straight from our observation deck and private room balconies.
              </p>
            </div>
          </div>
          <a
            href="#rooms"
            className="shrink-0 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95 font-serif"
          >
            <MountainSnow className="w-4 h-4" />
            <span>View Mountain Rooms</span>
          </a>
        </div>
      </div>
    </section>
  );
}
