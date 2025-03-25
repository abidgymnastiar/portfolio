export const MENU_LINKS = [
  { id: 1, label: "Home", offset: -100, to: "#home" },
  { id: 2, label: "Skills", offset: -100, to: "#skills" },
  { id: 3, label: "About Me", offset: -100, to: "#about" },
  { id: 4, label: "Projects", offset: -100, to: "#projects" },
  { id: 5, label: "Contact", offset: -100, to: "#contact" },
];

export const STATS = [
  { id: 1, count: "10", label: "Years of Experience" },
  { id: 2, count: "12", label: "Certifications Earned" },
  { id: 3, count: "43", label: "Projects Completed" },
  { id: 4, count: "37+", label: "Happy Clients" },
];

export const SKILL_TABS = [
  { id: "1", label: "All", value: "all" },
  { id: "2", label: "Frontend", value: "frontend" },
  { id: "3", label: "Backend", value: "backend" },
  { id: "4", label: "Webflow", value: "Webflow" },
  { id: "5", label: "Wordpress", value: "Wordpress" },
];

import { AiFillAccountBook } from "react-icons/ai";

export const SKILLS = [
  {
    id: 1,
    icon: AiFillAccountBook,
    skill: "React JS",
    progress: 90,
    type: "frontend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 2,
    icon: AiFillAccountBook,
    skill: "JavaScript",
    progress: 85,
    type: "frontend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 3,
    icon: AiFillAccountBook,
    skill: "Java",
    progress: 80,
    type: "backend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 4,
    icon: AiFillAccountBook,
    skill: "Python",
    progress: 75,
    type: "backend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
];
