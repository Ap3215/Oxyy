import React from "react";

import classes from "./index.module.css";

const Logo = () => {
  return (
    <div>
      <img className={classes["logo"]} src="Images/logo-light.png" alt="logo" />
    </div>
  );
};

export default Logo;
