import "./App.css";
import { CForm } from "./components/SForm/Cform";

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
      error: { min: 5, max: 10, required: true, },
    },
    {
      name: "phone",
      type: "number",
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
