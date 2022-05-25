import React from 'react';
import projects from '../helpers/projects';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
  return (
    <ul>
      {projects.map((project) => {
        return (
          <ProjectCard
            title={project.title}
            smallImage={project.smallImage}
            mediumImage={project.mediumImage}
            largeImage={project.largeImage}
            technologies={project.technologies}
            description={project.description}
            live={project.live}
            repo={project.repo}
          />
        );
      })}
    </ul>
  );
}
