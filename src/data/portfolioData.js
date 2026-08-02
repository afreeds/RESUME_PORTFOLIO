// ============================================================
// portfolioData.js — Centralized configuration for Shaik Afreed's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Shaik Afreed",
  firstName: "Shaik Afreed",
  brandName: "Shaik Afreed",
  title: "Full Stack & Python Developer",
  location: "Andhrapradesh, India",
  phone: "+91 8340894491",
  emails: {
    primary: "afreedshaik049@gmail.com",
    secondary: "honeyafreed9@gmail.com",
  },
  summary:
    "Motivated Computer Science and Data Science graduate seeking a full-time position with a growth-oriented organization, where I can apply my technical skills in programming, data analytics, and web development to deliver measurable business value. Eager to bring strong problem-solving ability, adaptability, and a commitment to continuous learning to contribute meaningfully to the company's success.",
  resumeUrl: "/AFREED-RESUME.Pdf",
};

export const socialLinks = {
  github: "https://github.com/afreeds",
  linkedin: "https://linkedin.com/in/afreed-shaik-03747a338",
  instagram: "https://www.instagram.com/afreedshaik_05?igsh=MTRyNTczc3ZpOHc0OQ==",
};

export const heroContent = {
  greeting: "Hi, I'm Shaik Afreed",
  titleHighlight: "Full Stack & Python Developer",
  subtitle:
    "I build modern web applications using Python, Django, React and Data Analytics.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
ctaSecondary: {
  text: "Contact Me",
  href: "mailto:afreedshaik049@gmail.com?subject=Hiring Inquiry&body=Hello Shaik Afreed,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,"
},
  ctaResume: { text: "Download Resume", href: "/AFREED-RESUME.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shaik Afreed</span>, an aspiring Python developer based in Andhra Pradesh, India, dedicated to crafting clean, functional, and highly scalable web applications.`,
  techStack: ["Python", "Django", "React"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Django", level: 90 },
        { name: "React", level: 95 },
        { name: "Bootstrap", level: 90 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySql", level: 90 },
      ]
    },
    {
      title: "Analytics",
      skills: [
        { name: "Power BI", level: 80 },
        { name: "Tableau", level: 85 },
        { name: "pandas", level: 90 },
        { name: "Numpy", level: 80 },
        { name: "Matplotlib", level: 95 },
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "n8n", level: 82 },
        { name: "MongoDB Compass", level: 85 },
        { name: "Antigravity", level: 80 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Cinematic Reels",
      description: "Visual stories crafted with cinematic lighting, premium color grading, and high-impact sound design.",
      stats: "50+ Reels Created",
      icon: "🎥"
    },
    {
      title: "Travel Videos",
      description: "Immersive travel vlogs and aesthetic edits capturing cultures, landscapes, and visual rhythms.",
      stats: "15+ Countries/Cities",
      icon: "✈️"
    },
    {
      title: "Educational Reels",
      description: "Fast-paced tech tutorials and educational content designed to simplify coding and software engineering.",
      stats: "100k+ Views",
      icon: "🧠"
    },
    {
      title: "My Own Creative Edits",
      description: "Experimental transitions, 3D overlays, and trendsetting visual effects that push creative bounds.",
      stats: "Personal Projects",
      icon: "⚡"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "Python Certification",
    organization: "L&T EduTech",
    year: "2023",
    description:
      "Completed Python programming certification covering core programming concepts, problem solving, and application development."
  },
  {
    title: "ServiceNow Micro Certification",
    organization: "ServiceNow",
    year: "2024",
    description:
      "Earned a micro certification demonstrating knowledge of the ServiceNow platform and workflow automation."
  },
  {
    title: "Core Java Certification",
    organization: "L&T EduTech",
    year: "2024",
    description:
      "Completed a crash course in Core Java with a focus on object-oriented programming and Java fundamentals."
  },
  {
    title: "UI/UX Developer Certification",
    organization: "L&T EduTech",
    year: "2024",
    description:
      "Learned UI/UX design principles, responsive layouts, and user-centered web interface development."
  },
  {
    title: "AI: Transformative Learning",
    organization: "Microsoft & Edunet Foundation",
    year: "2024",
    description:
      "Completed AI training covering modern AI concepts and practical applications in software development."
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Besant Technologies, Bengaluru",
    role: "Full Stack Python Development Intern",
    duration: "Febuary 2026 - August 2026",
    skills: ["Web Development", "Database Management", "Dashboard Design", "Python"],
    tech: ["Python", "MySQL", "Html", "CSS", "Javascript", "React Js", "Bootstrap", "Django"]
  },
  {
    organization: "Intern Certify",
    role: "Machine Learning Intern",
    duration: "June 2025 - August 2025",
    skills: ["Numpy", "Pandas", "Scikit-Learn", "Pytorch", "Keras"],
    tech: ["Python", "TensorFlow", "Flask", "Aws" ,"MLflow"]
  },
  {
    organization: "Codec Technologies",
    role: "Cloud Computing Intern",
    duration: "March 2026 - April 2026",
    skills: ["AWS", "Microsoft Azure", "Google Cloud", "Web Performance"],
    tech: ["Linux", "Networking", "EC2", "Git"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
  id: "ipl-cricket-data-analysis",
  number: "01",
  badge: "Data Analytics",
  isFlagship: true,

  title: "IPL Cricket Data Analysis",
  subtitle: "Python | Data Analytics",

  description:
    "Analyzed IPL match data from 2008 to 2023 using Python, Pandas, NumPy, Matplotlib, and Seaborn. Built interactive visualizations to identify top-performing teams, player performance, venue analysis, toss impact, and seasonal trends. The project demonstrates data cleaning, exploratory data analysis (EDA), and data visualization skills.",

  techTags: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn"
  ],

  links: {
    github: "https://github.com/afreeds/Ipl-Cricket-Data-Analysis-python.git",
    demo: ""
  }
},
{
  id: "student-performance-data-analysis",
  number: "02",
  badge: "Machine Learning",
  isFlagship: true,

  title: "Student Performance Data Analysis",
  subtitle: "Machine Learning | Data Analytics",

  description:
    "Developed a machine learning project to analyze student academic performance using Python. Performed data preprocessing, visualization, and predictive analysis with Logistic Regression and Decision Tree algorithms. Achieved approximately 84% prediction accuracy while identifying factors affecting student performance.",

  techTags: [
    "Python",
    "Pandas",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn"
  ],

  links: {
    github: "https://github.com/afreeds/Student-Performance-Data-Analysis-Project.git",
    demo: ""
  }
},

{
  id: "personal-portfolio-website",
  number: "03",
  badge: "Web Development",
  isFlagship: true,

  title: "Personal Portfolio Website",
  subtitle: "React | Vite | JavaScript",

  description:
    "Designed and developed a responsive personal portfolio website to showcase projects, technical skills, certifications, achievements, and resume. Built using React and Vite with modern UI components, smooth animations, and responsive layouts to provide a professional online presence.",

  techTags: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Vite"
  ],

  links: {
    github: "https://github.com/afreeds/Web-Development-Project.git",
    demo: ""
  }
}
];

export const certificates = {
  featured: [
    {
      name: "Java",
      issuer: "L & T",
      icon: "☁️",
    },
    {
      name: "Programming in Python (94%)",
      issuer: "Ybi Foundation",
      icon: "☕",
    },
    {
      name: "Micro Certification Of Service Now",
      issuer: "Service Now Platform",
      icon: "⚙️",
    },
    {
      name: "Artificail Intelligence",
      issuer: "Ybi Foundation",
      icon: "💼",
    },
    {
      name: "Cloud Computing",
      issuer: "Codec Technologies",
      icon: "🎓",
    },
    {
      name: "UI and UX Developer",
      issuer: "L & T",
      icon: "📊",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/drive/folders/1hWiXVX1qg55WYYaq0uu6qCpkYDNJoPCE",
};

export const education = {
  degree: "B.Tech – Computer Science & Data Science Engineering",
  institution: "Sri Venkateswara College Of Engineering And Technology",
  cgpa: "8.31",
  graduation: "2026",
  twelfth: "12th Maths – 57%",
  tenth: "10th SSC – 93%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "Python · Django · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE · CGPA 8.35",
  copyright: `© ${new Date().getFullYear()} Shaik Afreed | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
