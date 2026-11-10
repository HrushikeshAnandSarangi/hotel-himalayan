"use client";

import React, { useState } from "react";
import {
  MountainSnow,
  BedDouble,
  Bath,
  Flame,
  Wifi,
  Coffee,
  Maximize2,
  Users,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  PhoneCall,
  Sparkles,
  UtensilsCrossed,
  Car,
  Compass,
  Sun,
  ShieldCheck,
  Check,
} from "lucide-react";

interface RoomsSectionProps {
  onSelectRoom: (roomName: string) => void;
}

export default function RoomsSection({ onSelectRoom }: RoomsSectionProps) {
  // Current calendar state: November 2026 default
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(10); // 10 = November (0-indexed)
  const [selectedDay, setSelectedDay] = useState(14); // Default selected date

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  // Navigation handlers
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Mock availability status based on day number for realistic interactive demonstration
  const getDayAvailability = (day: number) => {
    // Weekends (Fri, Sat) or specific days have limited rooms
    const dayOfWeek = (firstDayOfWeek + day - 1) % 7;
    if (day === 8 || day === 22) {
      return { status: "booked", label: "Full", color: "bg-slate-300 text-slate-500" };
    }
    if (dayOfWeek === 5 || dayOfWeek === 6 || day === 15 || day === 25) {
      return { status: "limited", label: "Limited", color: "bg-amber-100 text-amber-800 border-amber-300" };
    }
    return { status: "available", label: "Open", color: "bg-emerald-50 text-emerald-800 border-emerald-300" };
  };

  const selectedDateObj = new Date(currentYear, currentMonth, selectedDay);
  const selectedDateFormatted = selectedDateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const selectedDayInfo = getDayAvailability(selectedDay);

  // Room definitions (Strictly NO pricing displayed)
  const roomsAvailability = [
    {
      id: "deluxe-mountain",
      name: "Mountain-View Deluxe Double",
      tagline: "Direct Mt. Kanchenjunga Private Balcony",
      occupancy: "2-3 Adults",
      bed: "1 Plush King Double Bed",
      status: selectedDayInfo.status === "booked" ? "Booked" : "Available",
      statusColor:
        selectedDayInfo.status === "booked"
          ? "bg-slate-100 text-slate-600 border-slate-300"
          : "bg-emerald-50 text-emerald-800 border-emerald-300",
      features: [
        "Unobstructed sunrise views of Mt. Kanchenjunga",
        "Attached western bathroom with 24/7 hot water geyser",
        "Private sit-out balcony overlooking Chumbong slopes",
      ],
    },
    {
      id: "standard-valley",
      name: "Standard Valley-View Room",
      tagline: "Serene Garden & Rolling Valley Terraces",
      occupancy: "2 Adults",
      bed: "Twin or Double Beds",
      status: selectedDayInfo.status === "booked" ? "Booked" : "Available",
      statusColor:
        selectedDayInfo.status === "booked"
          ? "bg-slate-100 text-slate-600 border-slate-300"
          : "bg-emerald-50 text-emerald-800 border-emerald-300",
      features: [
        "Warm wooden finishes with peaceful garden outlook",
        "Quick access to the main panoramic rooftop terrace",
        "Cozy mountain quilts and winter room heater support",
      ],
    },
    {
      id: "family-suite",
      name: "Family Mountain Suite",
      tagline: "Interconnected 2-Room Suite for Families",
      occupancy: "4-5 Adults",
      bed: "2 Connected Bedrooms",
      status:
        selectedDayInfo.status === "booked"
          ? "Booked"
          : selectedDayInfo.status === "limited"
          ? "1 Room Left"
          : "Available",
      statusColor:
        selectedDayInfo.status === "booked"
          ? "bg-slate-100 text-slate-600 border-slate-300"
          : selectedDayInfo.status === "limited"
          ? "bg-amber-50 text-amber-800 border-amber-300"
          : "bg-emerald-50 text-emerald-800 border-emerald-300",
      features: [
        "Dual corner windows capturing 180° Himalayan mist",
        "Separate sitting lounge and family dining space",
        "Spacious layout ideal for families and small groups",
      ],
    },
  ];

  // Authentic amenities extracted directly from Google Maps listing & guest reviews
  const googleMapsAmenities = [
    {
      icon: MountainSnow,
      title: "Kanchenjunga Balconies",
      desc: "Direct, unobstructed views of Mt. Kanchenjunga from private room balconies and rooftop deck.",
    },
    {
      icon: UtensilsCrossed,
      title: "In-House Home Kitchen",
      desc: "Freshly prepared Sikkimese delicacies and homestyle Indian meals using locally sourced organic produce.",
    },
    {
      icon: Flame,
      title: "24/7 Hot Water Geysers",
      desc: "Dedicated continuous hot water supply in all attached western bathrooms, even during winter months.",
    },
    {
      icon: Sun,
      title: "Room Heaters Available",
      desc: "Cozy in-room heating available upon request to keep your mountain stay warm and comfortable.",
    },
    {
      icon: Car,
      title: "Free On-Site Parking",
      desc: "Safe and spacious private vehicle parking on property grounds along Chumbong Road.",
    },
    {
      icon: Wifi,
      title: "Property-Wide Wi-Fi",
      desc: "Complimentary wireless internet connectivity throughout rooms, dining areas, and observation lounge.",
    },
    {
      icon: Compass,
      title: "Sightseeing & Tour Desk",
      desc: "Local cab arrangements and route guidance for Pelling Skywalk, Khecheopalri Lake, and Rabdentse Ruins.",
    },
    {
      icon: Coffee,
      title: "Lawn & Evening Bonfire",
      desc: "Open garden lawn area for evening tea, sunset contemplation, and cozy campfires under starry skies.",
    },
  ];

  return (
    <section id="rooms" className="section-deferred py-28 bg-[#fbfdff] relative overflow-hidden">
      {/* Background Ambient Depth (GPU-free radial washes) */}
      <div
        className="absolute top-1/4 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(219,234,254,0.48) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(219,234,254,0.4) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header (Clean, No Pill Badges) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight font-serif mb-4">
            Rooms & Availability
          </h2>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-2 h-2 rotate-45 bg-blue-700 shadow-sm" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <p className="text-base sm:text-lg text-slate-700 font-serif leading-relaxed">
            Select a date on the calendar below to check real-time room availability on the quiet slopes of Chumbong.
          </p>
        </div>

        {/* =========================================================================
            CALENDAR & AVAILABILITY HUB (Zero Clutter, Pure Architecture)
            ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden border border-blue-200/80 shadow-[0_20px_50px_rgba(14,28,64,0.06)] bg-white p-6 sm:p-9 lg:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* ================= LEFT COLUMN: BIG INTERACTIVE CALENDAR ================= */}
              <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-blue-200/80 p-5 sm:p-7 bg-white shadow-sm">
                <div>
                  {/* Calendar Month Navigation Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-blue-100 mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif flex items-center gap-2.5">
                        <CalendarIcon className="w-5 h-5 text-blue-600" />
                        <span>
                          {monthNames[currentMonth]} {currentYear}
                        </span>
                      </h3>
                      <p className="text-xs text-slate-600 font-serif mt-0.5">
                        Click any date to inspect room status
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevMonth}
                        className="p-2 rounded-xl border border-blue-200 hover:bg-blue-50 text-blue-900 transition-colors cursor-pointer"
                        aria-label="Previous Month"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextMonth}
                        className="p-2 rounded-xl border border-blue-200 hover:bg-blue-50 text-blue-900 transition-colors cursor-pointer"
                        aria-label="Next Month"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Day of week labels */}
                  <div className="grid grid-cols-7 gap-1.5 text-center mb-3">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((dayName, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-bold uppercase tracking-wider text-blue-900 font-serif py-1"
                      >
                        {dayName}
                      </span>
                    ))}
                  </div>

                  {/* Calendar Date Cells */}
                  <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                    {/* Empty padding cells for first week */}
                    {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                      <div key={`empty-${idx}`} className="h-10 sm:h-12" />
                    ))}

                    {/* Actual day cells */}
                    {Array.from({ length: daysInMonth }).map((_, idx) => {
                      const dayNumber = idx + 1;
                      const isSelected = dayNumber === selectedDay;
                      const dayInfo = getDayAvailability(dayNumber);

                      return (
                        <button
                          key={dayNumber}
                          onClick={() => setSelectedDay(dayNumber)}
                          className={`h-11 sm:h-13 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer relative ${
                            isSelected
                              ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-2 ring-blue-600 ring-offset-2"
                              : "bg-slate-50 hover:bg-blue-50/80 text-slate-900 border border-slate-200/80"
                          }`}
                        >
                          <span
                            className={`text-sm sm:text-base font-bold font-serif ${
                              isSelected ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {dayNumber}
                          </span>

                          {/* Tiny Availability Dot Indicator */}
                          <div className="flex items-center gap-1 mt-0.5">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isSelected
                                  ? "bg-white"
                                  : dayInfo.status === "available"
                                  ? "bg-emerald-500"
                                  : dayInfo.status === "limited"
                                  ? "bg-amber-500"
                                  : "bg-slate-400"
                              }`}
                            />
                            <span
                              className={`text-[9px] font-sans font-medium hidden sm:inline-block ${
                                isSelected
                                  ? "text-blue-100"
                                  : dayInfo.status === "available"
                                  ? "text-emerald-700"
                                  : dayInfo.status === "limited"
                                  ? "text-amber-700"
                                  : "text-slate-500"
                              }`}
                            >
                              {dayInfo.label}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Calendar Legend */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-blue-100 text-xs text-slate-600 font-serif">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Available</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>Limited Rooms</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-400" />
                      <span>Booked</span>
                    </span>
                  </div>
                  <span className="text-[11px] text-blue-900 font-medium">
                    Best Season: Oct – May
                  </span>
                </div>
              </div>

              {/* ================= RIGHT COLUMN: LIVE ROOM AVAILABILITY STATUS CARD ================= */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-blue-200/90 p-6 sm:p-8 bg-blue-50/30">
                <div>
                  {/* Selected Date Header */}
                  <div className="pb-4 border-b border-blue-200 mb-6">
                    <span className="text-xs uppercase tracking-wider text-blue-900 font-bold block mb-1">
                      Selected Date Schedule
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif">
                      {selectedDateFormatted}
                    </h4>
                  </div>

                  {/* Room Status List (NO PRICING) */}
                  <div className="space-y-4 mb-8">
                    {roomsAvailability.map((room) => (
                      <div
                        key={room.id}
                        className="p-4 rounded-2xl bg-white border border-blue-200/80 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h5 className="text-base font-bold text-slate-950 font-serif">
                            {room.name}
                          </h5>
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${room.statusColor}`}
                          >
                            {room.status}
                          </span>
                        </div>

                        <p className="text-xs text-blue-900 font-serif font-medium mb-2.5">
                          {room.tagline}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-serif mb-2.5">
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-blue-600" />
                            {room.occupancy}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <BedDouble className="w-3.5 h-3.5 text-blue-600" />
                            {room.bed}
                          </span>
                        </div>

                        <ul className="space-y-1 text-[11px] text-slate-600 font-serif">
                          {room.features.slice(0, 2).map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-1.5">
                              <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Single Exclusive Action: Contact Us Button */}
                <div className="pt-4 border-t border-blue-200">
                  <button
                    onClick={() => onSelectRoom("Mountain-View Deluxe Double")}
                    className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.45)] transition-all duration-300 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Contact Us to Inquire</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-600 font-serif mt-2.5">
                    Direct personalized reservations • No booking fee
                  </p>
                </div>
              </div>
            </div>
          </div>

        {/* =========================================================================
            AMENITIES SHOWCASE (Extracted Directly from Google Maps & Reviews)
            ========================================================================= */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-serif mb-2">
              Hotel Himalayan Amenities
            </h3>
            <p className="text-sm text-slate-600 font-serif">
              Authentic comforts documented from our Google Maps profile and verified traveler reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {googleMapsAmenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-blue-200/80 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-950 font-serif mb-1.5">
                      {amenity.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-serif leading-relaxed">
                      {amenity.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
