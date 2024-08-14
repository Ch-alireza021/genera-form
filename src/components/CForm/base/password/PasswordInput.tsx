import { FC, useContext } from "react";
import formStyle from "../../style/ButtonForm.module.css";
import { MyContext } from "../../helpers";
import { PasswordIF } from "../interFaceCForm";

export const PasswordInput: FC<PasswordIF> = ({ ele, change, config }) => {
  const { state } = useContext(MyContext);

  return (
    <input
      id={ele.name}
      type="password"
      value={ele?.value}
      placeholder={ele?.placeholder}
      onChange={(e) =>
        change(e, ele.type === "password" ? "password" : "passwordConfirm")
      }
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
