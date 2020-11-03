import { TYPES } from "../types/types";

const initState = {
  loading: false,
  error: null,
  isSubmit: false,
  success: false,
};
export const formReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.formSetError:
      return {
        ...state,
        error: action.payload,
      };
    case TYPES.formRemoveError:
      return {
        ...state,
        error: null,
      };
    case TYPES.formStartSubmit:
      return {
        ...state,
        loading: true,
        isSubmit: true,
      };
    case TYPES.formFinishSubmit:
      return {
        ...state,
        isSubmit: false,
      };
    case TYPES.formSetSuccess:
      return {
        ...state,
        success: action.payload,
      };
    case TYPES.formFinishLoading:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
