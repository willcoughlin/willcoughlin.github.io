import React from 'react';
import '../styles/FlexTags.module.css';

// Single tag component
function FlexTag(props) {
  return <small>{props.tag}</small>;
}

// FlexTags component - Flex container for tags
export default function FlexTags(props) {
  return (
    <div>
      {props.tags.map((tag, i) => <FlexTag id={i} tag={tag} />)}
    </div>
  );
}