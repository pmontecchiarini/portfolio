import React from 'react';
import { NavLink } from 'react-router-dom'; 

import classes from './NavItems.module.css';

const NavItems = () =>(

    <ul className={classes.NavItems}>
        <li><NavLink to="/" >Home <span>· inicio</span></NavLink></li>
        <li><NavLink to="/projects" >Projects <span>· proyectos</span></NavLink></li>
        <li><NavLink to="/aboutme">About me <span>· sobre mí</span></NavLink></li>
        <li><NavLink to="/contact">Contact <span>· contacto</span></NavLink></li>
    </ul>
);

export default NavItems;