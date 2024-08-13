import { MyContextAction, FormInitialStateIF } from "../../base";

const actionTypes = {
  FORMINPUT: "FORMINPUT",
  ERROR: "ERROR",
  DELETE_ERROR: "DELETE_ERROR",
};

export const reducer = (
  state: FormInitialStateIF,
  action: MyContextAction
): FormInitialStateIF => {
  switch (action.type) {
    case actionTypes.FORMINPUT:
      return {
        ...state,
        formValues: { ...state.formValues, ...action.payload },
      };
    case actionTypes.ERROR:
      return { ...state, error: { ...state.error, ...action.payload } };
    case actionTypes.DELETE_ERROR:
      const deepCopy=JSON.parse(JSON.stringify(state))
      delete deepCopy.error?.[`${action?.payload?.delete}`];
      return { ...deepCopy };
    default:
      return state;
  }
};
