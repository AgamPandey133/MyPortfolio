import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { experience } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className={styles.sectionSubText}>My Professional Journey</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-8">
        {experience.map((exp, index) => (
          <motion.div 
            key={index}
            className="glass-strong p-8 rounded-2xl border-l-4 border-l-accent-violet hover:border-l-accent-cyan transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-text-primary">{exp.title}</h3>
                <p className="text-accent-cyan text-lg font-medium mt-1">{exp.company_name}</p>
              </div>
              <span className="bg-surface-300 text-text-secondary text-sm px-4 py-1.5 rounded-full border border-white/5">
                {exp.date}
              </span>
            </div>

            <ul className="list-disc list-outside ml-5 space-y-3 text-muted text-[15px] leading-relaxed">
              {exp.points.map((point, i) => (
                <li key={i} className="pl-1">
                  {/* Process bold text from resume formatting if needed, but here we just render the point */}
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {exp.badges.map((badge, i) => (
                <span key={i} className="skill-badge">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
