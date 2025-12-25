import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaHtml5, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
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
import { Link, useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

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

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch("/projects.json");
        if (!res.ok) {
          throw new Error("Failed to load projects.");
        }

        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message || "Unable to load projects.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const displayedProjects = projects.slice(0, 3);

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto" id="projects">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#F4A24C]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-[#F4A24C] via-orange-400 to-[#F4A24C] bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my latest work and creative solutions
          </p>
        </motion.div>

        {error && (
          <div className="alert alert-error mb-8 max-w-2xl mx-auto">
            <span>{error}</span>
          </div>
        )}

        {loading ? (
          <div className="text-center text-gray-400 py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F4A24C]"></div>
            <p className="mt-4">Loading projects...</p>
          </div>
        ) : (
          <>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl transition-all duration-500 hover:border-[#F4A24C]/30 overflow-hidden"
                >
                  {/* Image Container with proper border radius */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <figure className="w-full h-full bg-linear-to-br from-[#F4A24C]/10 to-orange-400/10">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </figure>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#F4A24C] transition-colors duration-300 flex-1">
                        {project.title}
                      </h3>
                      <Link
                        to={`/projects/${project.id}`}
                        className="group/link relative w-8 h-8 flex items-center justify-center rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 text-gray-400 hover:text-[#F4A24C] hover:bg-[#F4A24C]/10 hover:border-[#F4A24C]/30 transition-all duration-300 hover:scale-110"
                        aria-label="View details"
                      >
                        <MdArrowOutward size={18} />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-max px-3 py-1 text-xs bg-black/90 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                          Details
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                        </span>
                      </Link>
                    </div>

                    <p
                      className="text-gray-400 text-sm mb-4 line-clamp-2"
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies?.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="group/tech relative inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#F4A24C] hover:border-[#F4A24C]/30 transition-all duration-300"
                        >
                          {techIcons[tech]}
                          <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-max px-2 py-1 text-xs bg-black/90 backdrop-blur-sm rounded-md text-white opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                            {tech}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-black/90"></div>
                          </span>
                        </span>
                      ))}
                      {project.technologies?.length > 4 && (
                        <span className="inline-flex items-center justify-center px-2 h-8 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-row justify-between gap-4 pt-4">
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 btn rounded-xl bg-linear-to-r from-[#F4A24C] to-orange-400 text-black font-semibold hover:from-orange-400 hover:to-[#F4A24C] transition-all duration-300"
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
                        className="flex items-center gap-2 btn rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-[#F4A24C] hover:bg-[#F4A24C]/10 hover:border-[#F4A24C]/30 transition-all duration-300 font-semibold"
                      >
                        <FaCode size={16} />
                        <span>Source Code</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>

            {!loading && !error && projects.length > 3 && (
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button
                  onClick={() => navigate("/all-projects")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-linear-to-r from-[#F4A24C] to-orange-400 text-black font-semibold hover:from-orange-400 hover:to-[#F4A24C] transition-all duration-300"
                >
                  View All Projects
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;