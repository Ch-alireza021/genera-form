// import React from 'react'
import { ChangeEvent, FC } from "react";
import fromStyle from "../style/ButtonForm.module.css";
import { FormCForm, ConfigFormIF, StringObject } from "./interFaceCForm";
import { InputSelect } from "./InputSelect";
interface InputIF {
  ele: FormCForm;
  formError: StringObject;
  config: ConfigFormIF;
  setFormValues: any;
}
export const Input: FC<InputIF> = ({
  ele,
  formError,
  config,
  setFormValues,
}) => {
  const change = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (ele?.onChange) ele?.onChange(value);
    setFormValues((pre: StringObject) => ({ ...pre, [ele?.name]: value }));
  };
  const typeEleman = ["text", "number"];
  return (
    <>
      {typeEleman?.includes(ele?.type) ? (
        <input
          id={ele.name}
          type={ele?.type}
          value={ele?.value}
          placeholder={ele?.placeholder}
          onChange={(e) => change(e)}
          style={{
            borderColor: formError?.[ele.name] ? "red" : "",
            fontSize: `${ele?.fontSize || config?.fontSize || ""}px`,
            ...config?.inputStyle,
            ...ele?.inputStyle,
          }}
          className={`${fromStyle?.input}`}
        />
      ) : ele?.type ? (
        <InputSelect {...{ ele, formError, config, setFormValues, change }} />
      ) : (
        ""
      )}
    </>
  );
};
