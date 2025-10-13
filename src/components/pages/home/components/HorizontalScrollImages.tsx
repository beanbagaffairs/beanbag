// components/ImageCarousel.tsx
import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

interface ImageCarouselProps {
  /** Array of images to display */
  images: { src: string; alt?: string }[];
  /** Interval (ms) between automatic scrolls */
  autoScrollInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoScrollInterval = 3000,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimer = useRef<number>();

  const scrollNext = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollBy({ left: width, behavior: "smooth" });
  }, []);

  const scrollPrev = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollBy({ left: -width, behavior: "smooth" });
  }, []);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    autoScrollTimer.current = window.setInterval(
      scrollNext,
      autoScrollInterval
    );
  }, [autoScrollInterval, scrollNext]);

  const stopAutoScroll = () => {
    if (autoScrollTimer.current) {
      window.clearInterval(autoScrollTimer.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll();
    };
  }, [startAutoScroll]);

  return (
    <div
      className="relative"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      {/* Scroll container */}
      <div
        ref={containerRef}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth"
      >
        {images.map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="relative w-full h-60 p-2">
              <Image
                src={img.src}
                alt={img.alt ?? `carousel-image-${idx}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left button */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        aria-label="Scroll left"
      >
        <FaChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      {/* Right button */}
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        aria-label="Scroll right"
      >
        <FaChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Hide scrollbar */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
