import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutSection from './sections/AboutSection'; // Ini sekarang jadi Hero juga
import ProjectsSection from './sections/ProjectsSection';
import Background from './components/Background';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  
  // State untuk mount konten (agar animasi GSAP tidak jalan sebelum preloader selesai)
  const [contentMounted, setContentMounted] = useState(false);

  const handlePreloaderComplete = () => {
    setLoading(false);
    // Beri sedikit delay agar transisi halus, lalu mount konten
    setTimeout(() => setContentMounted(true), 100); 
  };

  return (
    <div className="min-h-screen font-sans relative bg-dark">
      
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Tampilkan konten hanya setelah loading selesai (atau gunakan opacity) */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        
        <Background />
        <div className="bg-grain"></div> 

        <div className="relative z-10">
          <Navbar />
          <main>
            {/* Hero Section DIHAPUS, langsung AboutSection yang sudah di-upgrade */}
            <AboutSection /> 
            <ProjectsSection />
            <CertificatesSection />
          </main>
          <ContactSection />
        </div>
      </div>

    </div>
  );
}

export default App;