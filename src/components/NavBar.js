import React from 'react';
import NavBarStyle from '../styles/NavBar.module.css';

export default React.forwardRef((props, ref) => (
  <nav ref={ref} className={ props.stick ? NavBarStyle.sticky : null }>
    {props.children}
  </nav>
));