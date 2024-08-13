import { FC, useContext, useEffect, useRef, useState } from "react";
import {
  CformIF,
  Input,
  onSubmite,
  ShowError,
  ShowLable,
  StringObject,
  Submit,
} from "./base";
import fromStyle from "./style/ButtonForm.module.css";
import { gridColumn, MyContextProvider } from "./helpers";

export const CForm: FC<CformIF> = ({ form, submithandler, config }) => {
  const [formValues, setFormValues] = useState<StringObject>({});
  const [formError, setFormError] = useState<StringObject>({});
  const [width, setWidth] = useState<number>(0);
  const divRef = useRef<HTMLDivElement | null>(null);
  // const specialType = ["checkBox", "switch", "textarea"];
  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  let column = 1;
  const direction = config?.dir === "ltr" ? "ltr" : "rtl";
  return (
    <MyContextProvider>
      <div
        className={`${fromStyle?.grid}`}
        ref={divRef}
        style={{
          direction: direction,
          fontSize: `${config?.fontSize || ""}px`,
        }}
      >
        {form?.map((ele, i) => {
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
                gridColumnStart,
                gridColumnEnd,
                direction: ele?.dir
                  ? ele?.dir === ("ltr" || "rtl")
                    ? "ltr"
                    : "rtl"
                  : direction,
                fontSize: `${ele?.fontSize || config?.fontSize || ""}px`,
              }}
              className={`${fromStyle?.column}`}
            >
              <ShowLable {...{ ele, config }} />
              <Input {...{ ele, formError, config, setFormValues }} />
              <ShowError {...{ele}} />
            </div>
          );
        })}
      </div>
      {/* <button
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
            state,
            dispatch
          })
        }
      >
        {config?.btnText}
      </button> */}
      <Submit
        {...{
          form,
          submithandler,
          formError,
          setFormError,
          formValues,
          config,
        }}
      />
    </MyContextProvider>
  );
};
