import React from "react";
import classes from './Thumbnail.module.css';

const Thumbnail = (props) => {
  return (
    <div className={classes.Thumbnail}>
      <a href={props.link} style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
      <h4 className={classes.ProjectTitle}>{props.title}</h4>
        <p className={classes.ProjectDescription}>{props.description}</p>
        <div className={classes.ThumbanilImg}>
          <img src={props.image} alt=''/>
        </div>
      </a>
    </div>
  );
};

export default Thumbnail;
