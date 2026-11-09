"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Users,
  BedDouble,
  ArrowRight,
  ShieldCheck,
  Star,
  MountainSnow,
  UtensilsCrossed,
  Flame,
  Coffee,
  CheckCircle2,
} from "lucide-react";
import TiltCard from "./TiltCard";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenBookingWithRoom?: (roomName: string) => void;
}

export default function Hero({ onOpenBooking, onOpenBookingWithRoom }: HeroProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Mountain-View Deluxe Double");
  const [guests, setGuests] = useState("2 Guests");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenBookingWithRoom) {
      onOpenBookingWithRoom(roomType);
    } else {
      onOpenBooking();
    }
  };

  return (
    <section className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#f5f9ff] to-white">
      {/* Spatial Atmospheric Depth Layers (Ethereal Blue and White Gradients) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial blue atmosphere glow in center */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-blue-200/30 via-blue-100/20 to-transparent rounded-full blur-[110px]" />
        
        {/* Floating background decorative orbs with subtle blue glow */}
        <div className="absolute top-24 left-[10%] w-72 h-72 bg-blue-100/40 rounded-full blur-[90px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-[12%] w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] animate-pulse-glow" />

        {/* Multi-layered Stylized Mountain Contours in Shades of Blue with Spatial Depth */}
        <div className="absolute bottom-0 left-0 right-0 h-80 opacity-40">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,320 160,190 320,240 490,130 670,260 840,110 1020,230 1200,150 1440,320"
              fill="#bfdbfe"
              fillOpacity="0.45"
            />
            <polygon
              points="0,320 220,170 420,250 640,120 830,230 1050,110 1260,210 1440,320"
              fill="#93c5fd"
              fillOpacity="0.4"
            />
            <polygon
              points="0,320 280,220 520,280 760,180 970,270 1230,190 1440,320"
              fill="#60a5fa"
              fillOpacity="0.25"
            />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center flex flex-col items-center">
        {/* Floating Location Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-[0_8px_25px_rgba(30,58,138,0.08)] text-blue-900 text-xs sm:text-sm mb-6 backdrop-blur-md animate-levitate">
          <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="font-semibold tracking-wide">
            Chumbong, Pelling • West Sikkim • 7,200 Ft Elevation
          </span>
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
        </div>

        {/* Spatial 3D Hero Brand Showcase with the Uploaded Logo */}
        <TiltCard
          maxTilt={10}
          perspective={1200}
          className="mb-8 p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-200/80 shadow-[0_20px_60px_-15px_rgba(30,58,138,0.12),0_0_0_1px_rgba(255,255,255,0.9)_inset] max-w-lg w-full flex flex-col items-center"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-36 sm:h-44 mb-2 flex items-center justify-center transform translate-z-20 transition-transform">
            <Image
              src="/logo.png"
              alt="Hotel Himalayan Official Logo"
              width={420}
              height={240}
              className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(30,58,138,0.14)]"
              priority
            />
          </div>
          <div className="flex items-center gap-3 pt-2 border-t border-blue-100 w-full justify-center transform translate-z-10">
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-blue-300" />
            <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-blue-800 font-semibold">
              PELLING • SIKKIM • BASECAMP
            </span>
            <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-blue-300" />
          </div>
        </TiltCard>

        {/* Exact Layout Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950 mb-5 max-w-4xl leading-tight">
          Experience the Himalayas up close, right from your morning tea.
        </h1>

        {/* Exact Layout Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl leading-relaxed mb-9">
          Out on this ridge in Pelling, Kanchenjunga doesn&apos;t feel like a distant backdrop. She sits right in front of you, shedding her coat of morning mist and catching the first amber light while the rest of the valley is still asleep.
        </p>

        {/* Exact Layout Buttons: [ Check Availability ] [ View Rooms ] */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(37,99,235,0.35)] border border-blue-500 transition-all cursor-pointer hover:shadow-[0_12px_32px_rgba(37,99,235,0.45)]"
          >
            Check Availability
          </button>

          <a
            href="#rooms"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-blue-300 bg-white hover:bg-blue-50/80 active:scale-95 text-blue-900 font-bold text-sm uppercase tracking-wider transition-all shadow-sm hover:border-blue-400"
          >
            View Rooms
          </a>
        </div>

        {/* 3D Glassmorphic Fast Booking Bar with Blue Detailing */}
        <TiltCard
          maxTilt={5}
          perspective={1200}
          className="w-full max-w-4xl bg-white/90 backdrop-blur-2xl border border-blue-200/90 rounded-3xl p-5 sm:p-6 shadow-[0_25px_65px_-15px_rgba(30,58,138,0.12),0_0_0_1px_rgba(255,255,255,1)_inset]"
        >
          <div className="flex items-center justify-between border-b border-blue-100 pb-3.5 mb-4.5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-blue-900 font-bold">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Direct Reservation & Inquiry Desk</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-blue-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Best Tariff Guarantee</span>
            </div>
          </div>

          <form
            onSubmit={handleBookingSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left"
          >
            {/* Check-in */}
            <div className="bg-blue-50/60 p-3 rounded-2xl border border-blue-200/70 focus-within:border-blue-500 focus-within:bg-white transition-all">
              <label className="block text-[11px] uppercase tracking-wider text-blue-900 font-semibold mb-1">
                Check-In Date
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-900 font-medium focus:outline-none"
              />
            </div>

            {/* Check-out */}
            <div className="bg-blue-50/60 p-3 rounded-2xl border border-blue-200/70 focus-within:border-blue-500 focus-within:bg-white transition-all">
              <label className="block text-[11px] uppercase tracking-wider text-blue-900 font-semibold mb-1">
                Check-Out Date
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-900 font-medium focus:outline-none"
              />
            </div>

            {/* Room Category */}
            <div className="bg-blue-50/60 p-3 rounded-2xl border border-blue-200/70 focus-within:border-blue-500 focus-within:bg-white transition-all">
              <label className="block text-[11px] uppercase tracking-wider text-blue-900 font-semibold mb-1">
                Room Category
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-900 font-medium focus:outline-none cursor-pointer"
              >
                <option value="Mountain-View Deluxe Double">
                  Mountain-View Deluxe Double
                </option>
                <option value="Standard Valley-View Room">
                  Standard Valley-View Room
                </option>
                <option value="Family Suite">
                  Family Suite (2 Rooms)
                </option>
              </select>
            </div>

            {/* Submit Action */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full h-[54px] px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(37,99,235,0.35)] border border-blue-500 transition-all cursor-pointer hover:shadow-[0_12px_30px_rgba(37,99,235,0.45)]"
              >
                <span>Check Rates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </TiltCard>

        {/* Google Maps Real Review Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-1.5">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />
              ))}
            </div>
            <span className="font-bold text-slate-950 ml-1">4.2 / 5.0</span>
          </div>
          <span className="text-blue-300">•</span>
          <span className="font-medium">100+ Verified Traveler Reviews</span>
          <span className="text-blue-300">•</span>
          <a
            href="https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 font-semibold underline decoration-blue-400 underline-offset-4 flex items-center gap-1 transition-colors"
          >
            <span>Verified on Google Maps</span>
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
