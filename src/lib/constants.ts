import {
  Code2,
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Twitter,
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Your Name",
  fullName: "Your Full Name",
  title: "Your Title (e.g., Full-Stack Developer)",
  subtitle: "Your Subtitle (e.g., Web Developer & Tech Enthusiast)",
  email: "your.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username/",
  twitter: "https://x.com/your-username",
  location: "Your City, Your Country",
  bio: "A passionate developer with experience in building modern web and mobile applications.",
  tagline:
    "I create exceptional digital experiences that combine performance, aesthetics, and innovation.",
};

export const SKILLS = [
  { name: "React/Next.js", level: 95, category: "frontend" as const },
  { name: "TypeScript", level: 92, category: "frontend" as const },
  { name: "Node.js", level: 90, category: "backend" as const },
  { name: "Python", level: 85, category: "backend" as const },
  { name: "PostgreSQL", level: 85, category: "database" as const },
  { name: "MongoDB", level: 80, category: "database" as const },
  { name: "Docker", level: 75, category: "tools" as const },
  { name: "UI/UX Design", level: 88, category: "other" as const },
  { name: "Flutter", level: 80, category: "mobile" as const },
  { name: "Godot Engine", level: 70, category: "game" as const },
  { name: "Git", level: 90, category: "tools" as const },
  { name: "Tailwind CSS", level: 90, category: "frontend" as const },
];

export const BIG_SKILLS = [
  {
    name: "Frontend",
    icon: Code2,
    level: 95,
    color: "from-cyan-400 to-blue-500",
    technologies: ["Flutter", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    name: "Backend",
    icon: Server,
    level: 90,
    color: "from-green-400 to-emerald-500",
    technologies: ["Django", "Node.js", "Python", "Express", "FastAPI"],
  },
  {
    name: "Database",
    icon: Database,
    level: 85,
    color: "from-orange-400 to-red-500",
    technologies: ["MySQL", "Firestore", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    level: 80,
    color: "from-purple-400 to-pink-500",
    technologies: ["Flutter"],
  },
  {
    name: "DevOps",
    icon: Globe,
    level: 75,
    color: "from-yellow-400 to-orange-500",
    technologies: ["Docker", "Vercel", "GitHub Actions"],
  },
  {
    name: "UI/UX",
    icon: Palette,
    level: 88,
    color: "from-indigo-400 to-purple-500",
    technologies: ["Google Stitch"],
  },
  {
    name: "AI Coding",
    icon: Code2,
    level: 85,
    color: "from-slate-400 to-gray-500",
    technologies: ["GitHub Copilot", "Gemini", "ChatGPT", "Windsurf"],
  },
  {
    name: "Game Dev",
    icon: Code2,
    level: 70,
    color: "from-pink-400 to-red-500",
    technologies: ["Godot Engine"],
  },
];

export const TECH_STACK = [
  "Flutter",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Godot Engine",
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: PERSONAL_INFO.github,
    icon: Github,
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    url: PERSONAL_INFO.linkedin,
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    url: PERSONAL_INFO.twitter,
    icon: Twitter,
    color: "hover:text-sky-400",
  },
];

export const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Your City, Your Country",
    href: "#", // Or a link to Google Maps
  },
];

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export const EXPERIENCES = [
  {
    title: "Your Job Title",
    company: "Your Company",
    period: "Year - Present",
    description: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3",
      "Responsibility 4",
    ],
  },
  {
    title: "Previous Job Title",
    company: "Previous Company",
    period: "Year - Year",
    description: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3",
    ],
  },
];

export const FEATURED_PROJECTS = [
  {
    id: "project-one",
    title: "Project One",
    headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    impact: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
    ],
    role: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
    ],
    timeline: "2024 · 4 weeks",
    team: "Solo project",
    status: "In Production",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Firebase",
    ],
    image: "/images/projects/cv.jpg",
    liveUrl: "#",
    githubUrl: null,
    featured: true,
    category: "web",
    color: "from-cyan-500 to-purple-500",
  },
  {
    id: "project-two",
    title: "Project Two",
    headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    impact: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
    ],
    role: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    timeline: "2023 · 3 months",
    team: "Product team (3 devs · 1 PM · 1 UX)",
    status: "Pilot in production",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Firebase",
    ],
    image: "/images/projects/cv.jpg",
    liveUrl: "#",
    githubUrl: null,
    featured: true,
    category: "web",
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: "project-three",
    title: "Project Three",
    headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    impact: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
    ],
    role: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    timeline: "2022 · 6 weeks",
    team: "Digital studio (2 devs · 1 designer)",
    status: "In Production",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Firebase",
    ],
    image: "/images/projects/cv.jpg",
    liveUrl: "#",
    githubUrl: null,
    featured: true,
    category: "web",
    color: "from-amber-500 to-rose-500",
  },
];
