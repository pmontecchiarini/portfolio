import React from "react";
import classes from "./Aboutme.module.css";
import { Text } from "../../containers/Language";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Aboutme = (props) => {

  return (
  <div className={classes.Aboutme} id="aboutme">
    <div className={classes.Item0}>
      <FontAwesomeIcon icon={faCoffee} className={classes.icons} />
      <h2>
        <Text tid="aboutMe" />
      </h2>
      <p>
        <Text tid="aboutmeParagraph" />
      </p>
    </div>
    <div className={classes.Item1}>
      <FontAwesomeIcon
        icon={faLaptopCode}
        className={classes.icons}
      />
      <h2>Skills</h2>
        <h3><Text tid="primaryExperience" /></h3>
        <p><Text tid="skillList" /></p>
        <h3><Text tid="secondaryExperience" /></h3>
        <p><Text tid="skillList2" /></p>
      
    </div>
  </div>
)};

export default Aboutme;
