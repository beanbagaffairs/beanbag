import AboutUsHero from "@/components/pages/about-us/AboutUsHero";
import ClientTestimony from "@/components/pages/about-us/ClientTestimony";
import MeetTheTeam from "@/components/pages/about-us/MeetTheTeam";
import { ValuesSection } from "@/components/pages/about-us/OurValues";
import OurVisionSection from "@/components/pages/about-us/OurVision";
import HeroSection from "@/components/ui/HeroSection";
import { Metadata } from "next";
import React from "react";

// Sample team data; replace with actual import when available
export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsSection() {
  return (
    <section className="bg-white flex flex-col gap-10 md:gap-20 pb-20">
      <HeroSection
        title="About Us"
        description="Headquartered in Kolkata, we have our roots firmly planted in India's cultural capital. But our wings stretch far beyond - across India and onto the international stage. From palaces in Rajasthan to beaches in Bali, we’re ready to bring the essence of Bean Bag Affairs anywhere in the world."
        bgColor="#CBDDF6"
      />
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto flex flex-col gap-20 lg:gap-32">
        <AboutUsHero />
        <MeetTheTeam />
        <ClientTestimony />
        <ValuesSection />
        <OurVisionSection />
      </div>
    </section>
  );
}
