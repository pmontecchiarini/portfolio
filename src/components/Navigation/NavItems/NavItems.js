import React from 'react'; 
import { Text } from '../../../containers/Language';
import { Link } from "react-scroll";

import classes from './NavItems.module.css';

const NavItems = (props) =>{

return (

    <div className={classes.NavItems}>
        
            <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                    <Text tid="aboutMe" />
            </Link>
        
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                    <Text tid="projects" />
            </Link>
        
            <Link
                activeClass="active"
                to="articles"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                    <Text tid="articles" />
            </Link>
       
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                    <Text tid="contact" />
            </Link>
       
    </div>
)};

export default NavItems;