import { FC, useContext } from "react";
import { MyContext } from "../../helpers";
import { SBObjectIF, SubmitIF } from "../interFaceCForm";
import fromStyle from "../../style/ButtonForm.module.css";

export const Submit: FC<SubmitIF> = ({ form, submithandler, config }) => {
  const { state, dispatch } = useContext(MyContext);
  const useDispatch = (type: string, payload: SBObjectIF) => {
    dispatch({ type, payload });
  };
  return (
    <button
      type="button"
      className={`${fromStyle.button} ${config?.btnClass}`}
      // style={ { config?.btnStyle ? ...config?.btnStyle : "" } }
      onClick={() => {
        form?.forEach((item) => {
          if (item?.error) {
            const er = item?.error;
            const elem = state?.formValues?.[item?.name];
            if (er.required) {
              switch (elem) {
                case undefined:
                  useDispatch("ERROR", {
                    [item?.name]: "پر کردن این فیلد اجباری است",
                  });
                  return;
                default:
                  useDispatch("DELETE_ERROR", {
                    delete: item?.name,
                  });
              }
            }
            if (er?.min) {
              if (typeof elem === "string" && elem?.length < er.min) {
                useDispatch("ERROR", {
                  [item?.name]: `برای این فیلد باید حداقل ${er.min} کارکتر وارد کنید`,
                });
              } else
                useDispatch("DELETE_ERROR", {
                  delete: item?.name,
                });
            } else if (er?.max) {
              if (typeof elem === "string" && elem?.length < er.max) {
                useDispatch("ERROR", {
                  [item?.name]: `برای این فیلد باید حداکثر ${er.max} کارکتر وارد کنید`,
                });
              } else
                useDispatch("DELETE_ERROR", {
                  delete: item?.name,
                });
            } else if (er?.regex) {
              const checkValid = new RegExp(er?.regex?.[0]);
              if (typeof elem === "string" && !checkValid.test(elem)) {
                useDispatch("ERROR", {
                  [item?.name]: er?.regex?.[1],
                });
              } else {
                useDispatch("DELETE_ERROR", {
                  delete: item?.name,
                });
              }
            }
          }
        });

        if (submithandler) {
          submithandler(state?.formValues);
        }
      }}
    >
      {config?.btnText}
    </button>
  );
};
