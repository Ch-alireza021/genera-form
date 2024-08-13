import { FC, useContext } from "react";
import formStyle from "../../style/ButtonForm.module.css";
import { MyContext } from "../../helpers";
import { InputTNIF } from "../interFaceCForm";

export const InputTN: FC<InputTNIF> = ({ ele, change, config }) => {
  const { state } = useContext(MyContext);

  return (
    <input
      id={ele.name}
      type={ele?.type}
      value={ele?.value}
      placeholder={ele?.placeholder}
      onChange={(e) => change(e)}
      style={{
        borderColor: state?.error?.[ele.name] ? "red" : "",
        fontSize: `${ele?.fontSize || config?.fontSize || ""}px`,
        ...config?.inputStyle,
        ...ele?.inputStyle,
      }}
      className={`${formStyle?.input}`}
    />
  );
};
