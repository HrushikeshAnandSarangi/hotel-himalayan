"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  MountainSnow,
  Flame,
  UtensilsCrossed,
  Compass,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Camera,
} from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const faqs = [
    {
      q: "Is Mt. Kanchenjunga visible directly from the hotel?",
      a: "Yes. Private room balconies and our open rooftop observation deck provide straight-on, unobstructed views of the Kanchenjunga range, with peak clarity during golden sunrise hours from October to May.",
      icon: MountainSnow,
    },
    {
      q: "Do you serve freshly prepared meals on site?",
      a: "Yes. Our in-house kitchen prepares fresh, home-cooked Sikkimese delicacies and multi-cuisine comfort food daily, using locally sourced vegetables and poultry.",
      icon: UtensilsCrossed,
    },
    {
      q: "Is hot water continuously available during winter?",
      a: "Every attached western bathroom is fitted with an independent water geyser, ensuring steaming hot water whenever you need it.",
      icon: Flame,
    },
    {
      q: "Can you arrange reliable local cabs for sightseeing?",
      a: "Yes. Our front desk coordinates trusted local drivers for full-day excursions to Pelling Skywalk, Khecheopalri Lake, Rabdentse Ruins, and Kanchenjunga Waterfalls.",
      icon: Compass,
    },
  ];

  // Curated stock photo gallery of Hotel Himalayan experience
  const gallerySlides = [
    {
      src: "/gallery/kanchenjunga-morning.jpg",
      title: "Kanchenjunga Golden Sunrise",
      subtitle: "Unobstructed 180° dawn vista straight from the observation deck",
    },
    {
      src: "/gallery/resort-balcony-view.jpg",
      title: "Private Balcony Living",
      subtitle: "Crisp alpine morning air overlooking tranquil Chumbong slopes",
    },
    {
      src: "/gallery/mountain-sunrise-mist.jpg",
      title: "Misty Himalayan Valleys",
      subtitle: "Quiet nature-centric atmosphere just 5 minutes outside Pelling",
    },
    {
      src: "/gallery/evening-bonfire-stars.jpg",
      title: "Starlit Garden Bonfire",
      subtitle: "Spacious open lawn for evening tea and warm fires under open skies",
    },
    {
      src: "/gallery/himalayan-tea-terrace.jpg",
      title: "Darjeeling Tea on the Terrace",
      subtitle: "Freshly brewed comfort paired with panoramic West Sikkim ridges",
    },
    {
      src: "/gallery/sikkim-valley-ridge.jpg",
      title: "Chumbong Pine Ridge",
      subtitle: "Serene mountain basecamp for exploring historic West Sikkim",
    },
  ];

  // Auto-advance gallery slides with pause-on-hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, gallerySlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? gallerySlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
  };

  return (
    <section id="faq" className="py-28 bg-[#fbfdff] relative overflow-hidden">
      {/* Background Ambient Depth */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            1. FREQUENTLY ASKED QUESTIONS (No "Traveler Guide" tag)
            ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight font-serif mb-4">
            Frequently Asked Questions
          </h2>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-2 h-2 rotate-45 bg-blue-700 shadow-sm" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <p className="text-base sm:text-lg text-slate-700 font-serif leading-relaxed">
            Essential details to help you prepare for a comfortable stay on the quiet slopes of Chumbong.
          </p>
        </div>

        {/* Accordions (Premium Motion Easing & Taste Detailing) */}
        <div className="space-y-4 mb-24">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const Icon = faq.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-blue-200/80 overflow-hidden shadow-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-blue-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-blue-50/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 shrink-0 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-slate-950 font-serif">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen ? "rotate-180 text-blue-800" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-blue-100 pt-4 bg-blue-50/20 font-serif animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            2. PHOTO SLIDER GALLERY (Beneath FAQ with Motion Refinements)
            ========================================================================= */}
        <div
          className="pt-10 border-t border-blue-200/70"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gallery Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-serif mb-2 flex items-center gap-2.5">
                <Camera className="w-5 h-5 text-blue-600" />
                <span>Atmosphere & Vistas</span>
              </h3>
              <p className="text-sm text-slate-600 font-serif">
                A glimpse into life, sunrises, and mountain quietude at Hotel Himalayan.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={prevSlide}
                className="p-3 rounded-xl border border-blue-200 hover:bg-blue-50 text-blue-900 transition-colors cursor-pointer shadow-sm"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-xl border border-blue-200 hover:bg-blue-50 text-blue-900 transition-colors cursor-pointer shadow-sm"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Master Slide Showcase Container */}
          <div className="relative rounded-3xl overflow-hidden border border-blue-200/90 shadow-[0_20px_50px_rgba(14,28,64,0.1)] bg-slate-950 aspect-[16/9] sm:aspect-[21/9] min-h-[340px]">
            {gallerySlides.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  {/* Slide Image */}
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover select-none scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
                  />

                  {/* Gradient Legibility Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                  {/* Slide Caption Box */}
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 z-20 text-white">
                    <span className="text-[11px] uppercase tracking-widest text-blue-300 font-mono font-medium block mb-1">
                      {idx + 1} / {gallerySlides.length} • Hotel Himalayan Pelling
                    </span>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif mb-1">
                      {slide.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-100/90 font-serif max-w-xl leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {gallerySlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? "w-8 bg-blue-600" : "w-2 bg-blue-200 hover:bg-blue-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
