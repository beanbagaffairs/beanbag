"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Ritika Sharma",
    role: "Bride",
    location: "Mumbai",
    comment:
      "The pictures captured the emotions so beautifully. Every shot felt like a scene from a dream. Thank you for making my big day timeless.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Aman Verma",
    role: "Creative Director",
    location: "Delhi",
    comment:
      "Their team understood our advertising vision perfectly. Every frame was sharp, bold, and full of impact. A delight to work with!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Priya Mehta",
    role: "Marketing Head",
    location: "Bangalore",
    comment:
      "Elegant visuals, professional team, and seamless execution. Their photography elevated our brand campaign in ways we didn't imagine.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Rajesh Kumar",
    role: "Event Organizer",
    location: "Chennai",
    comment:
      "From corporate events to intimate gatherings, they bring a level of sophistication that's unmatched. Highly recommended!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Sneha Patel",
    role: "Entrepreneur",
    location: "Pune",
    comment:
      "Working with them was like having a creative partner who truly understood our brand story. The results exceeded all expectations.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Vikram Singh",
    role: "Film Producer",
    location: "Hyderabad",
    comment:
      "Their cinematic approach to event photography is phenomenal. They don't just capture moments, they create visual poetry.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ClientTestimonials = () => {
  return (
    <motion.section
      className="min-h-screen w-full bg-[#FDF7F2] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center font-formular"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12 sm:mb-16 max-w-4xl"
        variants={item}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1C2042] mb-4 sm:mb-6 tracking-tight">
          What Our Clients Say
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-[#1C2042]/70 max-w-2xl mx-auto leading-relaxed">
          Don<span className="font-sans">&apos;</span>t just take our word for
          it. Here<span className="font-sans">&apos;</span>s what our clients
          have to say about their experience working with us.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="w-full max-w-7xl">
        {/* Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 flex flex-col justify-between min-h-[320px] group hover:scale-[1.02]"
              variants={item}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="text-pink-400 w-8 h-8 lg:w-10 lg:h-10 opacity-60" />

                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[#333] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 flex-grow">
                &quot;{testimonial.comment}&quot;
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#1C2042] font-semibold text-sm lg:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs lg:text-sm">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div className="mt-12 sm:mt-16 text-center" variants={item}>
        <p className="text-[#1C2042]/70 text-sm sm:text-base lg:text-lg mb-6 max-w-2xl mx-auto">
          Ready to create your own success story
          <span className="font-sans">?</span> Let
          <span className="font-sans">&apos;</span>s bring your vision to life.
        </p>
        <Link href="/service">
          <motion.button
            className="bg-[#1C2042] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-[#2b2f50] transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default ClientTestimonials;
