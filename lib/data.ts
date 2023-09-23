import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/project_moment.png";
import furniture_store from "@/public/e_furniture_store.png";
import cocktailBD_api from "@/public/cocktailDB_project.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  {
    company: "Blending101",
    title: "Mid Front-End Developer (remote)",
    location: "Florida, US",
    description:
      "Create and manage responsive websites with user-friendly interfaces, ensuring cross-browser compatibility. Integrate dynamic content through backend services and REST/GraphQL APIs, collaborating closely with design and backend teams. Expertly use React, SCSS for high-quality visuals. Prioritize performance optimization and stay updated with the latest trends for continuous enhancement.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep, 2021 - Present",
  },
  {
    company: "MzTech Corp.",
    title: "React Developer (remote)",
    location: "New York, US",
    description:
      "Contributed to feature development, acquiring hands-on expertise in web best practices. Employed Firebase for backend, enabling social login and serving as database. Incorporated REST APIs for e-commerce, elevating functionality. Collaborated on debugging, refining coding skills. Transformed designs into reusable React components. Operated under Agile, ensuring timely task completion.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb, 2021 - Aug, 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Moment",
    description:
      "Full stack project. User can share their best moment with world. Upload pictures, show places within map, comments and rating.",
    tags: [
      "React",
      "React Context API",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Passport with JWT",
      "Cloudinary",
      "Mapbox",
    ],
    imageUrl: corpcommentImg,
    liveLink: "https://your-moments.netlify.app/",
    gitHubLink: "https://github.com/foysalkazi11/your-moments",
  },
  {
    title: "Jenni Kayne",
    description:
      "Beautiful and responsive furniture shope with authentication and authorization system.",
    tags: [
      "React",
      "React Context API",
      "Node JS",
      "Express JS",
      "MongoDB",
      "JWT",
    ],
    imageUrl: furniture_store,
    liveLink: "https://hopeful-goodall-7769f7.netlify.app/",
    gitHubLink: "https://github.com/foysalkazi11/mern-furniture-store",
  },
  {
    title: "CocktailDB API",
    description:
      "Consume cocktailDB API and show cocktail within card. User can search cocktail, filter and view details",
    tags: [
      "React",
      "React Context API",
      "CocktailDB Api",
      "Express JS",
      "Css flexbox and grid",
    ],
    imageUrl: cocktailBD_api,
    liveLink: "https://gifted-varahamihira-d66b31.netlify.app/",
    gitHubLink: " https://github.com/foysalkazi11/react-cocktail-api-project",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",

  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "SCSS",
  "Tailwind",
  //   "Prisma",
  "MongoDB",
  "Redux",
  //   "GraphQL",
  "ApolloGQL",
  "Express",
  //   "PostgreSQL",
  //   "Python",
  //   "Django",
  "Framer Motion",
] as const;
