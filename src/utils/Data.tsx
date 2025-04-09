export const MENU_LINKS = [
  { id: 1, label: "Home", offset: -100, to: "hero" },
  { id: 2, label: "Skills", offset: -100, to: "skills" },
  { id: 3, label: "About Me", offset: -100, to: "about" },
  { id: 4, label: "Projects", offset: -100, to: "projects" },
  { id: 5, label: "Contact", offset: -100, to: "contact" },
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
  { id: "4", label: "Database", value: "Database" },
];

import { AiFillAccountBook } from "react-icons/ai";

export const SKILLS = [
  {
    id: 1,
    icon: AiFillAccountBook,
    skill: "HTML",
    progress: 40,
    type: "frontend",
    description:
      "Terampil dalam membuat desain web yang menarik dan responsif menggunakan Flexbox, Grid, serta animasi dan transisi. Familiar dengan framework seperti Tailwind CSS dan Bootstrap.",
  },
  {
    id: 2,
    icon: AiFillAccountBook,
    skill: "CSS",
    progress: 40,
    type: "Webflow",
    description:
      "Terampil dalam membuat desain web yang menarik dan responsif menggunakan Flexbox, Grid, serta animasi dan transisi. Familiar dengan framework seperti Tailwind CSS dan Bootstrap.",
  },
  {
    id: 3,
    icon: AiFillAccountBook,
    skill: "JavaScript",
    progress: 15,
    type: "frontend",
    description:
      "Menguasai JavaScript modern untuk pengembangan fitur interaktif pada website. Terbiasa menggunakan fitur seperti arrow function, async/await, destructuring, dan modular programming.",
  },
  {
    id: 4,
    icon: AiFillAccountBook,
    skill: "Java",
    progress: 80,
    type: "backend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 5,
    icon: AiFillAccountBook,
    skill: "PHP",
    progress: 50,
    type: "backend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 6,
    icon: AiFillAccountBook,
    skill: "Python",
    progress: 75,
    type: "backend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 7,
    icon: AiFillAccountBook,
    skill: "Bootstrap 4",
    progress: 100,
    type: "Frondend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 6,
    icon: AiFillAccountBook,
    skill: "Tailwind CSS",
    progress: 100,
    type: "Frondend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 7,
    icon: AiFillAccountBook,
    skill: "Motion",
    progress: 60,
    type: "Frondend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 8,
    icon: AiFillAccountBook,
    skill: "My Sql",
    progress: 100,
    type: "Database",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 9,
    icon: AiFillAccountBook,
    skill: "React JS",
    progress: 80,
    type: "frontend",
    description:
      "Berpengalaman dalam membangun aplikasi web SPA (Single Page Application) dengan ReactJS. Mahir menggunakan konsep komponen, state management (useState, useEffect, Context API), routing dengan React Router, serta integrasi API menggunakan Axios atau Fetch.",
  },
  {
    id: 10,
    icon: AiFillAccountBook,
    skill: "Vue JS",
    progress: 30,
    type: "frontend",
    description:
      "Berpengalaman dalam membangun aplikasi web SPA (Single Page Application) dengan ReactJS. Mahir menggunakan konsep komponen, state management (useState, useEffect, Context API), routing dengan React Router, serta integrasi API menggunakan Axios atau Fetch.",
  },
  {
    id: 11,
    icon: AiFillAccountBook,
    skill: "Webflow",
    progress: 90,
    type: "Frontend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 12,
    icon: AiFillAccountBook,
    skill: "Wordpress",
    progress: 90,
    type: "Frontend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
];

import { FaFacebookSquare } from "react-icons/fa";

export const ABOUT_ME = {
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",

  sosialLinks: [
    { id: "01", label: "Facebook", icon: FaFacebookSquare, link: "#" },
    { id: "02", label: "Instagram", icon: FaFacebookSquare, link: "#" },
    { id: "03", label: "Twitter", icon: FaFacebookSquare, link: "#" },
    { id: "04", label: "LinkedIn", icon: FaFacebookSquare, link: "#" },
    { id: "05", label: "Github", icon: FaFacebookSquare, link: "#" },
  ],

  email: "abidgymnastiar@gmail.com",
  phone: "+62 812-3456-7890",
  address: "Ponorogo, East Java, Indonesia",
};

import img from "../assets/react.svg";
export const PROJECTS = [
  {
    id: "1",
    title: "Project 1",
    image: img,
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: "2",
    title: "Project 2",
    image: img,
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: "3",
    title: "Project 3",
    image: img,
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: "4",
    title: "Project 4",
    image: img,
    tags: ["React", "JavaScript", "CSS"],
  },
];
