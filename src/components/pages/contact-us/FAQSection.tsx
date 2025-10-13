"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/motion-primitives/accordion";
import { ChevronRight } from "lucide-react";
import { weddingsAndEventsFaq, addFilmsAndCommercialFaq } from "./FaqData";

// FAQ Data
const weddingsAndEventsFaqData = weddingsAndEventsFaq;
const addFilmsAndCommercialFaqData = addFilmsAndCommercialFaq;

const FAQSection = () => {
  return (
    <>
      <section className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-40 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
        <motion.div className="flex flex-col gap-4 w-full lg:w-[30%] xl:w-[35%]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-thin"
          >
            FAQs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 tracking-tighter leading-none font-medium"
          >
            Wedding <span className="font-sans">&</span> Events
          </motion.p>
        </motion.div>

        <motion.div className="w-full lg:w-[65%] xl:w-[60%]">
          <Accordion
            className="flex w-full flex-col"
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            variants={{
              expanded: { opacity: 1, scale: 1 },
              collapsed: { opacity: 0, scale: 0.95 },
            }}
          >
            {weddingsAndEventsFaqData.map(({ question, answer }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="py-2 border-b-2"
              >
                <AccordionTrigger className="w-full py-2 px-2 rounded-lg overflow-hidden text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium tracking-tighter text-[#1C2042] dark:text-zinc-50 group">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-200 group-data-expanded:rotate-90" />
                    <div className="ml-2">{question}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="origin-left px-2">
                  <p className="pl-6 pr-2 text-zinc-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    {answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>
      <div className="h-[1px] w-[80%] mx-auto bg-[#1C2042]" />
      <section className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-40 pb-12 sm:pb-16 md:pb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
        <motion.div className="flex flex-col gap-4 w-full lg:w-[30%] xl:w-[35%]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-thin"
          >
            FAQs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 tracking-tighter leading-none font-medium"
          >
            Ad Films <span className="font-sans">&</span> Commercials
          </motion.p>
        </motion.div>
        <motion.div className="w-full lg:w-[65%] xl:w-[60%]">
          <Accordion
            className="flex w-full flex-col"
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            variants={{
              expanded: { opacity: 1, scale: 1 },
              collapsed: { opacity: 0, scale: 0.95 },
            }}
          >
            {addFilmsAndCommercialFaqData.map(({ question, answer }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="py-2 border-b-2"
              >
                <AccordionTrigger className="w-full py-2 px-2 rounded-lg overflow-hidden text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium tracking-tighter text-[#1C2042] dark:text-zinc-50 group">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-200 group-data-expanded:rotate-90" />
                    <div className="ml-2">{question}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="origin-left px-2">
                  <p className="pl-6 pr-2 text-zinc-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    {answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>
    </>
  );
};

export default FAQSection;
