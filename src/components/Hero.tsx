"use client";

import React, { useEffect, useRef } from "react";
import HeroScene from "./hero/HeroScene";

interface HeroProps {
  onOpenBooking?: () => void;
  onOpenBookingWithRoom?: (roomName: string) => void;
}

export default function Hero({}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

  // Pause Hero animations automatically when scrolled out of viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          el.classList.remove("hero-paused");
        } else {
          el.classList.add("hero-paused");
        }
      },
      { threshold: 0.02 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scheduleLerp = () => {
    if (rafRef.current !== null || !isVisibleRef.current) return;

    const step = () => {
      const el = sectionRef.current;
      if (!el || !isVisibleRef.current) {
        rafRef.current = null;
        return;
      }

      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;

      currentRef.current.x += dx * 0.12;
      currentRef.current.y += dy * 0.12;

      el.style.setProperty("--mx", currentRef.current.x.toFixed(4));
      el.style.setProperty("--my", currentRef.current.y.toFixed(4));

      if (Math.abs(dx) > 0.002 || Math.abs(dy) > 0.002) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        currentRef.current = { ...targetRef.current };
        el.style.setProperty("--mx", currentRef.current.x.toFixed(4));
        el.style.setProperty("--my", currentRef.current.y.toFixed(4));
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    if (!clientWidth || !clientHeight) return;
    targetRef.current.x = (e.clientX / clientWidth - 0.5) * 2;
    targetRef.current.y = (e.clientY / clientHeight - 0.5) * 2;
    scheduleLerp();
  };

  const handleMouseLeave = () => {
    targetRef.current = { x: 0, y: 0 };
    scheduleLerp();
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[calc(100vh-76px)] md:h-[calc(100vh-106px)] min-h-[540px] overflow-hidden flex flex-col justify-start bg-[#82b6d6] select-none"
      style={{ contain: "layout paint" }}
    >
      {/* Dreamlike Layered Himalayan Alpine Scene (Zero React Re-renders on Move) */}
      <HeroScene />

      {/* Simplified Editorial Hook Blended Seamlessly Into the Clear Upper-Left Sky */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-8 sm:pt-10 md:pt-12 lg:pt-14 flex flex-col items-start pointer-events-none select-none">
        <h1 className="font-hero-condensed uppercase tracking-tight">
          <span className="block text-[13vw] sm:text-[9.5vw] md:text-[7.5vw] lg:text-[84px] xl:text-[98px] leading-[0.88] text-[#061d30] drop-shadow-[0_2px_10px_rgba(255,255,255,0.65)]">
            EXPERIENCE
          </span>
          <span className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 text-[13vw] sm:text-[9.5vw] md:text-[7.5vw] lg:text-[84px] xl:text-[98px] leading-[0.88]">
            <span className="text-[#0284c7] drop-shadow-[0_2px_12px_rgba(255,255,255,0.75)]">
              THE
            </span>
            <span className="text-[#061d30] drop-shadow-[0_2px_10px_rgba(255,255,255,0.65)]">
              HIMALAYAS
            </span>
          </span>
        </h1>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-serif italic text-[#08253d] font-semibold tracking-wide drop-shadow-[0_1px_6px_rgba(255,255,255,0.85)]">
          Up close from your morning tea • Chumbong, West Sikkim
        </p>
      </div>
    </section>
  );
}
