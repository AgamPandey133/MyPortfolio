import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { contactInfo } from '../constants';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Thank you! Your message has been sent successfully.');
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <motion.div 
          className="flex-[0.4] flex flex-col gap-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-text-secondary text-[16px] leading-relaxed">
            I'm always open to discussing product design work, software engineering roles, or partnership opportunities. Let's build something amazing together.
          </p>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex justify-center items-center text-accent-cyan">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm text-muted font-medium uppercase tracking-wider">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="text-text-primary hover:text-accent-cyan font-medium transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex justify-center items-center text-accent-cyan">
                <FaPhone size={20} />
              </div>
              <div>
                <p className="text-sm text-muted font-medium uppercase tracking-wider">Phone</p>
                <p className="text-text-primary font-medium">{contactInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex justify-center items-center text-accent-cyan">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-sm text-muted font-medium uppercase tracking-wider">Location</p>
                <p className="text-text-primary font-medium">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex justify-center items-center text-text-primary hover:text-accent-cyan hover:border-accent-cyan/50 transition-all">
              <FaLinkedin size={20} />
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex justify-center items-center text-text-primary hover:text-accent-cyan hover:border-accent-cyan/50 transition-all">
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="flex-[0.6] glass-strong p-8 rounded-2xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-text-primary font-medium text-sm ml-1">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="form-input"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-text-primary font-medium text-sm ml-1">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="form-input"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-text-primary font-medium text-sm ml-1">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="form-input resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary mt-2 w-full sm:w-auto self-start"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Agam Pandey. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
