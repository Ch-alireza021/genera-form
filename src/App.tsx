import "./App.css";
import { CForm } from "./components/CForm/Cform";

function App() {
  const form = [
    {
      name: "fname",
      type: "text",
      label: "نام ",
      placeholder: "امیر",
      onChange: (e: any) => {
        console.log({ e });
      },
      size: "s12 m6 l4",
      error: { min: 5, max: 10, required: true },
      // fontSize: 30,
      // inputStyle: { borderRadius: "50px" },
      // labelStyle: { padding: "20px" }
      // dir:'ltr'
    },
    {
      label: "نام ",
      name: 'phone',
      type: "number",
      size: "s12 m6 l4",
      error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    // {
    //   name: "username",
    //   type: "text", // Make sure this matches InputType
    //   label: "Username",
    //   placeholder: "Enter your username",
    //   onChange: (e) => console.log(e),
    //   size: "s12 m6 l4",
    //   error: {
    //     min: 3,
    //     max: 20,
    //     required: true,
    //   },
    // },
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

  const config = {
    btnText: "ثبت",
    btnClass: "btn",
    // dir: "rtl",
    // dir: "ltr",
    // inputStyle: { borderRadius: "50px" },
    // labelStyle: { padding: "20px" }
    // fontSize: 30,
  };

  const submithandler = (formValues: { [key: string]: string }) => {
    console.log({ formValues });
  };

  return (
    <>
      <CForm {...{ form, submithandler, config }} />
    </>
  );
}

export default App;
