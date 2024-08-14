import { FC, useEffect, useRef, useState } from "react";
import { CFormIF, Input, ShowError, ShowLable, Submit } from "./base";
import fromStyle from "./style/ButtonForm.module.css";
import { gridColumn, MyContextProvider } from "./helpers";

export const CForm: FC<CFormIF> = ({ form, submithandler, config }) => {
  const [width, setWidth] = useState<number>(0);
  const divRef = useRef<HTMLDivElement | null>(null);
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                }}
              >
                <ShowLable {...{ ele, config }} />
                <Input {...{ ele, config }} />
                <ShowError {...{ ele }} />
              </div>
            </div>
          );
        })}
      </div>
      <Submit
        {...{
          form,
          submithandler,
          config,
        }}
      />
    </MyContextProvider>
  );
};
