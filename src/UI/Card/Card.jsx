import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card({ title, text, address, className, onclick }) {
  return (
    <div
      onClick={onclick}
      className={`${classes.card} ${className}`}>
      <div className={classes.title}>{title}</div>
      <div className={classes.text}>
        {text}
        <p>📍{address}</p>
      </div>
    </div>
  );
}
