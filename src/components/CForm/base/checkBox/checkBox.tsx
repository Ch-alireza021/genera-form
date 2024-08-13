import { FC, useState } from "react";
import checkBoxClass from "./checkBox.module.css";
import { CheckBoxIF } from "../interFaceCForm";

export const CheckBox: FC<CheckBoxIF> = ({ ele, change, config }) => {
  const [isChecked, setIsChecked] = useState<boolean>(
    typeof ele.checked === "boolean" ? ele.checked : false
  );
  return (
    <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
      {ele?.label && (
        <label
          style={{ ...config?.labelStyle, ...ele?.labelStyle }}
          htmlFor={ele.name}
        >
          {ele?.label}
        </label>
      )}
      <input
        type="checkbox"
        id={ele.name}
        onChange={(e) => {
          change(e, "checked");
          setIsChecked(!isChecked);
        }}
        checked={isChecked}
        className={checkBoxClass?.["ui-checkbox"]}
      />
    </div>
  );
};
