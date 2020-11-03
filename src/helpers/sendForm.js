const postURL = process.env.REACT_APP_POST_URL;
export const sendForm = (name, email, subject, message) => {
  return fetch(postURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  });
};
