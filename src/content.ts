/**
 * All of the site's text lives here. Edit this file to update the portfolio.
 */

export type SketchId = "shop" | "finance" | "estate" | "lms" | "booking";

export type Project = {
  id: string;
  title: string;
  kind: string;
  /** "built" = developed, "proposed" = planned and not built yet */
  status: "built" | "proposed";
  description: string;
  features: string[];
  tech: string[];
  sketch: SketchId;
};

export const profile = {
  firstName: "Hamayal",
  lastName: "Zaheer",
  roles: ["Web developer", "BSIT student", "Pakistan"],
  intro:
    "I build responsive, interactive websites with HTML, CSS, JavaScript, Bootstrap and React, and I'm working my way down the stack towards full MERN.",
  about: {
    lead: "I'm a BS Information Technology student at Superior University with a strong interest in web development and modern technologies.",
    body: "I build responsive and interactive web applications with HTML, CSS, JavaScript, Bootstrap and React.js, and I currently work as a Web Developer at Sky Infinit Institute. I care about user-friendly digital solutions, and I'm expanding into full-stack development, particularly the MERN stack.",
  },
  facts: [
    { label: "Role", value: "Web Developer, Sky Infinit Institute" },
    { label: "Degree", value: "BS Information Technology, Superior University" },
    { label: "Semester", value: "7th, currently enrolled" },
    { label: "Based in", value: "Pakistan" },
  ],
  objective:
    "I want to grow as a professional web developer by contributing to real-world software projects, strengthening my full-stack skills, and creating practical, scalable, user-friendly applications.",
  email: "hamayalzaheer7@gmail.com",
  phone: { display: "03000000000", copy: "03000000000", tel: "+3000000000" },
  linkedin: { display: "in/hamayal-zaheer", href: "https://www.linkedin.com/in/hamayal-zaheer" },
  github: { display: "hamayalzaheer7-cpu", href: "https://github.com/hamayalzaheer7-cpu" },
};

export const projects: Project[] = [
  {
    id: "easy-shopping",
    title: "Easy Shopping",
    kind: "E-commerce platform",
    status: "built",
    description:
      "A multi-page online shopping website, from browsing products to placing an order, with data kept in the browser's local storage.",
    features: ["Product management", "Shopping cart", "User accounts", "Checkout"],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage"],
    sketch: "shop",
  },
  {
    id: "finance",
    title: "Personal Finance & Expense Management System",
    kind: "Web application",
    status: "built",
    description: "An application for managing daily income and expenses, organised by category.",
    features: ["Expense records", "Categories", "Data storage"],
    tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    sketch: "finance",
  },
  {
    id: "real-estate",
    title: "Real Estate Marketplace",
    kind: "Marketplace",
    status: "proposed",
    description: "A property marketplace that brings buyers and sellers together.",
    features: ["Property listings", "Search filters", "Property management"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    sketch: "estate",
  },
  {
    id: "lms",
    title: "Learning Management System",
    kind: "Education platform",
    status: "proposed",
    description: "A platform for managing online courses and student learning activities.",
    features: ["Student accounts", "Course listings", "Progress tracking"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    sketch: "lms",
  },
  {
    id: "booking",
    title: "Smart Appointment Booking System",
    kind: "Booking platform",
    status: "proposed",
    description: "An online platform for booking and managing appointments.",
    features: ["Appointment scheduling", "Time-slot selection", "Booking management"],
    tech: ["React.js", "Bootstrap", "Node.js"],
    sketch: "booking",
  },
];

export type Skill = { name: string; learning?: boolean };

export const skillGroups: { name: string; items: Skill[] }[] = [
  {
    name: "Frontend",
    items: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "React.js" }, { name: "Bootstrap 5" }],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", learning: true },
      { name: "Express.js", learning: true },
    ],
  },
  {
    name: "Database",
    items: [{ name: "MySQL" }, { name: "MongoDB", learning: true }],
  },
  {
    name: "Tools",
    items: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }, { name: "XAMPP" }],
  },
  {
    name: "Concepts",
    items: [
      { name: "Responsive Web Design" },
      { name: "DOM Manipulation" },
      { name: "CRUD Operations" },
      { name: "Local Storage" },
      { name: "React Hooks" },
    ],
  },
];

export const professionalSkills = [
  "Problem solving",
  "Communication",
  "Team collaboration",
  "Creative thinking",
  "Time management",
  "Project coordination",
];

export const journey = [
  {
    type: "Experience",
    when: "September 2026 — Present",
    title: "Web Developer",
    place: "Sky Infinit Institute",
    points: [
      "Work on web development tasks and frontend interfaces.",
      "Apply HTML, CSS, JavaScript and responsive design principles.",
      "Develop and improve user-friendly web interfaces.",
      "Practice modern web development techniques.",
    ],
  },
  {
    type: "Education",
    when: "Currently enrolled — 7th semester",
    title: "Bachelor of Science in Information Technology (BSIT)",
    place: "Superior University, Pakistan",
    points: [],
  },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
