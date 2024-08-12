// import React from 'react'
import { ChangeEvent, FC } from "react";
import fromStyle from "../style/ButtonForm.module.css";
import { FormCForm, ConfigFormIF, StringObject } from "./interFaceCForm";
import { InputSelect } from "./InputSelect";
import { InputSwitch } from "./switch";
import { CheckBox } from "./checkBox";

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
  const change = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    type?: string
  ): void => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && type === "checked"
        ? target.checked
        : target.value;
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
      ) : ele?.type === "select" ? (
        <InputSelect {...{ ele, formError, config, setFormValues, change }} />
      ) : ele?.type === "switch" ? (
        <InputSwitch {...{ ele, formError, config, setFormValues, change }} />
      ) : ele?.type === "checkBox" ? (
        <CheckBox {...{ ele, formError, config, setFormValues, change }} />
      ) : (
        ""
      )}
    </>
  );
};
