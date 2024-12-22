"use client";
import Hero from "@/components/Homepage/Hero";
import ParallaxHero from "@/components/Homepage/ParallaxHero";
import Serving from "@/components/Homepage/Serving";
import Serving2 from "@/components/Homepage/Serving2";
import Image from "next/image";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-clip">
      <Hero />
      <Serving />
      <Serving2 />
      <ParallaxHero />
    </div>
  );
}
