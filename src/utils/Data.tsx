export const MENU_LINKS = [
  { id: 1, label: "Home", offset: -100, to: "hero" },
  { id: 2, label: "Skills", offset: -100, to: "skills" },
  { id: 3, label: "About Me", offset: -100, to: "about" },
  { id: 4, label: "Projects", offset: -100, to: "projects" },
  { id: 5, label: "Contact", offset: -100, to: "contact" },
];

export const STATS = [
  { id: 1, count: "6", label: "Tahun Pengalaman" },
  { id: 2, count: "10", label: "Certifikat Dimiliki" },
  { id: 3, count: "50+", label: "Projek Selesai" },
  { id: 4, count: "10+", label: "Client Puas" },
];

export const SKILL_TABS = [
  { id: "1", label: "All", value: "all" },
  { id: "2", label: "Frontend", value: "frontend" },
  { id: "3", label: "Backend", value: "backend" },
  { id: "4", label: "Database", value: "Database" },
];

import {
  html,
  css,
  js,
  java,
  php,
  python,
  bootstrap,
  tailwindcss,
  motion,
  mysql,
  react,
  vue,
  webflow,
  wordpress,
} from "./ImageImports";

export const SKILLS = [
  {
    id: 1,
    icon: html,
    skill: "HTML",
    progress: 40,
    type: "frontend",
    description:
      "Terampil dalam membuat desain web yang menarik dan responsif menggunakan Flexbox, Grid, serta animasi dan transisi. Familiar dengan framework seperti Tailwind CSS dan Bootstrap.",
    experience: "2 Tahun",
  },
  {
    id: 2,
    icon: css,
    skill: "CSS",
    progress: 40,
    type: "Webflow",
    description:
      "Terampil dalam membuat desain web yang menarik dan responsif menggunakan Flexbox, Grid, serta animasi dan transisi. Familiar dengan framework seperti Tailwind CSS dan Bootstrap.",
    experience: "2 Tahun",
  },
  {
    id: 3,
    icon: js,
    skill: "JavaScript",
    progress: 15,
    type: "frontend",
    description:
      "Menguasai JavaScript modern untuk pengembangan fitur interaktif pada website. Terbiasa menggunakan fitur seperti arrow function, async/await, destructuring, dan modular programming.",
    experience: "2 Tahun",
  },
  {
    id: 4,
    icon: java,
    skill: "Java",
    progress: 80,
    type: "backend",
    description:
      "Terampil dalam pengembangan aplikasi menggunakan Java dengan pendekatan berorientasi objek (OOP). Familiar dengan konsep dasar hingga lanjutan seperti inheritance, polymorphism, dan exception handling. Memiliki pengalaman dalam pembuatan aplikasi desktop dan backend",
    experience: "2 Tahun",
  },
  {
    id: 5,
    icon: php,
    skill: "PHP",
    progress: 50,
    type: "backend",
    description:
      "Berpengalaman dalam pengembangan backend menggunakan PHP, termasuk dalam membangun sistem manajemen konten (CMS), autentikasi pengguna, dan pengolahan data dinamis. Terbiasa menggunakan PHP untuk membuat website dinamis dan integrasi dengan database MySQL. Memahami konsep dasar pemrograman PHP serta struktur MVC dalam pengembangan aplikasi web.",
    experience: "2 Tahun",
  },
  {
    id: 6,
    icon: python,
    skill: "Python",
    progress: 75,
    type: "backend",
    description:
      "Terampil menggunakan Python untuk berbagai kebutuhan seperti automasi tugas, pemrosesan data, dan pengembangan backend aplikasi. Familiar dengan pustaka populer seperti Pandas, NumPy, dan Flask. Pengalaman mencakup pembuatan API sederhana, data preprocessing, serta integrasi Python dalam pengembangan aplikasi berbasis data dan machine learning dasar.",
    experience: "2 Tahun",
  },
  {
    id: 7,
    icon: bootstrap,
    skill: "Bootstrap 4",
    progress: 100,
    type: "Frondend",
    description:
      "Berpengalaman menggunakan Bootstrap 4 untuk membangun antarmuka web yang responsif dan cepat. Terbiasa dengan sistem grid, komponen UI siap pakai, serta kustomisasi tema menggunakan utility dan class yang efisien. Sering digunakan dalam proyek yang memerlukan waktu pengembangan cepat dan tampilan yang konsisten di berbagai perangkat.",
    experience: "2 Tahun",
  },
  {
    id: 8,
    icon: tailwindcss,
    skill: "Tailwind CSS",
    progress: 100,
    type: "Frondend",
    description:
      "Terampil menggunakan Tailwind CSS untuk merancang antarmuka modern berbasis utility-first. Memanfaatkan class utility untuk membangun desain yang fleksibel, clean, dan responsif tanpa perlu menulis CSS custom secara berlebihan. Cocok untuk pengembangan antarmuka yang cepat dan konsisten, serta mudah dipadukan dengan framework seperti React dan Vue.",
    experience: "2 Tahun",
  },
  {
    id: 9,
    icon: motion,
    skill: "Motion",
    progress: 60,
    type: "Frondend",
    description:
      "Menguasai dasar animasi web untuk meningkatkan interaksi dan pengalaman pengguna. Terbiasa menggunakan properti CSS seperti transition, transform, serta library tambahan seperti Framer Motion untuk animasi di React. Mengerti bagaimana animasi digunakan secara efektif tanpa mengorbankan performa website.",
    experience: "2 Tahun",
  },
  {
    id: 10,
    icon: mysql,
    skill: "My Sql",
    progress: 100,
    type: "Database",
    description:
      "Memiliki pengalaman dalam desain, pengelolaan, dan manipulasi database menggunakan MySQL. Terbiasa membuat query untuk operasi CRUD, relasi antar tabel, indexing, serta optimasi query. Sering digunakan dalam pengembangan aplikasi berbasis data dan integrasi backend menggunakan PHP atau Python.",
    experience: "2 Tahun",
  },
  {
    id: 11,
    icon: react,
    skill: "React JS",
    progress: 80,
    type: "frontend",
    description:
      "Berpengalaman dalam membangun aplikasi web SPA (Single Page Application) dengan ReactJS. Mahir menggunakan konsep komponen, state management (useState, useEffect, Context API), routing dengan React Router, serta integrasi API menggunakan Axios atau Fetch.",
    experience: "2 Tahun",
  },
  {
    id: 12,
    icon: vue,
    skill: "Vue JS",
    progress: 30,
    type: "frontend",
    description:
      "Memahami dasar pengembangan dengan Vue JS, termasuk penggunaan komponen, binding data, dan directives. Terbiasa membangun antarmuka dinamis dan interaktif, serta memahami konsep reactive data dan penggunaan Vue Router untuk navigasi. Cocok digunakan untuk proyek yang memerlukan struktur ringan dan fleksibel.",
    experience: "2 Tahun",
  },
  {
    id: 13,
    icon: webflow,
    skill: "Webflow",
    progress: 90,
    type: "Frontend",
    description:
      "Menguasai Webflow sebagai platform no-code untuk membangun website profesional dengan cepat dan efisien. Terbiasa merancang layout responsif, animasi interaktif, serta struktur SEO-friendly langsung dari editor visual. Webflow saya gunakan untuk prototipe, portofolio, dan klien yang membutuhkan solusi desain cepat tanpa pengkodean manual.",
    experience: "2 Tahun",
  },
  {
    id: 14,
    icon: wordpress,
    skill: "Wordpress",
    progress: 90,
    type: "Frontend",
    description:
      "Berpengalaman lebih dari 2,5 tahun dalam pengembangan dan pengelolaan situs menggunakan WordPress. Terampil dalam instalasi, kustomisasi tema dan plugin, serta optimasi performa dan SEO. Terbiasa mengubah desain dari figma/sketsa menjadi situs WordPress fungsional dan mobile-friendly, baik menggunakan tema custom maupun builder seperti Elementor.",
    experience: "2 Tahun",
  },
];

import { GrInstagram } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const ABOUT_ME = {
  content:
    "Projek-projek terbaru yang saya kerjakan berfokus pada pembuatan antarmuka web yang cepat, adaptif, dan mudah digunakan. Setiap proyek dirancang dengan pendekatan visual yang bersih serta struktur kode yang efisien, memastikan performa optimal di berbagai perangkat. Saya juga terbiasa membangun halaman yang dapat dikustomisasi dengan mudah oleh pengguna, serta mengintegrasikan berbagai layanan eksternal sesuai kebutuhan klien. Lewat pengalaman ini, saya terus mengembangkan kemampuan dalam menciptakan solusi digital yang relevan dan berdampak nyata.",

  sosialLinks: [
    { id: "01", label: "Instagram", icon: GrInstagram, link: "#" },
    { id: "02", label: "Telegram", icon: FaTelegram, link: "#" },
    { id: "03", label: "LinkedIn", icon: FaLinkedin, link: "#" },
    { id: "04", label: "Github", icon: FaGithub, link: "#" },
  ],

  email: "abidgymnastiar@gmail.com",
  phone: "+62 812-3456-7890",
  address: "Ponorogo, East Java, Indonesia",
};

import { pj1Desktop, pj1Mobile } from "./ImageImports";

export const PROJECTS = [
  {
    id: "1",
    title: "fundsphere",
    image:[pj1Desktop, pj1Mobile],
    tags: ["Webflow"],
    description: "Details about the project...",
  },
  {
    id: "2",
    title: "Project 2",
    image: [pj1Mobile],
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: "3",
    title: "Project 3",
    image: [pj1Mobile],
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: "4",
    title: "Project 4",
    image: [pj1Mobile],
    tags: ["React", "JavaScript", "CSS"],
  },
];
