import { ChangeEvent, FC, useState } from "react";
import { ConfigFormIF, FormCForm, onSubmite, StringObject } from "./base";
import fromStyle from "./style/ButtonForm.module.css";
import { gridColumn } from "./helpers";
interface CformIF {
  form: FormCForm[];
  submithandler: (formValues: { [key: string]: string }) => void;
  config: ConfigFormIF;
}

export const CForm: FC<CformIF> = ({ form, submithandler, config }) => {
  const [formValues, setFormValues] = useState<StringObject>({});
  const [formError, setFormError] = useState<StringObject>({});
  let column = 0;

  return (
    <>
      <div className={`${fromStyle?.grid}`}>
        {form?.map((ele, i) => {
          const change = (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            if (ele?.onChange) ele?.onChange(value);
            setFormValues((pre) => ({ ...pre, [ele?.name]: value }));
          };
          const error = formError?.[ele?.name];
          const {
            gridColumnStart,
            gridColumnEnd,
            column: newColumn,
          } = gridColumn({
            size: ele?.size,
            display: "l",
            column,
          });
          column = newColumn;

          return (
            <div
              key={ele.name + i}
              style={{
                alignSelf: "end",
                justifySelf:'center',
                gridColumnStart,
                gridColumnEnd,
              }}
            >
              {ele?.label && <label htmlFor={ele.name}> {ele?.label}: </label>}
              <input
                id={ele.name}
                type={ele?.type}
                placeholder={ele?.placeholder}
                onChange={(e) => change(e)}
                style={{ borderColor: formError?.[ele.name] ? "red" : "" }}
              />
              {error && <div style={{ color: "red" }}>{error}</div>}
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className={`${fromStyle.button} ${config?.btnClass}`}
        // style={ { config?.btnStyle ? ...config?.btnStyle : "" } }
        onClick={() =>
          onSubmite({
            form,
            submithandler,
            formError,
            setFormError,
            formValues,
          })
        }
      >
        {config?.btnText}
      </button>
    </>
  );
};
