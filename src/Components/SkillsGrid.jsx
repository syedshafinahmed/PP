import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiFirebase, SiMysql, SiFigma, SiLinux, SiNetlify, SiCloudflare } from "react-icons/si";
import { DiPython, DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "C", icon: <i className="fa-solid fa-c"></i> },
  { name: "Python", icon: <DiPython /> },
  { name: "Java", icon: <DiJava /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
  { name: "VS Code", icon: <VscVscode /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Cloudflare", icon: <SiCloudflare /> },
  { name: "Figma", icon: <SiFigma /> },
];

const SkillsGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-30 pt-10" id="skills">
      <h2 className="text-4xl font-semibold text-center pt-20 pb-20">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 60}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl backdrop-blur-md bg-white/10 dark:bg-white/5 shadow-md text-gray-400
            hover:border-orange-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] hover:text-orange-300
            transition-all duration-300 cursor-pointer"
          >
            <div className="text-4xl transition-transform duration-300 hover:scale-125 animate-pulse">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
