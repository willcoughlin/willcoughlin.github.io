import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/ProjectLinks.module.css';

// Single project link component
function ProjectLink(props) {
  return (
      <>
      <FontAwesomeIcon icon={[props.iconSet, props.icon]} />&nbsp;&nbsp;
      <a href={props.href}>{props.text}</a>
      </>
  );
}

// ProjectLinks component -- a custom <ul>
export default function ProjectLinks(props) {
  return <ul>{props.links.map((data, i) => <li key={i}><ProjectLink {...data} /></li>)}</ul>;
}

