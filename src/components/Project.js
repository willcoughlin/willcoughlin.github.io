import React from 'react';
import ProjectLinks from './ProjectLinks';

export default function Project(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      <time>{props.date}</time>
      <p>{props.description}</p>
      <ProjectLinks links={props.links} />
      {/* TODO: pull tags into a component like project links */}
      <ul>
        {props.tags.map((tag, i) => <li key={i}><span>{tag}</span></li>)}
      </ul>
    </article>
  );
} 