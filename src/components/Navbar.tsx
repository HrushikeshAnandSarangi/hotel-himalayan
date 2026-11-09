"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  Menu,
  X,
  CalendarCheck,
  MapPin,
  Star,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const gmapsLink =
    "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y";

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "ROOMS", href: "#rooms" },
    { label: "SIGHTSEEING", href: "#nearby" },
    { label: "REVIEWS", href: "#reviews" },
    { label: "LOCATION", href: "#location" },
    { label: "FAQS", href: "#faq" },
  ];

  return (
    <header className="relative z-50 w-full bg-white select-none transition-all duration-300">
      {/* =====================================================================
          TIER 1: COMPACT TOP UTILITY STRIP
          - Slim pale icy blue utility bar
         ===================================================================== */}
      <div className="w-full bg-[#f0f7ff] border-b border-blue-100/90 py-0.5 sm:py-1 px-4 sm:px-6 lg:px-8 text-slate-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-serif">
          {/* Left: Altitude & Location Indicator */}
          <div className="flex items-center gap-1.5 text-slate-600 tracking-wider">
            <MapPin className="w-2.5 h-2.5 text-blue-600" />
            <span className="font-semibold text-blue-950 uppercase">
              CHUMBONG, PELLING
            </span>
            <span className="hidden sm:inline text-blue-400">•</span>
            <span className="hidden sm:inline text-slate-500 font-sans text-[9px]">
              ELEV. 7,200 FT
            </span>
          </div>

          {/* Right: Quick Utilities */}
          <div className="flex items-center gap-3.5 sm:gap-5 tracking-wider font-medium">
            <a
              href="tel:+919304957835"
              className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors"
              title="Call Front Desk directly"
            >
              <PhoneCall className="w-2.5 h-2.5 text-blue-600" />
              <span className="font-sans font-semibold">+91 9304957835</span>
            </a>

            <span className="text-blue-200">|</span>

            <a
              href={gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-950 hover:text-blue-600 transition-colors group"
              title="View Hotel Himalayan on Google Maps"
            >
              <Star className="w-2.5 h-2.5 fill-blue-500 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="font-bold">4.2★ GOOGLE REVIEWS</span>
              <ExternalLink className="w-2 h-2 text-blue-500 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================================
          TIER 2: STREAMLINED MAIN BRAND ROW & ACTION BUTTONS
          - Left: Logo + Chumbong location tag
          - Right: Outlined [ CONTACT US ] + Solid [ CHECK AVAILABILITY ]
         ===================================================================== */}
      <div className="w-full bg-white border-b border-blue-100 py-1.5 sm:py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with the Chumbong location tag */}
          <a
            href="#"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
            title="Hotel Himalayan - Pelling, West Sikkim"
          >
            <div className="relative flex items-center justify-center h-9 sm:h-10 w-auto">
              <Image
                src="/logo.png"
                alt="Hotel Himalayan Logo"
                width={110}
                height={50}
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col border-l-2 border-blue-200/90 pl-2.5 text-left">
              <span className="text-[9px] tracking-[0.25em] text-blue-800 font-bold uppercase leading-none font-serif">
                CHUMBONG
              </span>
              <span className="text-[11px] font-bold tracking-wider text-blue-950 uppercase font-serif mt-0.5">
                PELLING • SIKKIM
              </span>
            </div>
          </a>

          {/* Institutional Action Buttons on the Right */}
          <div className="hidden md:flex items-center gap-2.5 font-serif">
            {/* Outlined Contact Us Button */}
            <a
              href="#contact"
              className="px-3.5 sm:px-4 py-1.5 border border-blue-600 text-blue-900 bg-white hover:bg-blue-50 active:scale-95 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-sm flex items-center gap-1.5 rounded-sm"
            >
              <MessageSquare className="w-3 h-3 text-blue-600" />
              <span>CONTACT US</span>
            </a>

            {/* Solid Check Availability Button */}
            <button
              onClick={onOpenBooking}
              className="px-3.5 sm:px-4 py-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-sm border border-blue-500/50 flex items-center gap-1.5 cursor-pointer rounded-sm"
            >
              <CalendarCheck className="w-3 h-3 text-white" />
              <span>CHECK AVAILABILITY</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-blue-950 hover:bg-blue-50 border border-blue-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-blue-900" />
              ) : (
                <Menu className="w-5 h-5 text-blue-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          TIER 3: SLIM CENTERED NAVIGATION TABS (Symmetrical)
          - Single-word uppercase tabs centered along the axis
         ===================================================================== */}
      <div className="w-full bg-[#fcfdff] border-b border-blue-100/90 py-1 sm:py-1.5 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          {/* Centered Symmetrical Navigation Links */}
          <nav className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 font-serif">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-[0.2em] font-semibold text-slate-800 hover:text-blue-600 uppercase transition-colors py-0.5 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* =====================================================================
          MOBILE DRAWER / DROPDOWN
         ===================================================================== */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-blue-200 bg-white shadow-xl px-5 py-5 space-y-4 animate-fadeIn">
          {/* Mobile Navigation Links (Centered) */}
          <div className="flex flex-col space-y-2.5 font-serif text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-xs font-semibold tracking-[0.16em] text-slate-800 hover:text-blue-600 uppercase transition-colors border-b border-blue-50 pb-1.5 text-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-2 flex flex-col gap-2.5 font-serif">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 border border-blue-600 text-blue-900 bg-white hover:bg-blue-50 text-xs font-bold uppercase tracking-[0.16em] text-center flex items-center justify-center gap-2 rounded-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
              <span>CONTACT US</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-[0.16em] text-center shadow-sm flex items-center justify-center gap-2 cursor-pointer rounded-sm"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-white" />
              <span>CHECK AVAILABILITY</span>
            </button>
          </div>

          {/* Quick Contact & Map link on mobile */}
          <div className="pt-2.5 border-t border-blue-100 flex items-center justify-between text-[11px] text-slate-600 font-serif">
            <a
              href="tel:+919304957835"
              className="flex items-center gap-1.5 hover:text-blue-600"
            >
              <PhoneCall className="w-3 h-3 text-blue-600" />
              <span>+91 9304957835</span>
            </a>
            <a
              href={gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-600 font-semibold text-blue-950"
            >
              <Star className="w-2.5 h-2.5 fill-blue-500 text-blue-500" />
              <span>4.2★ Maps</span>
              <ExternalLink className="w-2 h-2 text-blue-500" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
