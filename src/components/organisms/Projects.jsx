import React from "react";
import projects from "../../data/projects";
import SectionHeaderV0 from "../atoms/SectionHeaderV0";
import Project from "../molecules/Project";

const Projects = () => {
  return (
    <div className="mt-[100px]">
      <SectionHeaderV0 text="Our Works" variant="all works" />
      {projects.map((project) => (
        <Project
          icon={project.icon}
          title={project.title}
          category={project.category}
          time={project.time}
          description={project.description}
          image={project.image}
          techStack={project.techStack}
          members={project.members}
        />
      ))}
    </div>
  );
};

export default Projects;
