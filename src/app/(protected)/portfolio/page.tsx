import FilterableGallery from "@/components/pages/portfolio/FilterableGallery";
import HeroSection from "@/components/ui/HeroSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Every celebration, every film, every frame we create tells a story - unique, timeless, unforgettable. The Bean Bag Affairs portfolio is not just a showcase of what we have done, but a window into how we bring dreams to life.",
};

export default function PortfolioPage() {
  return (
    <>
      <HeroSection
        title="Our Work"
        description="Every celebration, every film, every frame we create tells a story - unique, timeless, unforgettable. The Bean Bag Affairs portfolio is not just a showcase of what we have done, but a window into how we bring dreams to life."
        bgColor="#BADBE5"
      />
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <FilterableGallery />
      </div>
    </>
  );
}