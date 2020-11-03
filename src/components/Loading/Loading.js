import React from "react";
import { useSelector } from "react-redux";
import "../../styles/components/LoadingSpin/LoadingSpin.css";
import { Spin } from "./Spin";
export const Loading = () => {
  const { isSubmit, success } = useSelector((state) => state.form);
  const message = isSubmit
    ? "Sending"
    : success
    ? "Send!"
    : "An error has occurred, please try again.";
  return (
    <div className="loading-spin-wrapper">
      {isSubmit ? (
        <Spin />
      ) : success ? (
        <i className="fa fa-check fa-4x" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-frown-o fa-4x" aria-hidden="true"></i>
      )}
      <p>{message}</p>
    </div>
  );
};
