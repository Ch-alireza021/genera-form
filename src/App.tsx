import "./App.css";
import { ConfigFormIF, FormCForm, SBObjectIF, SubmithandlerIF, SubmitIF } from "./components/CForm";
import { CForm } from "./components/CForm/Cform";

function App() {
  const form:FormCForm[] = [
    {
      name: "fname",
      type: "text",
      label: "نام ",
      // value:'امیرحسین',
      placeholder: "امیر",
      onChange: (e) => {
        console.log({ e });
      },
      size: "s12 m6 l4",
      error: { min: 5, max: 10, required: true },
      // fontSize: 30,
      // inputStyle: { borderRadius: "50px",borderColor:'blue' },
      // labelStyle: { padding: "20px" },
      // dir:'ltr'
    },
    {
      label: "نام ",
      name: 'phone',
      type: "number",
      size: "s12 m6 l4",
      error: { required: true, regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      label: "نام ",
      name: 'switch',
      type: "switch",
      size: "s12 m6 l4",
      onChange: (e) => console.log(e),
      // error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      label: "چک باکس ",
      name: 'checkBox',
      type: "checkBox",
      size: "s12 m6 l4",
      onChange: (e) => console.log(e),
      // error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      label: " تکست اریا ",
      name: 'textarea',
      type: "textarea",
      size: "s12 m6 l4",
      onChange: (e) => console.log(e),
      // error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      name: "username",
      type: "select", // Make sure this matches InputType
      label: "Username",
      placeholder: "Enter your username",
      onChange: (e) => console.log(e),
      // inputStyle: { borderRadius: "50px",borderColor:'blue' },
      size: "s12 m6 l4",
      options:[
        {text:'isSelected',value:'selected'},
        {text:'isSelected2',value:'selected2'},
      ]
      // error: {
      //   min: 3,
      //   max: 20,
      //   required: true,
      // },
    },
    // {
    //   name: "email",
    //   type: "email", // Make sure this matches InputType
    //   label: "Email",
    //   placeholder: "Enter your email",
    //   onChange: (e) => console.log(e),
    //   size: "s12 m6 l4",
    //   error: {
    //     min: 5,
    //     max: 50,
    //     required: true,
    //   },
    
    // },
  ];

  const config:ConfigFormIF = {
    btnText: "ثبت",
    btnClass: "btn",
    // dir: "rtl",
    // dir: "ltr",
    // inputStyle: { borderRadius: "50px" },
    // labelStyle: { padding: "20px" }
    // fontSize: 30,
  };

  const submithandler= (formValues:SBObjectIF) :void=> {
    console.log({ formValues });
  };

  return (
    <>
      <CForm {...{ form, submithandler, config }} />
    </>
  );
}

export default App;
