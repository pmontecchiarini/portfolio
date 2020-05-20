import React, { Fragment } from 'react';
import NaviItems from '../NavItems/NavItems';

import classes from './Sidedrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const Sidedrawer = (props) => {

    let attachedClasses = [classes.Sidedrawer, classes.Closed];
    if (props.open){

        attachedClasses = [classes.Sidedrawer, classes.Open];
    }

        return (
           <Fragment>
               <Backdrop show={props.open}  clicked={props.closed}/>
                <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <NaviItems/>
                </div>

            </Fragment> 
        );

};

export default Sidedrawer;