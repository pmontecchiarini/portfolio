import React from "react";
import classes from "./Welcome.module.css";
import { Text } from "../../containers/Language";

import Design_team from "../../assets/img/undraw_design_team.svg";

const Welcome = (props) => {
  return (
    <div className={classes.Welcome}>
      <img src={Design_team} alt="" />
      <p>
        <Text tid="homeText" />
      </p>
    </div>
  );
};

export default Welcome;
