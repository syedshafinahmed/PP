import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed w-full z-50">
      <div className="bg-base-100/10 backdrop-blur-lg border-b border-white/10 shadow-sm py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="dropdown relative lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100/80 backdrop-blur-md rounded-box mt-3 w-52 p-2 shadow">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#publications">Research</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
                <li><a href="#connect">Contact</a></li>
              </ul>
            </div>

            <a href="#" className="text-lg font-semibold tracking-tight md:text-2xl md:font-black text-orange-300">
              Syed Shafin Ahmed
            </a>
          </div>

          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#publications">Research</a></li>
              <li><a href="#hobbies">Hobbies</a></li>
              <li><a href="#connect">Contact</a></li>
            </ul>
          </div>

          <div className="flex items-center">
            <label className="toggle text-base-content">
              <input type="checkbox" value="synthwave" className="theme-controller" />
              <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>
              <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
