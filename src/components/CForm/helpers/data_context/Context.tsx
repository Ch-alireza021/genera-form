import React, { Dispatch, FC, useReducer } from "react";
import { SBObjectIF, MyContextAction, MyContextProviderIF } from "../../base";
import { reducer } from "./reducer";

export const MyContext = React.createContext<{
  state: SBObjectIF;
  dispatch: Dispatch<MyContextAction>;
}>({ state: {}, dispatch: () => null });

export const MyContextProvider: FC<MyContextProviderIF> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};
