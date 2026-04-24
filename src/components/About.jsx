import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { education, codingProfiles } from '../constants';

const About = () => {
  return (
    <section id="about" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 mt-8">
        {/* Left Column: Summary & Stats */}
        <div className="flex-1">
          <motion.p
            className='text-text-secondary text-[16px] sm:text-[18px] leading-[30px] mb-10'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I am an IT student at IIIT Una with a strong foundation in Android and Web Development. 
            I specialize in building production-grade applications that solve real-world problems. 
            With expertise in <span className="text-text-primary font-medium">Kotlin, React, Node.js, and Modern Web Technologies</span>, I bridge the gap between complex backend logic and intuitive frontend design.
            I am a quick learner, always exploring new frameworks and tools to optimize performance and user experience.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-accent-cyan font-bold text-4xl mb-2">8+</h3>
              <p className="text-text-secondary text-sm font-medium">Production UI elements adopted across 3 products</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-accent-violet font-bold text-4xl mb-2">35%</h3>
              <p className="text-text-secondary text-sm font-medium">Reduction in frontend sprint effort via Storybook docs</p>
            </div>
          </div>

          {/* Coding Profiles Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            {codingProfiles.map((profile, i) => (
              <motion.a 
                key={profile.name} 
                href={profile.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-surface-200 border border-white/10 px-4 py-3 rounded-xl hover:border-accent-cyan/50 hover:bg-white/5 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1">
                  <img src={profile.icon} alt={profile.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{profile.name}</p>
                  <p className="text-muted text-xs">{profile.stat}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="flex-1 lg:pl-10">
          <h3 className="text-2xl font-bold text-text-primary mb-8">Education</h3>
          <div className="relative pl-6 border-l border-white/10 space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
                <div className="glass p-5 rounded-xl hover:border-accent-cyan/30 transition-colors">
                  <h4 className="text-text-primary font-semibold text-[18px]">{edu.title}</h4>
                  <p className="text-accent-violet text-[14px] font-medium mt-1">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 mb-3">
                    <span className="text-muted text-[13px] bg-surface-300 px-2 py-0.5 rounded">{edu.year}</span>
                    <span className="text-text-secondary text-[13px] font-medium">{edu.grade}</span>
                  </div>
                  <p className="text-muted text-[14px] leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
