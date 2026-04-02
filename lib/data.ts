import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/project_moment.png";
import furniture_store from "@/public/e_furniture_store.png";
import cocktailBD_api from "@/public/cocktailDB_project.png";
import spotLocal from "@/public/spotLocal.png";
import ourGournadi from "@/public/our_gournadi.png";
import bloodLinkSearch from "@/public/BloodLink_serach.png";

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
    title: "Our Gournadi",
    description:
      "Our Gournadi is a full-stack local business discovery platform that shows nearby businesses with real-time notifications, interactive maps, geolocation search, multi-provider auth, and multi-language support. Features infinite scroll pagination, admin panel, and review system.",
    tags: [
      "React",
      "TypeScript",
      "Supabase",
      "Leaflet",
      "React Query",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "i18next",
    ],
    imageUrl: ourGournadi,
    liveLink: "https://ourgournadi.kazilab.com",
    gitHubLink: "https://github.com/foysalkazi11/our-gournadi",
  },
  {
    title: "BloodLink",
    description:
      "BloodLink is a React Native mobile app that connects blood donors with donation clubs. It includes real-time chat, push notifications, event management, club analytics, and location-based donor matching. The app uses server-side push notifications and Google AdMob integration.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "Google AdMob"],
    imageUrl: bloodLinkSearch,
    liveLink: "https://play.google.com/store/apps/details?id=com.foysalkazi11.bloodlink&hl=en",
    gitHubLink: "https://github.com/foysalkazi11/bloodConnect",
  },
  // {
  //   title: "Moment",
  //   description:
  //     "Full stack project. User can share their best moment with world. Upload pictures, show places within map, comments and rating.",
  //   tags: [
  //     "React",
  //     "React Context API",
  //     "Node JS",
  //     "Express JS",
  //     "MongoDB",
  //     "Passport with JWT",
  //     "Cloudinary",
  //     "Mapbox",
  //   ],
  //   imageUrl: corpcommentImg,
  //   liveLink: "https://your-moments.netlify.app/",
  //   gitHubLink: "https://github.com/foysalkazi11/your-moments",
  // },
  // {
  //   title: "Jenni Kayne",
  //   description:
  //     "Beautiful and responsive furniture shope with authentication and authorization system.",
  //   tags: [
  //     "React",
  //     "React Context API",
  //     "Node JS",
  //     "Express JS",
  //     "MongoDB",
  //     "JWT",
  //   ],
  //   imageUrl: furniture_store,
  //   liveLink: "https://hopeful-goodall-7769f7.netlify.app/",
  //   gitHubLink: "https://github.com/foysalkazi11/mern-furniture-store",
  // },
  // {
  //   title: "CocktailDB API",
  //   description:
  //     "Consume cocktailDB API and show cocktail within card. User can search cocktail, filter and view details",
  //   tags: [
  //     "React",
  //     "React Context API",
  //     "CocktailDB Api",
  //     "Express JS",
  //     "Css flexbox and grid",
  //   ],
  //   imageUrl: cocktailBD_api,
  //   liveLink: "https://gifted-varahamihira-d66b31.netlify.app/",
  //   gitHubLink: " https://github.com/foysalkazi11/react-cocktail-api-project",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
   "SCSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
   "Redux",
   "ApolloGQL",
  "React Native",
  "Expo",
   "Git",
  "Supabase",
  "Google AdMob",
  // "Node.js",
  //   "Prisma",
  // "MongoDB",
  //   "GraphQL",
  // "Express",
  //   "PostgreSQL",
  //   "Python",
  //   "Django",
  // "Framer Motion",
] as const;
