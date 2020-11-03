import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formSetError, sendFormData } from "../../actions/form";
import { isValid } from "../../helpers/isValid";
import { useForm } from "../../hooks/useForm";
import "../../styles/components/Form/Form.css";
import { Loading } from "../Loading/Loading";
import { Input } from "./Input";
export const Form = () => {
  const [{ name, email, message, subject }, handleInputChange, reset] = useForm(
    {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  );
  const { loading, error } = useSelector((state) => state.form);
  const setError = (error) => {
    dispatch(formSetError(error));
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid({ name, email }, setError)) {
      dispatch(sendFormData(name, email, subject, message));
      reset();
    }
  };
  return (
    <div className="form-wrapper">
      {loading ? (
        <Loading message={"Sending"} />
      ) : (
        <>
          <h1>Get in touch</h1>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Input
              placeholder="Your name"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              autoComplete="off"
              error={error || {}}
            />
            <Input
              autoComplete="off"
              placeholder="email@example.com"
              type="text"
              name="email"
              value={email}
              error={error || {}}
              onChange={handleInputChange}
            />
            <Input
              autoComplete="off"
              placeholder="Subject..."
              type="text"
              name="subject"
              value={subject}
              error={error || {}}
              onChange={handleInputChange}
            />
            <label htmlFor="more-info">
              <textarea
                name="message"
                value={message}
                onChange={handleInputChange}
                placeholder="Type your message here..."></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};
