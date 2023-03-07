import React from "react";

import Label from "../../ui/label";
import Input from "../../ui/input";
import Heading from "../../ui/heading";

import classes from "./index.module.css";

const PersonalDetail = ({ formInputs, onChange, formValidateHandler }) => {
  return (
    <>
      <div className={"mb-3"}>
        <Heading size="h3" color="black">
          Personal Details
        </Heading>
      </div>
      <div className={"mb-3"}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          placeholder="Enter Your Name..."
          name="name"
          value={formInputs.name}
          onChange={onChange}
        />
        {formInputs.name.length > 0 && !formValidateHandler.isNameValid ? (
          <span className={classes["error--message"]}>
            Please Enter A valid Password
          </span>
        ) : null}
      </div>
      <div className={"mb-3"}>
        <Label htmlFor="occupation">Occupation</Label>
        <Input
          type="text"
          placeholder="Enter Your Occupation..."
          name="occupation"
          value={formInputs.occupation}
          onChange={onChange}
        />
        {formInputs.occupation.length > 0 &&
        !formValidateHandler.isOccupationValid ? (
          <span className={classes["error--message"]}>
            Please Enter A valid Occupation
          </span>
        ) : null}
      </div>
      <div className={"mb-3"}>
        <Label htmlFor="nationality">Nationality</Label>
        <Input
          type="text"
          placeholder="Enter Your Nationality..."
          name="nationality"
          value={formInputs.nationality}
          onChange={onChange}
        />
        {formInputs.nationality.length > 0 &&
        !formValidateHandler.isNationalityValid ? (
          <span className={classes["error--message"]}>
            Please Enter A valid Nationality
          </span>
        ) : null}
      </div>
    </>
  );
};

export default PersonalDetail;
