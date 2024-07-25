import "./App.css";
import { CForm } from "./components/CForm/Cform";

function App() {
  const form = [
    {
      name: "fname",
      type: "text",
      label: { name: "نام ", style: { padding: "20px" } },
      placeholder: "امیر",
      onChange: (e: any) => {
        console.log({ e });
      },
      size: "s12 m6 l4",
      error: { min: 5, max: 10, required: true },
      // fontSize: 30,
      // style: { borderRadius: "50px" },
      // dir:'ltr'
    },
    {
      label: { name: "نام ", style: { padding: "20px" } },
      name: "phone",
      type: "number",
      size: "s12 m6 l4",
      error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      name: "phone",
      type: "number",
      size: "s12 m6 l8",
      error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      name: "phone",
      type: "number",
      size: "s12 m6 l4",
      error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      name: "phone",
      type: "number",
      size: "s12 m6 l4",
      error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
  ];

  const config = {
    btnText: "ثبت",
    btnClass: "btn",
    dir: "rtl",
    // inputStyle: { borderRadius: "50px" },
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
