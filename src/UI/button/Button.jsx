import React from "react";
import classes from "./Button.module.css";
import { Link, useNavigate } from "react-router-dom";
export default function Button({ children, mini, back, className, link, onclick, home }) {
  const navigate = useNavigate();
  const switchBack = () => {
    home ? navigate("/") : navigate(-1);
  };
  return link ? (
    <Link to={link}>
      <button
        onClick={back ? switchBack : onclick}
        className={`${className} ${mini ? classes.btnMini : back ? classes.btnBack : classes.btn} `}>
        {children}
      </button>
    </Link>
  ) : (
    <button
      onClick={back ? switchBack : onclick}
      className={`${className} ${mini ? classes.btnMini : back ? classes.btnBack : classes.btn} `}>
      {children}
    </button>
  );
}
