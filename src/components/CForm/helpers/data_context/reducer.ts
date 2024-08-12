import { SBObjectIF, MyContextAction } from "../../base";

const actionTypes = {
  FORMINPUT: "FORMINPUT",
};
export const reducer = (
  state: SBObjectIF,
  action: MyContextAction
): SBObjectIF => {
  switch (action.type) {
    case actionTypes.FORMINPUT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
