// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";

// const ScrollToTop = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShow(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   if (!show) return null;

//   return (
//     <button
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//       className="
//         fixed 
//         bottom-4 right-4
//         sm:bottom-6 sm:right-6
//         md:bottom-8 md:right-8
//         z-50
//         flex items-center justify-center
//         w-10 h-10
//         sm:w-11 sm:h-11
//         md:w-12 md:h-12
//         rounded-full
//         border border-[#F4A24C]
//         bg-linear-to-br from-[#F4A24C]/50 to-black text-[#F4A24C]
//         shadow-lg
//         hover:bg-[#F4A24C]/80 hover:text-black
//         hover:-translate-y-1
//         transition-all duration-300
//         active:scale-95
//       "
//     >
//       <FaArrowUp className="text-sm sm:text-base md:text-lg" />
//     </button>
//   );
// };

// export default ScrollToTop;



import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { BiSolidUpArrow } from "react-icons/bi";
import { ImArrowUp, ImArrowUp2 } from "react-icons/im";

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

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.3 }}
          className="
            fixed bottom-4 right-4
            sm:bottom-6 sm:right-6
            md:bottom-8 md:right-8
            z-50 group
          "
        >
          {/* Tooltip */}
          <span
            className="
              absolute -top-10 left-1/2 -translate-x-1/2
              whitespace-nowrap
              rounded-md bg-black px-3 py-1
              text-xs text-white
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
          >
            Back to top
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="
              relative
              flex items-center justify-center
              w-10 h-10
              sm:w-11 sm:h-11
              md:w-12 md:h-12
              rounded-full
              bg-linear-to-br from-[#F4A24C]/50 to-black
              text-[#F4A24C]
              shadow-lg
              transition-all duration-300
              active:scale-95
            "
          >
            {/* Progress Ring */}
            <svg
              className="absolute top-0 left-0 w-full h-full -rotate-90"
              viewBox="0 0 40 40"
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="#F4A24C"
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-200"
              />
            </svg>

            <ImArrowUp2 className="relative z-10 text-sm sm:text-base md:text-lg" size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
