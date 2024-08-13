import { FC } from "react";
import { ConfigFormIF, FormCForm } from "../interFaceCForm";

interface ShowLableIF{
    ele:FormCForm,
    config:ConfigFormIF
}
export const ShowLable:FC<ShowLableIF> = ({ ele, config }) => {
  const specialType = ["checkBox", "switch", "textarea"];
  return (
    <>
      {ele?.label && !specialType?.includes(ele?.type) && (
        <label
          style={{ ...config?.labelStyle, ...ele?.labelStyle }}
          htmlFor={ele.name}
        >
          {ele?.label}:
        </label>
      )}
    </>
  );
};
