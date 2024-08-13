// import React from "react";
import { ChangeEvent, FC } from "react";
import switchClass from "./switch.module.css";
import { ConfigFormIF, FormCForm } from "../interFaceCForm";
interface InputSwitchIF {
  ele: FormCForm;
  change: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    type: "checked"
  ) => void;
  config:ConfigFormIF
}
export const InputSwitch: FC<InputSwitchIF> = ({ ele, change,config}) => {
  return (
    <div style={{ display: "flex", alignItems: "center",gap:'1rem' }}>
      {ele?.label && (
        <label
          style={{ ...config?.labelStyle, ...ele?.labelStyle }}
          htmlFor={ele.name}
        >
          {ele?.label}
        </label>
      )}
      <div>
        <label className={switchClass.switch}>
          <input
            type="checkbox"
            id={ele.name}
            onChange={(e) => {
              change(e, "checked");
            }}
          />
          <span className={switchClass.slider}></span>
        </label>
      </div>
    </div>
  );
};
