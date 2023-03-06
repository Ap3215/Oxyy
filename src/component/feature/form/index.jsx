import React, { useReducer, useState } from "react";

import SignUp from "../signup";
import PersonalDetail from "../personal-details";
import Button from "../../ui/button";

import classes from "./index.module.css";

const actionTypes = {
  fullname: "VALIDATE_FULLNAME",
  email: "VALIDATE_EMAIL",
  password: "VALIDATE_PASSWORD",
  name: "VALIDATE_NAME",
  occupation: "VALIDATE_OCCUPATION",
  nationality: "VALIDATE_NATIONALITY",
};

const initialState = {
  fullname: "",
  email: "",
  password: "",
  name: "",
  occupation: "",
  nationality: "",
};

const inputsReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return { ...state, [action.field]: action.payload };

    default:
      return state;
  }
};

const initialFormState = {
  isFullnameValid: false,
  isEmailValid: false,
  isPasswordValid: false,
  isNameValid: false,
  isOccupationValid: false,
  isNationalityValid: false,
};

const validationReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.fullname:
      return {
        ...state,
        isFullnameValid: action.payload.length > 3,
      };
    case actionTypes.email:
      return {
        ...state,
        isEmailValid:
          action.payload.length > 0 &&
          action.payload.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
      };
    case actionTypes.password:
      return {
        ...state,
        isPasswordValid: action.payload.length > 6,
      };
    case actionTypes.name:
      return {
        ...state,
        isNameValid: action.payload.length > 3,
      };
    case actionTypes.occupation:
      return {
        ...state,
        isOccupationValid: action.payload.length > 3,
      };
    case actionTypes.nationality:
      return {
        ...state,
        isNationalityValid: action.payload.length > 3,
      };

    default:
      return state;
  }
};

const FormLayout = () => {
  const [changePages, setChangePages] = useState(0);

  const [formInputs, dispatchForm] = useReducer(inputsReducer, initialState);
  const [formValidations, dispatchValidation] = useReducer(
    validationReducer,
    initialFormState
  );

  const onChangeHandler = (e) => {
    dispatchForm({
      type: "INPUT_CHANGE",
      field: e.target.name,
      payload: e.target.value,
    });
    dispatchValidation({
      type: actionTypes[e.target.name],
      payload: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formInputs);
  };

  const displayPage = () => {
    if (changePages === 0) {
      return (
        <SignUp
          inputState={formInputs}
          onChange={onChangeHandler}
          formValidateHandler={formValidations}
        />
      );
    } else {
      return (
        <PersonalDetail
          inputState={formInputs}
          onChange={onChangeHandler}
          formValidateHandler={formValidations}
        />
      );
    }
  };

  return (
    <div className="container my-auto py-5">
      <div className="row">
        <div className="m-auto col-10 col-lg-9 col-xl-8">
          <form onSubmit={onSubmitHandler}>
            <div className={classes["form-body"]}>{displayPage()}</div>
            <div className={classes["form-footer"]}>
              <Button
                disabled={changePages === 0}
                onClick={(e) => {
                  e.preventDefault();
                  setChangePages((currPage) => currPage - 1);
                }}
                type="prev"
              >
                Back
              </Button>

              <Button
                onClick={(e) => {
                  if (changePages === 0) {
                    if (
                      formValidations.isFullnameValid &&
                      formValidations.isPasswordValid &&
                      formValidations.isEmailValid
                    ) {
                      e.preventDefault();
                      setChangePages((currPage) => currPage + 1);
                    }
                  }
                }}
                type="next"
              >
                {changePages === 1 ? "Submit" : "Proceed"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
