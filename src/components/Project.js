import React from 'react';
import ProjectLink from './ProjectLink';

export default function Project(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      <time>{props.date}</time>
      <p>{props.description}</p>
      <ul>
        {props.links.map((data, i) => <li><ProjectLink key={i} {...data} /></li>)}
      </ul>
      <ul>
        {props.tags.map(tag => <li><span>{tag}</span></li>)}
      </ul>
    </article>
  );
} 