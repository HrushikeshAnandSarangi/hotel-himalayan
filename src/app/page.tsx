"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SightseeingSection from "@/components/SightseeingSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import RoomsSection from "@/components/RoomsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import CloudDivider from "@/components/CloudDivider";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoomForModal, setSelectedRoomForModal] = useState(
    "Mountain-View Deluxe Double"
  );

  const handleOpenBooking = () => {
    setSelectedRoomForModal("Mountain-View Deluxe Double");
    setIsModalOpen(true);
  };

  const handleOpenBookingWithRoom = (roomName: string) => {
    setSelectedRoomForModal(roomName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#020617] flex flex-col font-serif selection:bg-blue-600 selection:text-white">
      {/* Fixed Navigation at the very top */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* 1. Hero Section - Full 100vh with moving mountain animation in pure shades of blue */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenBookingWithRoom={handleOpenBookingWithRoom}
        />

        {/* Generous White Space & Cloud Transition After Hero Section */}
        <div className="w-full h-12 sm:h-16 lg:h-20 bg-white" />

        {/* 2. About the Hotel */}
        <AboutSection />

        {/* 3. Nearby Spots & Things to Do */}
        <SightseeingSection />

        {/* 4. What Guests Say */}
        <ReviewsSection />

        {/* SVG Cloud Transition into Location Section */}
        <CloudDivider fillColor="#f8fbff" accentColor="#e2effc" />

        {/* 5. How to Reach Us */}
        <LocationSection />

        {/* SVG Cloud Transition into Rooms Section */}
        <CloudDivider fillColor="#ffffff" accentColor="#e2effc" />

        {/* 6. Rooms & Amenities */}
        <RoomsSection onSelectRoom={handleOpenBookingWithRoom} />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedRoom={selectedRoomForModal}
      />
    </div>
  );
}
