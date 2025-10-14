"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const weddingServices = [
  {
    id: 1,
    title: "Full Wedding Planning and Coordination",
    description:
      "End-to-end execution, Timeline, budget, and vendor management, Destination weddings and ritual compliance",
    href: "/service/full-wedding-planning",
    imageSrc:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313903/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/services/weddings%20and%20events/Full%20Wedding%20Planning/Thumbnail_rzaezw.jpg",
    category: "weddings",
  },
  // {
  //   id: 2,
  //   title: "Brand Collaborations",
  //   description:
  //     "Great celebrations are also great stages for brands. At Bean Bag Affairs, we curate collaborations between events and brands that feel natural, authentic, and mutually rewarding.",
  //   href: "/service/brand-collaborations",
  //   imageSrc:
  //     "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311337/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/services/weddings%20and%20events/Brand%20Collaborations/brand_collab_6_vzhfdz.jpg",
  //   category: "weddings",
  // },
  {
    id: 4,
    title: "Photography and Videography",
    description:
      "Pre-wedding and candid shoots, Cinematic wedding films and drone footage, Photo albums and social media-ready content",
    href: "/service/photography-videography",
    imageSrc:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313878/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/services/weddings%20and%20events/Photography%20and%20videography/Thumbnail_gfnkav.jpg",
    category: "weddings",
  },
  {
    id: 5,
    title: "Food and Beverage Catering",
    description:
      "Pan-Indian and global cuisine options, Live counters and curated dining experiences, Hygiene and gourmet-grade service",
    href: "/service/food-beverage-catering",
    imageSrc:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313873/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/services/weddings%20and%20events/Food%20Beverage/thumbnail_nf4pcy.jpg",
    category: "weddings",
  },
  {
    id: 6,
    title: "Make-up, Styling and Grooming",
    description:
      "Professional make-up artists, Bride and groom styling, Guest grooming services",
    href: "/service/make-up-styling-grooming",
    imageSrc:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311330/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/services/weddings%20and%20events/Makeup%20and%20styling/makeup_pcyrgg.jpg",
    category: "weddings",
  },
  {
    id: 7,
    title: "Entertainment and Musical Events",
    description:
      "Artist bookings (DJs, classical musicians, folk performers), Stage and sound setup, Celebrity performance coordination",
    href: "/service/entertainment-musical-events",
    imageSrc:
      "https://images.unsplash.com/photo-1651418481287-20819065dc68?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "weddings",
  },
  {
    id: 8,
    title: "Venue Selection and Setup",
    description:
      "Indoor and outdoor options, Luxury resorts, banquet halls, palaces, Legal permissions and logistics",
    href: "/service/venue-selection-setup",
    imageSrc:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313866/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/services/weddings%20and%20events/Venue%20Selection%20and%20setup/Thumbnail_ywfm5b.jpg",
    category: "weddings",
  },
  // {
  //   id: 9,
  //   title: "Accommodation and Hospitality",
  //   description:
  //     "Premium guest accommodations, Bridal suites and hospitality teams, Concierge services and welcome kits",
  //   href: "/service/accommodation-hospitality",
  //   imageSrc:
  //     "https://images.unsplash.com/photo-1516788875874-611481863552?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   category: "weddings",
  // },
  // {
  //   id: 10,
  //   title: "Logistics and Guest Movement",
  //   description:
  //     "Luxury travel and guest transfers, Airport pickups and scheduling, On-ground staff and 24/7 coordination",
  //   href: "/service/logistics-guest-movement",
  //   imageSrc:
  //     "https://media.istockphoto.com/id/1499392931/photo/man-giving-car-key-to-male-valet.jpg?s=2048x2048&w=is&k=20&c=ctOhLQA6eNYBwVWXIE1pQe0Se40lQHXzsoLrIB_KARM=",
  //   category: "weddings",
  // },
  {
    id: 11,
    title: "Custom VIP Services",
    description:
      "Personal concierge and assistants, Guest security and privacy management, Wedding websites, gift registries, international guest handling",
    href: "/service/custom-vip-services",
    imageSrc:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313886/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/services/weddings%20and%20events/Vip%20services/thumbnail_ugg2fb.jpg",
    category: "weddings",
  },
];

const adFilmServices = [
  {
    id: 12,
    title: "Concept and Script Development",
    description:
      "Brand storytelling, Scriptwriting and storyboarding, Creative consulting",
    href: "/service/concept-script-development",
    imageSrc:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313911/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/services/Ad%20films%20amd%20commercials/vlcsnap-2025-09-10-14h13m10s419_axlrqy.png",
    category: "adFilms",
  },
  {
    id: 13,
    title: "Production Services",
    description:
      "Filming logistics, crew, and technical setup, Locations, props, set design, Costume and styling",
    href: "/service/production-services",
    imageSrc:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311487/Bean%20Bag%20Agencies/main/Stock%20Shots%20by%20Chiranjit/InShot_20240306_101704925_dqpvn7.jpg",
    category: "adFilms",
  },
  {
    id: 14,
    title: "Talent Management and Casting",
    description:
      "Casting models, actors, voice-over artists, Influencer and brand ambassador booking, Legal documentation and NDAs",
    href: "/service/talent-management-casting",
    imageSrc:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/c_crop,ar_3:4/v1758313916/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/services/Ad%20films%20amd%20commercials/vlcsnap-2025-09-10-14h11m26s354_onnsqf.png",
    category: "adFilms",
  },
  {
    id: 15,
    title: "Post Production",
    description:
      "Editing, VFX, background scoring, Color grading and visual polishing, Final delivery for broadcast and digital use",
    href: "/service/post-production",
    imageSrc:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313910/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/services/Ad%20films%20amd%20commercials/vlcsnap-2025-09-10-14h13m56s520_dloqix.png",
    category: "adFilms",
  },
  {
    id: 3,
    title: "Brand Collaborations",
    description:
      "Great celebrations are also great stages for brands. At Bean Bag Affairs, we curate collaborations between events and brands that feel natural, authentic, and mutually rewarding.",
    href: "/service/brand-collaborations",
    imageSrc:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758311489/Bean%20Bag%20Agencies/main/Stock%20Shots%20by%20Chiranjit/InShot_20250909_235207431_xukjqd.jpg",
    category: "adFilms",
  },
];

type ServiceItem = {
  id: number;
  title: string;
  description: string;
  href: string;
  category: string;
  imageSrc?: string;
  videoSrc?: string;
};

const ServiceSection = () => {
  const services = [...weddingServices, ...adFilmServices];

  // Category descriptions
  const categoryDescriptions = {
    all: "At Bean Bag Affairs, we make every occasion truly special. From the charm of weddings to the splendor of grand celebrations and the innovation of commercial productions, our all-inclusive services bring your ideas to life with style, sophistication, and flawless execution.",
    weddings:
      "Weddings are not just ceremonies; they are legacies in the making. Our Wedding and Event Management division ensures that every vow, every laugh, and every memory is seamlessly orchestrated. From intimate family gatherings to lavish destination weddings, our services cover everything from planning to execution - with a flair that is distinctly Bean Bag Affairs.",
    adFilms:
      "Great stories deserve great storytellers. At Bean Bag Affairs, our film and commercial production services are designed for brands and individuals who want their vision to shine on screen. From concept to camera, from script to screen, we ensure that every production carries the weight of creativity and the warmth of authenticity.",
  };

  // Category background images
  const categoryImages = {
    all: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    weddings: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    adFilms: "https://plus.unsplash.com/premium_photo-1682146720153-4d5bdf56f143?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };

  // Category titles
  const categoryTitles = {
    all: "Weddings and Ad Films",
    weddings: "Weddings and Events",
    adFilms: "Ad Films and Commercials"
  };

  // Category alt texts
  const categoryAltTexts = {
    all: "Bean Bag Affairs services overview",
    weddings: "Weddings and Events",
    adFilms: "Ad Films and Commercials"
  };

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

  const localStorageKey = "serviceFilter";

  const [filter, setFilter] = useState<"all" | "weddings" | "adFilms" | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFilter = localStorage.getItem(localStorageKey) as
        | "all"
        | "weddings"
        | "adFilms"
        | null;
      if (storedFilter) {
        setFilter(storedFilter);
      } else {
        localStorage.setItem(localStorageKey, "all");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(localStorageKey, filter || "all");
    }
  }, [filter]);

  const filtered = services.filter(
    (service) => filter === "all" || service.category === filter
  );

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white font-formular">
      {/* Filter buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12 px-4 sm:px-6">
        {(["all", "weddings", "adFilms"] as const).map((cat) => (
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
              ? "All Services"
              : cat === "weddings"
              ? "Weddings and Events"
              : "Ad Films and Commercials"}
          </button>
        ))}
      </div>

      {/* Category Description */}
      {filter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh] mt-6 sm:mt-8 md:mt-12 lg:mt-16 flex items-center justify-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl mx-2 sm:mx-4 md:mx-6 lg:mx-8"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={categoryImages[filter as keyof typeof categoryImages]}
              alt={categoryAltTexts[filter as keyof typeof categoryAltTexts]}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 sm:bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 font-formular leading-tight">
                {categoryTitles[filter as keyof typeof categoryTitles]}
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 md:leading-relaxed max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-2 sm:px-4">
                {categoryDescriptions[filter as keyof typeof categoryDescriptions]}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Masonry layout */}
      <motion.div
        key={filter} // remounts on filter change
        className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 max-w-[1600px] mx-auto"
        initial="hidden"
        animate="visible" // use animate instead of whileInView
        variants={containerVariants}
      >
        {filtered.map((service: ServiceItem) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 break-inside-avoid"
          >
            {service.imageSrc ? (
              <Link href={service.href}>
                <div className="relative group hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="w-full rounded-md sm:rounded-lg md:rounded-xl object-cover overflow-hidden"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-2/5 sm:h-1/2 md:h-2/5 lg:h-1/3 rounded-md sm:rounded-lg md:rounded-xl bg-gradient-to-t from-black/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium h-full flex items-end justify-start px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 leading-tight">
                      {service.title}
                    </p>
                  </div>
                </div>
              </Link>
            ) : service.videoSrc ? (
              <Link href={service.href}>
                <div className="relative group hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 cursor-pointer">
                  <video
                    src={service.videoSrc}
                    autoPlay
                    muted
                    loop
                    controls={false}
                    className="w-full rounded-md sm:rounded-lg md:rounded-xl object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-2/5 sm:h-1/2 md:h-2/5 lg:h-1/3 rounded-md sm:rounded-lg md:rounded-xl bg-gradient-to-t from-black/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium h-full flex items-end justify-start px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 leading-tight">
                      {service.title}
                    </p>
                  </div>
                </div>
              </Link>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceSection;
