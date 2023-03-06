import React from "react";

import Heroside from "../../component/feature/heroside";
import FormLayout from "../../component/feature/form";

import classes from "./index.module.css";

import { combineClasses } from "../../utils";

const Home = () => {
  return (
    <div className={combineClasses("container-fluid", classes["fluid"])}>
      <div className={combineClasses("row", classes["min-height"])}>
        <div className={"col-md-6"}>
          <Heroside />
        </div>
        <div className={combineClasses("col-md-6", classes["home__formside"])}>
          <FormLayout />
        </div>
      </div>
    </div>
  );
};

export default Home;
