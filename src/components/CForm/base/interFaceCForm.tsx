export interface FormCForm {
  size?: string;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  dir?:string;
  onChange?: (e: StringObject) => void;
  error?: {
    regex?: any; 
    min?: number;
    max?: number;
    required?: boolean; 
  };
  fontSize?:number
  
}

export interface StringObject {
  [key: string]: string;
}
export interface ConfigFormIF {
  btnText?: string;
  btnClass?: string;
  btnStyle?: any;
  dir?:string;
  fontSize?:number
  // dir?: "ltr" | "rtl" ;
  
}
