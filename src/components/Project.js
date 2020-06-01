import React from 'react';
import ProjectLinks from './ProjectLinks';
import FlexTags from './FlexTags';
import '../styles/Project.module.css';

export default function Project(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      <time>{props.date}</time>
      {props.description.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      <ProjectLinks links={props.links} />
      <FlexTags tags={props.tags} />
    </article>
  );
} 