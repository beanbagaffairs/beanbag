import ServiceSection from '@/components/pages/service/ServiceSection';
import "@/app/globals.css";
import HeroSection from '@/components/ui/HeroSection';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "At Bean Bag Affairs, we believe every occasion - whether a wedding, an elite celebration, or a film production - deserves to be crafted with both splendour and soul. Our services are designed to combine the precision of luxury with the comfort of familiarity, ensuring that every moment feels both extraordinary and effortless.",
};

export default function Service() {
  return (
    <main className='flex relative min-h-screen flex-col items-center justify-between overflow-x-hidden bg-white font-formular text-[#1C2042]'>
      <HeroSection
        title="Our Services"
        description="At Bean Bag Affairs, we believe every occasion - whether a wedding, an elite celebration, or a film production - deserves to be crafted with both splendour and soul. Our services are designed to combine the precision of luxury with the comfort of familiarity, ensuring that every moment feels both extraordinary and effortless."
        bgColor="#BADBE5"
      />
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <ServiceSection />
      </div>
    </main>
  );
}
