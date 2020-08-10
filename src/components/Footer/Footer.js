import React from 'react';
import classes from './Footer.module.css';
import { animateScroll as scroll} from 'react-scroll';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
// Button to scroll up from bottom
const onClickUp = () => {
    scroll.scrollToTop();
  }

  return (   <div className={classes.Footer}>
    <p>© by Pato Montecchiarini  |  pmontecchiarini.dev@gmail.com</p>
    <button onClick={onClickUp} className={classes.buttonUp}>
      <FontAwesomeIcon
        icon={faChevronCircleUp}
        className={classes.icons}
      />
    </button>   
</div>)
}


export default Footer;