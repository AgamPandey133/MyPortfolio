import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services, education, technologies, codingProfiles } from '../constants';

// Compact Service Card Component
const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[150px] w-[45%] p-[1px] rounded-[20px] shadow-card bg-gradient-to-t from-[#00C6FF] to-[#7042f8]'>
    <div
      options={{
        max: 45, scale: 1, speed: 450,
      }}
      className='bg-tertiary rounded-[20px] py-5 px-4 min-h-[150px] flex justify-evenly items-center flex-col'
    >
      <h3 className='text-white text-[16px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        I am an IT student at IIIT Una with a strong foundation in Android and Web Development. 
        I specialize in building production-grade applications that solve real-world problems. 
        With expertise in **Kotlin, React, Node.js, and Modern Web Technologies**, I bridge the gap between complex backend logic and intuitive frontend design.
        I am a quick learner, always exploring new frameworks and tools to optimize performance and user experience.
      </motion.p>

      {/* Coding Profiles Section on Top for visibility */}
      <div className='mt-10 flex gap-5 flex-wrap'>
          {codingProfiles.map((profile) => (
              <a 
                key={profile.name} 
                href={profile.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black-200 px-4 py-2 rounded-lg border border-[#00C6FF] text-white hover:bg-[#00C6FF] hover:text-black transition-all"
              >
                  <img src={profile.icon} alt={profile.name} className="w-6 h-6 object-contain" />
                  <span className="font-bold">{profile.name}</span>
              </a>
          ))}
      </div>

      <div className='mt-10 flex flex-wrap gap-5 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className='mt-20'>
         <h3 className={`${styles.sectionHeadText} text-center`}>Education.</h3>
         <div className='mt-10 flex flex-col gap-5'>
            {education.map((edu, index) => (
                <div key={index} className="bg-tertiary p-5 rounded-2xl border-l-4 border-[#00C6FF] shadow-card">
                    <h4 className='text-white font-bold text-[20px]'>{edu.title}</h4>
                    <p className='text-secondary text-[16px]'>{edu.institution}</p>
                    <p className='text-secondary text-[14px]'>{edu.year} | {edu.grade}</p>
                    <p className='mt-2 text-white-100 text-[14px]'>{edu.description}</p>
                </div>
            ))}
         </div>
      </div>
      
       <div className='mt-20'>
         <h3 className={`${styles.sectionHeadText} text-center`}>Tech Stack.</h3>
         <div className='mt-10 flex flex-wrap gap-4 justify-center'>
             {technologies.map((tech) => (
                 <div key={tech.name} className="px-4 py-2 bg-tertiary rounded-lg text-secondary border border-[#7042f8]">
                     {tech.name}
                 </div>
             ))}
         </div>
       </div>

    </section>
  );
};

export default About;
