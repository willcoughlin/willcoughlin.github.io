import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectLink(props) {
  return (
      <>
      <FontAwesomeIcon icon={['fab', props.icon]} />&nbsp;
      <a href={props.href}>{props.text}</a>
      </>
  );
}