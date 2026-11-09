"use client";

import React from "react";
import {
  MountainSnow,
  UtensilsCrossed,
  Flame,
  Wifi,
  Compass,
  Car,
  Eye,
  Clock,
  Sparkles,
  Coffee,
  CheckCircle2,
} from "lucide-react";
import TiltCard from "./TiltCard";

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: MountainSnow,
      title: "Kanchenjunga Balcony Views",
      desc: "Front-facing balcony rooms provide an unmatched vantage point overlooking the majestic Khangchendzonga peaks and Pelling valleys.",
    },
    {
      icon: UtensilsCrossed,
      title: "In-House Mountain Dining",
      desc: "Our on-site chef prepares freshly made, comforting home-style breakfast and dinner, including Kadai-style hot paranthas and traditional thalis.",
    },
    {
      icon: Flame,
      title: "24/7 Hot Water Geysers",
      desc: "Equipped with dedicated bathroom geysers to ensure soothing hot showers after cool mornings exploring the Himalayan high ridges.",
    },
    {
      icon: Eye,
      title: "Open Hilltop Terrace",
      desc: "An expansive rooftop terrace with a 180-degree unobstructed view of the surrounding hills, pine forests, and starry night skies.",
    },
    {
      icon: Compass,
      title: "Sightseeing & Tour Desk",
      desc: "Assistance with local sightseeing itineraries, taxi hiring, and visits to Sanga Choeling, Skywalk, Pemayangtse, and Kanchenjunga Falls.",
    },
    {
      icon: Car,
      title: "On-Site Guest Parking",
      desc: "Safe and convenient parking space right at the property along the Chumbong approach road for self-driven and hired tourist vehicles.",
    },
    {
      icon: Wifi,
      title: "Mountain Wi-Fi Connectivity",
      desc: "Complimentary wireless internet coverage so you can share your breathtaking mountain sunrise photos with loved ones back home.",
    },
    {
      icon: Clock,
      title: "Warm Caretaker Hospitality",
      desc: "Friendly, courteous local staff and manager dedicated to assisting with luggage, morning tea, warm bedding, and personalized care.",
    },
  ];

  return (
    <section id="amenities" className="py-24 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-100/30 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs uppercase tracking-widest mb-3 font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Comfort & Hospitality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Essential Mountain Comforts
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Everything you need for a restful, restorative mountain stay in West Sikkim,
            combining rustic tranquility with genuine hospitality.
          </p>
        </div>

        {/* 8 Amenities Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <TiltCard
                key={idx}
                maxTilt={8}
                perspective={1000}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-blue-200/80 hover:border-blue-500 shadow-[0_12px_30px_rgba(30,58,138,0.06)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.14)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-all shadow-sm">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 font-serif mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-blue-100 flex items-center gap-1.5 text-[11px] text-blue-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Complimentary for Guests</span>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Home Dining Highlight Banner with Blue Detailing */}
        <div className="mt-14 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl border border-blue-200/90 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_16px_40px_rgba(30,58,138,0.08)]">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-blue-600 text-white shadow-md shrink-0">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] tracking-widest text-blue-800 uppercase font-bold">
                IN-HOUSE DINING SPOTLIGHT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif mb-1">
                Warm, Home-Cooked Meals Made With Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed">
                Our in-house chef prepares freshly cooked meals on order. Guests consistently praise our
                hot morning kadai paranthas, fresh tea, and comforting homestyle dinners prepared specially for you
                after a scenic day exploring Pelling.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <div className="px-4 py-2.5 rounded-2xl bg-white border border-blue-200 text-xs font-semibold text-blue-900 flex items-center gap-2 shadow-sm">
              <Coffee className="w-4 h-4 text-blue-600" />
              <span>Fresh Tea & Breakfast Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
