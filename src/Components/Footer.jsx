import React from 'react';
import { FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { TbBrandGithubFilled } from 'react-icons/tb';

const Footer = () => {

  const socialLinks = [
    {
      name: "Gmail",
      icon: <SiGmail size={22} />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=shafinahmed.cse@gmail.com",
      color: "hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/30",
    },
    {
      name: "GitHub",
      icon: <TbBrandGithubFilled size={22} />,
      href: "https://github.com/syedshafinahmed",
      color: "hover:text-gray-300 hover:bg-gray-300/10 hover:border-gray-300/30",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      href: "https://www.linkedin.com/in/syed-shafin-ahmed/",
      color: "hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/30",
    },
  ];

  const navLinks = [
    { label: "About", to: "#about" },
    { label: "Skills", to: "#skills" },
    { label: "Projects", to: "#projects" },
    { label: "Education", to: "#education" },
    { label: "Research", to: "#publications" },
    { label: "Certificates", to: "#certificates" },
    { label: "Hobbies", to: "#hobbies" },
    { label: "Contact", to: "#connect" },
  ];

  return (
    <footer className="relative w-full border-t border-white/10 bg-linear-to-b from-base-300/90 to-base-300/80 backdrop-blur-xl overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-12 px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-10 mb-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm tracking-wide">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.to}
                className="group relative px-3 py-2 text-[#F4A24C] hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#F4A24C] to-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-14 h-14 flex items-center justify-center rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-[#F4A24C] transition-all duration-300 hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs whitespace-nowrap bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white pointer-events-none z-30">
                  {social.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </span>
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex items-center justify-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm tracking-wide text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-[#F4A24C] font-semibold">Syed Shafin Ahmed</span> — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;