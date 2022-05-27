import React from 'react';
import ProjectProps from '../ts/interfaces/Project.interface';

export default function ProjectCard(props: ProjectProps) {
  const internetIcon = require('../assets/icons/internet.png');
  const githubIcon = require('../assets/icons/github-icon.png');
  return (
    <div className="flex flex-col mt-5 mb-5 bg-tokyoNightDeepBlue rounded-xl">
      <picture>
        <source media="(min-width: 2000px)" srcSet={props.largeImage} />
        <source media="(min-width: 768px)" srcSet={props.mediumImage} />
        <img
          className=" rounded-t-xl object-contain"
          src={props.smallImage}
          alt=""
        />
      </picture>
      <div className="flex flex-col pl-2">
        <div className="text-xl mb-1 2xl:text-3xl text-tokyoNightBlue">
          {props.title}
        </div>
        <div className="text-sm 2xl:text-lg">
          Technologies: {props.technologies}
        </div>
      </div>
      <div className="pl-2">{props.description}</div>
      <div className="flex gap-2 justify-end 3xl:text-2xl pr-2">
        <a
          className="flex gap-1 opacity-90 hover:opacity-100"
          href={props.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="" src={internetIcon} alt="" />
          <div className="text-tokyoNightBlue ">Live</div>
        </a>
        <a
          className="flex gap-1 opacity-90 hover:opacity-100"
          href={props.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="" />
          <div className="text-tokyoNightBlue">Github</div>
        </a>
      </div>
    </div>
  );
}
