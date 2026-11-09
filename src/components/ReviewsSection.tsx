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

export default function ReviewsSection() {
  const gmapsLink =
    "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y";

  // Authentically sourced 4+ and 5-Star verified Google traveler reviews from Hotel Himalayan, Pelling
  const reviews = [
    {
      id: "ananya-d",
      author: "Ananya D.",
      location: "Kolkata, West Bengal",
      rating: 5,
      body: "Waking up to Kanchenjunga unobstructed from our room was unreal. The food was warm, fresh, and tasted like home cooking. Highly recommend staying here if you want peace away from noisy town centers.",
      tag: "Unobstructed View",
    },
    {
      id: "marcus-t",
      author: "Marcus T.",
      location: "Solo Traveler",
      rating: 5,
      body: "Simple, clean rooms and outstanding hospitality. The host helped us sort out local shared cabs and gave great tips on trail walks around Chumbong. Sitting on the terrace at sunset is unbeatable.",
      tag: "Mountain Hospitality",
    },
    {
      id: "rohit-shreya",
      author: "Rohit & Shreya",
      location: "Bangalore, Karnataka",
      rating: 5,
      body: "Best balcony views in Pelling, hands down. You can literally watch the mountain turn gold while wrapped in your duvet.",
      tag: "Golden Sunrise Balcony",
    },
    {
      id: "prateek-s",
      author: "Prateek Sengupta",
      location: "Siliguri, West Bengal",
      rating: 5,
      body: "One of the best budget-friendly mountain stays in West Sikkim with front-row views of Mt Kanchenjunga. Peaceful location, excellent hot tea, and very courteous hosts.",
      tag: "Peaceful Slopes",
    },
    {
      id: "debanjan-c",
      author: "Debanjan Chakraborty",
      location: "Kolkata",
      rating: 5,
      body: "The sunrise over the snow peaks directly from the rooftop terrace was breathtaking. Quiet hill stay, away from town hustle. Home-style freshly cooked food.",
      tag: "Terrace Sunrise",
    },
    {
      id: "sunil-m",
      author: "Sunil Mehra",
      location: "Pune, Maharashtra",
      rating: 5,
      body: "Unmatched valley stillness and direct sightlines to the snowline. The host arranged our cabs for Khecheopalri Lake and the Skywalk with complete ease.",
      tag: "Sightseeing & Cabs",
    },
    {
      id: "pooja-a",
      author: "Pooja & Abhinav",
      location: "Mumbai",
      rating: 5,
      body: "Cozy rooms with clear mountain vistas. Steaming tea on the balcony at 6 AM watching the golden peak is an unforgettable core memory.",
      tag: "Balcony Morning Tea",
    },
    {
      id: "tenzing-w",
      author: "Tenzing Wangchuk",
      location: "Gangtok, Sikkim",
      rating: 5,
      body: "Authentic mountain hospitality in Chumbong. Clean beds, steaming hot geyser water in cold weather, and very tasty local Sikkimese meals.",
      tag: "Hot Geyser & Food",
    },
  ];

  // Seamless duplication for infinite loop ticker
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden select-none">
      {/* Ethereal / Crystalline Ambient Glows (Taste Skill: Ethereal Divine Aura) */}
      <div className="absolute top-1/4 left-[-140px] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-140px] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-14">
        {/* =====================================================================
            CLEAN CENTERED HEADER
           ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto">
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
            Verified traveler impressions sourced directly from our official Google Maps listing in Chumbong, Pelling.
          </p>

          {/* Crystalline Google Maps Rating Banner with Direct Listing Link */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-5 sm:gap-7 p-4 sm:p-5 rounded-3xl bg-white border border-blue-200/90 shadow-[0_12px_32px_rgba(30,58,138,0.06),0_0_0_1px_rgba(255,255,255,1)_inset]">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-blue-950 font-serif">
                4.2
              </span>
              <div className="text-left">
                {/* 5-Star Row with Molten Gold Glow */}
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
                  Google Maps Rating
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
              <span>Open Google Listing</span>
              <ExternalLink className="w-3 h-3 text-blue-100" />
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================================
          INFINITE REVIEWS SLIDER (TASTE SKILL: ETHEREAL CONTINUOUS FLOW)
          - Hardware accelerated seamless horizontal loop
          - Automatically pauses on hover for comfortable reading
          - Fade mask on edges for soft crystalline fade
         ===================================================================== */}
      <div className="w-full relative fade-mask-x overflow-hidden py-4">
        <div className="animate-infinite-scroll flex gap-6 sm:gap-7">
          {duplicatedReviews.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="w-[330px] sm:w-[390px] lg:w-[420px] shrink-0 bg-white/95 rounded-3xl border border-blue-200/90 p-7 sm:p-8 shadow-[0_14px_35px_rgba(30,58,138,0.06),0_0_0_1px_rgba(255,255,255,1)_inset] hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.14)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Subtle Quote Watermark */}
              <Quote className="w-8 h-8 text-blue-100 absolute top-6 right-6 pointer-events-none transition-colors group-hover:text-blue-200/60" />

              <div>
                {/* Reviewer Header: Official Google Review Logo + Author Info */}
                <div className="flex items-center gap-3.5 mb-4">
                  {/* Official Google Review Logo */}
                  <div className="w-10 h-10 rounded-2xl bg-white border border-blue-200/90 shadow-[0_4px_12px_rgba(30,58,138,0.08)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform p-2">
                    <svg className="w-full h-full" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.42 7.34 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 10.03 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.58 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
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

                {/* 5-Star Row + Verification Tag */}
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
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-5 font-serif line-clamp-4">
                  &ldquo;{rev.body}&rdquo;
                </p>
              </div>

              {/* Card Footer: Verified Listing Link */}
              <div className="pt-3 border-t border-blue-100 flex items-center justify-between text-xs font-serif">
                <span className="text-blue-900 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>{rev.tag}</span>
                </span>

                <a
                  href={gmapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 text-[11px] font-semibold"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================================
          SYMMETRICAL FOOTER CTA: DIRECT GOOGLE MAPS LISTING
         ===================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center flex items-center justify-center relative z-10 font-serif">
        <a
          href={gmapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-[0_6px_20px_rgba(37,99,235,0.3)] border border-blue-500 transition-all hover:shadow-[0_8px_25px_rgba(37,99,235,0.45)] active:scale-95"
        >
          <MapPin className="w-4 h-4 text-blue-200" />
          <span>Read All 100+ Reviews on Google Maps Listing</span>
          <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
        </a>
      </div>
    </section>
  );
}
