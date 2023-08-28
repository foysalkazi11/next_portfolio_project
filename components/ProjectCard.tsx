"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ProjectCardProps = (typeof projectsData)[number];

const ProjectCard = ({
  description,
  imageUrl,
  tags,
  title,
  liveLink,
}: ProjectCardProps) => {
  const projectCardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectCardRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className=" group mb-2 sm:mb-8 last:mb-0"
      ref={projectCardRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section
        className=" bg-gray-100 max-w-[42rem] border
     border-black/5 overflow-hidden sm:pr-8 relative sm:h-auto
      hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col 
      h-full sm:group-even:ml-[18rem]"
        >
          <Link href={liveLink} target="_blank">
            <h2 className="text-2xl font-semibold text-gray-800 hover:text-gray-950 transition dark:text-white/80 dark:hover:text-white">
              {title}
            </h2>
          </Link>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap items-center mt-4 gap-2  last:mb-0">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Link href={liveLink} target="_blank">
          <Image
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] 
        rounded-t-lg shadow-2xl transition
        group-even:right[initial] group-even:-left-40
        group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
        group-even:group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
            src={imageUrl}
            alt="title"
            quality={90}
          />
        </Link>
      </section>
    </motion.div>
  );
};

export default ProjectCard;
