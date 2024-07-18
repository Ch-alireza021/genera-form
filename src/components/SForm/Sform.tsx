import { ChangeEvent, FC, useState } from "react";
interface SformIF {
  form: {
    name: string;
    type: string;
    label: string | undefined;
    placeholder: string | undefined;
    onChange: (e: any) => any;
    error: {
      regex: any;
      min: number | undefined;
      max: number | undefined;
      required: Boolean;
      fn: () => any;
      T: string;
    };
  }[];
  submithandler: (formValues: { [key: string]: string }) => void;
}

export const Sform: FC<SformIF> = ({ form, submithandler }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [formError, setFormError] = useState<{ [key: string]: string }>({});
  //   ---------------------------
  //            onSubmite
  const onSubmite = () => {
    form?.forEach((item) => {
      if (item?.error) {
        const er = item?.error;
        const elem = formValues?.[item?.name];
        if (er.required) {
          if (!elem) {
            setFormError((pre) => ({
              ...pre,
              [item?.name]: "پر کردن این فیلد اجباری است",
            }));
          }
        }
        if (er?.min) {
          if (elem?.length < er.min) {
            setFormError((pre) => ({
              ...pre,
              [item?.name]: `برای این فیلد باید حداقل ${er.min} کارکتر وارد کنید`,
            }));
          } else delete formError?.[item?.name];
        } else if (er?.max) {
          if (elem?.length < er.max) {
            setFormError((pre) => ({
              ...pre,
              [item?.name]: `برای این فیلد باید حداکثر ${er.max} کارکتر وارد کنید`,
            }));
          } else delete formError?.[item?.name];
        } else if (er?.regex) {
          const checkValid = new RegExp(er?.regex?.[0]);
          if (!checkValid.test(elem)) {
            setFormError((pre) => ({
              ...pre,
              [item?.name]: er?.regex?.[1],
            }));
          } else delete formError?.[item?.name];
        }
      }
    });

    if (submithandler) {
      submithandler(formValues);
    }
  };

  return (
    <>
      {form?.map((ele, i) => {
        const change = (e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          if (ele?.onChange) ele?.onChange(value);
          console.log([ele?.name], "111");
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
            {error && (
              <div style={{ color:"red" }}>
                {error}
              </div>
            )}
          </div>
        );
      })}
      <button type="button" onClick={onSubmite}>
        submite
      </button>
    </>
  );
};
