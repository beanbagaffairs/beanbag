// app/components/BrochuresSection.tsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

type Card = {
  title: string;
  desc: string;
  cta: string;
  icon: JSX.Element;
};

const cards: Card[] = [
  {
    title: "Wedding Packages",
    desc: "Explore our comprehensive wedding packages, tailored for your perfect day.",
    cta: "Download",
    icon: (
      <div className="inline-flex items-center justify-center rounded-xl bg-[#1C2042] p-2 text-[#F9EFF1]">
        {/* Book icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6 4a3 3 0 0 0-3 3v10a3 3 0 0 1 3-3h13V6a2 2 0 0 0-2-2H6z"></path>
          <path d="M6 16a1 1 0 0 0 0 2h13v-2H6z"></path>
        </svg>
      </div>
    ),
  },
  {
    title: "Destination Wedding Guides",
    desc: "Plan a dream destination wedding with expert guides and tips.",
    cta: "Download",
    icon: (
      <div className="inline-flex items-center justify-center rounded-xl bg-[#1C2042] p-2 text-[#F9EFF1]">
        {/* Plane icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10.18 9.23 3 7l1-2 9 2.5L21 5l1 2-7.18 2.23L12 20h-2l.18-10.77z"></path>
        </svg>
      </div>
    ),
  },
  {
    title: "Ad Film Production Pricing",
    desc: "Get detailed pricing and information for professional ad film production.",
    cta: "Download",
    icon: (
      <div className="inline-flex items-center justify-center rounded-xl bg-[#1C2042] p-2 text-[#F9EFF1]">
        {/* Clapperboard icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4 6h12l-2 3H2l2-3zM2 10h18v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8z"></path>
          <path
            d="m6 3 3 3M11 3l3 3M16 3l3 3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          ></path>
        </svg>
      </div>
    ),
  },
];

export default function BrochuresSection() {
  return (
    <section className="w-full">
      {/* Top: Download Our Brochures */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 lg:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Download Our Brochures
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-2 text-slate-600 text-md sm:text-lg"
          >
            Find the perfect package for your celebration.
          </motion.p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              {card.icon}
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-2 text-slate-600 text-base sm:text-lg">{card.desc}</p>

              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-[#1C2042] font-semibold"
              >
                {card.cta}
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom: Why Our Packages Work */}
      {/* Bottom: Why Our Packages Work */}
      <div className="mb-8 sm:mb-12 lg:mb-16 max-w-6xl py-8 sm:py-12 lg:py-16 xl:py-20 bg-[#F9EFF1] px-4 sm:px-8 lg:px-12 xl:px-20 mx-auto rounded-xl lg:rounded-2xl">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 sm:gap-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900">
            Why Our Packages
          </h3>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-slate-600">
            Our packages are meticulously crafted to provide a seamless
            experience, combining expert planning with stunning film production.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="w-full sm:w-auto inline-flex h-10 sm:h-11 items-center justify-center rounded-full bg-white px-4 sm:px-5 text-sm sm:text-base text-slate-900 font-semibold shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 focus:outline-none transition-all duration-300">
              Download My Brochure
            </button>
            <button className="w-full sm:w-auto inline-flex h-10 sm:h-11 items-center justify-center rounded-full bg-white px-4 sm:px-5 text-sm sm:text-base text-slate-900 font-semibold shadow- sm ring-1 ring-slate-200 hover:bg-slate-100 focus:outline-none transition-all duration-300">
              Request a Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
