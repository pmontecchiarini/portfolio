import React from "react";
import classes from "./Aboutme.module.css";
import { Text } from '../../containers/Language';

import CSSIcon from "../../assets/img/css3.svg";
import GitIcon from "../../assets/img/git-icon.svg";
import HTMLIcon from "../../assets/img/html5.svg";
import JSIcon from "../../assets/img/javascript.svg";
import ReactIcon from "../../assets/img/react.svg";
import ReduxIcon from "../../assets/img/redux.svg";

const Aboutme = () => (
  <div className={classes.Aboutme}>
    <h2><Text tid="aboutMe" /></h2>
    <p><Text tid="aboutmeParagraph" /></p>
    
    <h2>Skills</h2>
    <ul>
      <li>
        <img src={HTMLIcon} alt="HTML5" style={{ height: "70%" }} />
      </li>
      <li>
        <img src={CSSIcon} alt="CSS3" />
      </li>
      <li>
        <img src={JSIcon} alt="JavaScript" />
      </li>
      <li>
        <img src={GitIcon} alt="Git" />
      </li>
      <li>
        <img src={ReactIcon} alt="ReactJS" />
      </li>
      <li>
        <img src={ReduxIcon} alt="Redux" />
      </li>
    </ul>
  </div>
);

export default Aboutme;
