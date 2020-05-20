import React from "react";
import classes from './Welcome.module.css';

const Welcome = (props) => {
  return (
    <div className={classes.Welcome}>
      <p>Hello! Welcome to my site! Take a look around and explore some of the projects I've been working on, as well as a link to my contact pages so we can stay in touch. </p>
      <p><span>¡Hola! ¡Bienvenidos a mi sitio! Echen un vistazo y exploren algunos de los proyectos en los que he estado trabajando, así como los enlaces a mis perfiles profesionales para que podamos mantenernos en contacto.</span> </p>
    </div>
  );
};

export default Welcome;