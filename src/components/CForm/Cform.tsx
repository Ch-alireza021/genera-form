import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
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
  const [width, setWidth] = useState<number>(0);
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
  let column = 0;
  return (
    <>
      <div className={`${fromStyle?.grid}`} ref={divRef}>
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
            width: width,
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
                className={`${fromStyle?.input}`}
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
