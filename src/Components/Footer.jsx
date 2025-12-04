import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { TbBrandGithubFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center border-t border-white/10 bg-base-300 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a href="#" className="link link-hover text-[#F4A24C]">About Me</a>
          <a href="#skills" className="link link-hover text-[#F4A24C]">Skills</a>
          <a href="#projects" className="link link-hover text-[#F4A24C]">Projects</a>
          <a href="#education" className="link link-hover text-[#F4A24C]">Education</a>
          <a href="#publications" className="link link-hover text-[#F4A24C]">Research</a>
          <a href="#hobbies" className="link link-hover text-[#F4A24C]">Hobbies</a>
          <a href="#connect" className="link link-hover text-[#F4A24C]">Contact</a>
        </nav>

        <nav>
          <div className="grid grid-flow-col gap-6">
            <a
              href="https://github.com/syedshafinahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#F4A24C] transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,1)]"
            >
              <TbBrandGithubFilled size={25} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shafinahmed.cse@gmail.com&su=Hello%20Shafin&body=I%20wanted%20to%20reach%20out%20regarding..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#F4A24C] transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,1)]"
            >
              <SiGmail size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/syed-shafin-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#F4A24C] transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,1)]"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
        </nav>
        <aside>
          <p className='text-[#F4A24C]'>Copyright © {new Date().getFullYear()} - All right reserved by <strong>Syed Shafin Ahmed</strong></p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;