import React from "react";
import classes from "./Projects.module.css";
import { Text } from '../../containers/Language';

import Slideshow from './Slideshow/Slideshow';

const Projects = () => {

  return (
    // Render a Thumbnail component
    <div className={classes.Projects}>
      <h2><Text tid="projects" /></h2>
      <p><Text tid="projectsParagraph" /></p>
       <Slideshow/>
    </div>
  );
};

export default Projects;
