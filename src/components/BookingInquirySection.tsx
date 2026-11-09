"use client";

import React, { useState } from "react";
import {
  Calendar,
  Users,
  BedDouble,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Send,
} from "lucide-react";
import TiltCard from "./TiltCard";

interface BookingInquiryProps {
  initialRoom?: string;
}

export default function BookingInquirySection({ initialRoom }: BookingInquiryProps) {
  const [selectedRoom, setSelectedRoom] = useState(
    initialRoom || "Mountain-View Deluxe Double"
  );
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialNote, setSpecialNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const roomPrices: Record<string, number> = {
    "Mountain-View Deluxe Double": 2499,
    "Standard Valley-View Room": 1999,
    "Family Suite": 3499,
  };

  const currentPrice = roomPrices[selectedRoom] || 2499;

  // Calculate estimated nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();
  const estimatedTotal = currentPrice * nights;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Hotel Himalayan Pelling! I would like to inquire about booking a stay:\n\n` +
        `• Room: ${selectedRoom}\n` +
        `• Check-In: ${checkIn || "Flexible"}\n` +
        `• Check-Out: ${checkOut || "Flexible"} (${nights} Night${nights > 1 ? "s" : ""})\n` +
        `• Guests: ${guests}\n` +
        `• Name: ${guestName || "Guest"}\n` +
        `• Contact: ${phone || "Via WhatsApp"}\n` +
        (specialNote ? `• Note: ${specialNote}\n` : "") +
        `\nPlease confirm tariff & availability. Thank you!`
    );
    window.open(`https://wa.me/919304957835?text=${text}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#f8fbff] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-100/35 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs uppercase tracking-widest mb-3 font-semibold shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>Direct Reservations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Plan Your Mountain Stay
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Book directly with our front desk to receive the best guaranteed tariffs,
            personalized room allocation facing Mt. Kanchenjunga, and prompt assistance.
          </p>
        </div>

        {/* Booking Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3D Interactive Tariff & Summary */}
          <div className="lg:col-span-5">
            <TiltCard
              maxTilt={6}
              perspective={1100}
              className="bg-white border border-blue-200/90 rounded-3xl p-7 sm:p-8 shadow-[0_20px_50px_-10px_rgba(30,58,138,0.1),0_0_0_1px_rgba(255,255,255,1)_inset] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-blue-800">
                    RESERVATION BREAKDOWN
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-blue-800 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Direct Booking Guarantee</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-950 font-serif mb-1">
                  {selectedRoom}
                </h3>
                <p className="text-xs text-blue-800 font-medium mb-6">
                  Chumbong, Upper Pelling • 7,200 Ft Elevation
                </p>

                {/* Price Calculation Box with Blue Detailing */}
                <div className="bg-blue-50/70 rounded-2xl p-5 border border-blue-200/80 mb-6 space-y-3">
                  <div className="flex justify-between items-center text-xs text-slate-700">
                    <span>Room Tariff:</span>
                    <span className="font-bold text-slate-950">
                      ₹{currentPrice.toLocaleString("en-IN")} / Night
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-700">
                    <span>Estimated Duration:</span>
                    <span className="font-bold text-slate-950">
                      {nights} Night{nights > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-700">
                    <span>Guests:</span>
                    <span className="font-bold text-slate-950">{guests}</span>
                  </div>

                  <div className="pt-3 border-t border-blue-200 flex justify-between items-baseline">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-blue-900 font-bold block">
                        Estimated Total:
                      </span>
                      <span className="text-[10px] text-slate-600">
                        Taxes & breakfast options available
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-blue-950 font-serif">
                      ₹{estimatedTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Inclusions checklist */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Frontal Kanchenjunga mountain view allocation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>24/7 Hot water geyser supply</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Complimentary on-site guest parking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Assistance with Pelling sightseeing cabs</span>
                  </div>
                </div>
              </div>

              {/* Quick Contacts */}
              <div className="pt-4 border-t border-blue-100">
                <span className="text-[11px] uppercase tracking-wider text-blue-900 font-bold block mb-2">
                  Need Immediate Assistance?
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+919304957835"
                    className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-950 flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors shadow-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                    <span>+91 9304957835</span>
                  </a>
                  <a
                    href="tel:+917942288960"
                    className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-950 flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors shadow-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                    <span>+91 7942288960</span>
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Inquiry & Booking Form */}
          <div className="lg:col-span-7 bg-white border border-blue-200/90 rounded-3xl p-7 sm:p-8 shadow-[0_20px_50px_-10px_rgba(30,58,138,0.1),0_0_0_1px_rgba(255,255,255,1)_inset]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-400 flex items-center justify-center mx-auto text-blue-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 font-serif">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-950">{guestName || "Guest"}</span>.
                  Our front desk manager has received your reservation request for{" "}
                  <span className="text-blue-600 font-bold">{selectedRoom}</span>.
                  We will contact you shortly at{" "}
                  <span className="text-slate-950 font-bold">{phone || "your number"}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs uppercase tracking-wider font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4.5">
                <div className="flex items-center justify-between pb-3 border-b border-blue-100 mb-2">
                  <h3 className="text-xl font-bold text-slate-950 font-serif">
                    Direct Reservation Inquiry
                  </h3>
                  <span className="text-xs text-blue-800 font-semibold">
                    No advance payment required for inquiry
                  </span>
                </div>

                {/* Room Category Select */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1.5 font-bold">
                    Select Room Category
                  </label>
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full p-3.5 rounded-2xl bg-blue-50/50 border border-blue-200 text-sm text-slate-950 font-medium focus:border-blue-500 focus:bg-white focus:outline-none cursor-pointer"
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

                {/* Dates & Guests Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1.5 font-bold">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      className="w-full p-3 rounded-xl bg-blue-50/50 border border-blue-200 text-sm text-slate-950 font-medium focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1.5 font-bold">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className="w-full p-3 rounded-xl bg-blue-50/50 border border-blue-200 text-sm text-slate-950 font-medium focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1.5 font-bold">
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full p-3 rounded-xl bg-blue-50/50 border border-blue-200 text-sm text-slate-950 font-medium focus:border-blue-500 focus:bg-white focus:outline-none cursor-pointer"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="5+ Guests">5+ Guests (Group)</option>
                    </select>
                  </div>
                </div>

                {/* Guest Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1.5 font-bold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Varun Sharma"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      required
                      className="w-full p-3 rounded-xl bg-blue-50/50 border border-blue-200 text-sm text-slate-950 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1.5 font-bold">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full p-3 rounded-xl bg-blue-50/50 border border-blue-200 text-sm text-slate-950 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Special Requests / Meal Preferences */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-blue-900 mb-1.5 font-bold">
                    Special Requests or Travel Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g., Mountain-facing upper floor, early arrival, vegetarian meal arrangement, taxi pickup from Bagdogra..."
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full p-3 rounded-xl bg-blue-50/50 border border-blue-200 text-sm text-slate-950 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Two Action Buttons: WhatsApp & Direct Submit */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="py-3.5 px-4 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-blue-300 transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                    <span>Inquire via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="py-3.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(37,99,235,0.35)] border border-blue-500 transition-all cursor-pointer hover:shadow-[0_8px_25px_rgba(37,99,235,0.45)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Reservation Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
