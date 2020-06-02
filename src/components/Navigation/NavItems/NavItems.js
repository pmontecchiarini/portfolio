import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { Text } from '../../../containers/Language';

import classes from './NavItems.module.css';

const NavItems = () =>(

    <ul className={classes.NavItems}>
        <li><NavLink to="/" ><Text tid="home" /></NavLink></li>
        <li><NavLink to="/projects" ><Text tid="projects" /></NavLink></li>
        <li><NavLink to="/aboutme"><Text tid="aboutMe" /></NavLink></li>
        <li><NavLink to="/contact"><Text tid="contact" /></NavLink></li>
    </ul>
);

export default NavItems;