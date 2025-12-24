import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { TbBrandGithubFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <div>
      <footer className="w-full border-t border-white/10 bg-base-300/80 backdrop-blur-xl py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
          <nav className="flex flex-wrap justify-center gap-6 text-sm tracking-wide">
            {[
              { label: "About", to: "#about" },
              { label: "Skills", to: "#skills" },
              { label: "Projects", to: "#projects" },
              { label: "Education", to: "#education" },
              { label: "Research", to: "#publications" },
              { label: "Certificates", to: "#certificates" },
              { label: "Hobbies", to: "#hobbies" },
              { label: "Contact", to: "#connect" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.to}
                className="text-[#F4A24C] hover:text-gray-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shafinahmed.cse@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 hover:scale-[1.12]"
            >
              <SiGmail className="text-[#F4A24C]" size={22} />
            </a>
            <a
              href="https://github.com/syedshafinahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 hover:scale-[1.12]"
            >
              <TbBrandGithubFilled className="text-[#F4A24C]" size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/syed-shafin-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 hover:scale-[1.12]"
            >
              <FaLinkedin className="text-[#F4A24C]" size={22} />
            </a>
          </div>

          <p className="text-[#F4A24C]/80 text-sm tracking-wide text-center">
            © {new Date().getFullYear()} <span className="font-semibold">Syed Shafin Ahmed</span> — All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;