import { ChangeEvent, FC, useState } from "react";
import { ConfigFormIF, FormCForm, onSubmite, StringObject } from "./base";
import cssButton from "./style/ButtonForm.module.css";
interface CformIF {
  form: FormCForm[];
  submithandler: (formValues: { [key: string]: string }) => void;
  config: ConfigFormIF;
}

export const CForm: FC<CformIF> = ({ form, submithandler, config }) => {
  const [formValues, setFormValues] = useState<StringObject>({});
  const [formError, setFormError] = useState<StringObject>({});

  return (
    <>
      {form?.map((ele, i) => {
        const change = (e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          if (ele?.onChange) ele?.onChange(value);
          setFormValues((pre) => ({ ...pre, [ele?.name]: value }));
        };
        const error = formError?.[ele?.name];
        return (
          <div key={ele.name + i}>
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
      <button
        type="button"
        className={`${cssButton.button} ${config?.btnClass}`}
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
