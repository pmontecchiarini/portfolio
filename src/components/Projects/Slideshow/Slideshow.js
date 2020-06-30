import React from "react";
import { Slide } from "react-slideshow-image";

import classes from "./Slideshow.module.css";

import Huddle from "./images/huddle.jpg";
import Fylo from "./images/fylo-landing.jpg";
import ToDo from "./images/todo-list.jpg";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = (props) => {
  return (
    <Slide {...properties}>
      <div className={classes.eachSlide}>
        <h3>Frontend Mentor challenge #1</h3>
        <div className={classes.Layout}>
          <div className={classes.ProjectDetails}>
            <p className={classes.Slideparagraph}>
              Huddle landing page with a single introductory section.
            </p>
            <a
              href="https://pmontecchiarini.github.io/FrontendMentor-Challenge-Huddle/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
            <a
              href="https://github.com/pmontecchiarini/FrontendMentor-Challenge-Huddle"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repositorie
            </a>
          </div>

          <div
            className={classes.ProjectImage}
            style={{ backgroundImage: `url(${Huddle})`, backgroundSize: "cover" }}
          ></div>
        </div>
      </div>
      <div className={classes.eachSlide}>
        <h3>Frontend Mentor challenge #2</h3>
        <div className={classes.Layout}>
          <div className={classes.ProjectDetails}>
            <p className={classes.Slideparagraph}>
              Fylo dark theme landing page. Built with CSS3 pre-processor using
              flex for layout.
            </p>
            <a
              href="https://pmontecchiarini.github.io/FrontendMentor-Challenge-Fylo/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
            <a
              href="https://github.com/pmontecchiarini/FrontendMentor-Challenge-Fylo"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repositorie
            </a>
          </div>

          <div
            className={classes.ProjectImage}
            style={{ backgroundImage: `url(${Fylo})`, backgroundSize: "cover" }}
          ></div>
        </div>
      </div>
      <div className={classes.eachSlide}>
        <h3>To Do List</h3>
        <div className={classes.Layout}>
          <div className={classes.ProjectDetails}>
            <p className={classes.Slideparagraph}>
              Built this app with vanilla Javascript. Used Local storage to keep track of the items that were added to the list by the user.
            </p>
            <a
              href="https://pmontecchiarini.github.io/To-Do-List/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
            <a
              href="https://github.com/pmontecchiarini/To-Do-List"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repositorie
            </a>
          </div>

          <div
            className={classes.ProjectImage}
            style={{ backgroundImage: `url(${ToDo})`, backgroundSize: "cover" }}
          ></div>
        </div>
      </div>
    </Slide>
  );
};

export default Slideshow;
