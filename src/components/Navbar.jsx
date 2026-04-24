import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto sm:px-16 px-6">
        <a 
          href="#"
          className="flex items-center gap-3 group" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 rounded-xl gradient-border flex justify-center items-center bg-surface-200 transition-transform group-hover:scale-105">
            <span className="text-text-primary font-bold text-lg">AP</span>
          </div>
          <p className="text-text-primary text-[18px] font-bold cursor-pointer flex">
            Agam Pandey
          </p>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-row items-center gap-10">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-accent-cyan" : "text-text-secondary"
                } hover:text-white text-[15px] font-medium cursor-pointer transition-colors link-underline`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="w-10 h-10 flex flex-col justify-center items-center gap-[6px] rounded-lg glass p-2 z-50 relative"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${toggle ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${toggle ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="p-6 glass-strong absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-2xl shadow-card"
              >
                <ul className="list-none flex justify-end items-start flex-col gap-6">
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`font-medium cursor-pointer text-[16px] w-full ${
                        active === nav.title ? "text-accent-cyan" : "text-text-secondary"
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`} className="block w-full">{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
