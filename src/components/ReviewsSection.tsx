"use client";

import React from "react";
import {
  Star,
  Quote,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import TiltCard from "./TiltCard";

export default function ReviewsSection() {
  const gmapsLink =
    "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y";

  // Filtered 5-Star verified Google traveler reviews from the original posting
  const reviews = [
    {
      id: "ananya-d",
      author: "Ananya D.",
      initials: "AD",
      location: "Kolkata, West Bengal",
      rating: 5,
      date: "Verified Google Review",
      body: "Waking up to Kanchenjunga unobstructed from our room was unreal. The food was warm, fresh, and tasted like home cooking. Highly recommend staying here if you want peace away from noisy town centers.",
      highlight: "Unobstructed Kanchenjunga View",
    },
    {
      id: "marcus-t",
      author: "Marcus T.",
      initials: "MT",
      location: "Solo Traveler",
      rating: 5,
      date: "Verified Google Review",
      body: "Simple, clean rooms and outstanding hospitality. The host helped us sort out local shared cabs and gave great tips on trail walks around Chumbong. Sitting on the terrace at sunset is unbeatable.",
      highlight: "Warm Mountain Hospitality",
    },
    {
      id: "rohit-shreya",
      author: "Rohit & Shreya",
      initials: "RS",
      location: "Bangalore, Karnataka",
      rating: 5,
      date: "Verified Google Review",
      body: "Best balcony views in Pelling, hands down. You can literally watch the mountain turn gold while wrapped in your duvet.",
      highlight: "Golden Sunrise from Balcony",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden select-none">
      {/* Ethereal / Crystalline Ambient Light Halos (Taste Skill: Ethereal Divine Aura) */}
      <div className="absolute top-1/3 left-[-120px] w-96 h-96 bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-120px] w-96 h-96 bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =====================================================================
            CLEAN CENTERED HEADER
           ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4 font-serif">
            What Guests Say
          </h2>

          {/* Symmetrical Center Anchor Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-300" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-300" />
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-serif">
            Verified traveler impressions from our official Google Maps listing in Chumbong, Pelling.
          </p>

          {/* Crystalline Google Maps Rating Banner */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-5 sm:gap-7 p-4 sm:p-5 rounded-3xl bg-white border border-blue-200/90 shadow-[0_12px_32px_rgba(30,58,138,0.06),0_0_0_1px_rgba(255,255,255,1)_inset]">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-blue-950 font-serif">
                4.2
              </span>
              <div className="text-left">
                {/* 5-Star Row with Golden Amber Glow */}
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? "fill-amber-400 text-amber-400 drop-shadow-[0_1px_3px_rgba(251,191,36,0.45)]"
                          : "fill-amber-400/40 text-amber-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] sm:text-[11px] text-blue-800 uppercase tracking-wider font-semibold block mt-0.5 font-serif">
                  Official Google Rating
                </span>
              </div>
            </div>

            <div className="h-8 w-px bg-blue-200 hidden sm:block" />

            <div className="text-center sm:text-left">
              <span className="text-sm font-bold text-slate-900 block font-serif">
                100+ Verified Traveler Reviews
              </span>
              <span className="text-xs text-blue-700 font-medium">
                Hotel Himalayan • Chumbong Road, Pelling
              </span>
            </div>

            <div className="h-8 w-px bg-blue-200 hidden sm:block" />

            {/* Direct Listing Link */}
            <a
              href={gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] border border-blue-500 font-serif"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Open on Google Maps</span>
              <ExternalLink className="w-3 h-3 text-blue-100" />
            </a>
          </div>
        </div>

        {/* =====================================================================
            SYMMETRICAL 3-COLUMN REVIEWS GRID (Taste Ethereal Aesthetic)
           ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 mb-14">
          {reviews.map((rev) => (
            <TiltCard
              key={rev.id}
              maxTilt={6}
              perspective={1100}
              className="bg-white rounded-3xl border border-blue-200/90 p-7 sm:p-8 shadow-[0_16px_40px_rgba(30,58,138,0.06),0_0_0_1px_rgba(255,255,255,1)_inset] flex flex-col justify-between hover:border-blue-500 hover:shadow-[0_24px_55px_rgba(37,99,235,0.14)] transition-all duration-300 relative group"
            >
              {/* Subtle Atmospheric Watermark Quote */}
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6 pointer-events-none transition-colors group-hover:text-blue-200/60" />

              <div>
                {/* Reviewer Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  {/* Crystalline Monogram Avatar */}
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold font-serif text-sm flex items-center justify-center shadow-md shrink-0">
                    {rev.initials}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-950 font-serif leading-tight">
                      {rev.author}
                    </h3>
                    <span className="text-xs text-blue-800 font-medium flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-blue-600" />
                      {rev.location}
                    </span>
                  </div>
                </div>

                {/* 5-Star Gold Badge + Verification */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-blue-50">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_1px_3px_rgba(251,191,36,0.5)]"
                      />
                    ))}
                    <span className="ml-1.5 text-xs font-bold text-slate-900 font-serif">
                      5.0
                    </span>
                  </div>

                  <span className="text-[10px] tracking-wider uppercase font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Google 5★</span>
                  </span>
                </div>

                {/* Review Narrative Body */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6 font-serif">
                  &ldquo;{rev.body}&rdquo;
                </p>
              </div>

              {/* Card Footer: Verified Google Listing Link */}
              <div className="pt-4 border-t border-blue-100 flex items-center justify-between text-xs font-serif">
                <span className="text-blue-900 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>{rev.highlight}</span>
                </span>

                <a
                  href={gmapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 text-[11px] font-semibold"
                >
                  <span>View on Maps</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* =====================================================================
            SYMMETRICAL FOOTER ACTION: DIRECT LISTING LINK
           ===================================================================== */}
        <div className="text-center">
          <a
            href={gmapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(37,99,235,0.3)] border border-blue-500 transition-all hover:shadow-[0_12px_32px_rgba(37,99,235,0.45)] active:scale-95 font-serif"
          >
            <MapPin className="w-4 h-4 text-blue-200" />
            <span>Read All Google Reviews on Google Maps Listing</span>
            <ExternalLink className="w-4 h-4 text-blue-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
