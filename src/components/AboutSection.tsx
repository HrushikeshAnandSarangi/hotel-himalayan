"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const images = useMemo(
    () => [
      {
        src: "/about/skyline-morning.jpg",
        alt: "Kanchenjunga morning mountain skyline from Chumbong Pelling",
      },
      {
        src: "/about/morning-tea.jpg",
        alt: "Honest mountain hospitality and hot morning tea on the terrace",
      },
      {
        src: "/about/homestyle-kitchen.jpg",
        alt: "Hot home-style meals and fresh local produce from the kitchen",
      },
      {
        src: "/about/sunset-terrace.jpg",
        alt: "Open storytelling terrace and mountain basecamp at dusk",
      },
    ],
    []
  );

  const paragraphTexts = useMemo(
    () => [
      "Hotel Himalayan started with a very simple thought: when you come to the mountains, you shouldn't have to crane your neck or hike an hour just to catch a glimpse of the skyline.",
      "Perched on the quiet slopes of Chumbong in Pelling, we offer honest mountain hospitality without unnecessary noise.",
      "The kettle is always ready, the kitchen serves hot home-style meals made with local produce, and the open terrace turns strangers into storytelling circles as soon as the sun dips below the snowline.",
      "Whether you are chasing peaks with a heavy rucksack or taking a quiet break from work, this is your basecamp.",
    ],
    []
  );

  // Precompute word tokens with global index and paragraph index
  const { paragraphsData, totalWords } = useMemo(() => {
    let wordCounter = 0;
    const data = paragraphTexts.map((text, pIdx) => {
      const tokens = text.split(/\s+/).filter(Boolean);
      const words = tokens.map((token) => ({
        text: token,
        globalIndex: wordCounter++,
        paragraphIndex: pIdx,
      }));
      return { words, paragraphIndex: pIdx };
    });
    return { paragraphsData: data, totalWords: wordCounter };
  }, [paragraphTexts]);

  // Track scroll through the locked multi-screen runway
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setScrollProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map scroll progress to word-by-word tracing
  const currentTracedIndex = useMemo(() => {
    // Lead-in from 0.03 to 0.97 for smooth edge transitions
    const leadIn = 0.03;
    const leadOut = 0.97;
    if (scrollProgress < leadIn) return -1;
    if (scrollProgress >= leadOut) return totalWords;

    const normalized = (scrollProgress - leadIn) / (leadOut - leadIn);
    return Math.floor(normalized * totalWords);
  }, [scrollProgress, totalWords]);

  // Determine active image index based on the paragraph of the currently traced word
  const activeImageIndex = useMemo(() => {
    if (currentTracedIndex <= 0) return 0;
    const allWords = paragraphsData.flatMap((p) => p.words);
    const safeIdx = Math.min(currentTracedIndex, allWords.length - 1);
    return allWords[safeIdx]?.paragraphIndex ?? 0;
  }, [currentTracedIndex, paragraphsData]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-[340vh] sm:h-[380vh] bg-white select-none"
    >
      {/* =====================================================================
          FULL-SCREEN LOCKED VIEWPORT
          - Pinned at top-0 while the user scrolls through the 340vh runway
          - 50/50 split on desktop: Left = Full-bleed Slider, Right = Traced Text
         ===================================================================== */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row bg-white">
        {/* ===================================================================
            SIDE 1: FULL-SCREEN PICTURE SLIDER (ZERO EXTRA CLUTTER)
            - Covers full height of the split screen
            - Smooth spatial depth crossfades and subtle parallax scale
           =================================================================== */}
        <div className="w-full lg:w-1/2 h-[42vh] lg:h-full relative overflow-hidden bg-slate-950 shrink-0">
          {images.map((image, idx) => {
            const isActive = activeImageIndex === idx;
            return (
              <div
                key={image.src}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
                  isActive
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-108 z-0 pointer-events-none"
                }`}
                style={{
                  willChange: "transform, opacity",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out"
                  priority={idx === 0}
                />
                {/* Subtle Cinematic Vignette for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* ===================================================================
            SIDE 2: WRITING SECTION (HOOK + WORD-BY-WORD TRACED PARAGRAPHS ONLY)
            - Locked alongside the picture slider
            - Traces one word by another with scroll
           =================================================================== */}
        <div className="w-full lg:w-1/2 h-[58vh] lg:h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 bg-white relative z-10 overflow-hidden">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            {/* The Hook: A front-row seat to West Sikkim. */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-950 tracking-tight font-serif mb-6 sm:mb-8 lg:mb-10 leading-[1.15]">
              A front-row seat to West Sikkim.
            </h2>

            {/* Word-by-Word Traced Paragraphs */}
            <div className="space-y-4 sm:space-y-6 font-serif text-base sm:text-lg lg:text-xl xl:text-[22px] leading-[1.6] sm:leading-[1.65] text-slate-900">
              {paragraphsData.map((para, pIdx) => (
                <p key={pIdx} className="leading-[1.6] sm:leading-[1.65]">
                  {para.words.map((word) => {
                    const isTraced = word.globalIndex <= currentTracedIndex;
                    const isCurrent = word.globalIndex === currentTracedIndex;

                    return (
                      <span
                        key={word.globalIndex}
                        className={`inline-block mr-[0.3em] transition-all duration-200 ${
                          isTraced
                            ? "text-slate-950 font-medium opacity-100"
                            : "text-slate-300 opacity-30 font-normal"
                        } ${
                          isCurrent
                            ? "text-blue-600 font-bold scale-[1.05] drop-shadow-[0_0_10px_rgba(37,99,235,0.45)]"
                            : ""
                        }`}
                      >
                        {word.text}
                      </span>
                    );
                  })}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
