import React, { Fragment, useState } from 'react';
import classes from './Header.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const Header = () => {

    const [sideDrawerVisible, setSideDrawerVisible] = useState(false);
  
  const sidedrawerClosedHandler = () => {
    setSideDrawerVisible(false);
  }

  const sideDrawerToggleHandler = () => {
    setSideDrawerVisible(!sideDrawerVisible);
  }

    return(
        <Fragment>
            <Sidedrawer 
                open={sideDrawerVisible}
                closed={sidedrawerClosedHandler}/>
            <div className={classes.Header}>
                <Toolbar toggleButton={sideDrawerToggleHandler}/>
                    <h1>PM Developer</h1>
                    <h2>Portfolio</h2>
                    
            </div> 
        </Fragment>
    )
};

export default Header;