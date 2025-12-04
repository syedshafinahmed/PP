import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed w-full z-50">
      <div className="bg-base-100/10 backdrop-blur-lg border-b border-white/10 shadow-sm py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="dropdown relative lg:hidden order-1">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>

            <ul tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100/80 backdrop-blur-md rounded-box mt-3 w-52 p-2 shadow font-bold">
              <li><a href="#">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#publications">Research</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#hobbies">Hobbies</a></li>
              <li><a href="#connect">Contact</a></li>
            </ul>
          </div>

          <div className="text-lg font-semibold tracking-tight md:text-3xl md:font-black text-orange-300 order-2 w-full text-right lg:order-none lg:w-auto lg:text-left">
            Syed Shafin Ahmed
          </div>

          <div className="hidden lg:flex w-auto justify-end">
            <ul className="menu menu-horizontal px-1 font-bold">
              <li><a href="#">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#publications">Research</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#hobbies">Hobbies</a></li>
              <li><a href="#connect">Contact</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
