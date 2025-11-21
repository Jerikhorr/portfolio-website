import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading Besar */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Let's Work Together
        </h2>
        
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Tombol Email Besar */}
        <a 
          href="https://www.linkedin.com/in/jerikho-ruben/" 
          target='_blank'
          rel='noopener noreferrer'
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 mb-16"
        >
          <FaLinkedin />
          Contact Me
        </a>

        {/* Divider / Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Jerikho Ruben Rahmani. All Rights Reserved.
          </p>

      
        </div>

      </div>
    </section>
  );
};

export default ContactSection;