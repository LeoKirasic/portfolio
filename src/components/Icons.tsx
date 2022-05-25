import React from 'react';

export default function Icons() {
  const emailIcon = require('../assets/icons/email-icon.png');
  const githubIcon = require('../assets/icons/github-icon.png');
  const linkedinIcon = require('../assets/icons/linkedin-icon.png');

  return (
    <div className="flex gap-2 mt-2">
      <a
        href="https://github.com/LeoKirasic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="opacity-90 hover:opacity-100"
          src={githubIcon}
          alt="Github Icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/leo-kirasi%C4%87-35bb0220b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="opacity-90 hover:opacity-100"
          src={linkedinIcon}
          alt="Linkedin Icon"
        />
      </a>
      <a href="mailto:kirasicleo@gmail.com">
        <img
          className="opacity-90 hover:opacity-100"
          src={emailIcon}
          alt="Email Icon"
        />
      </a>
    </div>
  );
}
