import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, 
  FaGitAlt, FaGithub, FaLinux 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiKotlin, SiJavascript, SiTypescript, SiHtml5, SiCss3, 
  SiExpress, SiSocketdotio, SiWebrtc, SiTailwindcss, SiRedux,
  SiMongodb, SiSqlite, SiFirebase, SiRedis, SiAndroidstudio, SiPostman, SiVercel
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
    date: "Feb 2026 — Present",
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
    description: "Real-time messaging and video calling system with a custom Retrieval-Augmented Generation (RAG) pipeline computing in-memory cosine similarity on 3072-dimension vectors for an AI Tutor. Features dual-role architecture with JWT and 'Topic Roulette'.",
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
    description: "AI-powered repository analysis tool. Provides deep insights into codebases, documentation generation, and architecture understanding using advanced language models and vector embeddings.",
    tags: [
      { name: "React", color: "text-[#00d4ff]" },
      { name: "TypeScript", color: "text-[#7c3aed]" },
      { name: "RAG", color: "text-[#a855f7]" },
      { name: "AI", color: "text-[#f1f5f9]" }
    ],
    source_code_link: "https://github.com/AgamPandey133/RepoLens",
  },
  {
    name: "SuperPower Copy & Translate",
    description: "Production-grade Android utility for real-time text recognition and translation. Leverages ML Kit for on-device processing and MediaProjection API for seamless screen capture and interaction.",
    tags: [
      { name: "Kotlin", color: "text-[#00d4ff]" },
      { name: "ML Kit", color: "text-[#7c3aed]" },
      { name: "Android SDK", color: "text-[#a855f7]" }
    ],
    source_code_link: "https://github.com/AgamPandey133/SuperPower_Copy_N_translate",
  }
];

export const skillsData = {
  "Languages": ["Python", "C", "C++", "Kotlin", "Java", "JavaScript", "SQL", "HTML/CSS"],
  "Frameworks": ["React.js", "Node.js", "Express.js", "Socket.IO", "WebRTC", "Android SDK", "TailwindCSS", "Redux"],
  "AI & Cloud": ["Generative AI", "RAG Pipelines", "Vector Embeddings", "Gemini API", "AWS S3", "Redis"],
  "Databases": ["MongoDB", "SQLite", "Room Database", "Firestore", "Firebase"],
  "Developer Tools": ["Git", "GitHub", "VS Code", "Android Studio", "Postman", "Vercel"]
};

export const codingProfiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/AgamPandey133",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    stat: "700+ Problems"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/AgamPandey133",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-codechef-3628695-3030030.png",
    stat: "Rating 1459"
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/AgamPandey133",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",
    stat: "Rating 1326"
  }
];

export const contactInfo = {
  email: "pandeyagam03@gmail.com",
  phone: "[Available upon request]",
  location: "IIIT Una",
  linkedin: "https://www.linkedin.com/in/agam-pandey03/",
  github: "https://github.com/AgamPandey133"
};

// AI Terminal Data
export const terminalData = {
  about: "I'm Agam Pandey, a B.Tech IT student at IIIT Una. I specialize in building production-grade full-stack and Android applications.",
  skills: `Languages: Python, C, C++, Kotlin, Java, JS, SQL\nFrameworks: React, Node, Express, WebRTC, Android SDK\nAI & Cloud: RAG, Gemini API, AWS S3, Redis`,
  experience: `Frontend Developer Intern @ Uzence Design Studio (Feb 2026-Present)\n- Built 8+ production UI elements in React/TS\n- Created Storybook docs cutting effort by 35%\n- Ensured WCAG 2.1 AA compliance`,
  education: `B.Tech IT @ IIIT Una (2023-Present) | CGPA: 7.41`,
  projects: `1. Teachmate: WebRTC + AI Tutor with RAG\n2. FileMate: Full-stack file manager + Redis queue\n3. RepoLens: AI repo analysis\n4. SuperPower: Android OCR & Translation`,
  achievements: `Competitive Programming:\n- CodeChef: 1459\n- Codeforces: 1326\n- LeetCode: 700+ problems solved`,
  contact: `Email: pandeyagam03@gmail.com\nLinkedIn: in/agam-pandey03\nGitHub: AgamPandey133`,
};
