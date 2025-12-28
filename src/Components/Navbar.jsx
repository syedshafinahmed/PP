import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'About', href: '#', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Research', href: '#publications', id: 'publications' },
  { label: 'Certificates', href: '#certificates', id: 'certificates' },
  { label: 'Hobbies', href: '#hobbies', id: 'hobbies' },
  { label: 'Contact', href: '#connect', id: 'connect' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      if (window.scrollY < 100) {
        setActiveSection('about');
        return;
      }

      const scrollPosition = window.scrollY + 150;
      let currentSection = 'about';

      navLinks.forEach(link => {
        if (link.href !== '#') {
          const section = document.querySelector(link.href);
          if (section && section.offsetTop <= scrollPosition) {
            currentSection = link.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-base-100/80 backdrop-blur-xl border-b border-white/20 shadow-lg'
          : 'bg-base-100/10 backdrop-blur-lg border-b border-white/10'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <motion.a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-xl md:text-2xl lg:text-3xl font-black bg-linear-to-r from-[#F4A24C] via-orange-400 to-[#F4A24C] bg-clip-text text-transparent tracking-tight cursor-pointer"
          >
            Syed Shafin Ahmed
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${activeSection === link.id
                    ? 'text-[#F4A24C]'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-[#F4A24C]/10 rounded-lg border border-[#F4A24C]/20"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#F4A24C] to-orange-400 transition-all duration-300 hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-[#F4A24C] hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX size={24} />
            ) : (
              <HiMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden backdrop-blur-xl bg-base-100/90 border-t border-white/10"
          >
            <motion.ul
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="px-4 py-4 space-y-2"
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${activeSection === link.id
                        ? 'text-[#F4A24C] bg-[#F4A24C]/10 border border-[#F4A24C]/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
