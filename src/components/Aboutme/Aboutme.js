import React from 'react'
import classes from './Aboutme.module.css';

import CSSIcon from '../../assets/img/css3.svg';
import GitIcon from '../../assets/img/git-icon.svg';
import HTMLIcon from '../../assets/img/html5.svg';
import JSIcon from '../../assets/img/javascript.svg';
import ReactIcon from '../../assets/img/react.svg';
import ReduxIcon from '../../assets/img/redux.svg';


const Aboutme = () => (
    <div className={classes.Aboutme}>
       <h2>About me <span>· Sobre mí</span></h2>
        <p>I'm a self-taught web enthusiast, looking for an opportunity to get involved in interesting and original projects. Always eager to learn new technologies, I'm a fast problem-solver with great communication skills. Creative, innovative, and curious, I'm always striving to find the best possible solutions to achieve the desired goal. </p>
       <p><span>Soy un autodidacta entusiasta de la web, buscando oportunidades de participar en proyectos interesantes y originales. Siempre ansiosa por aprender nuevas tecnologías, soy rápida en la solución de problemáticas, y poseo excelentes habilidades de comunicación. Creativa, innovadora y curiosa, siempre me esfuerzo por encontrar las mejores soluciones posibles para lograr el objetivo deseado.</span></p>
       
       <h2>Skills</h2>
        <ul>
        <li><img src={HTMLIcon} alt='HTML5' style={{height:'70%'}}/></li>
        <li><img src={CSSIcon} alt='CSS3'/></li>
        <li><img src={JSIcon} alt='JavaScript'/></li>
        <li><img src={GitIcon} alt='Git'/></li>
        <li><img src={ReactIcon} alt='ReactJS'/></li>
        <li><img src={ReduxIcon} alt='Redux'/></li>
        </ul>
    </div>

);

export default Aboutme;