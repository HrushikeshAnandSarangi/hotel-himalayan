"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  PhoneCall,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedRoom?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preSelectedRoom,
}: BookingModalProps) {
  const [room, setRoom] = useState(
    preSelectedRoom || "Mountain-View Deluxe Double"
  );
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedRoom) {
      setRoom(preSelectedRoom);
    }
  }, [preSelectedRoom]);

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Hotel Himalayan Pelling! I would like to book a stay:\n\n` +
        `• Room: ${room}\n` +
        `• Check-In: ${checkIn || "Flexible"}\n` +
        `• Check-Out: ${checkOut || "Flexible"}\n` +
        `• Guests: ${guests}\n` +
        `• Name: ${name || "Guest"}\n` +
        `• Phone: ${phone || "Via WhatsApp"}\n\n` +
        `Please confirm availability & reservation. Thank you!`
    );
    window.open(`https://wa.me/919304957835?text=${text}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-blue-200/90 shadow-[0_25px_60px_-10px_rgba(30,58,138,0.25)] p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-blue-50 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-blue-900" />
        </button>

        {/* Modal Header with Official Logo */}
        <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-blue-100">
          <div className="h-12 w-auto relative shrink-0">
            <Image
              src="/logo.png"
              alt="Hotel Himalayan Logo"
              width={140}
              height={60}
              className="h-11 w-auto object-contain"
            />
          </div>
          <div>
            <span className="text-[10px] tracking-widest uppercase font-bold text-blue-800">
              PELLING • WEST SIKKIM
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif">
              Instant Room Reservation
            </h3>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-400 flex items-center justify-center mx-auto text-blue-600">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-950 font-serif">
              Reservation Inquiry Sent!
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 max-w-sm mx-auto leading-relaxed">
              We have received your reservation request for{" "}
              <span className="text-slate-950 font-bold">{room}</span>. Our desk manager will contact
              you shortly to confirm.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs uppercase tracking-wider font-semibold hover:bg-blue-700 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1 font-bold">
                Select Room Category
              </label>
              <select
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full p-3 rounded-2xl bg-blue-50/50 border border-blue-200 text-sm text-slate-950 font-medium focus:border-blue-500 focus:bg-white focus:outline-none cursor-pointer"
              >
                <option value="Mountain-View Deluxe Double">
                  Mountain-View Deluxe Double (₹2,499 / Night)
                </option>
                <option value="Standard Valley-View Room">
                  Standard Valley-View Room (₹1,999 / Night)
                </option>
                <option value="Family Suite">
                  Family Suite (₹3,499 / Night)
                </option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1 font-bold">
                  Check-In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  required
                  className="w-full p-2.5 rounded-xl bg-blue-50/50 border border-blue-200 text-xs text-slate-950 font-medium focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1 font-bold">
                  Check-Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                  className="w-full p-2.5 rounded-xl bg-blue-50/50 border border-blue-200 text-xs text-slate-950 font-medium focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1 font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2.5 rounded-xl bg-blue-50/50 border border-blue-200 text-xs text-slate-950 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1 font-bold">
                  Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full p-2.5 rounded-xl bg-blue-50/50 border border-blue-200 text-xs text-slate-950 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1 font-bold">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-blue-50/50 border border-blue-200 text-xs text-slate-950 font-medium focus:border-blue-500 focus:bg-white focus:outline-none cursor-pointer"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests">4 Guests</option>
                <option value="5+ Guests">5+ Guests (Family / Group)</option>
              </select>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="py-3 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-blue-300 transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-blue-600" />
                <span>Book via WhatsApp</span>
              </button>

              <button
                type="submit"
                className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(37,99,235,0.35)] border border-blue-500 transition-all cursor-pointer hover:shadow-[0_8px_25px_rgba(37,99,235,0.45)] active:scale-95"
              >
                <span>Confirm Booking</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <a
                href="tel:+919304957835"
                className="inline-flex items-center gap-1.5 text-xs text-blue-800 hover:text-blue-950 font-medium transition-colors"
              >
                <PhoneCall className="w-3 h-3 text-blue-600" />
                <span>Or call directly: +91 9304957835</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
