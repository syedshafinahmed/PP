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
  show: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
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
    <section id="skills" className="pt-24 pb-32">
      <h2 className="text-4xl font-bold text-center mb-16">
        Skills & Expertise
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeTab === tab
                ? "bg-orange-400 text-black"
                : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-orange-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab} 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-6"
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
              whileHover={{ y: -10 }}
              className="group p-6 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-white/5
                border border-white/10 shadow-sm
                hover:shadow-[0_0_30px_rgba(255,165,0,0.45)]
                transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl text-gray-400 group-hover:text-orange-300 mb-4">
                {skill.icon}
              </div>

              <p className="text-sm font-medium text-gray-300 group-hover:text-orange-300 mb-3">
                {skill.name}
              </p>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-orange-400"
                />
              </div>

              <p className="text-xs text-gray-400 mt-2">
                Proficiency: {skill.level}%
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default SkillsGrid;
