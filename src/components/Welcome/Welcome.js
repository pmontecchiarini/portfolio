import React from "react";
import classes from "./Welcome.module.css";

import { Text } from "../../containers/Language";
import { Link } from 'react-scroll';


const Welcome = (props) => {
      
   return (
    <div className={classes.Welcome}>
      <div className={classes.Welcome_text}>
        <h1>
          <Text tid="homeTitle" />
        </h1>
        <p>
          <Text tid="homeText" />
        </p>
        <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.buttonProjects}
                >
                    <Text tid="button" />
            </Link>
        
      </div>
    </div>
  );
};

export default Welcome;
