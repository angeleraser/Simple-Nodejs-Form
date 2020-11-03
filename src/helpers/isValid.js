export const isValid = ({ name, email, message } = {}, setError) => {
  if (!/\w/gi.test(name)) {
    setError({
      field: "name",
      msg: "Please enter a valid name",
    });
    return false;
  } else if (!/[@]/gi.test(email) || !/[.com]$/gi.test(email)) {
    setError({
      field: "email",
      msg: "Please enter a valid email",
    });
    return false;
  }
  return true;
};
