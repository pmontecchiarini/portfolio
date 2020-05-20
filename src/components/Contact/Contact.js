import React from "react";
import classes from './Contact.module.css';

import LinkedinIcon from '../../assets/img/linkedin-icon.svg';
import GithubIcon from '../../assets/img/github-1.svg';
import GmailIcon from '../../assets/img/gmail-icon.svg';

const Contact = () => (
  <div className={classes.Contact}>
    <h2>Contact <span>· Contacto</span></h2>
    <ul>
      <li>
        <span>
          <img src={LinkedinIcon} alt='Linked-in' />
        </span>
        <a href="https://www.linkedin.com/in/pmontecchiarini/" target="_blank" rel="noopener noreferrer">
            Linked-in profile
        </a>
      </li>
      <li>
        <span>
          <img src={GithubIcon} alt='Github'/>
        </span>
        <a href="https://github.com/pmontecchiarini?tab=repositories" target="_blank" rel="noopener noreferrer">
            Github repositories
        </a>
      </li>
      <li>
       <span>
          <img src={GmailIcon} alt='pmontecchiarini.dev@gmail.com'/>
        </span>
        <a href="mailto:pmontecchiarini.dev@gmail.com">   Contact me by mail at: pmontecchiarini.dev@gmail.com
        </a>
        
      </li>
    </ul>
  </div>
);

export default Contact;
