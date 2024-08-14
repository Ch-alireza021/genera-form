import "./App.css";
import { ConfigFormIF, FormCForm, SBObjectIF } from "./components/CForm";
import { CForm } from "./components/CForm/Cform";
import { Login } from "./components/form/Login";

function App() {
  const form: FormCForm[] = [
    {
      name: "fname1",
      type: "text",
      label: "نام ",
      placeholder: "امیر",
      value: "حسین",
      onChange: (e) => {
        console.log({ e });
      },
      size: "s12 m6 l4",
      error: { min: 5, max: 10, required: true },
      // fontSize: 30,
      inputStyle: {
        borderRadius: "20px 20px 0 0",
        borderColor: "#ab9d3a",
      },
      // labelStyle: { padding: "20px" },
      // dir:'ltr'
    },
    {
      name: "password1",
      type: "password",
      label: "رمز عبور",
      onChange: (e) => {
        console.log({ e });
      },
      size: "s12 m6 l4",
      error: { min: 5, max: 10, required: true },
      // fontSize: 30,
      inputStyle: {
        borderRadius: "0 0 20px 20px",
        borderColor: "#ab9d3a",
      },
      // labelStyle: { padding: "20px" },
      // dir:'ltr'
    },

    {
      name: "password12",
      type: "passwordConfirm",
      label: " تکرا رمز عبور",
      onChange: (e) => {
        console.log({ e });
      },
      size: "s12 m6 l4",
      error: { min: 5, max: 10, required: true },
      // fontSize: 30,
      inputStyle: {
        borderColor: "#3a94ab",
        boxShadow: "5px 5px 10px #0000009b",
      },
      // labelStyle: { padding: "20px" },
      // dir:'ltr'
    },
    {
      name: "email1",
      type: "email",
      label: "ایمیل",
      onChange: (e) => {
        console.log({ e });
      },
      size: "s12 m6 l4",
      error: { min: 5, max: 10, required: true },
      // fontSize: 30,
      inputStyle: {
        borderColor: "#3a94ab",
        boxShadow: "5px 5px 10px #0000009b",
        
      },
      // labelStyle: { padding: "20px" },
      // dir:'ltr'
    },
    {
      placeholder: "شماره تلفن ",
      name: "phone1",
      type: "tel",
      size: "s12 m6 l4",
      error: {
        required: true,
        regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"],
      },
      inputStyle: {
        background: "none",
        border: "none",
        outline: "none",
        padding: "10px 20px,",
        fontSize: "16px",
        borderRadius: "9999px",
        boxShadow: "inset 2px 5px 10px rgba(5, 5, 5, 0.297)",
      },
    },
    {
      label: "تاریخ تولد ",
      name: "birthDay1",
      type: "date",
      size: "s12 m6 l4",
      error: {
        required: true,
        regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"],
      },
      inputStyle: {
        display: "block",
        width: " 100%",
        padding: "10px",
        fontSize: "16px",
        border: "none",
        borderBottom: " 2px solid #a904f5",
        outline: "none",
        background: "transparent",
      },
    },
    {
      label: "نام ",
      name: "switch1",
      type: "switch",
      size: "s6 m6 l1",
      onChange: (e) => console.log(e),
      checked: true,
    },
    {
      label: "چک باکس ",
      name: "checkBox123",
      type: "checkBox",
      size: "s6 m6 l1",
      onChange: (e) => console.log(e),
      checked: true,
    },
    {
      label: "چک باکس ",
      name: "checkBox11234",
      type: "checkBox",
      size: "s6 m6 l1",
      onChange: (e) => console.log(e),
    },
    {
      label: "چک باکس ",
      name: "checkBox312345",
      type: "checkBox",
      size: "s6 m6 l1",
      onChange: (e) => console.log(e),
      // error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      label: " تکست اریا ",
      name: "textarea1",
      type: "textarea",
      size: "s12 m6 l4",
      onChange: (e) => console.log(e),
      // error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      name: "username1",
      type: "select", // Make sure this matches InputType
      label: "Username",
      placeholder: "Enter your username",
      onChange: (e) => console.log(e),
      // inputStyle: { borderRadius: "50px",borderColor:'blue' },
      size: "s12 m6 l4",
      options: [
        { text: "isSelected", value: "selected" },
        { text: "isSelected2", value: "selected2" },
        { text: "isSelected3", value: "selected3" },
      ],
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

  const config: ConfigFormIF = {
    btnText: "ثبت",
    btnClass: "btn",
    // dir: "rtl",
    // dir: "ltr",
    inputStyle: {outline:'none'},
    // labelStyle: { padding: "20px" }
    // fontSize: 30,
  };

  const submithandler = (formValues: SBObjectIF): void => {
    console.log({ formValues });
  };

  return (
    <>
      <CForm {...{ form, submithandler, config }} />
      <Login />
    </>
  );
}

export default App;
