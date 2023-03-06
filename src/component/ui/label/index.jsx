import React from "react";

import classes from "./index.module.css";

import { combineClasses } from "../../../utils";

const Label = ({ htmlfor, children }) => {
  return (
    <div>
      <label
        htmlFor={htmlfor}
        className={combineClasses("form-label", classes["label"])}
      >
        {children}
      </label>
    </div>
  );
};

export default Label;
