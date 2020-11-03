import { sendForm } from "../helpers/sendForm";
import { TYPES } from "../types/types";

export const formSetError = (errorMsg) => ({
  type: TYPES.formSetError,
  payload: errorMsg,
});

export const formRemoveError = (errorMsg) => ({
  type: TYPES.formRemoveError,
});

export const formStartSubmit = () => ({
  type: TYPES.formStartSubmit,
});

export const formFinishSubmit = () => ({
  type: TYPES.formFinishSubmit,
});

const finishLoading = () => ({ type: TYPES.formFinishLoading });

const setFormSuccess = (success) => ({
  type: TYPES.formSetSuccess,
  payload: success,
});

export const sendFormData = (name, email, subject, message) => {
  return async (dispatch) => {
    try {
      dispatch(formStartSubmit());
      const response = await sendForm(name, email, subject, message);
      const body = await response.json();
      if (body.ok) {
        dispatch(setFormSuccess(true));
      } else {
        dispatch(setFormSuccess(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(setFormSuccess(false));
    } finally {
      dispatch(formFinishSubmit());
      const to = setTimeout(() => {
        dispatch(finishLoading());
        clearTimeout(to);
      }, 1000);
    }
  };
};
