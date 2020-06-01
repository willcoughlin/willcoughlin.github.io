import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import ProjectData from '../../content/projects.yaml';
import Project from '../components/Project';

library.add(fab, faLink);

export default function Home() {
  return (
    <div className="sheet">
      <header>
        <h1 className="text-brand">Will Coughlin</h1>
        <p>Full-stack developer working in payments tech. Interested in cloud, web development, and data science.</p>
      </header>
      <section id="about">
        <h1>About</h1>
        <p>
          I live in Auburn, AL and work as a developer for Fullsteam, a locally-based payments software company. 
          Before graduating from Auburn University in December 2019 with a B.S. in Computer Science, I interned at Visa 
          in Austin where I worked in the Digital and Developer Platform organization. I also gained a year of 
          experience (split up over three semesters) working as a .NET developer for the University.
        </p>
      </section>
      <section id="projects">
        <h1>Stuff I've Worked On</h1>
        {ProjectData.map((data, i) => <Project key={i} {...data} />)}
      </section>
      <footer>
        <small>
          &copy; {new Date().getFullYear()} Will Coughlin&nbsp;&nbsp;&bull;&nbsp;&nbsp;
          Powered by <a href="https://gatsbyjs.org">Gatsby</a>
        </small>
      </footer>
    </div>
  );
}
