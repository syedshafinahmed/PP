import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    school: "Daffodil International University",
    duration: "Expected Graduation: 2026",
    cgpa: "3.79 / 4.0",
    level: "Undergraduate",
    icon: <FaUniversity size={24} />,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Dhaka College",
    duration: "Year of Completion: 2022",
    cgpa: "5.00 / 5.00",
    level: "Higher Secondary",
    icon: <FaGraduationCap size={24} />,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Monipur High School",
    duration: "Year of Completion: 2020",
    cgpa: "5.00 / 5.00",
    level: "Secondary",
    icon: <FaAward size={24} />,
  },
];

const Education = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto" id="education">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#F4A24C]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#F4A24C] via-orange-400 to-[#F4A24C] bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100, damping: 20 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              <motion.div
                className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 lg:p-8 transition-all duration-500 hover:border-[#F4A24C]/30"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon Badge */}
                <div className="absolute -top-4 left-6 group/icon">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#F4A24C]/30 to-orange-400/30 backdrop-blur-sm border-2 border-[#F4A24C]/40 flex items-center justify-center shadow-lg transition-all duration-300 group-hover/icon:scale-110">
                    <div className="text-[#F4A24C]">
                      {edu.icon}
                    </div>
                  </div>
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 w-max px-3 py-1.5 text-xs bg-black/90 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                    {edu.level} Level
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </span>
                </div>

                {/* Level Badge */}
                <div className="absolute -top-3 right-6 group/badge">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-linear-to-r from-[#F4A24C]/20 to-orange-400/20 backdrop-blur-sm border border-[#F4A24C]/30 text-[#F4A24C] text-xs font-semibold transition-all duration-300 group-hover/badge:scale-105">
                    {edu.level}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6 space-y-4">
                  {/* Degree */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#F4A24C] transition-colors duration-300 leading-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex items-start gap-2 text-gray-300">
                      <FaUniversity className="text-[#F4A24C] shrink-0 mt-1" size={16} />
                      <p className="text-sm md:text-base leading-relaxed">{edu.school}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="group/cgpa flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#F4A24C]/20 to-orange-400/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/cgpa:scale-110">
                          <FaAward className="text-[#F4A24C]" size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">CGPA</p>
                          <p className="text-sm font-semibold text-white">{edu.cgpa}</p>
                        </div>
                      </div>
                    </div>

                    <div className="group/duration flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#F4A24C]/20 to-orange-400/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/duration:scale-110">
                          <FaCalendarAlt className="text-[#F4A24C]" size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Duration</p>
                          <p className="text-sm font-semibold text-white">{edu.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
