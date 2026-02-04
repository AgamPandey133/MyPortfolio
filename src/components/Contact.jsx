import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { NetworkCanvas } from './canvas'; 


import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Add logic here
    setTimeout(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className={`xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ${styles.padding} max-w-7xl mx-auto`}>
      <motion.div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-5 mb-5 flex flex-col gap-4 text-white font-medium">
             <div className="flex flex-col gap-1">
                <span className="text-[#00C6FF]">Email</span>
                <span>pandeyagam03@gmail.com</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-[#00C6FF]">Phone</span>
                <span>+91-8718909049</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-[#00C6FF]">Location</span>
                <span>IIIT Una</span>
             </div>
             
             <div className="flex gap-4 mt-4">
                 <a href="https://linkedin.com/in/agam-pandey03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-tertiary px-4 py-2 rounded-lg border border-[#00C6FF] text-white hover:bg-[#00C6FF] hover:text-black transition-all">
                    <FaLinkedin size={20} /> LinkedIn
                 </a>
                 <a href="https://github.com/AgamPandey133" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-tertiary px-4 py-2 rounded-lg border border-[#00C6FF] text-white hover:bg-[#00C6FF] hover:text-black transition-all">
                    <FaGithub size={20} /> GitHub
                 </a>
             </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        className='xl:flex-[0.4] xl:h-[350px] md:h-[350px] h-[250px]'
      >
        <NetworkCanvas />
      </motion.div>
    </section>
  );
};

export default Contact;
