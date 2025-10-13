import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { slideIn } from "./anim";

const horizontalItemVariants = {
  initial: { opacity: 0, y: -10 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.2 }
  }
};

const containerVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function index({ isHorizontal = false, isMobile = false, onLinkClick }) {
  if (isHorizontal && !isMobile) {
    // Desktop horizontal navigation - Enhanced styling with responsive layout
    return (
      <motion.div 
        className="flex items-center justify-center flex-wrap gap-1 sm:gap-2"
        variants={containerVariants}
        initial="initial"
        animate="enter"
      >
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.div
              key={`h_${i}`}
              variants={horizontalItemVariants}
              custom={i}
              className="relative"
            >
              <a 
                href={href}
                className="relative px-2 sm:px-3 lg:px-4 py-2 text-white font-formular font-semibold text-sm sm:text-base tracking-wide 
                         hover:text-zinc-400 transition-all duration-300 ease-out group
                         before:absolute before:inset-0 before:bg-white/90 
                         before:rounded-full before:scale-x-0 before:origin-center before:transition-transform 
                         before:duration-300 before:ease-out hover:before:scale-x-100 before:-z-10
                         after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 
                         after:bg-white after:transition-all after:duration-300 after:ease-out 
                         hover:after:w-full hover:after:left-0 after:-translate-x-1/2 hover:after:translate-x-0
                         transform hover:scale-105 active:scale-95 drop-shadow-lg whitespace-nowrap"
                onClick={onLinkClick}
              >
                <span className="relative z-10">{title}</span>
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  if (isMobile) {
    // Mobile navigation - Enhanced styling
    return (
      <motion.div 
        className="flex flex-col space-y-1"
        variants={containerVariants}
        initial="initial"
        animate="enter"
      >
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.div
              key={`m_${i}`}
              variants={slideIn}
              initial="initial"
              animate="enter"
              exit="exit"
              custom={i}
            >
              <a 
                href={href}
                onClick={onLinkClick}
                className="block px-4 py-3 text-[#1C2042] font-formular font-semibold text-base 
                         hover:bg-gradient-to-r hover:from-[#1C2042] hover:to-[#2a3154] 
                         hover:text-white rounded-lg transition-all duration-300 ease-out
                         transform hover:scale-[1.02] active:scale-95 hover:shadow-md
                         border border-transparent hover:border-[#1C2042]/20"
              >
                {title}
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  // Fallback to original vertical layout (shouldn't be used with new design)
  return (
    <div className="flex flex-col gap-2">
      {links.map((link, i) => {
        const { title, href } = link;
        return (
          <div key={`b_${i}`} className="perspective-120 origin-bottom">
            <motion.div
              className="font-formular"
              custom={i}
              variants={slideIn}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <a 
                href={href}
                className="text-white text-4xl block w-max transition-all duration-200 hover:after:translate-x-0 after:content-[''] after:block after:relative after:w-full after:h-0.5 after:bg-white after:-translate-x-full after:transition-transform after:duration-300"
              >
                {title}
              </a>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
