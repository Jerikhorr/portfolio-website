import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cvUrl = "/CV_JERIKHO_ONDA.pdf"; 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-dark/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter group">
          J<span className="text-primary group-hover:text-white transition-colors">.</span>RR
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-muted hover:text-primary transition-colors tracking-wide uppercase">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="w-[1px] h-5 bg-white/20"></div>

          <a href={cvUrl} download className="flex items-center gap-2 px-5 py-2 bg-white text-dark text-sm font-bold rounded-full hover:bg-primary transition-all duration-300">
            <FaDownload size={12} /> <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-primary">
              {link.name}
            </a>
          ))}
          <a href={cvUrl} download className="text-center py-3 bg-white/10 rounded-lg text-white font-bold">Download CV</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;