import "./App.css";
import { Sform } from "./components/SForm/Sform";

// interface SFormIF {

// }

function App() {
  const form = [
    {
      name: "fname",
      type: "text",
      label: "amir",
      placeholder: "amir",
      onChange: (e:string) => {
        // console.log({ e });
      },
      error: { min: 5, max: 10, required: true, fn: () => {}, T: "error?" },
    },
   {
      name: "phone",
      type: "number",
      error: { regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"],}
    },
  ];

  const submithandler = (formValues: { [key: string]: string }) => {
    console.log({ formValues });
  };

  return (
    <>
      <Sform {...{ form, submithandler }} />
    </>
  );
}

export default App;
