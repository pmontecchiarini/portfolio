import React from 'react';
import classes from './Toolbar.module.css';

import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../Toolbar/DrawerToggle/DrowerToggle';

const Toolbar =(props) =>{

    return (
        <div className={classes.Toolbar}>
        <DrawerToggle clicked={props.toggleButton}/>
        <div className={classes.DesktopOnly}>
            <NavItems />
        </div>
        
    </div>

    )
};

export default Toolbar;

