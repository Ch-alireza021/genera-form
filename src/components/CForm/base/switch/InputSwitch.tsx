// import React from "react";
import { ChangeEvent, FC } from "react";
import switchClass from "./switch.module.css";
import { ConfigFormIF, FormCForm, StringObject } from "../interFaceCForm";
interface InputSwitchIF {
  ele: FormCForm;
  formError: StringObject;
  config: ConfigFormIF;
  setFormValues: any;
  change: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
export const InputSwitch: FC<InputSwitchIF> = ({
  ele,
  formError,
  config,
  setFormValues,
  change,
}) => {
  return (
    <div>
      <label className={switchClass.switch}>
        <input type="checkbox"  id={ele.name} onChange={(e) =>{ change(e);console.log('{e}',e.target.checked)} } />
        <span className={switchClass.slider}></span>
      </label>
    </div>
  );
};
