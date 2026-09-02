import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, 
  FaGitAlt, FaGithub, FaLinux 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiKotlin, SiJavascript, SiTypescript, SiHtml5, SiCss3, 
  SiExpress, SiSocketdotio, SiWebrtc, SiTailwindcss, SiRedux,
  SiMongodb, SiSqlite, SiFirebase, SiRedis, SiPostman, SiVercel
} from 'react-icons/si';

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

export const education = [
  {
    title: "B.Tech in Information Technology",
    institution: "Indian Institute of Information Technology, Una",
    year: "2023 — Present",
    grade: "CGPA: 7.41",
    description: "Coursework: DSA, Operating Systems, DBMS, Computer Networks, OOP, Linear Algebra, Probability & Statistics.",
  },
  {
    title: "Senior Secondary (Class XII)",
    institution: "CBSE Board",
    year: "2022",
    grade: "Percentage: 92.4%",
    description: "Completed with distinction in major subjects.",
  },
  {
    title: "Secondary (Class X)",
    institution: "CBSE Board",
    year: "2020",
    grade: "Percentage: 95.8%",
    description: "Foundation in science and mathematics.",
  },
];

export const experience = [
  {
    title: "Frontend Developer Intern",
    company_name: "Uzence Design Studio",
    date: "Feb 2026 — March 2026",
    points: [
      "Developed 8+ production-ready UI elements including KeyValue Pair and StatCard using React and TypeScript, adopted across 3 client-facing products within the company's shared design system.",
      "Implemented 20+ configurable variants with dynamic theming and responsive breakpoints, authored comprehensive Storybook stories and documentation, cutting frontend sprint effort by 35% for downstream teams.",
      "Translated Figma prototypes into WCAG 2.1 AA-compliant markup with pixel-perfect fidelity, reducing QA revision cycles by 25% through proactive accessibility audits and cross-browser testing."
    ],
    badges: ["React", "TypeScript", "Storybook", "Figma"]
  }
];

export const projects = [
  {
    name: "Teachmate",
    description: "Architected a real-time messaging and video calling system with a custom Retrieval-Augmented Generation (RAG) pipeline computing in-memory cosine similarity on 3072-dimension vectors. Features secure dual-role architecture with JWT and gamified 'Topic Roulette'.",
    tags: [
      { name: "MERN", color: "text-[#00d4ff]" },
      { name: "Socket.IO", color: "text-[#7c3aed]" },
      { name: "WebRTC", color: "text-[#a855f7]" },
      { name: "Gemini RAG", color: "text-[#f1f5f9]" }
    ],
    source_code_link: "https://github.com/AgamPandey133/Teachmate",
    deploy_link: "https://teachmate-backend-w6fp.onrender.com/",
  },
  {
    name: "FileMate",
    description: "Full-stack file management platform supporting PDF merging and image editing, processing 500+ files daily. Engineered an asynchronous job pipeline with Redis and BullMQ, reducing latency by 60%. Integrated AWS S3 and robust security measures.",
    tags: [
      { name: "React 19", color: "text-[#00d4ff]" },
      { name: "Node.js", color: "text-[#7c3aed]" },
      { name: "Redis", color: "text-[#a855f7]" },
      { name: "AWS S3", color: "text-[#f1f5f9]" }
    ],
    source_code_link: "https://github.com/AgamPandey133/FileMate",
  },
  {
    name: "RepoLens",
    description: "Engineered a full-stack codebase analysis platform featuring an advanced Hybrid RAG pipeline with a custom Faithfulness Evaluator to eliminate AI hallucinations. Developed an autonomous Agentic PR Review workflow and integrated AssemblyAI.",
    tags: [
      { name: "Next.js 15", color: "text-[#00d4ff]" },
      { name: "TypeScript", color: "text-[#7c3aed]" },
      { name: "PostgreSQL", color: "text-[#a855f7]" },
      { name: "pgvector", color: "text-[#f1f5f9]" }
    ],
    source_code_link: "https://github.com/AgamPandey133/RepoLens",
  },
  {
    name: "SuperPower Copy & Translate",
    description: "Production-grade utility for real-time text recognition and translation. Leverages ML models for processing and seamless screen capture and interaction.",
    tags: [
      { name: "Kotlin", color: "text-[#00d4ff]" },
      { name: "ML Kit", color: "text-[#7c3aed]" },
      { name: "Native APIs", color: "text-[#a855f7]" }
    ],
    source_code_link: "https://github.com/AgamPandey133/SuperPower_Copy_N_translate",
  }
];

export const skillsData = {
  "Languages": ["C", "C++", "JavaScript", "XML", "SQL", "HTML/CSS"],
  "Frameworks": ["React.js", "Node.js", "Express.js", "Socket.IO", "WebRTC", "TailwindCSS", "Redux"],
  "AI & Cloud": ["Generative AI", "RAG Pipelines", "Vector Embeddings", "Gemini API", "AWS S3", "Redis"],
  "Databases": ["MongoDB", "SQLite", "Room Database", "Firebase Realtime Database"],
  "Developer Tools": ["Git", "GitHub", "VS Code", "Postman", "Vercel"]
};

export const codingProfiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/AgamPandey133",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    stat: "800+ Problems"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/AgamPandey133",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-codechef-3628695-3030030.png",
    stat: "Rating 1501"
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/AgamPandey133",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",
    stat: "Rating 1421"
  }
];

export const contactInfo = {
  email: "pandeyagam03@gmail.com",
  phone: "+91-8718909049",
  location: "IIIT Una",
  linkedin: "https://www.linkedin.com/in/agam-pandey03/",
  github: "https://github.com/AgamPandey133"
};

// AI Terminal Data
export const terminalData = {
  about: "I'm Agam Pandey, a Software Developer passionate about building scalable, production-grade web applications powered by modern technologies and Generative AI.",
  skills: `Languages: C, C++, JavaScript, XML, SQL, HTML/CSS\nFrameworks: React, Node, Express, WebRTC, TailwindCSS\nAI & Cloud: RAG, Gemini API, AWS S3, Redis`,
  experience: `Frontend Developer Intern @ Uzence Design Studio (Feb 2026-March 2026)\n- Built 8+ production UI elements in React/TS\n- Created Storybook docs cutting effort by 35%\n- Ensured WCAG 2.1 AA compliance`,
  education: `B.Tech IT @ IIIT Una (2023-Present) | CGPA: 7.41`,
  projects: `1. Teachmate: WebRTC + AI Tutor with RAG\n2. Repolens: Next.js + PostgreSQL Hybrid RAG\n3. FileMate: Full-stack file manager + Redis queue\n4. SuperPower: OCR & Translation Utility`,
  achievements: `Competitive Programming:\n- CodeChef: 1501\n- Codeforces: 1421\n- LeetCode: 800+ problems solved`,
  contact: `Email: pandeyagam03@gmail.com\nPhone: +91-8718909049\nLinkedIn: in/agam-pandey03\nGitHub: AgamPandey133`,
};
