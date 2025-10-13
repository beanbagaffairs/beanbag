"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Weddings, With a Touch of Magic",
    description:
      "From destination vows under starlit skies to intimate family gatherings, our weddings balance grandeur with grace.",
    image:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313927/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/Home%20Page/weddings_with_a_touch_of_magic_lun5hu.jpg",
  },
  {
    id: 2,
    title: "Ad Films, With a Soul",
    description:
      "From commercials to brand films, we produce visuals that don’t just tell stories - they linger, like the last sip of a fine single malt.",
    image:
      "https://res.cloudinary.com/dvjqrh2gh/image/upload/v1758313929/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/Home%20Page/ad_films_with_a_soul_e6hqip.jpg",
  },
];

// Parent animation (stagger children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Card animation (fade-in only)
const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};


export default function Services() {
  return (
    <section className="min-h-[120vh] w-full font-formular bg-[#BADBE5] flex flex-col justify-center items-center text-[#1C2042] py-12 sm:py-16 lg:py-20">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        className="text-center mb-16 sm:mb-20 lg:mb-28 px-4 sm:px-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter font-bold">Our Services</h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg max-w-sm sm:max-w-xl mx-auto">
          We bring your vision to life with innovative solutions, unmatched
          creativity, and professional expertise.
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <motion.div
          key={service.id}
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)] xl:w-[calc(40%-1.5rem)] h-[28rem] sm:h-[32rem] lg:h-[35rem] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300"
        >
            {/* Card Image */}
            <div className="relative h-[60%] w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-6 text-center bg-[#1C2042] h-[40%]">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white line-clamp-3">{service.description}</p>
              <div className="mt-4 sm:mt-6 flex justify-center">
                <Link href="/service" className="flex items-center gap-2 border border-white text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-white hover:text-[#1C2042] transition-all duration-300 text-sm sm:text-base">
                  Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
