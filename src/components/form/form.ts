import { FormCForm, ConfigFormIF, SBObjectIF } from "../CForm";

export const formInput = () => {
  const inputStyle = {
    width: "100%",
    borderRadius: "0.375rem",
    border: "1px solid rgba(55, 65, 81, 1)",
    outline: 0,
    backgroundColor: "rgba(17, 24, 39, 1)",
    padding: "0.75rem 1rem",
    color: "rgba(243, 244, 246, 1)",
  };
  const labelStyle = {
    display: "block",
    color: "rgba(156, 163, 175, 1)",
    marginBottom: "4px",
    fontWeight: 900,
  };
  const form: FormCForm[] = [
    {
      name: "fname11",
      type: "text",
      label: "Name ",
    //   placeholder: "امیر",
      value: "hosein",
      onChange: (e) => {
        console.log({ e });
      },
      size: "s12 m6 l4",
      error: { min: 5, max: 10, required: true },
      labelStyle,
      inputStyle,
    },
    {
      name: "email",
      type: "email", 
      label: "Email",
      placeholder: "Enter your email",
      onChange: (e) => console.log(e),
      size: "s12 m6 l4",
      error: {
        min: 5,
        max: 50,
        required: true,
      },

      labelStyle,
      inputStyle,
    },
    {
      placeholder: "Enter your phone number",
      name: "phone11",
      type: "tel",
      size: "s12 m6 l4",
      error: {
        required: true,
        regex: ["^[0-9]{11}$", "شماره موبایل باید 11 رقم باشد"],
      },
    
      dir: "rtl",
    },
    {
      label: "birthday",
      name: "phone",
      type: "date",
      size: "s12 m6 l4",
      error: {
        required: true,
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
        color: "#a904f5",
      },
    },
    {
      label: "switch",
      name: "switch",
      type: "switch",
      size: "s6 m6 l1",
      onChange: (e) => console.log(e),
      checked: true,
    },
    {
      label: "check box ",
      name: "checkBox",
      type: "checkBox",
      size: "s6 m6 l1",
      onChange: (e) => console.log(e),
      checked: true,
    },
    {
      label: "check box ",
      name: "checkBox1",
      type: "checkBox",
      size: "s6 m6 l1",
      onChange: (e) => console.log(e),
    },
    {
      label: "check box ",
      name: "checkBox3",
      type: "checkBox",
      size: "s6 m6 l1",
      onChange: (e) => console.log(e),
    },
    {
      label: "texterea",
      name: "textarea",
      type: "textarea",
      size: "s12 m6 l4",
      onChange: (e) => console.log(e),
    },
    {
      name: "username",
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
  ];

  const config: ConfigFormIF = {
    btnText: "SIGNE IN",
    btnClass: "btn",
    labelStyle,
    inputStyle,
    dir:'ltr',
    btnStyle: {
      marginTop: "30px",
      display: "block",
      width: "100%",
      backgroundColor: "rgba(167, 139, 250, 1)",
      padding: "0.75rem",
      textAlign: "center",
      color: "rgba(17, 24, 39, 1)",
      border: "none",
      borderRadius: "0.375rem",
      fontWeight: 600,
    },
  };

  const submithandler = (formValues: SBObjectIF): void => {
    console.log({ formValues });
  };
  return { form, config, submithandler };
};
