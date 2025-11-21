import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import Background from './components/Background';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  
  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    // HAPUS 'bg-dark' dari sini karena Background.jsx sudah punya warna sendiri
    <div className="min-h-screen font-sans relative text-white">
      
      {/* 1. BACKGROUND: Render di luar logika loading agar selalu ada & stabil */}
      <Background />
      
      {/* 2. PRELOADER: Tampil di atas segalanya saat loading */}
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* 3. CONTENT: Hanya konten yang di-fade in */}
      <div 
        className={`relative z-10 transition-opacity duration-1000 delay-200 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar />
        <main>
          <AboutSection /> 
          <ProjectsSection />
          <CertificatesSection />
        </main>
        <ContactSection />
      </div>

    </div>
  );
}

export default App;