/* =====================================================================
   PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
   ===================================================================== */

export const profile = {
  name: "Ariam Al Hasani",
  firstName: "Ariam",
  title: "Software Engineer",
  location: "Barka / Muscat, Oman",
  phone: "+968 9452 7894",
  phoneHref: "tel:+96894527894",
  email: "aryamalhsny4@gmail.com",
  emailHref: "mailto:aryamalhsny4@gmail.com",
  linkedin: "https://linkedin.com/in/ariam-al-hasani-331275389",
  github: "https://github.com/ari01-tech",
  availability: "Open to Software Engineer opportunities",
  headline: "Building Intelligent Solutions Through Software Engineering.",
  intro:
    "Software Engineering graduate, with hands-on experience in full stack web development, backend systems, artificial intelligence, machine learning, and computer vision. Passionate in developing functional software solutions and always looking out for the new technologies.",

  cvPath: "cv/Ariam-Al-Hasani-CV.pdf",
};

/* Small highlight numbers shown under the hero section. */
export const stats = [
  { value: "6", label: "Featured projects" },
  { value: "2", label: "Published research papers" },
  { value: "5", label: "Competitions & challenges" },
  { value: "2025", label: "NASA Space Apps award winner" },
];

/* Short paragraph blocks used in the About section. */
export const aboutParagraphs = [
  "I got my Bachelor of Technology in Software Engineering from the University of Technology and Applied Sciences, Al-Mussanah, Oman, in September 2026. My projects cover all aspects of contemporary software, ranging from full-stack web applications to backend systems, AI and machine learning to computer vision.",
  "I've created solutions to real problems, be it an AI-controlled gate control system, a real-time sign language translator, drought detection via satellite data, or containerized full-stack platforms, across academic and competition projects. I am interested in clean architecture, truthful testing and getting software that works shipped.",
  "I am seeking opportunities as a software engineer that will allow me to develop products with a tangible impact, further enhance my expertise in backend systems and artificial intelligence, and grow within a strong, cohesive engineering team.",
];

/* Technology chips floating around the hero code card. */
export const heroTech = ["React", "Node.js", "Python", "TensorFlow", "Docker", "MongoDB"];

/* Areas of interest shown in the About section. */
export const interests = [
  { label: "Software Engineering", icon: "Workflow" },
  { label: "Full-Stack Development", icon: "Layers" },
  { label: "Backend Development", icon: "Server" },
  { label: "Artificial Intelligence", icon: "BrainCircuit" },
  { label: "Machine Learning", icon: "Cpu" },
  { label: "Computer Vision", icon: "ScanFace" },
  { label: "Database Systems", icon: "Database" },
];

/* =====================================================================
   PROJECTS
   ===================================================================== */

export const projects = [
  {
    id: "aleef",
    title: "Aleef — Full-Stack Web Application",
    tagline:
      "A full-stack platform with structured data, a design-first workflow, and containerized delivery.",
    description:
      "Aleef is a full-stack web application built with React on the front end and Node.js on the back end, backed by MongoDB. The data layer is organized into structured database collections, and the entire user experience was designed upfront in Figma before any code was written. After implementation, the application was tested for functional correctness, containerized with Docker for consistent environments, and deployed.",
    highlights: [
      "Designed the complete UI/UX in Figma before development started",
      "Structured MongoDB collections for clean, scalable data organization",
      "React front end with a Node.js backend",
      "Functionality tested across core user flows",
      "Containerized with Docker and taken through deployment",
    ],
    tech: ["React", "Node.js", "MongoDB", "Docker", "Figma"],
    categories: ["Full-Stack", "Web"],
    image: "images/projects/aleef.png",
    repoUrl: "https://github.com/ari01-tech/aleef-mypet",
    demoUrl: null,
    icon: "Container",
    featured: true,
  },
  {
    id: "smart-gate",
    title: "Smart Gate System — AI-Powered Access Control",
    tagline:
      "CNN face recognition and license plate recognition working together to control an IoT gate.",
    description:
      "An intelligent access-control system that combines CNN-based face recognition with automatic license plate recognition (ALPR/OCR) to verify people and vehicles at a gate. A Flask REST API backend serves the models and coordinates decisions, while MQTT integration connects the system to IoT gate hardware for automatic opening and closing.",
    highlights: [
      "CNN-based face recognition pipeline",
      "Automatic license plate recognition (ALPR) with OCR",
      "Flask REST API backend",
      "MQTT integration for IoT gate control",
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "Keras", "Flask", "MQTT"],
    categories: ["AI & Machine Learning", "Computer Vision"],
    image: "images/projects/SmartGate.png",
    repoUrl: "https://github.com/ari01-tech/Smart-Gate",
    demoUrl: null,
    icon: "ScanFace",
    featured: true,
  },
  {
    id: "realtime-slt",
    title: "Real-Time Sign Language Translator",
    tagline:
      "Live hand-gesture recognition that turns sequential video frames into clear, grammatical text.",
    description:
      "A real-time sign language translator that captures hand landmarks with MediaPipe and feeds sequential video frames into an LSTM model designed for time-series data. Recognized gestures are assembled into words and sentences, which are then refined through the LanguageTool API so the final output reads naturally.",
    highlights: [
      "MediaPipe hand-landmark extraction running in real time",
      "LSTM model trained on sequential frame data",
      "Sentence refinement through the LanguageTool API",
    ],
    tech: ["Python", "MediaPipe", "LSTM", "Scikit-learn", "LanguageTool API"],
    categories: ["AI & Machine Learning", "Computer Vision"],
    image: null,
    repoUrl: null,
    demoUrl: null,
    icon: "Hand",
    featured: true,
  },
  {
    id: "dryad",
    title: "DRYAD — Drought Detection from Satellite Imagery",
    tagline:
      "Deep learning that reads satellite imagery to detect drought conditions and visualize results.",
    description:
      "DRYAD is a deep-learning solution for drought detection built with PyTorch and Torchvision. The system processes satellite imagery and produces prediction masks that highlight affected regions. NumPy and Matplotlib are used to visualize prediction masks and model outputs, making the results interpretable rather than a black box.",
    highlights: [
      "Satellite-imagery pipeline for drought detection",
      "Built on PyTorch and Torchvision",
      "Prediction-mask and model-output visualization with Matplotlib",
    ],
    tech: ["Python", "PyTorch", "Torchvision", "NumPy", "Matplotlib"],
    categories: ["AI & Machine Learning", "Computer Vision"],
    image: null,
    repoUrl: null,
    demoUrl: null,
    icon: "CloudSun",
    featured: true,
  },
  {
    id: "slt-web",
    title: "Sign Language Translator — Web Application",
    tagline:
      "A PHP web app that maps any entered word or phrase to its sign-language images.",
    description:
      "A PHP-based web application that accepts user-entered words or phrases, queries a SQL database, and displays the matching sign-language images. It works as a simple, accessible reference tool for anyone learning sign language.",
    highlights: [
      "Word and phrase lookup against a SQL database",
      "Dynamic sign-language image retrieval per query",
      "Lightweight, accessible web interface",
    ],
    tech: ["PHP", "SQL"],
    categories: ["Web"],
    image: "images/projects/handspeak.png",
    repoUrl: "https://github.com/ari01-tech/HandSpeak",
    demoUrl: null,
    icon: "Globe",
    featured: false,
  },
  {
    id: "3nime",
    title: "3nime — Anime News Website",
    tagline:
      "A static anime news website designed and published end to end with hand-written HTML and CSS.",
    description:
      "A static anime news website designed and published with hand-written HTML and CSS. The project covers layout design, responsive structure, and the full process of taking a site from an idea to a published page on the web.",
    highlights: [
      "Hand-written HTML and CSS",
      "Responsive layout structure",
      "Designed and published as a complete static site",
    ],
    tech: ["HTML", "CSS"],
    categories: ["Web"],
    image: "images/projects/3nime.png",
    repoUrl: "https://github.com/ari01-tech/3nime",
    demoUrl: null,
    icon: "Newspaper",
    featured: false,
  },
];

/* Filter buttons are generated from the categories used above. */
export const projectCategories = [
  "All",
  "Full-Stack",
  "AI & Machine Learning",
  "Computer Vision",
  "Web",
];

/* =====================================================================
   SKILLS 
   ===================================================================== */

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "C# (Basic)", basic: true },
      { name: "C++ (Basic)", basic: true },
    ],
  },
  {
    id: "dev",
    title: "Frontend & Backend",
    icon: "Layers",
    skills: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Flask" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "SQL" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "MySQL (Basic)", basic: true },
      { name: "SQL Server (Basic)", basic: true },
    ],
  },
  {
    id: "engineering",
    title: "Software Engineering",
    icon: "Workflow",
    skills: [
      { name: "Object-Oriented Programming (OOP)" },
      { name: "SDLC" },
      { name: "REST API Integration" },
      { name: "JSON" },
      { name: "HTTP" },
      { name: "System Integration" },
      { name: "Functionality Testing" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "Terminal",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "CI/CD Concepts" },
      { name: "Deployment" },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: "BrainCircuit",
    skills: [
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "PyTorch" },
      { name: "OpenCV" },
      { name: "MediaPipe" },
      { name: "Scikit-learn" },
      { name: "LSTM" },
      { name: "CNN" },
      { name: "NumPy" },
      { name: "Matplotlib" },
    ],
  },
];

/* Education & professional training. */
export const education = {
  degree: "Bachelor of Technology in Software Engineering",
  school: "University of Technology and Applied Sciences – Al-Mussanah",
  date: "September 2026",
  badge: "Graduated",
  note: "Four-year engineering program covering software design, full-stack development, databases, AI, and system integration.",
};

export const experience = {
  role: "Professional Training — Data & Administration",
  org: "Oman College of Management and Technology (OCMT)",
  duration: "2 months",
  points: [
    "Processed and organized student and administrative data",
    "Worked with Excel and institutional databases",
    "Prepared graduate eligibility lists and PDF records",
    "Digitized and organized administrative documents",
    "Assisted students with technical access issues related to Ministry of Education services",
  ],
};

/* Awards, competitions & research. */
export const achievements = [
  {
    id: "nasa",
    title: "Winner — Best Use of Data Award",
    detail: "NASA Space Apps Challenge 2025",
    icon: "Trophy",
    highlight: true,
  },
  {
    id: "avc",
    title: "AVC Honor List",
    detail: "Outstanding Performance Certificates, 2020–2026",
    icon: "Award",
  },
  {
    id: "code-race",
    title: "Oman Code Race",
    detail: "SQU",
    icon: "Code2",
  },
  {
    id: "starvision",
    title: "STAR.VISION Global Space AI Challenge",
    detail: "Global Space & AI challenge",
    icon: "Satellite",
  },
  {
    id: "itech",
    title: "7th iTech Marathon",
    detail: "UTAS-Ibri",
    icon: "Rocket",
  },
];

export const research = {
  papers: [
    {
      id: "thyroid",
      title: "Prediction of Thyroid Disease Using Feature Selection",
    },
    {
      id: "robotics-agri",
      title: "Impact of Robotics in Enhancing Oman's Agriculture Sector",
    },
  ],
  note: "Participation in academic conferences and technology events — presenting work and engaging with Oman's growing tech community.",
};

/* Navigation links (id must match the section id in App.jsx). */
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
