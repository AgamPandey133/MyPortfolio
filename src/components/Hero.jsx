import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const TypewriterText = ({ texts }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length <= 1) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, 50); // Delete speed
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before delete
        }
      }, 100); // Type speed
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <span className="gradient-text font-semibold inline-block min-w-[20px]">
      {displayText}
      <span className="animate-pulse text-accent-cyan ml-1">|</span>
    </span>
  );
};

const Hero = () => {
  const roles = ["Frontend Developer", "Full-Stack Engineer", "Problem Solver"];

  return (
    <section className="relative w-full min-h-[90vh] mx-auto flex items-center pt-24">
      <div className="absolute inset-0 bg-hero-glow z-[-1] pointer-events-none"></div>
      
      <div className={`${styles.paddingX} max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10`}>
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start z-10 animate-fade-in">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent-cyan font-medium tracking-wide mb-2">Hello, world! I am</p>
            <h1 className={styles.heroHeadText}>
              Agam Pandey
            </h1>
            <h2 className={`${styles.heroSubText} mt-4`}>
              I'm a <TypewriterText texts={roles} />
            </h2>
            <p className="mt-6 text-muted max-w-lg leading-relaxed text-[16px] sm:text-[18px]">
              Building production-grade web and Android applications. Transforming complex problems into elegant, accessible, and performant solutions.
            </p>
          </motion.div>

          <motion.div 
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Profile Picture Area */}
        <motion.div 
          className="flex-1 flex justify-center md:justify-end animate-fade-in"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
            {/* Outer glowing rings */}
            <div className="absolute inset-0 rounded-full border border-white/10 shadow-[0_0_40px_rgba(124,58,237,0.15)] group-hover:shadow-[0_0_60px_rgba(0,212,255,0.2)] transition-shadow duration-500"></div>
            <div className="absolute inset-4 rounded-full border border-white/5 border-t-accent-cyan/40 border-r-accent-violet/40 animate-[spin_10s_linear_infinite]"></div>
            
            {/* The Image / Placeholder */}
            <div className="absolute inset-8 rounded-full bg-surface-200 overflow-hidden flex justify-center items-center gradient-border shadow-inner">
              {/* If you add a profile image in assets, import and use it here instead of the div below */}
              {/* <img src={profileImg} alt="Agam Pandey" className="w-full h-full object-cover" /> */}
              
              <div className="text-center">
                <span className="text-5xl font-black text-white/10 select-none">AP</span>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute bottom-10 right-0 glass px-4 py-2 rounded-full border border-white/10 shadow-lg translate-x-4">
              <span className="text-sm font-medium text-text-primary">🎓 IIIT Una</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-10 hidden sm:flex">
        <a href="#about" aria-label="Scroll down">
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-muted/50 flex justify-center items-start p-2 transition-colors hover:border-accent-cyan/50">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-muted mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
