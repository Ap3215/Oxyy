import React from "react";

import Heading from "../../ui/heading";
import Logo from "../../ui/logo";

import classes from "./index.module.css";

import { combineClasses } from "../../../utils";

const Heroside = () => {
  return (
    <div className={classes["hero-side"]}>
      <div className={classes["hero-side__color"]}></div>
      <img
        className={classes["hero-side__image"]}
        src="/Images/login-bg.jpg"
        alt="person doing his work"
      />
      <div className={classes["hero-side__content"]}>
        <div className={classes["hero-side__logo"]}> </div>
        <div className={combineClasses("mx-auto", classes["hero-side__body"])}>
          <Heading heading="Looks like you're new here!" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Heroside;
