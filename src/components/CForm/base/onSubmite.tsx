import { FormCForm, StringObject } from "./interFaceCForm";

interface OnSubmiteSFormIF {
  form: FormCForm[];
  submithandler: (formValues: StringObject) => void;
  formValues: StringObject;
  formError: StringObject;
  setFormError: (arg0: any) => void;
}

export const onSubmite = ({
  form,
  submithandler,
  formError,
  setFormError,
  formValues,
}: OnSubmiteSFormIF) => {
  form?.forEach((item) => {
    if (item?.error) {
      const er = item?.error;
      const elem = formValues?.[item?.name];
      if (er.required) {
        if (!elem) {
          setFormError((pre:StringObject) => ({
            ...pre,
            [item?.name]: "پر کردن این فیلد اجباری است",
          }));
        }
      }
      if (er?.min) {
        if (elem?.length < er.min) {
          setFormError((pre: StringObject) => ({
            ...pre,
            [item?.name]: `برای این فیلد باید حداقل ${er.min} کارکتر وارد کنید`,
          }));
        } else delete formError?.[item?.name];
      } else if (er?.max) {
        if (elem?.length < er.max) {
          setFormError((pre: StringObject) => ({
            ...pre,
            [item?.name]: `برای این فیلد باید حداکثر ${er.max} کارکتر وارد کنید`,
          }));
        } else delete formError?.[item?.name];
      } else if (er?.regex) {
        const checkValid = new RegExp(er?.regex?.[0]);
        if (!checkValid.test(elem)) {
          setFormError((pre: StringObject) => ({
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
