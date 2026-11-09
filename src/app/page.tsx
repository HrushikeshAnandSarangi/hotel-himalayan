"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SightseeingSection from "@/components/SightseeingSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import RoomsSection from "@/components/RoomsSection";
import BookingInquirySection from "@/components/BookingInquirySection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

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

        {/* 2. About the Hotel */}
        <AboutSection />

        {/* 3. Nearby Spots & Things to Do */}
        <SightseeingSection />

        {/* 4. What Guests Say */}
        <ReviewsSection />

        {/* 5. How to Reach Us */}
        <LocationSection />

        {/* 6. Rooms & Amenities */}
        <RoomsSection onSelectRoom={handleOpenBookingWithRoom} />

        {/* Direct Availability & Tariff Calculation */}
        <BookingInquirySection initialRoom={selectedRoomForModal} />

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
