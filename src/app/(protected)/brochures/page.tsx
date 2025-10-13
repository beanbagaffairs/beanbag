import BrochuresSection from "@/components/pages/brouchers/BrouchersSections";
import HeroSection from "@/components/ui/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brochures and Packages",
  description: "Every celebration is unique, and so are the ways we plan them. At Bean Bag Affairs, we offer carefully designed brochures and packages to help you understand what we do best - whether its planning your dream wedding, organising an elite event, or producing a cinematic film for your brand.",
};

export default function BrouchersPage() {
    return (
        <>
            <HeroSection
                title="Brouchers and Packages"
                description="Every celebration is unique, and so are the ways we plan them. At Bean Bag Affairs, we offer carefully designed brochures and packages to help you understand what we do best - whether its planning your dream wedding, organising an elite event, or producing a cinematic film for your brand."
                bgColor="#F9EFF1"
            />
            <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
                <BrochuresSection />
            </div>
        </>
    );
}