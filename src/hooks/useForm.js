import { useState } from "react";
import PropTypes from "prop-types";
export const useForm = (initState = {}) => {
  const [formValues, setFormValues] = useState(initState);
  const handleInputChange = ({ target: { name, value } }) => {
    setFormValues((prev) => ({
      ...prev,
      [`${name}`]: value,
    }));
  };
  const reset = () => {
    setFormValues(initState);
  };
  return [formValues, handleInputChange, reset];
};
useForm.propTypes = {
  initState: PropTypes.object.isRequired,
};
