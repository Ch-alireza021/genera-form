// type InputType = 'text' | 'email' | 'password' | 'number';
export interface FormCForm {
  size?: string;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  dir?: string;
  onChange?: (e: string) => void;
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
  value?:string
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

export interface CformIF {
  form: FormCForm[];
  submithandler: (formValues: { [key: string]: string }) => void;
  config: ConfigFormIF;
}
