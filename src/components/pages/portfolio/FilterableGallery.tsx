"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import ClientVideo from "@/components/ui/ClientVideo";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type MediaItem = {
  id: number;
  type: "image" | "video";
  category: "weddings" | "commercials";
  src: string;
  alt?: string;
};

const items: MediaItem[] = [
  // Weddings & Events
  {
    id: 1,
    type: "image",
    category: "weddings",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313923/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/work/all_2_zdsp4u.jpg",
    alt: "Wedding ceremony",
  },
  {
    id: 2,
    type: "image",
    category: "weddings",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313921/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/work/all_5_ojhz4i.jpg",
    alt: "Bride and groom",
  },
  {
    id: 3,
    type: "image",
    category: "weddings",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311507/Bean%20Bag%20Agencies/main/Home%20Page%20Brand%20Image%20Shoot/Brighter%20version/FB_IMG_1750257863791_mzcemd.jpg",
    alt: "Cinematics",
  },
  {
    id: 4,
    type: "image",
    category: "weddings",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311507/Bean%20Bag%20Agencies/main/Home%20Page%20Brand%20Image%20Shoot/Brighter%20version/FB_IMG_1750257829931_ky8tr9.jpg",
    alt: "Cinematics",
  },
  {
    id: 5,
    type: "image",
    category: "weddings",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311506/Bean%20Bag%20Agencies/main/Home%20Page%20Brand%20Image%20Shoot/Brighter%20version/FB_IMG_1750257810944_ib4t4b.jpg",
    alt: "Cinematics",
  },
  {
    id: 6,
    type: "image",
    category: "weddings",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311509/Bean%20Bag%20Agencies/main/Home%20Page%20Brand%20Image%20Shoot/Brighter%20version/FB_IMG_1750257871966_xfk7rc.jpg",
    alt: "Cinematics",
  },
  // Ad Films & Commercials
  {
    id: 31,
    type: "image",
    category: "commercials",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313925/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/work/all_3_wvhns3.jpg",
    alt: "Product shoot",
  },
  {
    id: 32,
    type: "video",
    category: "commercials",
    src: "https://res.cloudinary.com/dvjqrh2gh/video/upload/v1758313921/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/work/our_work_all_1_lwrkqp.mp4",
    alt: "Commercial Shoot",
  },
  {
    id: 33,
    type: "image",
    category: "commercials",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313920/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/work/all_1_wmlpcd.jpg",
    alt: "Ad campaign",
  },
  {
    id: 34,
    type: "image",
    category: "commercials",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311423/Bean%20Bag%20Agencies/main/Boss/Photos/Product%20only/_DSC1176_qz96af.jpg",
    alt: "Ad campaign",
  },
  {
    id: 35,
    type: "image",
    category: "commercials",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311423/Bean%20Bag%20Agencies/main/Boss/Photos/Product%20only/_DSC1185_sppebe.jpg",
    alt: "Ad campaign",
  },
  {
    id: 39,
    type: "video",
    category: "commercials",
    src: "https://res.cloudinary.com/dvjqrh2gh/video/upload/v1758313920/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/work/our_work_all_2_hjxxlq.mp4",
    alt: "Cinematics",
  },
  {
    id: 36,
    type: "image",
    category: "commercials",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311412/Bean%20Bag%20Agencies/main/Boss/Photos/Product%20only/_DSC1219_udhmgk.jpg",
    alt: "Ad campaign",
  },
  {
    id: 37,
    type: "image",
    category: "commercials",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311404/Bean%20Bag%20Agencies/main/Boss/Photos/Product%20only/_DSC1244_hngmpr.jpg",
    alt: "Ad campaign",
  },
  {
    id: 38,
    type: "image",
    category: "commercials",
    src: "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311401/Bean%20Bag%20Agencies/main/Boss/Photos/Product%20only/_DSC1256_qfob37.jpg",
    alt: "Ad campaign",
  },
  {
    id: 40,
    type: "video",
    category: "commercials",
    src: "https://res.cloudinary.com/dvjqrh2gh/video/upload/v1758313934/Bean%20Bag%20Agencies/main/Travel%20and%20Car/Nissan_Magnite_dbu7si.mp4",
    alt: "Ad campaign",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function FilterableMasonryGallery() {
  const [filter, setFilter] = useState<"all" | "weddings" | "commercials">(
    "all"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(0);

  const filtered = items.filter(
    (it) => filter === "all" || it.category === filter
  );

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        setIsModalOpen(false);
      } else if (e.key === "ArrowLeft") {
        navigateMedia("prev");
      } else if (e.key === "ArrowRight") {
        navigateMedia("next");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedMediaIndex, filtered.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (mediaItem: MediaItem) => {
    const index = filtered.findIndex((item) => item.id === mediaItem.id);
    setSelectedMediaIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateMedia = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setSelectedMediaIndex((prev) =>
        prev === 0 ? filtered.length - 1 : prev - 1
      );
    } else {
      setSelectedMediaIndex((prev) =>
        prev === filtered.length - 1 ? 0 : prev + 1
      );
    }
  };

  const selectedMedia = filtered[selectedMediaIndex];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 font-formular">
      {/* Filter buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12 px-4 sm:px-6">
        {(["all", "weddings", "commercials"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`w-full sm:w-auto min-w-[120px] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-base ${
              filter === cat
                ? "bg-blue-600 text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 shadow-sm hover:shadow-md hover:scale-102 border border-gray-200"
            }`}
          >
            {cat === "all"
              ? "All Portfolio"
              : cat === "weddings"
              ? "Weddings and Events"
              : "Ad Films and Commercials"}
          </button>
        ))}
      </div>

      {/* Masonry layout */}
      <motion.div
        key={filter} // remounts on filter change
        className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 2xl:columns-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 max-w-[1600px] mx-auto"
        initial="hidden"
        animate="visible" // use animate instead of whileInView
        variants={containerVariants}
      >
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 break-inside-avoid"
          >
            {item.type === "image" ? (
              <div
                className="relative group hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt || ""}
                  width={500}
                  height={500}
                  className="w-full rounded-md sm:rounded-lg md:rounded-xl object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
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
              </div>
            ) : (
              <div
                className="relative group hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <ClientVideo
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  controls={false}
                  className="w-full rounded-md sm:rounded-lg md:rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {isModalOpen && selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            {filtered.length > 1 && (
              <button
                onClick={() => navigateMedia("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Next Button */}
            {filtered.length > 1 && (
              <button
                onClick={() => navigateMedia("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Media Content */}
            <div className="w-full h-full flex items-center justify-center">
              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt || ""}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  priority
                />
              ) : (
                <ClientVideo
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              )}
            </div>

            {/* Media Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">
                {selectedMediaIndex + 1} / {filtered.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
