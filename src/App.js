import React from "react";
import { Provider } from "react-redux";
import { Form } from "./components/Form/Form";
import { store } from "./store/store";
export const App = () => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
};
