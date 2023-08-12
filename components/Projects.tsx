import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
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
