"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ParallaxHero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Serve.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="relative z-10 flex flex-col items-center justify-center text-center text-white py-20 px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Serving Our Seniors{" "}
          <span className="text-red-500">Any Way We Can</span>
        </h1>
        <p className="text-lg md:text-xl font-medium mb-6">
          OUR PROGRAMS PROVIDE VALUABLE RESOURCES
        </p>
        <button className="flex items-center bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
          <FaPhoneAlt className="mr-2" />
          Contact Us Today
        </button>
      </div>
    </div>
  );
}

export default ParallaxHero;
