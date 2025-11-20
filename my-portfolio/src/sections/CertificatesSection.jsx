import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiUdemy, SiGoogle, SiCoursera } from 'react-icons/si'; // Add icons as needed

gsap.registerPlugin(ScrollTrigger);

const CertificatesSection = () => {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  // DATA: Add your certificates here
  const certificates = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "Oct 2024",
      link: "https://coursera.org/verify/...",
      icon: <SiGoogle className="text-4xl text-white" />,
    },
    {
      title: "Complete Web Development Bootcamp",
      issuer: "Udemy",
      date: "Aug 2024",
      link: "#",
      icon: <SiUdemy className="text-4xl text-purple-400" />,
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Coursera",
      date: "Jan 2024",
      link: "#",
      icon: <SiCoursera className="text-4xl text-blue-500" />,
    },
    // Add more data...
  ];

  // Logic to slice data
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  useEffect(() => {
    // Simple Animation Batch
    const ctx = gsap.context(() => {
      gsap.fromTo(".cert-card", 
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [showAll]); // Re-run animation when clicking Show More

  return (
    <section ref={sectionRef} id="certificates" className="py-24 px-6 md:px-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
            Certifications & Awards
          </h2>
          <p className="text-gray-400 text-lg">Continuous learning and professional development.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCertificates.map((cert, index) => (
            <div 
              key={index}
              className="cert-card group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-purple-600/0 group-hover:from-primary/5 group-hover:to-purple-600/5 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {cert.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 group-hover:border-primary/30 transition-colors">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-400 transition-all duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300">{cert.issuer}</p>

                {cert.link && cert.link !== "#" && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-gray-500 hover:text-primary transition-colors pt-4 border-t border-white/5">
                    <FaExternalLinkAlt /> View Credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {certificates.length > 6 && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 rounded-full text-white font-medium hover:scale-105 hover:border-primary/50 transition-all duration-300"
            >
              {showAll ? "Show Less" : `Show More (${certificates.length - 6})`}
              {showAll ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default CertificatesSection;