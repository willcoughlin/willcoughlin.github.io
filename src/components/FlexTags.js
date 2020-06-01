import React from 'react';
import style from '../styles/FlexTags.module.css';

// Single tag component
function FlexTag(props) {
  return <small>{props.tag}</small>;
}

// FlexTags component - Flex container for tags
export default function FlexTags(props) {
  return (
    <div className={style.flexTags}>
      {props.tags.map((tag, i) => <FlexTag key={i} tag={tag} />)}
    </div>
  );
}