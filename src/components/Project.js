import React from 'react';
import ProjectLinks from './ProjectLinks';
import FlexTags from './FlexTags';

export default function Project(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      <time>{props.date}</time>
      <p>{props.description}</p>
      <ProjectLinks links={props.links} />
      <FlexTags tags={props.tags} />
    </article>
  );
} 