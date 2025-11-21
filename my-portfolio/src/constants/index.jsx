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
  SiAndroidstudio, SiMysql, SiUdemy, SiGoogle, SiCoursera
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
  email: "mailto:emailanda@example.com",
  linkedin: "https://linkedin.com/in/username-anda",
  github: "https://github.com/username-anda",
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
    description: "Web interface for generating images using OpenAI DALL-E API with prompt suggestions.",
    tech: ["React", "Tailwind", "GSAP"],
    image: projectImg4,
    github: "https://github.com",
  },
  
];

// --- CERTIFICATES DATA ---
export const certificates = [
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
  // ... tambahkan sisanya di sini
];