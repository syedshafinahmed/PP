import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
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

const cardVariant = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
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
    <section className="pt-20 pb-28 bg-base-200" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-20"
        >
          My Projects
        </motion.h2>

        {error && (
          <div className="alert alert-error mb-8">
            <span>{error}</span>
          </div>
        )}

        {loading ? (
          <div className="text-center text-gray-400">Loading projects...</div>
        ) : (
          <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-0">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card card-compact bg-base-100 shadow-xl hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]"
            >
              <figure className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="card-title">{project.title}</h3>
                  <Link
                    to={`/projects/${project.id}`}
                    className="btn btn-ghost btn-xs btn-circle tooltip"
                    data-tip="View Details"
                    aria-label="View details"
                  >
                    <MdArrowOutward size={16} />
                  </Link>
                </div>

                <p
                  className="text-gray-400 text-justify text-sm"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 items-center mt-4">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="tooltip"
                      data-tip={tech}
                      aria-label={tech}
                    >
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>

                <div className="card-actions justify-between items-center gap-3 mt-5 flex-wrap">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-soft btn-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!loading && !error && projects.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/all-projects")}
              className="btn text-black rounded-sm border-none bg-[#F4A24C] btn-md px-6 py-2 hover:bg-[#F4A24C]/90 transition-all duration-300 hover:scale-105"
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
