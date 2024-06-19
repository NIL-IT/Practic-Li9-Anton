import React from "react";
import classes from "./Button.module.css";
import { Link, useNavigate } from "react-router-dom";
export default function Button({ children, mini, back, className, link }) {
  const navigate = useNavigate();
  const switchBack = () => {
    navigate(-1);
  };
  return (
    <Link
      onClick={back ? switchBack : () => {}}
      to={link}
      className={`${className} ${mini ? classes.btnMini : back ? classes.btnBack : classes.btn} `}>
      {children}
    </Link>
  );
}
