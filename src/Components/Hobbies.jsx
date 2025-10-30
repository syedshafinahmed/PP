import React from "react";
import { SiLetterboxd, SiChessdotcom } from "react-icons/si";

const hobbies = [
  {
    name: "Letterboxd",
    icon: <SiLetterboxd />,
    link: "https://letterboxd.com/_Shafin_Ahmed/",
    description: "I have a deep passion for movies and love exploring cinematic worlds, analyzing stories, and discovering hidden gems.",
    hoverImage: "https://i.ibb.co.com/n8YLnhBB/icons8-letterboxd-96.png",
    tooltip: "Dive into my movie picks",
  },
  {
    name: "Chess.com",
    icon: <SiChessdotcom />,
    link: "https://www.chess.com/member/shafin-ahmed",
    description: "I enjoy playing chess, challenging myself strategically, and learning from every game I play.",
    hoverImage: "https://i.ibb.co.com/kgZ7gC63/icons8-chess-com-96.png",
    tooltip: "Challenge me on the board",
  },
];

const Hobbies = () => {
  return (
    <section className="py-40 bg-base-200" id="hobbies">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Hobbies</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {hobbies.map((hobby, index) => (
            <a
              key={index}
              href={hobby.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
              className="group relative flex flex-col items-center gap-3 p-6 rounded-xl backdrop-blur-md bg-white/10 dark:bg-white/5 shadow-md text-gray-400
                         hover:border-orange-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] hover:text-orange-300
                         transition-all duration-300 cursor-pointer max-w-xs text-center"
            >
              <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max px-3 py-1 text-sm bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {hobby.tooltip}
              </span>

              <div className="relative w-16">
                <div className="flex items-center justify-center w-full h-full text-6xl transition-all duration-300 group-hover:hidden">
                  {hobby.icon}
                </div>
                <img
                  src={hobby.hoverImage}
                  alt={hobby.name}
                  className="w-full h-full object-cover rounded-full hidden transition-all duration-300 group-hover:block"
                />
              </div>

              <p className="text-lg font-medium mt-3">{hobby.name}</p>
              <p className="text-gray-400 text-sm">{hobby.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
