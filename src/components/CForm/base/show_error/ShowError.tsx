import { FC, useContext } from "react";
import { MyContext } from "../../helpers";
import { FormCForm } from "../interFaceCForm";
interface ShowErrorIF {
  ele: FormCForm;
}
export const ShowError: FC<ShowErrorIF> = ({ ele }) => {
  const { state } = useContext(MyContext);
  const error = state?.error?.[ele?.name];
  return <>{error && <div style={{ color: "red" }}>{error}</div>}</>;
};
