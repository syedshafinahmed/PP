import React from 'react';
import me from '../assets/me.jpg';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { TypeAnimation } from 'react-type-animation';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-base-200 pt-15'>
      <div className='max-w-7xl mx-auto'>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={me} data-aos="fade-left" className="max-w-sm mb-7 md:mb-0 rounded-full shadow-2xl" />
            <div data-aos="fade-right">
              <div className="text-center md:text-left font-bold">
                <h1 className="text-3xl md:text-5xl">
                  <span className="text-gray-400">Syed Shafin Ahmed</span>
                </h1>
                <div className="h-6 text-2xl mt-4 flex justify-center md:justify-start items-center">
                  <TypeAnimation
                    className="text-2xl"
                    sequence={[
                      'Frontend Developer',
                      1500,
                      'React Developer',
                      1500,
                      'MERN Stack Developer',
                      1500,
                    ]}
                    speed={70}
                    repeat={Infinity}
                    cursor={false}
                  />
                </div>
              </div>


              <p className="text-sm md:text-lg py-6 px-10 md:px-0 text-center md:text-left text-gray-400">
                An aspiring Full-Stack Developer with a strong foundation in frontend development and a growing focus on backend architecture and APIs.
              </p>

              <div className="flex justify-center items-center md:justify-start gap-5 mb-10 md:mb-0">
                <a href='/Syed Shafin Ahmed.pdf' download className='btn text-black border-none bg-[#F4A24C] btn-sm'>Download Resume</a>
                <a
                  href="https://github.com/syedshafinahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-[#F4A24C] hover:text-[#F4A24C] transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,1)]"
                >
                  <FaGithubSquare size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/syed-shafin-ahmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-[#F4A24C] hover:text-[#F4A24C] transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,1)]"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
