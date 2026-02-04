
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Android Developer",
    icon: "mobile",
  },
  {
    title: "Web Developer",
    icon: "web",
  },
  {
    title: "Backend Developer",
    icon: "backend",
  },
  {
    title: "Problem Solver",
    icon: "creator",
  },
];

const education = [
  {
    title: "B.Tech (Information Technology)",
    institution: "IIIT Una",
    year: "2023 - Present",
    grade: "CGPA: 7.34 (Current)",
    description: "Pursuing Bachelor's degree in Information Technology.",
  },
  {
    title: "Senior Secondary (Class XII)",
    institution: "CBSE Board",
    year: "2022",
    grade: "92.4%",
    description: "Completed 12th grade with distinction.",
  },
  {
    title: "Secondary (Class X)",
    institution: "CBSE Board",
    year: "2020",
    grade: "95.8%",
    description: "Completed 10th grade with excellence.",
  },
];

const projects = [
  {
    name: "Teachmate",
    description:
      "A platform connecting teachers and students. (Deployed website)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
         name: "mongodb",
         color: "pink-text-gradient",
      }
    ],
    image: "", // Placeholder
    source_code_link: "https://github.com/AgamPandey133/Teachmate",
    deploy_link: "https://teachmate-backend-w6fp.onrender.com/login",
  },
  {
    name: "SuperPower Service",
    description:
      "Production-grade Android utility for real-time text recognition and translation using ML Kit and MediaProjection API.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "mvvm",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/AgamPandey133", // Generic fallback if specific link not known, but User put Github next to title in resume. Assumed logical link.
  },
  {
    name: "Book-Store",
    description:
      "Full-stack MERN web app for book inventory management with secure authentication and CRUD operations.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/AgamPandey133",
  },
  {
    name: "Job Portal App",
    description:
      "Full-stack job portal with JWT authentication, 2FA, and secure job/user management.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/AgamPandey133",
  },
  {
    name: "MVVM News App",
    description:
      "Android news reader app fetching real-time news using Retrofit and News API.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "retrofit",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/AgamPandey133",
  },
];

const technologies = [
    { name: "Python" },
    { name: "C++" },
    { name: "Kotlin" },
    { name: "Java" },
    { name: "React" },
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "Git" },
];

const contactInfo = {
    email: "pandeyagam03@gmail.com",
    phone: "+91-8718909049",
    linkedin: "https://linkedin.com/in/agam-pandey03",
    github: "https://github.com/AgamPandey133",
    location: "IIIT Una",
};

const codingProfiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Agam_Pandey/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/pandeyagam03",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/agampandey11",
    icon: "https://static.uacdn.net/thumbnail/user/d23696803738479e9545dcde437a3424.png",
  },
];

export { services, technologies, education, projects, contactInfo, codingProfiles };
