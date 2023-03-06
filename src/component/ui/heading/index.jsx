import React from "react";

import classes from "./index.module.css";

import { combineClasses } from "../../../utils";

const Heading = ({ children, color, size }) => {
  const className = combineClasses(
    classes["heading"],
    classes[`heading--${color}`],
    classes[`heading--${size}`]
  );

  if (size === "h1") {
    return <h1 className={className}>{children}</h1>;
  } else if (size === "h2") {
    return <h2 className={className}>{children}</h2>;
  } else if (size === "h3") {
    return <h3 className={className}>{children}</h3>;
  } else if (size === "h4") {
    return <h4 className={className}>{children}</h4>;
  } else if (size === "h5") {
    return <h5 className={className}>{children}</h5>;
  } else {
    return <h6 className={className}>{children}</h6>;
  }

  // switch (size) {
  //   case "h1":
  //     <h1 className={className}>{children}</h1>;
  //     break;
  //   case "h2":
  //     <h2 className={className}>{children}</h2>;
  //     break;
  //   case "h3":
  //     <h3 className={className}>{children}</h3>;
  //     break;
  //   case "h4":
  //     <h4 className={className}>{children}</h4>;
  //     break;
  //   case "h5":
  //     <h5 className={className}>{children}</h5>;
  //     break;
  //   case "h6":
  //     <h6 className={className}>{children}</h6>;
  //     break;
  // }
};

export default Heading;
