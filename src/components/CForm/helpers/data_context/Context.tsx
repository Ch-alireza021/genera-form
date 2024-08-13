import React, { Dispatch, FC, useReducer } from "react";
import {MyContextAction, MyContextProviderIF, FormInitialStateIF } from "../../base";
import { reducer } from "./reducer";

const formInitialState = {
  formValues: {},
  error: {},
};
export const MyContext = React.createContext<{
  state: FormInitialStateIF;
  dispatch: Dispatch<MyContextAction>;
}>({ state: formInitialState, dispatch: () => null });

export const MyContextProvider: FC<MyContextProviderIF> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,formInitialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};
