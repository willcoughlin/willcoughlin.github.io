import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

import ProjectData from '../../content/projects.yaml';

import NavBar from '../components/NavBar';
import Project from '../components/Project';

library.add(fab, faLink, faEnvelope);

export default class Home extends React.Component {
  constructor (props) {
    super(props);
    this.navBarRef = React.createRef();
    this.state = {showStickyNavBar: false};
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    const stickyNavBar = this.navBarRef.current;
    if (window.pageYOffset > stickyNavBar.offsetTop && !this.state.showStickyNavBar){
      this.setState({showStickyNavBar: true});
    } else if (window.pageYOffset < stickyNavBar.offsetTop && this.state.showStickyNavBar) {
      this.setState({showStickyNavBar: false});
    }
  }

  render() {
    return (
      <>
        {
          this.state.showStickyNavBar 
            ? <NavBar stick={true}>
                <h1 className="text-brand">WC</h1>
                <span className="flex-spacer"></span>
                <a href="#projects">Stuff I've Worked On</a>
                <a href="#about">About Me</a>
                {/* <a href="#">My Resume</a> */}
              </NavBar>
            : null
        }
        
        <div className="sheet">
          <header>
            <h1 className="text-brand">Will Coughlin</h1>
            {/* TODO: get this content from a yaml file */}
            <p>Full-stack developer working in payments tech. Interested in cloud, web development, and data science.</p>
            {/* TODO: pull into separate components */}
            <div id="contact">
              <a href="mailto:willcoughlin@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="https://github.com/willcoughlin"><FontAwesomeIcon icon={['fab', 'github']} /></a>
              <a href="https://linkedin.com/in/coughlinwf"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            </div>
          </header>
  
          <NavBar ref={this.navBarRef}>
            <a href="#projects">Stuff I've Worked On</a>
            <a href="#about">About Me</a>
            {/* <a href="#">My Resume</a> */}
          </NavBar>
  
          <section id="projects">
            <h1>Stuff I've Worked On</h1>
            {ProjectData.map((data, i) => <Project key={i} {...data} />)}
          </section>
          
          <section id="about">
            {/* TODO: get this content from a yaml file */}
            <h1>About</h1>
            <p>
              I live in Auburn, AL and work as a developer for Fullsteam, a locally-based payments software company. 
              Before graduating from Auburn University in December 2019 with a B.S. in Computer Science, I interned at Visa 
              in Austin where I worked in the Digital and Developer Platform organization. I also gained a year of 
              experience (split up over three semesters) working as a .NET developer for the University.
            </p>
          </section>
  
          <footer>
            <small>
              &copy; {new Date().getFullYear()} Will Coughlin&nbsp;&nbsp;&bull;&nbsp;&nbsp;
              Powered by <a href="https://gatsbyjs.org">Gatsby</a>
            </small>
          </footer>
        </div>
      </>
    );
  }
}