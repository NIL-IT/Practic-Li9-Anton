import React from "react";
import classes from "./Button.module.css";
export default function Button({ children, mini, className, link }) {
  return (
    <a
      href='#'
      className={`${mini ? classes.btnMini : classes.btn} ${className}`}>
      {children}
    </a>
  );
}
