export interface FormCForm {
  map(arg0: (ele: { onChange: (arg0: string) => void; name: string | number | undefined; label: string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | null | undefined; type: string | (string & {}) | undefined; placeholder: string | undefined; }, i: any) => import("react/jsx-runtime").JSX.Element): unknown;
  forEach(arg0: (item: any) => void): unknown;
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
  },
  size:string|undefined
}


export interface StringObject {
  [key: string]: string;
}
export interface ConfigFormIF {
  btnText:string|undefined;
  btnClass:string|undefined;
  btnStyle:any
}
