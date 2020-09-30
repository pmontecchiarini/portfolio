import React from "react";
import { Slide } from "react-slideshow-image";

import classes from "./Slideshow.module.css";

import ElPasaje from "./images/elpasaje.jpg";
import Fylo from "./images/fylo-landing.jpg";
import VeggiesResto from "./images/veggiesresto.jpg";

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
        <h3>Veggie's Resto</h3>
        <div className={classes.Layout}>
          <div className={classes.ProjectDetails}>
            <p className={classes.Slideparagraph}>
              Concept for a restaurant's website. With a database to upload menus and store customers reviews and messages.  
            </p>
            <a
              href="https://concept-veggie-resto.herokuapp.com/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.Button}
            >
              Live demo
            </a>
            <a
              href="https://github.com/pmontecchiarini/Veggies-Resto-CONCEPT"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repository
            </a>
          </div>

          <div
            className={classes.ProjectImage}
            style={{ backgroundImage: `url(${VeggiesResto})`, backgroundSize: "cover" }}
          ></div>
        </div>
      </div>


      <div className={classes.eachSlide}>
        <h3>El Pasaje Negocios Inmobiliarios</h3>
        <div className={classes.Layout}>
          <div className={classes.ProjectDetails}>
            <p className={classes.Slideparagraph}>
              WordPress webpage for a real state business. 
            </p>
            <a
              href="http://elpasajeinmobiliaria.com.ar/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
            
          </div>

          <div
            className={classes.ProjectImage}
            style={{ backgroundImage: `url(${ElPasaje})`, backgroundSize: "cover" }}
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
              Github repository
            </a>
          </div>

          <div
            className={classes.ProjectImage}
            style={{ backgroundImage: `url(${Fylo})`, backgroundSize: "cover" }}
          ></div>
        </div>
      </div>
      
    </Slide>
  );
};

export default Slideshow;
