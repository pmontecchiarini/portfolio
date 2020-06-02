import React from "react";
import classes from './Welcome.module.css';
import { Text } from '../../containers/Language';

const Welcome = (props) => {
  return (
    <div className={classes.Welcome}>
      <p><Text tid="homeText" /></p>
      
    </div>
  );
};

export default Welcome;