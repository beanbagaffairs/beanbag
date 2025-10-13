import LenisScroll from "@/components/ui/LenisScroll";
import Hero from "@/components/pages/home/Hero";
import Works from "@/components/pages/home/Works";
import About from "@/components/pages/home/About";
import { Metadata } from "next";
import CleanTextPage from "@/components/pages/home/CleanTextPageOne";
import Contact from "@/components/pages/home/Contact";
import DownloadBrochureBanner from "@/components/pages/home/components/DownloadBrochureBanner";
import Services from "@/components/pages/home/Services";
import ClientTestimonials from "@/components/pages/home/ClientTestimonial";

export const metadata: Metadata = {
  title: "Bean Bag Affairs",
  description: "We are a leading bean bag agency in India.",
};

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <LenisScroll />
      <Hero />
      <Services />
      <CleanTextPage />
      <Works />
      <About />
      <Contact />
      <ClientTestimonials />
      <DownloadBrochureBanner />
    </main>
  );
}
