import { ChangeEvent, FC, useContext } from "react";
import { FormCForm, ConfigFormIF } from "./interFaceCForm";
import fromStyle from "../style/ButtonForm.module.css";
import { MyContext } from "../helpers";
// import React from 'react'
interface InputSelectIF {
  ele: FormCForm;
  config: ConfigFormIF;
  change: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const InputSelect: FC<InputSelectIF> = ({ ele, config, change }) => {
  const { state } = useContext(MyContext);
  return (
    <select
      id={ele.name}
      value={ele?.value}
      // placeholder={ele?.placeholder}
      onChange={(e) => change(e)}
      style={{
        borderColor: state?.error?.[ele.name] ? "red" : "",
        fontSize: `${ele?.fontSize || config?.fontSize || ""}px`,
        ...config?.inputStyle,
        ...ele?.inputStyle,
      }}
      className={`${fromStyle?.input}`}
    >
      {ele?.options?.map((option) => (
        <option key={option?.value} value={option?.value}>
          {option?.text}
        </option>
      ))}
    </select>
  );
};
