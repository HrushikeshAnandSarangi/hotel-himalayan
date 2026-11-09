"use client";

import React from "react";
import {
  Star,
  Quote,
  MapPin,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import TiltCard from "./TiltCard";

export default function ReviewsSection() {
  const reviews = [
    {
      id: "ananya-d",
      author: "Ananya D.",
      location: "Kolkata",
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
      tag: "Outstanding Hospitality",
    },
    {
      id: "rohit-shreya",
      author: "Rohit & Shreya",
      location: "Bangalore",
      rating: 5,
      body: "Best balcony views in Pelling, hands down. You can literally watch the mountain turn gold while wrapped in your duvet.",
      tag: "Golden Sunrise Balcony",
    },
  ];

  const gmapsLink =
    "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y";

  return (
    <section id="reviews" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs uppercase tracking-widest mb-3 font-semibold shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>Guest Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4 font-serif">
            What Guests Say
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Real impressions from mountain lovers, couples, and solo explorers who basecamped with us on the Chumbong ridge.
          </p>

          {/* Aggregate Rating Badge Banner on White Card */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-6 p-5 rounded-3xl bg-blue-50/70 border border-blue-200 shadow-md">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-blue-950 font-serif">
                4.2
              </span>
              <div>
                <div className="flex text-blue-600">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? "fill-blue-600 text-blue-600"
                          : "fill-blue-200 text-blue-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-blue-800 uppercase tracking-wider font-semibold block mt-0.5">
                  Google Maps Rating
                </span>
              </div>
            </div>

            <div className="h-8 w-px bg-blue-200 hidden sm:block" />

            <div className="text-left">
              <span className="text-sm font-bold text-slate-900 block">
                100+ Total Guest Reviews
              </span>
              <span className="text-xs text-blue-800 font-medium">
                Chumbong Road, Pelling, West Sikkim
              </span>
            </div>

            <a
              href={gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md ml-auto"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Verify on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 3D Tilt Reviews Grid with Spatial Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <TiltCard
              key={rev.id}
              maxTilt={7}
              perspective={1100}
              className="bg-white rounded-3xl border border-blue-200/90 p-8 shadow-[0_16px_40px_rgba(30,58,138,0.06),0_0_0_1px_rgba(255,255,255,1)_inset] flex flex-col justify-between hover:border-blue-400 transition-all duration-300 relative group"
            >
              {/* Quote mark decoration */}
              <Quote className="w-8 h-8 text-blue-200/60 absolute top-6 right-6" />

              <div>
                {/* Author Info & Tag */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 font-serif">
                      {rev.author}
                    </h3>
                    <span className="text-xs text-blue-700 font-semibold flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3 h-3 text-blue-600" />
                      {rev.location}
                    </span>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-bold bg-blue-50 border border-blue-200 text-blue-900">
                    {rev.tag}
                  </span>
                </div>

                {/* Stars in Vibrant Blue */}
                <div className="flex items-center gap-1 mb-4 text-blue-600">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-blue-600 text-blue-600"
                    />
                  ))}
                </div>

                {/* Review Body (Exact Layout Quote) */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.body}&rdquo;
                </p>
              </div>

              {/* Review Footer */}
              <div className="pt-4 border-t border-blue-100 flex items-center justify-between text-xs text-blue-900 font-bold">
                <span>{`— ${rev.author}, ${rev.location}`}</span>
                <span className="text-[11px] text-blue-600 font-medium">Verified Stay</span>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* CTA to Google Maps */}
        <div className="mt-14 text-center">
          <a
            href={gmapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(37,99,235,0.35)] border border-blue-500 transition-all hover:shadow-[0_12px_30px_rgba(37,99,235,0.45)]"
          >
            <MapPin className="w-4 h-4 text-blue-100" />
            <span>Read All Google Maps Reviews for Hotel Himalayan</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
