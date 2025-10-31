import React from 'react';
import me from '../assets/me.jpg';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='bg-base-200 pt-15'>
      <div className='max-w-7xl mx-auto'>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={me} data-aos="fade-left" className="max-w-sm mb-7 md:mb-0 rounded-full shadow-2xl" />
            <div data-aos="fade-right">
              <h1 className="text-3xl md:text-5xl text-center md:text-left font-bold"><span className='text-gray-400'>Hi, This is </span> <TypeAnimation sequence={['Syed Shafin Ahmed', 1500, '', 500,]} speed={70} repeat={Infinity} cursor={false} /></h1>
              <p className="text-sm md:text-lg py-6 px-10 md:px-0 text-center md:text-left text-gray-400">
                An aspiring developer with a strong foundation in frontend development and a growing focus on backend architecture and APIs.
              </p>

              <div className="flex justify-center items-center md:justify-start gap-5 mb-10 md:mb-0">
                <a
                  href="https://github.com/syedshafinahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-orange-300 transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,1)]"
                >
                  <FiGithub size={25} />
                </a>
                <a
                  href="https://www.linkedin.com/in/syed-shafin-ahmed-760533351/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-orange-300 transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,1)]"
                >
                  <SlSocialLinkedin size={25} />
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
