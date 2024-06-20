import React from "react";
import classes from "./Input.module.css";
import MaskedInput from "react-text-mask";
export default function Input({ label, type, search, subInf, value, onChange }) {
  return (
    <div className={classes.main}>
      {!search ? (
        <>
          <label
            htmlFor='#'
            className={classes.label}>
            {label} <br /> {subInf}
          </label>
        </>
      ) : (
        <></>
      )}
      {type === "tel" ? (
        <MaskedInput
          required
          className={classes.input}
          mask={["+", "7", "(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
          type='tel'
        />
      ) : type === "com" ? (
        <textarea
          rows='10'
          cols='45'
          className={classes.textarea}
        />
      ) : search ? (
        <div className={classes.searchBox}>
          <p className={classes.searchIcon}>🔍</p>
          <input
            className={classes.search}
            type={type}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <input
          required
          className={classes.input}
          type={type}
        />
      )}
    </div>
  );
}
