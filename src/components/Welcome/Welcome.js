import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Welcome.module.css";

import { Text } from "../../containers/Language";
import Design_team from "../../assets/img/undraw_design_team.svg";


const Welcome = (props) => {

 

  return (
    <div className={classes.Welcome}>
      <img src={Design_team} alt="" />
      <div className={classes.Welcome_text}>
        <p>
          <Text tid="homeText" />
        </p>
        <Button >
           <Text tid="button" />
        </Button>
        
      </div>
    </div>
  );
};

export default Welcome;
