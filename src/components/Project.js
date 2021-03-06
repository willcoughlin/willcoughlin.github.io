import React from 'react';
import ProjectLinks from './ProjectLinks';
import FlexTags from './FlexTags';
import '../styles/Project.module.css';

export default function Project(props) {
  return (
    <article>
      <header>
        <h1>{props.title}</h1>
        <time>{props.date || ''}</time>
      </header>
      {props.description.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      {props.links ? <ProjectLinks links={props.links} /> : null}
      <FlexTags tags={props.tags} />
    </article>
  );
} 