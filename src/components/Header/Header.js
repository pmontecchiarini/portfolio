import React, { useState } from 'react';
import classes from './Header.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
import LanguageSelector from '../LenguageSelector/LenguageSelector';

const Header = (props) => {

    const [sideDrawerVisible, setSideDrawerVisible] = useState(false);
  
  const sidedrawerClosedHandler = () => {
    setSideDrawerVisible(false);
  }

  const sideDrawerToggleHandler = () => {
    setSideDrawerVisible(!sideDrawerVisible);
  }

    return(
        <header className={classes.Header}>
          <div className={classes.Lang_Select}><LanguageSelector/></div>
          <Sidedrawer 
              open={sideDrawerVisible}
              closed={sidedrawerClosedHandler}/>
          <Toolbar toggleButton={sideDrawerToggleHandler}/>        
        </header>
    )
};

export default Header;