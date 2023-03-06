import React from "react";

import classes from "./index.module.css";

const Input = ({ type, placeholder, name, value, onChange, onBlur }) => {
  return (
    <input
      className={classes["input"]}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      onBlur={onBlur}
    />
  );
};

export default Input;
