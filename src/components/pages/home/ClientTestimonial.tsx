"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, User, X } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Arghya Nandy",
    comment:
      "More than just our photographer, he felt like a true friend—and it shows in every single wedding photo. His entire team was the perfect mix of professional and friendly. Massive credit to the whole crew for turning our wedding into a beautiful story we’ll happily reminisce over every time we look at the pictures",
    rating: 5,
  },
  {
    name: "sanghati biswas",
    comment:
      "We had a wonderful experience working with the team for our wedding. From the very beginning, they were extremely cooperative, patient, and accommodating to our needs and preferences. They made us feel comfortable throughout the entire process.\n\nTheir professionalism and friendly approach stood out, and they were always open to suggestions while also guiding us with their expertise. The team managed everything smoothly and ensured that all important moments were captured beautifully.",
    rating: 5,
  },
  {
    name: "Rupanjana Bhattacharyya",
    comment:
      "Some people photograph your wedding, and then there are people like Chiru and his team, who become a part of your journey.\n\nChiru, one of my absolute favorite people, captured the most important day of my life so beautifully. Being extremely camera-shy, I was worried about being photographed all day, but not once did they make me feel uncomfortable. Their warmth, patience, and positive energy made everything feel effortless and natural.\n\nA special mention to Minu, Ani, Rahul, Chiru, and Shukomol. They were incredible at what they do and honestly felt more like my bridesmaids than my photography team—always there to support, calm, and celebrate with me.\n\nTo top it all, they delivered our photographs within just one week of the wedding, which was such a wonderful surprise.\n\nAdding a photograph here that isn't even edited, because that's exactly how your pictures will turn out with Beanbag Affairs—natural, elegant, and full of emotion. Thank you for not just capturing our wedding, but for becoming such a special part of it.\n\nIf you're looking for a team to capture the best days of your life, book BEANBAG AFFAIRS without a second thought.",
    rating: 5,
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

const TestimonialCard = ({ testimonial, index, onReadMore }: { testimonial: any, index: number, onReadMore: (t: any) => void }) => {
  const maxLength = 150;
  const shouldTruncate = testimonial.comment.length > maxLength;
  
  const displayText = shouldTruncate ? testimonial.comment.slice(0, maxLength) + "..." : testimonial.comment;

  return (
    <motion.div
      className="bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 flex flex-col min-h-[320px] group hover:scale-[1.02] h-full"
      variants={item}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-4">
        <Quote className="text-pink-400 w-8 h-8 lg:w-10 lg:h-10 opacity-60 flex-shrink-0" />

        {/* Star Rating */}
        <div className="flex gap-1 flex-shrink-0">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="flex-grow flex flex-col mb-6">
        <div className="text-[#333] text-sm sm:text-base lg:text-lg leading-relaxed font-sans whitespace-pre-wrap">
          &quot;{displayText}&quot;
        </div>
        {shouldTruncate && (
          <button
            onClick={() => onReadMore(testimonial)}
            className="text-pink-500 font-semibold text-sm mt-2 self-start hover:text-pink-600 transition-colors"
          >
            Read More
          </button>
        )}
      </div>

      {/* Client Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-500">
          <User className="w-6 h-6 lg:w-7 lg:h-7" />
        </div>
        <div className="min-w-0">
          <h4 className="text-[#1C2042] font-semibold text-sm lg:text-base truncate">
            {testimonial.name}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

const ClientTestimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any | null>(null);

  // Prevent background scrolling when dialog is open
  useEffect(() => {
    if (selectedTestimonial) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedTestimonial]);

  return (
    <motion.section
      className="min-h-screen w-full bg-[#FDF7F2] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center font-formular relative"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index} 
              onReadMore={setSelectedTestimonial}
            />
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

      {/* Dialog */}
      <AnimatePresence>
        {selectedTestimonial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTestimonial(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-2xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col max-h-[85vh]"
            >
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Dialog Content */}
              <div className="flex items-center gap-4 mb-6 pt-2">
                <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-500">
                  <User className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div>
                  <h4 className="text-[#1C2042] font-semibold text-base lg:text-lg">
                    {selectedTestimonial.name}
                  </h4>
                  <div className="flex gap-1 mt-1">
                    {[...Array(selectedTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-[#333] text-sm sm:text-base lg:text-lg leading-relaxed font-sans whitespace-pre-wrap">
                  &quot;{selectedTestimonial.comment}&quot;
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ClientTestimonials;
