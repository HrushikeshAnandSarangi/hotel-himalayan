"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  PhoneCall,
  Mail,
  Compass,
  Star,
  ExternalLink,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import FooterSkyline from "./FooterSkyline";

export default function Footer() {
  const gmapsLink =
    "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y";

  return (
    <footer className="relative bg-[#030d17] text-white overflow-hidden select-none">
      {/* =========================================================================
          THE ALPINE SKYLINE SILHOUETTE (Mountain Ridge + Lookout Tower + Dense Pines)
          - Emerges organically out of the white background above
          - Cascades into deep midnight alpine ink (#030d17)
         ========================================================================= */}
      <FooterSkyline />

      {/* =========================================================================
          MAIN FOOTER CONTENT CONTAINER (Style matched to Reference Artwork)
          - 3 Link Columns with Underlines
          - 3 Circular Contact / Social Outlines
          - Right-aligned Brand & Contact Identity
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 sm:pt-8 pb-14 sm:pb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* -----------------------------------------------------------------
              COLUMN 1: Navigation
             ----------------------------------------------------------------- */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase font-serif">
              Links
            </h4>
            <div className="w-full h-[1px] bg-white/20 mt-2 mb-3.5" />
            <ul className="space-y-2 text-xs sm:text-[13px] font-serif">
              <li>
                <a
                  href="#rooms"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Rooms & Amenities
                </a>
              </li>
              <li>
                <a
                  href="#nearby"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Sightseeing Circuits
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  How to Reach Us
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Guest Experiences
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Frequently Asked
                </a>
              </li>
            </ul>
          </div>

          {/* -----------------------------------------------------------------
              COLUMN 2: The Retreat
             ----------------------------------------------------------------- */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase font-serif">
              The Retreat
            </h4>
            <div className="w-full h-[1px] bg-white/20 mt-2 mb-3.5" />
            <ul className="space-y-2 text-xs sm:text-[13px] font-serif">
              <li>
                <a
                  href="#hero"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Kanchenjunga Vistas
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Homestyle Kitchen
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Rooftop Observation Deck
                </a>
              </li>
              <li>
                <a
                  href="#hero"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Morning Tea Ritual
                </a>
              </li>
              <li>
                <a
                  href="#rooms"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Direct Booking Perks
                </a>
              </li>
            </ul>
          </div>

          {/* -----------------------------------------------------------------
              COLUMN 3: West Sikkim
             ----------------------------------------------------------------- */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase font-serif">
              West Sikkim
            </h4>
            <div className="w-full h-[1px] bg-white/20 mt-2 mb-3.5" />
            <ul className="space-y-2 text-xs sm:text-[13px] font-serif">
              <li>
                <a
                  href="#nearby"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Rabdentse Palace Ruins
                </a>
              </li>
              <li>
                <a
                  href="#nearby"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Pemayangtse Monastery
                </a>
              </li>
              <li>
                <a
                  href="#nearby"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Pelling Glass Skywalk
                </a>
              </li>
              <li>
                <a
                  href="#nearby"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Khecheopalri Sacred Lake
                </a>
              </li>
              <li>
                <a
                  href="#nearby"
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Kanchenjunga Waterfalls
                </a>
              </li>
            </ul>
          </div>

          {/* -----------------------------------------------------------------
              COLUMN 4: 3 CIRCULAR ACTION / SOCIAL BUTTONS (Ref Style)
             ----------------------------------------------------------------- */}
          <div className="lg:col-span-2 flex items-center justify-start sm:justify-center lg:justify-center gap-3 pt-2 sm:pt-6 lg:pt-6">
            {/* Circle 1: Email */}
            <a
              href="mailto:contact@hotelhimalayan.com"
              aria-label="Send Email to Hotel Himalayan"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white/90 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md group"
            >
              <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:scale-110 transition-transform" />
            </a>

            {/* Circle 2: Direct Call */}
            <a
              href="tel:+919304957835"
              aria-label="Call Hotel Himalayan Front Desk"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white/90 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md group"
            >
              <PhoneCall className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:scale-110 transition-transform" />
            </a>

            {/* Circle 3: Google Maps Navigation */}
            <a
              href={gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Hotel Himalayan on Google Maps"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white/90 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md group"
            >
              <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* -----------------------------------------------------------------
              COLUMN 5: HOTEL DETAILS (Right Block matching Reference)
             ----------------------------------------------------------------- */}
          <div className="lg:col-span-4 space-y-2 text-left lg:text-right font-serif">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif">
              Hotel Himalayan
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <span className="inline-flex items-center gap-1">
                <span>Chumbong Road, Pelling</span>
                <span className="text-sky-400 text-xs">↗</span>
              </span>
              <br />
              <span className="inline-flex items-center gap-1">
                <span>West Sikkim, 737113, India</span>
                <span className="text-sky-400 text-xs">↗</span>
              </span>
            </p>

            <p className="text-xs sm:text-sm text-slate-300">
              <span className="text-slate-400">tel.:</span>{" "}
              <a
                href="tel:+919304957835"
                className="hover:text-white font-medium text-white transition-colors"
              >
                +91 93049 57835
              </a>{" "}
              <span className="text-slate-400">/</span>{" "}
              <a
                href="tel:+917942288960"
                className="hover:text-white font-medium text-white transition-colors"
              >
                +91 79422 88960
              </a>{" "}
              <span className="text-slate-400">📞</span>
            </p>

            <p className="text-xs sm:text-sm text-slate-300">
              <span className="text-slate-400">email:</span>{" "}
              <a
                href="mailto:contact@hotelhimalayan.com"
                className="hover:text-white font-medium text-white transition-colors"
              >
                contact@hotelhimalayan.com
              </a>{" "}
              <span className="text-slate-400">✉</span>
            </p>

            {/* Verified Google Maps Rating Badge */}
            <div className="pt-2 flex items-center justify-start lg:justify-end gap-1.5 text-xs text-amber-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-white font-bold ml-1">4.2 / 5.0</span>
              <span className="text-slate-400">•</span>
              <a
                href={gmapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white underline decoration-slate-500 underline-offset-2 transition-colors"
              >
                100+ Verified Traveler Reviews
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SUB-FOOTER BOTTOM BAR (Matching Reference Artwork Layout)
          - Brand wordmark on Left
          - Legal / Guest Guidelines in Center
          - Design & All Rights Reserved on Right
         ========================================================================= */}
      <div className="border-t border-white/10 bg-[#02070e] py-6 px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-serif">
          {/* Left: Brand Wordmark with Crest */}
          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-white tracking-tight">
              Hotel Himalayan<span className="text-sky-400 text-sm">©</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-[11px] text-slate-400 uppercase tracking-widest font-mono">
              Chumbong • Pelling
            </span>
          </div>

          {/* Center: Legal & Guest Policies */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
            <a
              href="#faq"
              className="hover:text-white transition-colors"
            >
              Guest Guidelines
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors"
            >
              Cancellation Policy
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
          </div>

          {/* Right: Credits & Copyright */}
          <div className="text-center md:text-right text-[11px] text-slate-400">
            Handcrafted for mountain travelers. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
