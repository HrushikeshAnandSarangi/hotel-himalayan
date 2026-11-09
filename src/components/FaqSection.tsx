"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  MountainSnow,
  Flame,
  UtensilsCrossed,
  Compass,
} from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Mount Kanchenjunga visible directly from the rooms?",
      a: "Yes. Most of our rooms and the shared terrace feature clear, straight-on views of the Kanchenjunga range, especially during crisp morning hours from October to May.",
      icon: MountainSnow,
    },
    {
      q: "Do you serve food on site?",
      a: "Yes. We run a full in-house kitchen that prepares freshly cooked breakfast, lunch, and dinner. You will find comfort food, authentic Sikkimese dishes, and hot drinks available throughout the day.",
      icon: UtensilsCrossed,
    },
    {
      q: "Is there running hot water available during winter?",
      a: "Every attached bathroom comes fitted with a dedicated water heater (geyser) so you have steaming hot water whenever you need it.",
      icon: Flame,
    },
    {
      q: "Can you arrange cabs for local sightseeing?",
      a: "Yes. Let us know the evening before, and our desk can organize reliable local drivers for day trips to Khecheopalri Lake, Yuksom, local waterfalls, and the Skywalk.",
      icon: Compass,
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#f8fbff] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs uppercase tracking-widest mb-3 font-semibold shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Traveler Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mb-4 font-serif">
            Frequently Asked Questions
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300 mx-auto mb-6" />
        </div>

        {/* Accordions with Blue Detailing */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const Icon = faq.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-blue-200/90 overflow-hidden shadow-[0_8px_25px_rgba(30,58,138,0.05)] transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-blue-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 shrink-0 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-slate-950 font-serif">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-800" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-700 leading-relaxed border-t border-blue-100 pt-4 bg-blue-50/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
