import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { FaReact, FaCss3Alt, FaHtml5, FaArrowLeft, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiFirebase,
  SiAxios,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";

const techIcons = {
  React: <FaReact className="text-cyan-400" size={22} />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" size={22} />,
  Firebase: <SiFirebase className="text-yellow-400" size={22} />,
  JavaScript: <SiJavascript className="text-yellow-400" size={22} />,
  "API Integration": <TbApi className="text-violet-400" size={24} />,
  HTML: <FaHtml5 className="text-orange-500" size={22} />,
  CSS: <FaCss3Alt className="text-blue-500" size={22} />,
  MongoDB: <SiMongodb className="text-green-500" size={22} />,
  ExpressJS: <SiExpress className="text-gray-400" size={22} />,
  NodeJS: <SiNodedotjs className="text-green-400" size={22} />,
  NextJS: <RiNextjsFill className="text-white" size={22} />,
  Axios: <SiAxios className="text-purple-500" size={22} />,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProject = async () => {
      try {
        const res = await fetch("/projects.json");
        if (!res.ok) {
          throw new Error("Failed to load project.");
        }

        const data = await res.json();
        const selected = data.find((item) => String(item.id) === String(id));
        if (!selected) {
          throw new Error("Project not found.");
        }

        setProject(selected);
      } catch (err) {
        setError(err.message || "Unable to load project.");
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  if (loading) {
    return (
      <section className="relative pt-24 pb-20 min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#F4A24C]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F4A24C]"></div>
          <p className="mt-4 text-gray-400">Loading project details...</p>
        </div>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="relative pt-24 pb-20 min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#F4A24C]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center py-20">
          <div className="backdrop-blur-xl bg-white/5 border border-red-500/30 rounded-2xl p-8 max-w-md mx-auto mb-6">
            <p className="text-red-400 font-semibold">{error || "Project not found."}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-linear-to-r from-[#F4A24C] to-orange-400 text-black font-semibold hover:from-orange-400 hover:to-[#F4A24C] transition-all duration-300"
          >
            Back to Projects
          </motion.button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-40 pb-40 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#F4A24C]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#F4A24C] hover:bg-[#F4A24C]/10 hover:border-[#F4A24C]/30 transition-all duration-300"
          >
            <FaArrowLeft size={16} />
            <span className="font-semibold">Back</span>
          </motion.button>
          <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#F4A24C] via-orange-400 to-[#F4A24C] bg-clip-text text-transparent">
            Project Details
          </h2>
          <span className="w-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
        >
          {/* Project Image */}
          <figure className="relative h-64 md:h-96 overflow-hidden bg-linear-to-br from-[#F4A24C]/10 to-orange-400/10">
            <motion.img
              src={project.image}
              alt={project.title}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          </figure>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Title and Description */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#F4A24C] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <GrTechnology className="text-[#F4A24C]" size={18} />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech) => (
                  <div
                    key={tech}
                    className="group/tech relative inline-flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-[#F4A24C]/10 hover:border-[#F4A24C]/30 transition-all duration-300"
                  >
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 w-max px-3 py-1.5 text-xs bg-black/90 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                      {tech}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                    </span>
                    <span className="text-gray-300 group-hover/tech:text-[#F4A24C] transition-colors duration-300">
                      {techIcons[tech]}
                    </span>
                    <span className="text-sm text-gray-400 group-hover/tech:text-white transition-colors duration-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-[#F4A24C] to-orange-400 text-black font-semibold hover:from-orange-400 hover:to-[#F4A24C] transition-all duration-300"
              >
                <FaExternalLinkAlt size={16} />
                <span>Live Demo</span>
              </motion.a>
              <motion.a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-[#F4A24C] hover:bg-[#F4A24C]/10 hover:border-[#F4A24C]/30 transition-all duration-300 font-semibold"
              >
                <FaCode size={16} />
                <span>Source Code</span>
              </motion.a>
            </div>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;

