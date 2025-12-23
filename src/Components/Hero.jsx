import React from 'react';
import { motion } from 'framer-motion';
import me from '../assets/me.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className='bg-base-200 pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4A24C]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants}>
              <div className="inline-block mb-4">
                <span className="text-sm md:text-base text-[#F4A24C] font-semibold tracking-wider uppercase">
                  Welcome to my portfolio
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-[#F4A24C]">Syed Shafin Ahmed</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="h-8 md:h-10 mb-6 flex justify-center lg:justify-start items-center [&_span]:caret-transparent"
            >
              <TypeAnimation
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-300 [&::after]:hidden"
                sequence={[
                  'Frontend Developer',
                  2000,
                  'React Developer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                ]}
                speed={70}
                repeat={Infinity}
                cursor={false}
                wrapper="span"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base lg:text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              An aspiring Full-Stack Developer with a strong foundation in frontend development and a growing focus on backend architecture and APIs.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
            >
              <a
                href='/Syed Shafin Ahmed.pdf'
                download
                className='btn text-black rounded-sm border-none bg-[#F4A24C] btn-md px-6 hover:bg-[#F4A24C]/90 transition-all duration-300 hover:scale-105 shadow-lg'
              >
                Download Resume
              </a>
              <div className="flex gap-4 items-center">
                <motion.a
                  href="https://github.com/syedshafinahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative h-10 w-10 flex items-center justify-center rounded-sm bg-gradient-to-br from-[#F4A24C]/20 to-[#F4A24C]/5 backdrop-blur-md border-2 border-[#F4A24C]/30 text-[#F4A24C] hover:border-[#F4A24C] hover:bg-gradient-to-br hover:from-[#F4A24C] hover:to-[#F4A24C]/80 hover:text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(244,162,76,0.6)]"
                >
                  <FaGithubSquare size={22} className="relative z-10" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    GitHub
                  </span>
                  <div className="absolute inset-0 rounded-sm bg-[#F4A24C]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/syed-shafin-ahmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative h-10 w-10 flex items-center justify-center rounded-sm bg-gradient-to-br from-[#F4A24C]/20 to-[#F4A24C]/5 backdrop-blur-md border-2 border-[#F4A24C]/30 text-[#F4A24C] hover:border-[#F4A24C] hover:bg-gradient-to-br hover:from-[#F4A24C] hover:to-[#F4A24C]/80 hover:text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(244,162,76,0.6)]"
                >
                  <FaLinkedin size={22} className="relative z-10" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    LinkedIn
                  </span>
                  <div className="absolute inset-0 rounded-sm bg-[#F4A24C]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F4A24C]/20 to-transparent blur-2xl animate-pulse"></div>
              
              {/* Image container with border gradient */}
              <div className="relative p-2 rounded-full bg-gradient-to-r from-[#F4A24C]/30 via-[#F4A24C]/20 to-transparent">
                <div className="relative rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm">
                  <img
                    src={me}
                    alt="Syed Shafin Ahmed"
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 md:-right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 shadow-xl"
              >
                <span className="text-xs md:text-sm text-[#F4A24C] font-semibold">
                  Available for work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
