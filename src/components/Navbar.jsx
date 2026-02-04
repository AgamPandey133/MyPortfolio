import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
// import { navLinks } from '../constants'; 
// import { logo, menu, close } from '../assets'; 


import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="flex items-center gap-2" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Logo Placeholder */}
          <div className="w-9 h-9 bg-white rounded-full flex justify-center items-center text-primary font-bold">A</div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Agam Pandey &nbsp; 
            <span className="sm:block hidden">| IT Student</span>
          </p>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-row items-center gap-10">
            <ul className="list-none flex flex-row gap-10">
                <li
                className={`${
                    active === "About" // Placeholder
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive("About")}
                >
                <a href="#about">About</a>
                </li>
                <li
                className={`${
                    active === "Projects" 
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive("Projects")}
                >
                <a href="#projects">Projects</a>
                </li>
                <li
                className={`${
                    active === "Contact" 
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive("Contact")}
                >
                <a href="#contact">Contact</a>
                </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-4">
                <a href="https://github.com/AgamPandey133" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00C6FF]">
                    <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/agam-pandey03" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00C6FF]">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </div>

        {/* Mobile Navigation Placeholder (Toggle logic needed) */}
        {/* For now keeping it simple */}
      </div>
    </nav>
  );
};

export default Navbar;
