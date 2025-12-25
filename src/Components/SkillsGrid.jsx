import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiFirebase, SiMysql, SiFigma, SiLinux, SiNetlify, SiCloudflare, SiVercel, SiFramer,
} from "react-icons/si";
import { DiPython, DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";

const cardVariant = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
};

const skills = [
  { name: "C", category: "Languages", level: 80, icon: <i className="fa-solid fa-c" /> },
  { name: "Python", category: "Languages", level: 80, icon: <DiPython /> },
  { name: "Java", category: "Languages", level: 70, icon: <DiJava /> },

  { name: "HTML", category: "Frontend", level: 95, icon: <FaHtml5 /> },
  { name: "CSS", category: "Frontend", level: 95, icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", category: "Frontend", level: 95, icon: <SiTailwindcss /> },
  { name: "JavaScript", category: "Frontend", level: 85, icon: <FaJs /> },
  { name: "React.js", category: "Frontend", level: 90, icon: <FaReact /> },
  { name: "Next.js", category: "Frontend", level: 55, icon: <TbBrandNextjs /> },
  { name: "Framer", category: "Frontend", level: 65, icon: <SiFramer /> },

  { name: "Node.js", category: "Backend", level: 80, icon: <FaNodeJs /> },
  { name: "Express.js", category: "Backend", level: 80, icon: <SiExpress /> },
  { name: "Firebase", category: "Backend", level: 80, icon: <SiFirebase /> },

  { name: "MongoDB", category: "Database", level: 80, icon: <SiMongodb /> },
  { name: "MySQL", category: "Database", level: 70, icon: <SiMysql /> },

  { name: "Git & GitHub", category: "Tools", level: 90, icon: <FaGitAlt /> },
  { name: "Postman", category: "Tools", level: 70, icon: <SiPostman /> },
  { name: "Linux", category: "Tools", level: 70, icon: <SiLinux /> },
  { name: "VS Code", category: "Tools", level: 90, icon: <VscVscode /> },
  { name: "Figma", category: "Tools", level: 90, icon: <SiFigma /> },

  { name: "Netlify", category: "Deployment", level: 85, icon: <SiNetlify /> },
  { name: "Cloudflare", category: "Deployment", level: 85, icon: <SiCloudflare /> },
  { name: "Vercel", category: "Deployment", level: 85, icon: <SiVercel /> },
];

const tabs = ["All", "Frontend", "Backend", "Database", "Tools", "Languages", "Deployment"];


const SkillsGrid = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="relative py-20 px-6 max-w-7xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#F4A24C]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-[#F4A24C] via-orange-400 to-[#F4A24C] bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${activeTab === tab
                  ? "bg-linear-to-r from-[#F4A24C] to-orange-400 text-black shadow-lg shadow-[#F4A24C]/30"
                  : "backdrop-blur-sm bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-[#F4A24C] hover:border-[#F4A24C]/30"
                }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                exit="exit"
                viewport={{ once: false, amount: 0.25 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative p-6 rounded-2xl bg-linear-to-br from-[#F4A24C]/20 to-black backdrop-blur-md border border-[#F4A24C]/30 transition-all duration-500 hover:border-[#F4A24C] hover:shadow-[0_0_25px_rgba(244,162,76,0.4)] cursor-pointer overflow-hidden"
              >
                {/* Icon */}
                <div className="group/icon text-4xl mb-4 text-[#F4A24C] group-hover:text-orange-300 transition-colors duration-300 flex items-center justify-center relative z-10">
                  {skill.icon}

                </div>

                {/* Skill Name */}
                <p className="text-sm font-black mb-4 text-gray-200 group-hover:text-[#F4A24C] transition-colors duration-300 text-center relative z-10">
                  {skill.name}
                </p>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2 relative z-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="h-full bg-linear-to-r from-[#F4A24C] to-orange-400 rounded-full"
                  />
                </div>

                {/* Proficiency Percentage */}
                <p className="text-xs text-gray-400 text-center relative z-10">
                  {skill.level}%
                </p>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;
