import React from "react";
import classes from "./Projects.module.css";
import Thumbnail from "./Thumbnail/Thumbnail";
import { Text } from '../../containers/Language';

import FyloLanding from '../../assets/link-previews/fylo-landing.jpg';
import Huddle from '../../assets/link-previews/huddle.jpg';
import LyricsSearch from '../../assets/link-previews/lyrics-search.jpg';
import PortfolioSample from '../../assets/link-previews/portfolio-sample.jpg';
import ToDoList from '../../assets/link-previews/todo-list.jpg';


const Projects = () => {
  return (
    // Render a Thumbnail component
    <div className={classes.Projects}>
      <h2><Text tid="projects" /></h2>
      <p><Text tid="projectsParagraph" /></p>
      <div className={classes.ProjectList}>
        <Thumbnail 
          link="https://pmontecchiarini.github.io/Project-1-HTML5-CSS3/" 
          image={Huddle}
          title="Layout with CSS flex" 
          description="Challenge from the Frontend Mentor site. Vanilla CSS with no pre-processor." 
        />
        <Thumbnail 
          link="https://pmontecchiarini.github.io/Project-2-HTML5-CSS3-SCSS-Preprocessor/" 
          image={FyloLanding} 
          title="Landing page" 
          description="Challenge from the Frontend Mentor site. Developed with SCSS pre-processor" 
        />
        <Thumbnail 
          link="https://pmontecchiarini.github.io/project-3-Sample-ResponsivePortfolio/" 
          image={PortfolioSample}
          title="Responsive Portfolio (sample)" 
          description="Develped with skeleton, a lightweight CSS framework." 
        />
        <Thumbnail 
          link="https://pmontecchiarini.github.io/project-4-Lyrics-search/" 
          image={LyricsSearch}
          title="Lyrics search" 
          description="Search for song lyrics. Build with vanilla Javascript (Rest API lyrics.ovh)" 
        />
        <Thumbnail 
          link="https://pmontecchiarini.github.io/project-5-ToDoList/" 
          image={ToDoList}
          title="To do list" 
          description="Build with vanilla JS and stored in LocalStorage" 
        />
      </div>
    </div>
  );
};

export default Projects;
