import React from "react";

import Input from "../../ui/input";
import Label from "../../ui/label";
import Heading from "../../ui/heading";
import classes from "./index.module.css";

const SignUp = ({ inputState, onChange, formValidateHandler }) => {
  return (
    <>
      <div className={"mb-3"}>
        <Heading color="color" size="h3">
          Sign Up
        </Heading>
      </div>
      <div className={"mb-3"}>
        <Label htmlFor="fullname">Full Name</Label>
        <Input
          type="text"
          placeholder="Enter Your Name..."
          name="fullname"
          value={inputState.fullname}
          onChange={onChange}
        />
        {inputState.fullname.length > 0 &&
        !formValidateHandler.isFullnameValid ? (
          <span className={classes["error--message"]}>
            Please Enter A valid Full Name.
          </span>
        ) : null}
      </div>
      <div className={"mb-3"}>
        <Label htmlFor="email">Email Address</Label>
        <Input
          type="email"
          placeholder="Enter Your email..."
          name="email"
          value={inputState.email}
          onChange={onChange}
        />
        {inputState.email.length > 0 && !formValidateHandler.isEmailValid ? (
          <span className={classes["error--message"]}>
            Please Enter A valid Email.
          </span>
        ) : null}
      </div>
      <div className={"mb-3"}>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Enter Your password..."
          name="password"
          value={inputState.password}
          onChange={onChange}
        />
        {inputState.password.length > 0 &&
        !formValidateHandler.isPasswordValid ? (
          <span className={classes["error--message"]}>
            Please Enter A valid Password
          </span>
        ) : null}
      </div>
    </>
  );
};

export default SignUp;
