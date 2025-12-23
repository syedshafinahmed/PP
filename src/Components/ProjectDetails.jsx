import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
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
      <section className="pt-24 pb-20 bg-base-200 min-h-screen">
        <div className="container mx-auto px-4 text-center text-gray-400">
          Loading project details...
        </div>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="pt-24 pb-20 bg-base-200 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <div className="alert alert-error mb-6 inline-block">{error || "Project not found."}</div>
          <div>
            <button className="btn btn-primary btn-sm" onClick={() => navigate("/")}>
              Back to Projects
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-20 bg-base-200 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <button className="btn btn-ghost btn-sm" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h2 className="text-3xl font-bold text-center flex-1">Project Details</h2>
          <span className="w-[72px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card bg-base-100 shadow-xl"
        >
          <figure className="max-h-[420px] overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full object-cover" />
          </figure>

          <div className="card-body gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="card-title text-2xl">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed text-justify">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
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

            <div className="flex flex-wrap gap-3 mt-2">
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
      </div>
    </section>
  );
};

export default ProjectDetails;

