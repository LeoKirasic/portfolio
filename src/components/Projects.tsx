import React from 'react';
import ProjectList from './ProjectList';
export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center align-middle mt-5">
      <div className="text-3xl text-tokyoNightBlue font-bold 2xl:text-4xl">
        Projects
      </div>
      <ProjectList></ProjectList>
    </div>
  );
}
