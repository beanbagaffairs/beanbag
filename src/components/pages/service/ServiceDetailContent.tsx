"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";
import { serviceData } from "@/components/pages/service/service-data";

interface ServiceDetailContentProps {
  serviceName: string;
}

// Hero Section Component
const HeroSection = ({ service }: { service: any }) => (
  <section className="relative">
    <div
      className="absolute inset-0 -z-10"
      style={{
        background: `radial-gradient(60% 60% at 20% 20%, #FEE79A 0%, rgba(254,231,154,0.25) 50%, transparent 70%),
                     radial-gradient(50% 50% at 80% 10%, #FDD7D2 0%, rgba(253,215,210,0.2) 46%, transparent 70%),
                     radial-gradient(50% 50% at 50% 80%, #BADBE5 0%, rgba(186,219,229,0.2) 46%, transparent 70%)`,
      }}
    />
    <div className="mx-auto max-w-7xl px-10 sm:px-6 lg:px-8 pt-32 sm:pt-32 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="grid items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <h1
            className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
            style={{ color: "#1C2042" }}
          >
            {service.title}
          </h1>
          <p
            className="mt-3 sm:mt-4 md:mt-6 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl opacity-80 leading-relaxed"
            style={{ color: "#1C2042" }}
          >
            {service.description1}
          </p>
          <p
            className="mt-3 sm:mt-4 md:mt-6 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl opacity-80 leading-relaxed"
            style={{ color: "#1C2042" }}
          >
            {service.description2}
          </p>
          <div className="mt-6 sm:mt-8 flex items-center gap-4">
            <a
              href={service.ctaLink}
              className="btn gradient-shadow rounded-lg sm:rounded-xl bg-[#1C2042] px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white hover:bg-[#2b2f50] transition-colors duration-300"
            >
              {service.cta}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl overflow-hidden rounded-xl sm:rounded-2xl border border-white/50 shadow-lg sm:shadow-xl">
            {service.imageSrc ? (
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                priority
              />
            ) : service.videoSrc ? (
              <video
                src={service.videoSrc}
                autoPlay
                muted
                loop
                controls={false}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#FEE79A] to-[#BADBE5] flex items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl">🎯</span>
              </div>
            )}
          </div>
          <div className="pointer-events-none absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 hidden rotate-[-6deg] rounded-lg sm:rounded-xl bg-[#FEE79A] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm shadow sm:block">
            {service.category === "weddings"
              ? "Premium Wedding Service"
              : "Professional Ad Film Service"}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Gallery Section Component
const GallerySection = ({ service }: { service: any }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % service.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0
          ? service.images.length - 1
          : selectedImageIndex - 1
      );
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex !== null) {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  if (!service.images || service.images.length === 0) {
    return null;
  }

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-3 sm:mb-4 md:mb-6"
            style={{ color: "#1C2042" }}
          >
            Our Work Gallery
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl opacity-80 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4"
            style={{ color: "#1C2042" }}
          >
            Discover the artistry and attention to detail that defines our{" "}
            {service.category === "weddings" ? "wedding" : "advertising"}{" "}
            services
          </p>
        </motion.div>

        {/* Masonry layout */}
        <motion.div
          className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4 w-full gap-3 sm:gap-4 md:gap-6 lg:gap-8 mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {service.images.map((media: string, index: number) => {
            const isVideo =
              media.includes(".mp4") ||
              media.includes(".webm") ||
              media.includes(".mov");

            return (
              <motion.div
                key={index}
                className="mb-3 sm:mb-4 md:mb-6 lg:mb-8 break-inside-avoid"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <div
                  className="relative group hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => !isVideo && openModal(index)}
                >
                  {isVideo ? (
                    <video
                      src={media}
                      autoPlay
                      muted
                      loop
                      controls={false}
                      className="w-full rounded-md sm:rounded-lg md:rounded-xl object-cover"
                    />
                  ) : (
                    <Image
                      src={media}
                      alt={`${service.title} gallery ${index + 1}`}
                      width={500}
                      height={500}
                      className="w-full rounded-md sm:rounded-lg md:rounded-xl object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md sm:rounded-lg md:rounded-xl" />

                  {/* Expand icon for images */}
                  {!isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Play icon for videos */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Image counter badge */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1} / {service.images.length}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation arrows */}
            {service.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 transition-colors duration-200 z-10"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 transition-colors duration-200 z-10"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Image */}
            <div
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={service.images[selectedImageIndex]}
                alt={`${service.title} gallery ${selectedImageIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                priority
              />

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {selectedImageIndex + 1} / {service.images.length}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

// Services Section Component
const ServicesSection = ({ service }: { service: any }) => {
  const serviceItems = Object.values(service.whatWeDo || {}).filter(Boolean);
  const icons = ["🎯", "💎", "✨", "🎨", "🚀"];
  const colors = ["#FEE79A", "#BADBE5", "#CBDDF6", "#F9EFF1", "#FDD7D2"];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(50% 50% at 30% 20%, #CBDDF6 0%, rgba(203,221,246,0.15) 50%, transparent 70%),
                       radial-gradient(40% 40% at 70% 80%, #F9EFF1 0%, rgba(249,239,241,0.2) 46%, transparent 70%),
                       radial-gradient(60% 60% at 10% 90%, #BADBE5 0%, rgba(186,219,229,0.15) 46%, transparent 70%)`,
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-3 sm:mb-4 md:mb-6"
            style={{ color: "#1C2042" }}
          >
            What We Do
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl opacity-80 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4"
            style={{ color: "#1C2042" }}
          >
            {service.category === "weddings"
              ? "Comprehensive wedding planning services designed to bring your vision to life with elegance and precision."
              : "Professional advertising and commercial services that bring your brand vision to life with creativity and impact."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {serviceItems.map((item: any, index: number) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-full rounded-lg sm:rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 md:p-8 lg:p-12 group-hover:scale-[1.02]">
                <div
                  className="inline-flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-xl sm:rounded-2xl mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl shadow-sm"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  {icons[index % icons.length]}
                </div>
                <div>
                  <h3
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 tracking-tight leading-tight"
                    style={{ color: "#1C2042" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm md:text-base leading-relaxed opacity-80"
                    style={{ color: "#1C2042" }}
                  >
                    {item.description}
                  </p>
                </div>
                <div
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full opacity-30"
                  style={{ backgroundColor: colors[index % colors.length] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = ({ service }: { service: any }) => (
  <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6"
          style={{ color: "#1C2042" }}
        >
          Why Choose Us?
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-80 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-4"
          style={{ color: "#1C2042" }}
        >
          {service.whyChooseUs}
        </p>
      </motion.div>

      <motion.div
        className="text-center bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/80 shadow-xl p-6 sm:p-8 md:p-12 lg:p-16"
        style={{
          background: `radial-gradient(60% 60% at 20% 20%, #FEE79A 0%, rgba(254,231,154,0.25) 50%, transparent 70%),
                       radial-gradient(50% 50% at 80% 10%, #FDD7D2 0%, rgba(253,215,210,0.2) 46%, transparent 70%),
                       radial-gradient(50% 50% at 50% 80%, #BADBE5 0%, rgba(186,219,229,0.2) 46%, transparent 70%)`,
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6"
          style={{ color: "#1C2042" }}
        >
          Ready to Get Started?
        </h3>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-80 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
          style={{ color: "#1C2042" }}
        >
          Lets bring your vision to life with our expert{" "}
          {service.category === "weddings" ? "wedding planning" : "advertising"}{" "}
          services.
        </p>
        <motion.a
          href={service.ctaLink}
          className="inline-flex items-center gap-2 sm:gap-3 bg-[#1C2042] hover:bg-[#2b2f50] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {service.cta}
        </motion.a>
      </motion.div>
    </div>
  </section>
);

const ServiceDetailContent = ({ serviceName }: ServiceDetailContentProps) => {
  const service =
    serviceData.servicesList[
      serviceName as keyof typeof serviceData.servicesList
    ];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden font-formular">
      <HeroSection service={service} />
      <div className="w-full">
        <GallerySection service={service} />
        <ServicesSection service={service} />
        <CTASection service={service} />
      </div>
    </main>
  );
};

export default ServiceDetailContent;
