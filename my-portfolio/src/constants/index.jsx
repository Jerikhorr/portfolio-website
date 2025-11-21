import projectImg from '../assets/tester.jpeg'; 
import projectImg1 from '../assets/DjejakSoemoet.png'; 
import profileImg from '../assets/profileimage.jpeg';
import projectImg3 from '../assets/bimbingin.png';
import projectImg4 from '../assets/webport.png';

// Import semua icons di sini
import {
  FaReact, FaJsSquare, FaNodeJs, FaPython, FaJava, FaPhp, FaGithub,
  FaEnvelope, FaLinkedin, FaFigma, FaAward
} from 'react-icons/fa';
import {
  SiTailwindcss, SiNextdotjs, SiTypescript, SiKotlin, SiFirebase, 
  SiAndroidstudio, SiMysql, SiUdemy, SiGoogle, SiCoursera,
  SiSololearn, SiRevolut, SiHuawei, SiBiome // Tambahkan icon baru di sini
} from 'react-icons/si';

// --- NAVIGATION LINKS ---
export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
];

// --- SOCIAL LINKS ---
export const socialLinks = {
  email: "mailto:Jerikhorrr@gmail.com",
  linkedin: "https://linkedin.com/in/jerikho-ruben",
  github: "https://github.com/jerikhorr",
};

// --- PROFILE IMAGE ---
export const profileImage = profileImg;

// --- SKILLS: LANGUAGES ---
export const languages = [
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'Kotlin', icon: <SiKotlin className="text-purple-500" /> },
  { name: 'Python', icon: <FaPython className="text-blue-400" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-400" /> },
  { name: 'SQL', icon: <SiMysql className="text-blue-500" /> },
];

// --- SKILLS: TOOLS ---
export const tools = [
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Android Studio', icon: <SiAndroidstudio className="text-green-400" /> },
  { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
];

// --- PROJECTS DATA ---
export const projects = [
  {
    title: "DjedjakSoemoet",
    description: "DjedjakSoemoet is a web platform built with Vite, React.js, and Tailwind CSS to showcase the rich culture, tourism, and cuisine of North Sumatra.",
    tech: ["React", "Tailwind", "Vite"],
    image: projectImg1,
    demo: "https://djedjaksoemoet.vercel.app/",
  },
  {
    title: "Prototype Bimbingin Mobile Apps",
    description: "A high-fidelity Figma prototype for 'Bimbingin,' a mobile app concept designed to streamline the academic guidance process between students and lecturers.",
    tech: ["Figma", "UI/UX"],
    image: projectImg3,
    demo: "https://www.figma.com/proto/kcv77zkQqa0wnAY4YCGnXW/HCI---Bimbingin?node-id=72-3201&p=f&t=nLnLfz7BZsnrrBaz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=72%3A3201&show-proto-sidebar=1",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio built using React, Tailwind, and GSAP animations to showcase projects and skills.",
    tech: ["React", "Tailwind", "GSAP"],
    image: projectImg4,
    github: "https://github.com",
  },
];

// --- CERTIFICATES DATA (Updated) ---
export const certificates = [
  { 
    title: "Intro to Software Engineering", 
    issuer: "RevoU", 
    date: "May 2023", 
    icon: <SiRevolut />,
    link: "Revou.pdf" 
  },
  { 
    title: "Python Intermediate", 
    issuer: "Sololearn", 
    date: "June 2025", 
    icon: <SiSololearn />,
    link: "PythonIntermediate.pdf"
  },
  { 
    title: "HCIA-openGauss V1.0", 
    issuer: "Huawei", 
    date: "March 2025", 
    icon: <SiHuawei />,
    link: "HCIA-openGauss V1.0 Course.png"
  },
  { 
    title: "HCIA-AI V3.5 Course", 
    issuer: "Huawei", 
    date: "July 2025", 
    icon: <SiHuawei />,
    link: "HCIA-AI V3.5 Course.png" 
  },
  {
    title: "Udemy Course", 
    issuer: "Udemy", 
    date: "Sep 2025", 
    icon: <SiUdemy />,
    link: "https://www.udemy.com/certificate/UC-c3d27cab-5f43-402d-8931-10fcb6b7f07a/" 
  },
  {
    title: "Data Classification & Summarization", 
    issuer: "IBM", 
    date: "Aug 2025", 
    icon: <SiBiome />, // Menggunakan SiBiome atau SiUdemy sesuai preferensi
    link: "https://portfolio-jerikho.vercel.app/" 
  }
];