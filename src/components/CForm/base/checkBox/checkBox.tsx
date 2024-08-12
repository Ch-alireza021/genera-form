// import React from "react";
import { ChangeEvent, FC } from "react";
import checkBoxClass from "./checkBox.module.css";
import { FormCForm } from "../interFaceCForm";
interface CheckBoxIF {
  ele: FormCForm;
  change: (e: ChangeEvent<HTMLInputElement>, type: "checked") => void;
}
export const CheckBox: FC<CheckBoxIF> = ({ ele, change }) => {
  return (
    <div style={{display:'flex',alignItems:'center',gap:'.5rem'}}>
     {ele?.label && (
                <label
                  // style={{ ...config?.labelStyle, ...ele?.labelStyle }}
                  htmlFor={ele.name}
                >
                  {ele?.label}
                </label>
              )}
      <input type="checkbox" id={ele.name} className={checkBoxClass?.['ui-checkbox']}/>
    </div>
  );
};
