import React from "react";
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


const projectsData = [
  {
    id: 1,
    title: "Uplyft",
    description:
      "Uplyft – A community-driven event management platform where users can discover, create, and join local social service events such as cleanups, tree plantation drives, and donation programs. The platform features secure authentication, and an intuitive interface for browsing upcoming events. Users can manage the events they create, track the events they’ve joined, and stay engaged in meaningful community activities—all through a modern, responsive single-page application.",
    image: "https://i.ibb.co.com/j9ZTbnLQ/uplyft-syedshafinahmed-netlify-app.png",
    technologies: ["React", "Tailwind CSS", "Firebase", "MongoDB", "NodeJS", "ExpressJS"],
    liveDemo: "https://uplyft.pages.dev/",
    sourceCode: "https://github.com/syedshafinahmed/Uplyft-Client",
  },
  {
    id: 2,
    title: "Artoon",
    description:
      "Artoon – A full - stack platform for art enthusiasts to explore, create, and showcase digital artwork.Users can browse curated galleries, discover trending art, and interact with fellow artists through likes and comments.Artists can upload, organize, and manage their own creations with an intuitive dashboard.The platform features secure authentication, Firebase integration for storage, and real - time data updates.Built with a modern, responsive design, Artoon ensures a seamless and engaging experience across all devices.",
    image: "https://i.ibb.co.com/m5xspzch/artooon-vercel-app.png",
    technologies: ["NextJS", "React", "Tailwind CSS", "Firebase", "MongoDB", "NodeJS", "ExpressJS"],
    liveDemo: "https://artooon.vercel.app/",
    sourceCode: "https://github.com/syedshafinahmed/Artoon-Client",
  },
  {
    id: 3,
    title: "Artoon",
    description:
      "3D Models Hub – A full-stack web application that allows users to explore, upload, update, and download 3D models across various categories such as Vehicles, Characters, Plants, and more. It provides an intuitive, theme-adaptive interface and a personalized experience powered by Firebase authentication and secure server-side APIs.",
    image: "https://i.ibb.co.com/Xfz2124S/3dmodelshub-syedshafinahmed-netlify-app-1.png",
    technologies: ["React", "Tailwind CSS", "Firebase", "MongoDB", "NodeJS", "ExpressJS"],
    liveDemo: "https://3dmodelshub.pages.dev/",
    sourceCode: "https://github.com/syedshafinahmed/3D-Model-Client",
  },
  {
    id: 4,
    title: "Zappify",
    description:
      "Zappify – A modern, responsive web application built with React and Tailwind CSS that brings you a simulated app store experience. Explore top-rated apps, view their stats, install and manage them locally — all within a beautiful and interactive interface.",
    image: "https://i.ibb.co.com/9HJYSxLT/Screenshot-2025-10-30-005614.png",
    technologies: ["React", "Tailwind CSS", "JavaScript", "API Integration"],
    liveDemo: "https://zappify-syedshafinahmed.pages.dev/",
    sourceCode: "https://github.com/syedshafinahmed/Zappify",
  },
  {
    id: 5,
    title: "GreenNest",
    description:
      "GreenNest – An elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season.",
    image: "https://i.ibb.co.com/mr8TZ2GV/Screenshot-2025-10-30-003043.png",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Firebase", "API Integration"],
    liveDemo: "https://greennest-syedshafinahmed.pages.dev/",
    sourceCode: "https://github.com/syedshafinahmed/GreenNest",
  },
  {
    id: 6,
    title: "Green Earth",
    description:
      "Green Earth – An online platform showcasing various types of trees where users can explore, purchase plants and eco-friendly products, and make donations to support environmental initiatives. Features include a user-friendly catalog, secure checkout, donation functionality, and a responsive design for all devices.",
    image: "https://i.ibb.co.com/JWTnY2PX/Screenshot-2025-10-30-004218.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "API Integration"],
    liveDemo: "https://greenearth-syedshafinahmed.pages.dev/",
    sourceCode: "https://github.com/syedshafinahmed/Green-Earth",
  },
  {
    id: 7,
    title: "Dragon News",
    description:
      "Dragon News – A dynamic news website built with React and Firebase that delivers real-time news updates. Users can browse news by category, read detailed articles, and interact with comments. Features include user authentication, responsive design for mobile and desktop, and a clean, modern interface inspired by professional news portals.",
    image: "https://i.ibb.co.com/d4ZL5XFw/Screenshot-2025-10-30-003344.png",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Firebase", "API Integration"],
    liveDemo: "https://dragon-news-1004e.web.app/",
    sourceCode: "https://github.com/syedshafinahmed/Dragon-News",
  },
  {
    id: 8,
    title: "English Janala",
    description:
      "English Janala – An educational platform designed to help users improve their English skills. The website provides interactive lessons for grammar and vocabulary. It features a clean, user-friendly interface, progress tracking, and responsive design for learners on any device.",
    image: "https://i.ibb.co.com/27vYXB57/Screenshot-2025-10-30-004909.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "API Integration"],
    liveDemo: "https://english-janala-syedshafinahmed.pages.dev/",
    sourceCode: "https://github.com/syedshafinahmed/English-Janala",
  },
  {
    id: 9,
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
  React: <FaReact className="text-cyan-400" size={25} title="React" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" size={25} title="Tailwind CSS" />,
  Firebase: <SiFirebase className="text-yellow-400" size={25} title="Firebase" />,
  JavaScript: <SiJavascript className="text-yellow-400" size={25} title="JavaScript" />,
  "API Integration": <TbApi className="text-violet-400" size={30} title="API Integration" />,
  HTML: <FaHtml5 className="text-orange-500" size={25} title="HTML5" />,
  CSS: <FaCss3Alt className="text-blue-500" size={25} title="CSS3" />,
  MongoDB: <SiMongodb className="text-[#238a23]" size={25} title="MongoDB" />,
  ExpressJS: <SiExpress className="text-gray-400" size={25} title="ExpressJS" />,
  NodeJS: <SiNodedotjs className="text-[#85d31f]" size={25} title="NodeJS" />,
  NextJS: <RiNextjsFill className="text-white" size={25} title="NextJS" />,

};

const Projects = () => {
  return (
    <section className="py-12 bg-base-200" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center py-20">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              data-aos="fade-right"
              className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]"
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="text-gray-400 text-justify">{project.description}</p>
                <div className="flex flex-wrap gap-3 mt-3 text-2xl items-center">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tooltip" data-tip={tech}>
                      {techIcons[tech] || tech}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-between mt-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
