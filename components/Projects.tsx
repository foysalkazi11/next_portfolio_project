"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import useSectionInView from "@/lib/hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="mb-28 sm:mb-40 scroll-mt-28">
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

export default Projects;
