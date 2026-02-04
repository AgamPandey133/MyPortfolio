import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants';

const ProjectCard = ({ index, name, description, tags, source_code_link, deploy_link }) => {
  return (
    <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-[#7042f8] shadow-card relative z-[1]'>
      <div className='relative w-full h-[230px] bg-black-200 rounded-2xl overflow-hidden flex justify-center items-center group'>
          <h3 className="text-2xl font-bold text-gray-500 group-hover:text-white transition-colors">{name}</h3>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center gap-4">
              <a href={source_code_link} target="_blank" className="bg-black rounded-full p-2 text-white text-xs hover:bg-gray-800">GitHub</a>
              {deploy_link && <a href={deploy_link} target="_blank" className="bg-[#00C6FF] rounded-full p-2 text-black text-xs hover:bg-[#009bc5]">Demo</a>}
          </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section id="projects" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
