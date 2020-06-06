import React from "react";
import classes from "./Button.module.css"

 import { useHistory } from 'react-router-dom'

 function Button({ children }) {
   let history = useHistory()
   return (
     <button type="button" className={classes.Button} onClick={() => history.push('/projects')}>
       {children}
     </button>
   )
 }

 export default Button;