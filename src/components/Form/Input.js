import React from "react";
import { useDispatch } from "react-redux";
import { formRemoveError } from "../../actions/form";

export const Input = ({ ...props }) => {
  const isInvalid = props.error.field === props.name ? "invalid" : "";
  const dispatch = useDispatch();
  return (
    <label htmlFor={props.name}>
      <span>{props.name}</span>
      <input
        onFocus={() => {
          dispatch(formRemoveError());
        }}
        maxLength="40"
        {...props}
        className={`${isInvalid ? "invalid" : ""}`}
      />
      {isInvalid && <p>{props.error.msg}</p>}
    </label>
  );
};
