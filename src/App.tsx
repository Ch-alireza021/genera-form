import "./App.css";
import { CForm } from "./components/CForm/Cform";

// interface SFormIF {

// }

function App() {
  const form = [
    {
      name: "fname",
      type: "text",
      label: "amir",
      placeholder: "amir",
      onChange: (e: string) => {
        // console.log({ e });
      },
      size:'s12 m6 l4',
      error: { min: 5, max: 10, required: true, },
    },
    {
      name: "phone",
      type: "number",
      size:'s12 m6 l4',
      error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      name: "phone",
      type: "number",
      size:'s12 m6 l4',
      error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      name: "phone",
      type: "number",
      size:'s12 m6 l4',
      error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
    {
      name: "phone",
      type: "number",
      size:'s12 m6 l4',
      error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"] },
    },
  ];

  const config={
    btnText:'ثبت',
    btnClass:'btn'
  }

  const submithandler = (formValues: { [key: string]: string }) => {
    console.log({ formValues });
  };

  return (
    <>
      <CForm {...{ form, submithandler,config }} />
    </>
  );
}

export default App;
