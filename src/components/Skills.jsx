import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { skillsData } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className={styles.sectionSubText}>Technical Arsenal</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div
            key={category}
            className="glass p-6 sm:p-8 rounded-2xl border border-white/5 relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-3xl group-hover:bg-accent-cyan/10 transition-colors"></div>
            
            <h3 className="text-xl font-bold text-text-primary mb-6 relative z-10">{category}</h3>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 relative z-10">
              {skills.map((skill) => (
                <div 
                  key={skill} 
                  className="bg-surface-300/50 border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-text-secondary text-sm font-medium hover:text-accent-cyan hover:border-accent-cyan/30 transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
