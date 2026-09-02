import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ index, name, description, tags, source_code_link, deploy_link }) => {
  return (
    <motion.div 
      className='glass project-card rounded-2xl w-full flex flex-col h-full border border-white/5'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className='p-6 flex flex-col h-full'>
        {/* Header: Title and Links */}
        <div className='flex justify-between items-start mb-4'>
          <h3 className='text-text-primary font-bold text-[22px]'>{name}</h3>
          <div className='flex gap-3'>
            {source_code_link && (
              <a 
                href={source_code_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-accent-cyan transition-colors"
                aria-label="GitHub Repository"
              >
                <FaGithub size={20} />
              </a>
            )}
            {deploy_link && (
              <a 
                href={deploy_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-accent-violet transition-colors"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className='text-muted text-[15px] leading-relaxed mb-6 flex-grow'>
          {description}
        </p>

        {/* Tags */}
        <div className='mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-x-4 gap-y-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[13px] font-medium ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="projects" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <div className='w-full flex mb-12'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mt-4 text-text-secondary text-[16px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my ability to build complex systems across different stacks—from full-stack web platforms and real-time communication systems to AI-powered utilities.
        </motion.p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
