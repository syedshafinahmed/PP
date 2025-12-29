import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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


const cardVariant = (reduceMotion) => ({
  hidden: {
    opacity: 0,
    x: reduceMotion ? 0 : -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: reduceMotion ? 0.2 : 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});


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
  const reduceMotion = useReducedMotion();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch("/projects.json");
        if (!res.ok) throw new Error("Failed to load projects.");
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
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-[#F4A24C] via-orange-400 to-[#F4A24C] bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my latest work and creative solutions
          </p>
        </div>

        {loading ? (
          <div className="text-center text-gray-400 py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F4A24C]" />
            <p className="mt-4">Loading projects...</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariant(reduceMotion)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.08 }}
                  whileHover={reduceMotion ? {} : { y: -8 }}
                  className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      whileHover={reduceMotion ? {} : { scale: 1.1 }}
                      transition={{ duration: reduceMotion ? 0 : 0.5 }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">
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

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Icons (NO animation) */}
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
                    </div>

                    {/* Actions */}
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

                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
                </motion.div>
              ))}
            </div>

            {projects.length > 3 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => navigate("/all-projects")}
                  className="px-8 py-3 rounded-xl bg-linear-to-r from-[#F4A24C] to-orange-400 text-black font-semibold"
                >
                  View All Projects
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;





