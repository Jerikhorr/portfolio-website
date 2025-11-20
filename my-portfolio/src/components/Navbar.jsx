import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'; // Tambah FaDownload

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Ganti ini dengan nama file CV kamu yang asli nanti
  // File CV sebaiknya ditaruh di folder 'public' agar mudah diakses
  const cvUrl = "/CV_JERIKHO_ONDA.pdf"; 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
      
      {/* DESKTOP NAVBAR */}
      <div className={`
        hidden md:flex items-center gap-6 px-8 py-3 rounded-full border transition-all duration-300
        ${scrolled 
          ? 'bg-black/40 backdrop-blur-md border-white/10 shadow-lg shadow-purple-500/5' 
          : 'bg-white/5 backdrop-blur-sm border-white/5'
        }
      `}>
        
        {/* Logo (Kiri) */}
        <a href="#" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 hover:opacity-80 transition-opacity">
          Portfolio<span className="text-white">.</span>
        </a>

        {/* Divider */}
        <div className="w-[1px] h-6 bg-white/10"></div>

        {/* Links (Tengah) */}
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-[1px] h-6 bg-white/10"></div>

        {/* Tombol CV (Kanan - Call To Action) */}
        {/* Menggunakan 'download' attribute agar langsung terunduh */}
        <a 
          href={cvUrl}
          download="CV_Nama_Kamu.pdf" // Nama file saat didownload user
          className="
            flex items-center gap-2 px-5 py-2 
            bg-gradient-to-r from-primary to-purple-600 
            text-white text-sm font-bold rounded-full 
            shadow-lg shadow-purple-500/20 
            hover:shadow-purple-500/40 hover:scale-105 
            transition-all duration-300
          "
        >
          <FaDownload size={12} /> {/* Icon Download kecil */}
          <span>CV</span>
        </a>
      </div>


      {/* MOBILE NAVBAR (Hamburger) */}
      <div className="md:hidden w-full flex justify-between items-center bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4">
        <span className="font-bold text-xl text-white">Portfolio<span className="text-primary">.</span></span>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-300 hover:text-primary hover:pl-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-[1px] bg-white/10 my-2"></div>
          
          {/* Tombol CV di Mobile */}
          <a 
            href={cvUrl} 
            download
            className="w-full text-center py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-primary hover:border-primary transition-all"
          >
            Download CV
          </a>

          {/* Social Icons (Tetap ada di mobile menu agar mudah diakses) */}
          <div className="flex gap-6 justify-center mt-2">
             <a href="https://github.com" target="_blank" className="text-gray-400 hover:text-white"><FaGithub size={24}/></a>
             <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-500"><FaLinkedin size={24}/></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;