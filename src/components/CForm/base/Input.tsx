// import React from 'react'
import { ChangeEvent, FC, useContext } from "react";
import { FormCForm, ConfigFormIF } from "./interFaceCForm";
import { InputSelect } from "./InputSelect";
import { InputSwitch } from "./switch";
import { CheckBox } from "./checkBox";
import { Textarea } from "./textarea";
import { MyContext } from "../helpers";
import { InputTN } from "./input_text_number";

interface InputIF {
  ele: FormCForm;
  config: ConfigFormIF;
}
type EventChangeElements =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;
// --------------------------------------------
//                       Input
export const Input: FC<InputIF> = ({ ele, config }) => {
  const { dispatch } = useContext(MyContext);
  const change = (e: ChangeEvent<EventChangeElements>, type?: string): void => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && type === "checked"
        ? target.checked
        : target.value;
    if (ele?.onChange) ele?.onChange(value);
    dispatch({
      type: "FORMINPUT",
      payload: { [ele.name]: value },
    });
  };
  const typeEleman = ["text", "number"];
  return (
    <>
      {typeEleman?.includes(ele?.type) ? (
        <InputTN {...{ ele, change, config }} />
      ) : ele?.type === "select" ? (
        <InputSelect {...{ ele, config, change }} />
      ) : ele?.type === "switch" ? (
        <InputSwitch {...{ ele, config, change }} />
      ) : ele?.type === "checkBox" ? (
        <CheckBox {...{ ele, config, change }} />
      ) : ele?.type === "textarea" ? (
        <Textarea {...{ ele, config, change }} />
      ) : (
        ""
      )}
    </>
  );
};
