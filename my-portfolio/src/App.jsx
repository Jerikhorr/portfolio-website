import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import Background from './components/Background';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';
// Hapus import Cursor

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-primary selection:text-black font-sans relative">
      
      {/* Hapus <Cursor /> dari sini */}

      <Background />

      <div className="relative z-10">
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