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
  // Scroll 0.00 -> 0.20: Small Screen takes over full viewport
  // Scroll 0.20 -> 0.92: Word-by-word tracing unfolds through 4 paragraphs
  const TAKEOVER_THRESHOLD = 0.20;
  const STORY_START = 0.20;
  const STORY_END = 0.92;

  const takeoverRatio = useMemo(() => {
    return Math.min(1, Math.max(0, scrollProgress / TAKEOVER_THRESHOLD));
  }, [scrollProgress]);

  const currentTracedIndex = useMemo(() => {
    if (scrollProgress < STORY_START) return -1;
    if (scrollProgress >= STORY_END) return totalWords;

    const normalized = (scrollProgress - STORY_START) / (STORY_END - STORY_START);
    return Math.floor(normalized * totalWords);
  }, [scrollProgress, totalWords]);

  // Determine active image index based on the paragraph of the currently traced word
  const activeImageIndex = useMemo(() => {
    if (currentTracedIndex <= 0) return 0;
    const allWords = paragraphsData.flatMap((p) => p.words);
    const safeIdx = Math.min(currentTracedIndex, allWords.length - 1);
    return allWords[safeIdx]?.paragraphIndex ?? 0;
  }, [currentTracedIndex, paragraphsData]);

  // Cubic ease-out for smooth organic window expansion
  const ease = useMemo(() => {
    return 1 - Math.pow(1 - takeoverRatio, 3);
  }, [takeoverRatio]);

  const isFullTakeover = takeoverRatio >= 1;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-[380vh] sm:h-[420vh] bg-[#548fae] select-none"
    >
      {/* =====================================================================
          STICKY EXPANDING PORTAL / FULL VIEWPORT RUNWAY
          - Continuous alpine blue background (#548fae) flowing seamlessly from Hero
          - Starts as a framed preview screen centered on screen
          - Expands smoothly on scroll (0.00 -> 0.20) to take over the entire viewport
          - Once takeover is complete (0.20 -> 0.92), word-by-word tracing unfolds
         ===================================================================== */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Subtle Ambient Scroll Hint during initial takeover */}
        {takeoverRatio < 0.35 && (
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-editorial-mono text-[10px] tracking-widest uppercase pointer-events-none z-30 transition-opacity duration-300"
            style={{ opacity: Math.max(0, 1 - takeoverRatio * 3.5) }}
          >
            <span>SCROLL TO ENTER</span>
            <span className="animate-bounce">↓</span>
          </div>
        )}

        {/* ===================================================================
            THE EXPANDING RETREAT SCREEN / WINDOW
           =================================================================== */}
        <div
          className={`flex flex-col bg-white overflow-hidden transition-all duration-75 ${
            isFullTakeover
              ? "w-full h-full rounded-none shadow-none border-0"
              : "border border-white/50"
          }`}
          style={{
            width: isFullTakeover ? "100vw" : `clamp(320px, ${74 + ease * 26}vw, 1280px)`,
            height: isFullTakeover ? "100vh" : `clamp(440px, ${62 + ease * 38}vh, 100vh)`,
            borderRadius: isFullTakeover ? "0px" : `${(1 - ease) * 28}px`,
            transform: isFullTakeover ? "none" : `scale(${0.76 + ease * 0.24})`,
            boxShadow: isFullTakeover
              ? "none"
              : `0 ${30 * (1 - ease)}px ${80 * (1 - ease)}px -15px rgba(2, 14, 26, ${0.45 * (1 - ease)})`,
            willChange: "transform, width, height, border-radius",
          }}
        >
          {/* Subtle Window Header Bar (fades out as it expands to full screen) */}
          {!isFullTakeover && (
            <div
              className="w-full px-4 py-2 bg-slate-900/90 text-white flex items-center justify-between shrink-0 select-none border-b border-white/10"
              style={{ opacity: Math.max(0, 1 - takeoverRatio * 1.3) }}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-editorial-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-sky-200">
                HOTEL HIMALAYAN • THE CHUMBONG STORY
              </span>
              <span className="font-editorial-mono text-[9px] sm:text-[10px] text-slate-400">
                WEST SIKKIM
              </span>
            </div>
          )}

          {/* =================================================================
              50/50 SPLIT CONTENT (SLIDER + TRACED ESSAY)
             ================================================================= */}
          <div className="w-full flex-1 flex flex-col lg:flex-row bg-white overflow-hidden relative">
            {/* SIDE 1: Full Picture Slider */}
            <div className="w-full lg:w-1/2 h-[40%] lg:h-full relative overflow-hidden bg-slate-950 shrink-0">
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

            {/* SIDE 2: Word-by-Word Traced Story */}
            <div className="w-full lg:w-1/2 h-[60%] lg:h-full flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 bg-white relative z-10 overflow-y-auto lg:overflow-hidden">
              <div className="max-w-xl mx-auto lg:mx-0 w-full py-4 lg:py-0">
                {/* The Hook Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-950 tracking-tight font-serif mb-4 sm:mb-6 lg:mb-8 leading-[1.15]">
                  A front-row seat to West Sikkim.
                </h2>

                {/* Word-by-Word Traced Paragraphs */}
                <div className="space-y-3.5 sm:space-y-5 font-serif text-sm sm:text-base lg:text-lg xl:text-[21px] leading-[1.6] sm:leading-[1.65] text-slate-900">
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
        </div>
      </div>

      {/* Gentle Bottom Gradient Transition into Sightseeing Section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
    </section>
  );
}
