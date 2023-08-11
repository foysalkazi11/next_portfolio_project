import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

const Projects = () => {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      {projectsData?.map((project, index) => {
        return (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        );
      })}
    </section>
  );
};

type ProjectCardProps = (typeof projectsData)[number];

const ProjectCard = ({
  description,
  imageUrl,
  tags,
  title,
}: ProjectCardProps) => {
  return (
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]">
      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
        <ul className="flex flex-wrap items-center mt-4 gap-2">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
        src={imageUrl}
        alt="title"
        quality={90}
      />
    </section>
  );
};

export default Projects;
