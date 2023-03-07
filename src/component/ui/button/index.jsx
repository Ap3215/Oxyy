import React from "react";

import classes from "./index.module.css";

import { combineClasses } from "../../../utils";

const Button = ({ type, children, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={combineClasses(classes[`button--${type}`])}
    >
      {children}
    </button>
  );
};

export default Button;
