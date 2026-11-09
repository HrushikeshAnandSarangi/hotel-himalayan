"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  PhoneCall,
  Menu,
  X,
  CalendarCheck,
  MapPin,
  ExternalLink,
} from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Nearby Spots", href: "#nearby" },
    { label: "What Guests Say", href: "#reviews" },
    { label: "How to Reach", href: "#location" },
    { label: "Rooms & Amenities", href: "#rooms" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-blue-100/90 py-3 shadow-[0_8px_30px_rgba(30,58,138,0.06)]"
          : "bg-white/70 backdrop-blur-sm border-b border-blue-50 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Hotel Himalayan Brand Mark with the Uploaded Logo */}
          <a
            href="#"
            className="group flex items-center gap-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl p-1 transition-transform hover:scale-[1.01]"
          >
            <div className="relative flex items-center justify-center h-12 w-auto">
              <Image
                src="/logo.png"
                alt="Hotel Himalayan Logo"
                width={120}
                height={55}
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(30,58,138,0.12)] group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-blue-200/80 pl-3 text-left">
              <span className="text-[10px] tracking-[0.28em] text-blue-800 font-semibold uppercase leading-tight">
                CHUMBONG
              </span>
              <span className="text-xs font-semibold tracking-wider text-blue-950 uppercase">
                PELLING • SIKKIM
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Blue Detailing */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-wide text-slate-800 font-medium hover:text-blue-600 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons with Blue Detailing on White */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919304957835"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-wider font-semibold rounded-xl text-blue-900 bg-blue-50/80 hover:bg-blue-100/90 border border-blue-200/90 hover:border-blue-300 transition-all shadow-sm"
              title="Call Hotel Himalayan Front Desk"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
              <span>Call Us</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-[0_4px_18px_rgba(37,99,235,0.28)] border border-blue-500/40 transition-all hover:shadow-[0_6px_22px_rgba(37,99,235,0.4)] cursor-pointer active:scale-95"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Check Availability</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-blue-950 hover:bg-blue-50 border border-blue-200 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-blue-900" />
            ) : (
              <Menu className="w-6 h-6 text-blue-900" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu on White Glassmorphic Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 bg-white/95 backdrop-blur-xl border border-blue-200/90 rounded-2xl shadow-xl space-y-4">
            <div className="flex flex-col space-y-2 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 text-sm text-slate-800 font-medium hover:text-blue-600 hover:bg-blue-50/70 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-blue-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 text-xs uppercase tracking-wider font-semibold text-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-md flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Check Availability</span>
              </button>
              <a
                href="tel:+919304957835"
                className="w-full py-2.5 px-4 text-xs uppercase tracking-wider font-semibold text-center rounded-xl border border-blue-200 bg-blue-50 text-blue-900 hover:bg-blue-100 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Call +91 9304957835</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 text-xs text-blue-700 hover:text-blue-900 flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-blue-600" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
