export interface FormCForm {
  size?: string;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: StringObject) => void;
  error?: {
    regex?: any; // made optional
    min?: number;
    max?: number;
    required?: boolean; // changed Boolean to boolean
  };
}


export interface StringObject {
  [key: string]: string;
}
export interface ConfigFormIF {
  btnText?:string;
  btnClass?:string;
  btnStyle?:any
}
