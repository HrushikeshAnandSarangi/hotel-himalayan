"use client";

import React from "react";
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
  ArrowRight,
  Sparkles,
  Eye,
  UtensilsCrossed,
  Compass,
  Car,
  CalendarCheck,
  Sun,
} from "lucide-react";
import TiltCard from "./TiltCard";

interface RoomsSectionProps {
  onSelectRoom: (roomName: string) => void;
}

export default function RoomsSection({ onSelectRoom }: RoomsSectionProps) {
  const rooms = [
    {
      id: "mountain-view-deluxe",
      name: "Mountain-View Deluxe Double",
      price: 2499,
      occupancy: "2-3 Adults",
      bed: "Plush Double Bed",
      badge: "Kanchenjunga Facing",
      description:
        "Large glass windows looking directly out toward Kanchenjunga, attached private balcony, plush double bed, and attached western bathroom with 24/7 running hot water.",
      features: [
        "Large glass windows facing Mt. Kanchenjunga",
        "Attached private sit-out balcony",
        "Plush double bed with mountain quilts",
        "Attached western bathroom with 24/7 hot water",
      ],
    },
    {
      id: "standard-valley-view",
      name: "Standard Valley-View Room",
      price: 1999,
      occupancy: "2 Adults",
      bed: "Twin or Double Beds",
      badge: "Terrace Access",
      description:
        "Cozy wooden finishes, comfortable twin or double beds, quiet garden and valley vistas, and quick access to the main terrace.",
      features: [
        "Cozy warm wooden finishes",
        "Comfortable twin or double beds",
        "Quiet garden and rolling valley vistas",
        "Immediate quick access to the main terrace",
      ],
    },
    {
      id: "family-suite",
      name: "Family Suite",
      price: 3499,
      occupancy: "4-5 Adults",
      bed: "2 Interconnected Rooms",
      badge: "Corner Windows",
      description:
        "Two interconnected rooms with wide corner windows, ideal for families or small travel groups traveling together.",
      features: [
        "Two interconnected spacious rooms",
        "Wide corner windows capturing morning mist",
        "Ideal for families or travel groups",
        "Dedicated dining table and sitting area",
      ],
    },
  ];

  // Symmetrical 8 Amenities (4x2 Grid on desktop)
  const amenitiesIncluded = [
    {
      icon: MountainSnow,
      title: "Direct Mountain Views",
      desc: "Direct Kanchenjunga and valley views from balconies and rooms.",
    },
    {
      icon: UtensilsCrossed,
      title: "In-House Kitchen",
      desc: "In-house kitchen serving fresh local and Indian meals.",
    },
    {
      icon: Flame,
      title: "24/7 Hot Water",
      desc: "24/7 hot water via dedicated bathroom geysers.",
    },
    {
      icon: Eye,
      title: "Rooftop Observation Deck",
      desc: "Rooftop observation deck with 360-degree mountain sightlines.",
    },
    {
      icon: Wifi,
      title: "Free High-Speed Wi-Fi",
      desc: "Free high-speed Wi-Fi in common spaces and rooms.",
    },
    {
      icon: Compass,
      title: "Taxis, Permits & Guides",
      desc: "Help with local taxi bookings, sight-seeing permits, and trekking guides.",
    },
    {
      icon: Car,
      title: "Private On-Site Parking",
      desc: "Ample private on-site parking for cars and bikes.",
    },
    {
      icon: Sun,
      title: "Open Sunset Terrace",
      desc: "Panoramic terrace where guests gather for morning tea and dusk storytelling.",
    },
  ];

  return (
    <section id="rooms" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Symmetrical Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs uppercase tracking-widest mb-3 font-semibold shadow-sm">
            <BedDouble className="w-3.5 h-3.5 text-blue-600" />
            <span>Rooms & Amenities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4 font-serif">
            Every room is designed around one priority: the skyline outside your window.
          </h2>

          {/* Symmetrical Divider Line with Center Blue Anchor */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-300" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-300" />
          </div>
        </div>

        {/* Symmetrical 3-Column Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {rooms.map((room) => (
            <TiltCard
              key={room.id}
              maxTilt={6}
              perspective={1100}
              className="bg-white rounded-3xl border border-blue-200/90 overflow-hidden shadow-[0_20px_50px_-10px_rgba(30,58,138,0.08),0_0_0_1px_rgba(255,255,255,1)_inset] flex flex-col justify-between hover:border-blue-400 transition-all duration-300 group"
            >
              <div>
                {/* Header Banner Card with Soft Ice-Blue Gradient */}
                <div className="relative p-7 sm:p-8 bg-gradient-to-br from-blue-50/80 via-blue-50/40 to-white border-b border-blue-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      <span>{room.badge}</span>
                    </span>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-bold text-blue-950 font-serif">
                        ₹{room.price.toLocaleString("en-IN")}
                      </span>
                      <span className="block text-[11px] text-blue-800 uppercase tracking-wider font-semibold">
                        / Night
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif mb-2 leading-snug">
                    {room.name}
                  </h3>

                  {/* Room Meta Badges */}
                  <div className="flex items-center gap-4 pt-2.5 border-t border-blue-200/60 text-xs text-slate-700">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Users className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{room.occupancy}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <BedDouble className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{room.bed}</span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7 sm:p-8">
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-serif">
                    {room.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2.5 mb-6">
                    {room.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="p-7 sm:p-8 pt-0">
                <button
                  onClick={() => onSelectRoom(room.name)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(37,99,235,0.28)] border border-blue-500 transition-all cursor-pointer hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)]"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Reserve This Room</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Symmetrical Amenities Included (Balanced 4x2 Grid) */}
        <div className="pt-12 border-t border-blue-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-serif mb-2">
              Amenities Included
            </h3>

            {/* Symmetrical Divider Line with Center Blue Anchor */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-300" />
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-300" />
            </div>

            <p className="text-sm text-slate-600 font-serif">
              Curated for honest mountain comfort and peace of mind on the Chumbong slopes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenitiesIncluded.map((item, idx) => {
              const Icon = item.icon;
              return (
                <TiltCard
                  key={idx}
                  maxTilt={6}
                  perspective={900}
                  className="bg-white p-6 rounded-3xl border border-blue-200/80 shadow-[0_10px_25px_rgba(30,58,138,0.05)] hover:border-blue-400 transition-all group flex flex-col justify-between text-center items-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-base font-bold text-slate-950 font-serif mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-serif">
                      {item.desc}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
