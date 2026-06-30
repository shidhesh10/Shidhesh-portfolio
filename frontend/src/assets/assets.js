import { FaEnvelope, FaLightbulb, FaPaintBrush, FaCode, FaUsers, FaReact, FaServer, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.webp';
import profileImgFull from '../assets/profile-full.webp';
import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import project4 from '../assets/project4.webp';


export const assets = {
    profileImg,
    profileImgFull,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative Thinking',
      description: 'I focus on solving real-world problems by building practical, scalable, and creative web solutions.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'I build intuitive and visually engaging interfaces with a strong focus on user experience and responsiveness.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean & Scalable Code',
      description: 'I write well-structured, maintainable code following modern standards, best practices, and efficient design patterns.',
      color: 'text-blue'
    },
    {
      icon: FaUsers,
      title: 'Team Player',
      description: 'I collaborate effectively with teams and adapt quickly to new challenges and technologies.',
      color: 'text-green'
    },
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and dynamic user interfaces with modern JavaScript frameworks.',
    tags: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'EJS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Designing scalable server-side applications and secure RESTful APIs.',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Passport.js', 'MVC Architecture']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing, optimizing, and managing NoSQL databases for scalable applications.',
    tags: ['MongoDB Atlas', 'Mongoose ODM', 'Data Modeling', 'connect-mongo']
  },
  {
    title: 'UI/UX & Responsive Design',
    icon: FaPaintBrush,
    description: 'Creating intuitive, responsive, and accessible user experiences.',
    tags: ['Responsive Design', 'Accessibility', 'UI Optimization', 'Mobile-First Design']
  },
  {
    title: 'Cloud & Deployment',
    icon: FaCloud,
    description: 'Deploying and managing production-ready applications in cloud environments.',
    tags: ['Render', 'Vercel', 'Cloudinary', 'CI/CD Basics', 'Environment Configuration']
  },
  {
    title: 'Tools & Development Workflow',
    icon: FaTools,
    description: 'Tools and technologies used in daily development and debugging.',
    tags: ['Git', 'GitHub', 'Postman', 'Hoppscotch', 'VS Code']
  }
];



export const projects = [
  {
    title: "TeamSync | B2B Project Management SaaS",
    description:
      "A scalable multi-tenant project management platform with workspace-based RBAC, Projects→Epics→Tasks workflow, advanced search/filters, and analytics dashboard.",
    image: project1,
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Google OAuth"],
    icons: [FaReact, FaNodeJs, FaDatabase,],
    demo: "https://teamsync-shidhesh.vercel.app/",
    code: "https://github.com/shidhesh10/MERN-B2B-Teams-Project-Management-Saas",
  },
  {
    title: "BookMyStay | Airbnb-Inspired Rental Marketplace",
    description: "A production-ready full-stack rental marketplace with secure authentication, role-based access, cloud image storage, and interactive map integration.",
    image: project2,
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Cloudinary", "MapQuest API"],
    icons: [FaNodeJs, FaDatabase,],
    demo: "https://bookmystay-77p8.onrender.com/listings",
    code: "https://github.com/shidhesh10/BookMyStay"
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built to showcase projects, skills, and experience with smooth animations and a functional contact form.",
    image: project3,
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Formspree"],
    icons: [FaReact, FaEnvelope],
    demo: "https://shidhesh-bhatia.vercel.app/",
    code: "https://github.com/shidhesh10/shidhesh-portfolio"
  },
  {
    title: "User Management CRUD App",
    description:
      "A full-stack CRUD user management system built as an assessment task, featuring a responsive UI, form validation, delete confirmation modal, and a config-driven form/table architecture.",
    image: project4,
    tech: ["React", "Vite", "Tailwind CSS", "JSON Server", "Node.js", "Render", "Vercel"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaCloud],
    demo: "https://crud-user-app-shidhesh.vercel.app",
    code: "https://github.com/shidhesh10/CRUD-user",
  },
];


export const workData = [
  {
    role: "Frontend Developer",
    company: "Self-Employed / Freelance Technical Consultant",
    duration: "Feb. 2026 - Present",
    description:
      "Architected and delivered responsive, high-performance web applications using React, Next.js, and TypeScript for diverse clients. Translated UI/UX designs into clean, production-ready code while leading, upskilling, and mentoring a small team of junior developers on agile workflows and modern frontend engineering best practices.",
    color: "purple"
  },
  {
    role: "Frontend Developer & Trainer",
    company: "CII Computer Institute",
    duration: "Dec. 2023 - Feb. 2026",
    description:
      "Training and mentoring aspiring developers in full stack technologies while guiding them in building practical projects and improving real-world coding skills.",
    color: "purple"
  },
];
