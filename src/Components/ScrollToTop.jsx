import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;

      setProgress(scrollPercent);
      setShow(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 20;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group"
        >
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/90 backdrop-blur-sm px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg z-50">
              Back to top
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
            </div>

          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full backdrop-blur-xl bg-linear-to-br from-[#F4A24C]/20 to-orange-400/20 text-[#F4A24C] shadow-lg shadow-[#F4A24C]/10 transition-all duration-300 hover:border-[#F4A24C]"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#F4A24C]/20 to-orange-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Progress Ring */}
            <svg
              className="absolute top-0 left-0 w-full h-full -rotate-90"
              viewBox="0 0 44 44"
            >
              {/* Background Circle */}
              <circle
                cx="22"
                cy="22"
                r="20"
                fill="none"
                stroke="rgba(244, 162, 76, 0.1)"
                strokeWidth="2"
              />
              {/* Progress Circle */}
              <circle
                cx="22"
                cy="22"
                r="20"
                fill="none"
                stroke="url(#linear)"
                strokeWidth="2"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-200"
              />
              <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F4A24C" />
                  <stop offset="100%" stopColor="#FFB84D" />
                </linearGradient>
              </defs>
            </svg>

            {/* Icon */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <FaArrowUp size={20} className="sm:w-6 sm:h-6" />
            </motion.div>

            {/* Shine Effect */}
            {/* <div className="absolute inset-0 rounded-full -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent"></div> */}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
