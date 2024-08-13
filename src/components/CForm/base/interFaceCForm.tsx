import { ChangeEvent, ReactNode } from "react";

type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "switch"
  | "select"
  | "textarea"
  | "checkBox";
export interface FormCForm {
  size?: string;
  name: string;
  type: InputType;
  label?: string;
  placeholder?: string;
  dir?: string;
  onChange?: (e: string | boolean) => void;
  error?: {
    regex?: any;
    min?: number;
    max?: number;
    required?: boolean;
  };
  fontSize?: number;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  options?: { value: string; text: string }[];
  value?: string;
}

export interface StringObject {
  [key: string]: string;
}
export interface ConfigFormIF {
  btnText?: string;
  btnClass?: string;
  btnStyle?: any;
  dir?: string;
  fontSize?: number;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  // dir?: "ltr" | "rtl" ;
}

export type SubmithandlerIF = (arg0: SBObjectIF) => void;

export interface CFormIF {
  form: FormCForm[];
  submithandler: SubmithandlerIF;
  config: ConfigFormIF;
}

export interface SBObjectIF {
  [key: string]: string | boolean;
}

export interface MyContextAction {
  type: string;
  payload: SBObjectIF;
}

export interface MyContextProviderIF {
  children: ReactNode;
}

export interface FormInitialStateIF {
  formValues: SBObjectIF;
  error: SBObjectIF;
}

export interface SubmitIF {
  form: FormCForm[];
  submithandler: SubmithandlerIF;
  config: ConfigFormIF;
}
export interface InputTNIF {
  ele: FormCForm;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
  config: ConfigFormIF;
}

export interface CheckBoxIF {
  ele: FormCForm;
  change: (e: ChangeEvent<HTMLInputElement>, type: "checked") => void;
  config: ConfigFormIF;
}
