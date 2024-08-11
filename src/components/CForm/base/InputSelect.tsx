import { ChangeEvent, FC } from "react";
import { FormCForm, StringObject, ConfigFormIF } from "./interFaceCForm";
import fromStyle from "../style/ButtonForm.module.css";
// import React from 'react'
interface InputSelectIF {
  ele: FormCForm;
  formError: StringObject;
  config: ConfigFormIF;
  setFormValues: any;
  change: (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => void;
}

export const InputSelect: FC<InputSelectIF> = ({
  ele,
  formError,
  config,
  setFormValues,
  change,
}) => {
  return (
    <select
      id={ele.name}
      value={ele?.value}
      // placeholder={ele?.placeholder}
      onChange={(e) => change(e)}
      style={{
        borderColor: formError?.[ele.name] ? "red" : "",
        fontSize: `${ele?.fontSize || config?.fontSize || ""}px`,
        ...config?.inputStyle,
        ...ele?.inputStyle,
      }}
      className={`${fromStyle?.input}`}
    >
      {ele?.options?.map((option) => (
        <option key={option?.value} value={option?.value}  >
          {option?.text}
        </option>
      ))}
    </select>
  );
};
