// import React from "react";
import { ChangeEvent, FC, useContext } from "react";
import { FormCForm } from "../interFaceCForm";
import { MyContext } from "../../helpers";
interface TextareaIF {
  ele: FormCForm;
  change: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
export const Textarea: FC<TextareaIF> = ({ ele, change }) => {
  const { state } = useContext(MyContext);
  return (
    <textarea
      id={ele.name}
      name={ele.name}
      value={
        state.formValues?.[ele.name] !== undefined
          ? String(state.formValues[ele.name])
          : ""
      }
      onChange={(e) => change(e)}
      rows={5}
      style={{ width: "100%" }}
    >
      {ele?.label}
    </textarea>
  );
};
