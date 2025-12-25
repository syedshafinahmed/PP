import React from "react";
import { SiLetterboxd, SiChessdotcom } from "react-icons/si";
import { FaFilm, FaChess, FaExternalLinkAlt } from "react-icons/fa";

const hobbies = [
  {
    name: "Letterboxd",
    icon: <SiLetterboxd size={48} />,
    link: "https://letterboxd.com/_Shafin_Ahmed/",
    description: "I have a deep passion for movies and love exploring cinematic worlds, analyzing stories, and discovering hidden gems.",
    hoverImage: "https://i.ibb.co.com/n8YLnhBB/icons8-letterboxd-96.png",
    tooltip: "Dive into my movie picks",
    color: "hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/30",
    linear: "from-red-500/20 to-pink-500/20",
    iconBg: "bg-red-500/20",
  },
  {
    name: "Chess.com",
    icon: <SiChessdotcom size={48} />,
    link: "https://www.chess.com/member/shafin-ahmed",
    description: "I enjoy playing chess, challenging myself strategically, and learning from every game I play.",
    hoverImage: "https://i.ibb.co.com/kgZ7gC63/icons8-chess-com-96.png",
    tooltip: "Challenge me on the board",
    color: "hover:text-green-500 hover:bg-green-500/10 hover:border-green-500/30",
    linear: "from-green/20 to-cyan-500/20",
    iconBg: "bg-green-500/20",
  },
];

const Hobbies = () => {
  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto" id="hobbies">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#F4A24C]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-[#F4A24C] via-orange-400 to-[#F4A24C] bg-clip-text text-transparent">
            Hobbies & Interests
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond coding, here's what I love to do in my free time
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => (
            <a
              key={index}
              href={hobby.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`group relative flex flex-col p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${hobby.color} overflow-hidden`}
            >
              {/* Tooltip */}
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 w-max px-4 py-2 text-sm bg-black/90 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                {hobby.tooltip}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
              </span>

              {/* Icon Container */}
              <div className="relative mb-6 flex justify-center">
                <div className={`relative w-24 h-24 rounded-2xl ${hobby.iconBg} border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <div className={`relative z-10 text-gray-400 transition-colors duration-300 flex items-center justify-center ${hobby.name === "Letterboxd" ? "group-hover:text-red-500" : "group-hover:text-green-500"}`}>
                    {hobby.icon}
                  </div>
                  <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${hobby.linear} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 flex items-center justify-center gap-2">
                  {hobby.name === "Letterboxd" && (
                    <>
                      <FaFilm size={20} className="group-hover:text-red-500 transition-colors duration-300" />
                      <span className="group-hover:text-red-500 transition-colors duration-300">{hobby.name}</span>
                    </>
                  )}
                  {hobby.name === "Chess.com" && (
                    <>
                      <FaChess size={20} className="group-hover:text-green-500 transition-colors duration-300" />
                      <span className="group-hover:text-green-500 transition-colors duration-300">{hobby.name}</span>
                    </>
                  )}
                  <FaExternalLinkAlt size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${hobby.linear} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent rounded-2xl"></div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${hobby.linear} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
