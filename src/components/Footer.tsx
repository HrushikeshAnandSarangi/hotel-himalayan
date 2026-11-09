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
} from "lucide-react";

export default function Footer() {
  const gmapsLink =
    "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y";

  return (
    <footer className="bg-white border-t border-blue-200/90 text-slate-800 relative overflow-hidden">
      {/* Symmetrical Top Banner */}
      <div className="border-b border-blue-100 py-10 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="h-16 w-auto relative shrink-0">
              <Image
                src="/logo.png"
                alt="Hotel Himalayan Crest"
                width={160}
                height={80}
                className="h-14 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(30,58,138,0.12)]"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif">
                Experience the Himalayas up close, right from your morning tea.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-serif">
                Chumbong Road, Pelling, West Sikkim, 737113
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919304957835"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Front Desk</span>
            </a>
            <a
              href={gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-blue-300 bg-white hover:bg-blue-50 text-blue-900 font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* Symmetrical 3-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand & Reviews Column */}
          <div className="space-y-4">
            <div className="h-12 w-auto relative">
              <Image
                src="/logo.png"
                alt="Hotel Himalayan Logo"
                width={140}
                height={60}
                className="h-11 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif">
              Perched on the quiet slopes of Chumbong in Pelling, we offer honest mountain hospitality without unnecessary noise.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-700 pt-2">
              <div className="flex text-blue-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <span className="font-bold text-slate-950">4.2 / 5.0</span>
              <span className="text-blue-300">•</span>
              <a
                href={gmapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 flex items-center gap-1 font-medium text-blue-800"
              >
                <span>100+ Reviews on Google Maps</span>
                <ExternalLink className="w-3 h-3 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Symmetrical Center Column: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-blue-900 font-bold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-serif">
              <li>
                <a href="#rooms" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Rooms & Amenities
                </a>
              </li>
              <li>
                <a href="#location" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Location & Transit
                </a>
              </li>
              <li>
                <a href="#nearby" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Sightseeing Circuits
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Contact Us & Reservations
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Symmetrical Right Column: Contact Details */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs uppercase tracking-widest text-blue-900 font-bold mb-3">
              Hotel Himalayan
            </h4>
            <div className="flex items-start gap-2.5 text-slate-700 font-serif">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                Chumbong Road, Pelling, West Sikkim, 737113
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700 font-serif">
              <PhoneCall className="w-4 h-4 text-blue-600 shrink-0" />
              <a href="tel:+919304957835" className="hover:text-blue-600 font-medium transition-colors">
                Phone: +91 9304957835 / +91 7942288960
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700 font-serif">
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <a href="mailto:contact@hotelhimalayan.com" className="hover:text-blue-600 font-medium transition-colors">
                Email: contact@hotelhimalayan.com
              </a>
            </div>
            <div className="pt-2">
              <a
                href={gmapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-semibold underline decoration-blue-400 underline-offset-4"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Symmetrical Bottom Copyright */}
        <div className="mt-14 pt-8 border-t border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Hotel Himalayan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-blue-900 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Official Hotel Himalayan Landing Page</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
