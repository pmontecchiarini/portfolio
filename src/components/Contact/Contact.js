import React from "react";
import classes from "./Contact.module.css";
import { Text } from "../../containers/Language";

import LinkedinIcon from "../../assets/img/linkedin-icon.svg";
import GithubIcon from "../../assets/img/github-1.svg";
import GmailIcon from "../../assets/img/gmail-icon.svg";

const Contact = () => (
  <div className={classes.Contact} id="contact">
    <h2>
      <Text tid="contact"/>
    </h2>
    <ul>
      <li>
        <span>
          <img src={LinkedinIcon} alt="Linked-in" />
        </span>
        <a
          href="https://www.linkedin.com/in/pmontecchiarini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text tid="contactLinkedin" />
        </a>
      </li>
      <li>
        <span>
          <img src={GithubIcon} alt="Github" />
        </span>
        <a
          href="https://github.com/pmontecchiarini?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text tid="contactGithub" />
        </a>
      </li>
      <li>
        <span>
          <img src={GmailIcon} alt="pmontecchiarini.dev@gmail.com"/>
        </span>
        <a href="mailto:pmontecchiarini.dev@gmail.com">
          <Text tid="contactEmail" />
        </a>
      </li>
    </ul>
  </div>
);

export default Contact;
