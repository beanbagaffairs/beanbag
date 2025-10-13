"use client";

import Menu from "@/components/pages/home/Menu";
import Footer from "@/components/pages/home/Footer";
import { ParallaxProvider } from 'react-scroll-parallax';
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoadingScreen onFinish={() => {}} />
      <ParallaxProvider>
        <Menu />
        {children}
        <Footer />
      </ParallaxProvider>
    </>
  );
}
