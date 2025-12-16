import React from "react";
import { motion } from "framer-motion";
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

const projectsData = [
      {
        id: 1,
        title: "BloodLink",
        description:
          "BloodLink – A technology-driven platform connecting verified blood donors, patients, and hospitals in real-time. Users can post urgent blood requests, respond to nearby needs, search and filter donors efficiently, and track ongoing donations. With secure authentication and a responsive interface, BloodLink ensures faster, safer access to life-saving blood resources and empowers communities to collaborate effectively during critical situations.",
        image: "https://i.ibb.co.com/sphLh31L/bloodlink-ssa-pages-dev-1.png",
        technologies: ["React", "Tailwind CSS", "Firebase", "MongoDB", "NodeJS", "ExpressJS", "Axios"],
        liveDemo: "https://bloodlink-ssa.pages.dev/",
        sourceCode: "https://github.com/syedshafinahmed/BloodLink-Client",
      },
      {
        id: 2,
        title: "Uplyft",
        description:
          "Uplyft – A community-driven event management platform where users can discover, create, and join local social service events such as cleanups, tree plantation drives, and donation programs. The platform features secure authentication, and an intuitive interface for browsing upcoming events. Users can manage the events they create, track the events they’ve joined, and stay engaged in meaningful community activities—all through a modern, responsive single-page application.",
        image: "https://i.ibb.co.com/j9ZTbnLQ/uplyft-syedshafinahmed-netlify-app.png",
        technologies: ["React", "Tailwind CSS", "Firebase", "MongoDB", "NodeJS", "ExpressJS"],
        liveDemo: "https://uplyft.pages.dev/",
        sourceCode: "https://github.com/syedshafinahmed/Uplyft-Client",
      },
      {
        id: 3,
        title: "Artoon",
        description:
          "Artoon – A full - stack platform for art enthusiasts to explore, create, and showcase digital artwork.Users can browse curated galleries, discover trending art, and interact with fellow artists through likes and comments.Artists can upload, organize, and manage their own creations with an intuitive dashboard.The platform features secure authentication, Firebase integration for storage, and real - time data updates.Built with a modern, responsive design, Artoon ensures a seamless and engaging experience across all devices.",
        image: "https://i.ibb.co.com/m5xspzch/artooon-vercel-app.png",
        technologies: ["NextJS", "React", "Tailwind CSS", "Firebase", "MongoDB", "NodeJS", "ExpressJS"],
        liveDemo: "https://artooon.vercel.app/",
        sourceCode: "https://github.com/syedshafinahmed/Artoon-Client",
      },
      {
        id: 4,
        title: "3D Models Hub",
        description:
          "3D Models Hub – A full-stack web application that allows users to explore, upload, update, and download 3D models across various categories such as Vehicles, Characters, Plants, and more. It provides an intuitive, theme-adaptive interface and a personalized experience powered by Firebase authentication and secure server-side APIs.",
        image: "https://i.ibb.co.com/Xfz2124S/3dmodelshub-syedshafinahmed-netlify-app-1.png",
        technologies: ["React", "Tailwind CSS", "Firebase", "MongoDB", "NodeJS", "ExpressJS"],
        liveDemo: "https://3dmodelshub.pages.dev/",
        sourceCode: "https://github.com/syedshafinahmed/3D-Model-Client",
      },
      {
        id: 5,
        title: "Zappify",
        description:
          "Zappify – A modern, responsive web application built with React and Tailwind CSS that brings you a simulated app store experience. Explore top-rated apps, view their stats, install and manage them locally — all within a beautiful and interactive interface.",
        image: "https://i.ibb.co.com/9HJYSxLT/Screenshot-2025-10-30-005614.png",
        technologies: ["React", "Tailwind CSS", "JavaScript", "API Integration"],
        liveDemo: "https://zappify-syedshafinahmed.pages.dev/",
        sourceCode: "https://github.com/syedshafinahmed/Zappify",
      },
      {
        id: 6,
        title: "GreenNest",
        description:
          "GreenNest – An elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season.",
        image: "https://i.ibb.co.com/8GvsvLS/greennest-ssa-web-app-1.png",
        technologies: ["React", "Tailwind CSS", "JavaScript", "Firebase", "API Integration"],
        liveDemo: "https://greennest-syedshafinahmed.pages.dev/",
        sourceCode: "https://github.com/syedshafinahmed/GreenNest",
      },
      {
        id: 7,
        title: "Green Earth",
        description:
          "Green Earth – An online platform showcasing various types of trees where users can explore, purchase plants and eco-friendly products, and make donations to support environmental initiatives. Features include a user-friendly catalog, secure checkout, donation functionality, and a responsive design for all devices.",
        image: "https://i.ibb.co.com/JWTnY2PX/Screenshot-2025-10-30-004218.png",
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "API Integration"],
        liveDemo: "https://greenearth-syedshafinahmed.pages.dev/",
        sourceCode: "https://github.com/syedshafinahmed/Green-Earth",
      },
      {
        id: 8,
        title: "Dragon News",
        description:
          "Dragon News – A dynamic news website built with React and Firebase that delivers real-time news updates. Users can browse news by category, read detailed articles, and interact with comments. Features include user authentication, responsive design for mobile and desktop, and a clean, modern interface inspired by professional news portals.",
        image: "https://i.ibb.co.com/d4ZL5XFw/Screenshot-2025-10-30-003344.png",
        technologies: ["React", "Tailwind CSS", "JavaScript", "Firebase", "API Integration"],
        liveDemo: "https://dragon-news-1004e.web.app/",
        sourceCode: "https://github.com/syedshafinahmed/Dragon-News",
      },
      {
        id: 9,
        title: "English Janala",
        description:
          "English Janala – An educational platform designed to help users improve their English skills. The website provides interactive lessons for grammar and vocabulary. It features a clean, user-friendly interface, progress tracking, and responsive design for learners on any device.",
        image: "https://i.ibb.co.com/27vYXB57/Screenshot-2025-10-30-004909.png",
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "API Integration"],
        liveDemo: "https://english-janala-syedshafinahmed.pages.dev/",
        sourceCode: "https://github.com/syedshafinahmed/English-Janala",
      },
      {
        id: 10,
        title: "Weather App",
        description:
          "Weather App – A responsive web application that provides real-time weather information for any city. Users can view current weather conditions, temperature, humidity, wind speed, hourly forecast, and a 7-day forecast. The app features a clean, user-friendly interface and works seamlessly across desktop and mobile devices.",
        image: "https://i.ibb.co.com/RtkDhDr/Screenshot-2025-10-30-010059.png",
        technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
        liveDemo: "https://weatherapp-syedshafinahmed.pages.dev/",
        sourceCode: "https://github.com/syedshafinahmed/Weather-APP",
      },
    ];

const techIcons = {
  React: <FaReact className="text-cyan-400" size={24} />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" size={24} />,
  Firebase: <SiFirebase className="text-yellow-400" size={24} />,
  JavaScript: <SiJavascript className="text-yellow-400" size={24} />,
  "API Integration": <TbApi className="text-violet-400" size={26} />,
  HTML: <FaHtml5 className="text-orange-500" size={24} />,
  CSS: <FaCss3Alt className="text-blue-500" size={24} />,
  MongoDB: <SiMongodb className="text-green-500" size={24} />,
  ExpressJS: <SiExpress className="text-gray-400" size={24} />,
  NodeJS: <SiNodedotjs className="text-green-400" size={24} />,
  NextJS: <RiNextjsFill className="text-white" size={24} />,
  Axios: <SiAxios className="text-purple-500" size={24} />,
};

const Projects = () => {
  return (
    <section className="pt-16 pb-28 bg-base-200" id="projects">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-0">
          {projectsData.map((project, index) => (
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
                <h3 className="card-title">{project.title}</h3>

                <p className="text-gray-400 text-justify text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-4 text-xl items-center">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tooltip" data-tip={tech}>
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>

                <div className="card-actions justify-between mt-5">
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
      </div>
    </section>
  );
};

export default Projects;
