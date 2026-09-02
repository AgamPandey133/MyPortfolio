import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { styles } from '../styles';

// Custom hook for animated counter
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress / duration, 4);
        setCount(Math.floor(start + (end - start) * easeProgress));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start, inView]);

  return { count, ref };
};

const StatItem = ({ end, suffix = "", prefix = "", label, platform, link, delay = 0 }) => {
  const { count, ref } = useCounter(end, 2000);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:border-accent-cyan/30 hover:bg-white/5 transition-all group border border-white/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-muted text-sm font-medium uppercase tracking-wider mb-2 group-hover:text-text-primary transition-colors">{platform}</div>
      <div className="flex items-baseline gap-1 mb-2" ref={ref}>
        {prefix && <span className="text-2xl font-bold text-accent-violet">{prefix}</span>}
        <span className="stat-value gradient-text">{count}</span>
        {suffix && <span className="text-2xl font-bold text-accent-cyan">{suffix}</span>}
      </div>
      <div className="text-text-secondary font-medium">{label}</div>
    </motion.a>
  );
};

const Achievements = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className={styles.sectionSubText}>Competitive Programming</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatItem 
          end={1459} 
          platform="CodeChef" 
          label="Max Rating" 
          link="https://www.codechef.com/users/agampandey11"
          delay={0.1}
        />
        <StatItem 
          end={1326} 
          platform="Codeforces" 
          label="Max Rating" 
          link="https://codeforces.com/profile/pandeyagam03"
          delay={0.2}
        />
        <StatItem 
          end={700} 
          suffix="+" 
          platform="LeetCode" 
          label="Problems Solved" 
          link="https://leetcode.com/u/Agam_Pandey/"
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default Achievements;
