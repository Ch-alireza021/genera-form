// import React from "react";
import { ChangeEvent, FC } from "react";
import { FormCForm } from "../interFaceCForm";
interface TextareaIF {
  ele: FormCForm;
  change: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
export const Textarea: FC<TextareaIF> = ({ ele, change }) => {
  return (
    <textarea id={ele.name} name={ele.name} value={''} onChange={(e) => change(e)} rows={5}  style={{width:'100%'}}>
   {ele?.label}
    </textarea>
  );
};
