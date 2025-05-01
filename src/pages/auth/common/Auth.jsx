import React from "react";
import Input from "../../../common/components/input/Input";
import Button from "../../../common/components/button/Button";
import useForm from "../../../hooks/formHook";
import { registerSchema } from "../../../utils/registerSchema";
import { loginschema } from "../../../utils/loginSchema";

function Auth({ name, heading }) {
  const register = [
    {
      name: "name",
      type: "text",
      icon: <i className="fa-regular fa-user"></i>,
    },
    {
      name: "email",
      type: "email",
      icon: <i className="fa-regular fa-envelope"></i>,
    },
    {
      name: "password",
      type: "password",
      icon: <i className="fa-solid fa-lock" style={{ color: "#000000" }}></i>,
    },
  ];

  const login = [
    {
      name: "email",
      type: "email",
      icon: <i className="fa-regular fa-user"></i>,
    },
    {
      name: "password",
      type: "password",
      icon: <i className="fa-regular fa-envelope"></i>,
    },
  ];

  const validatinSchema = name === "Register" ? registerSchema : loginschema;
  const field = name === "Register" ? register : login;
  const initialValues =
    name === "Register"
      ? { name: "", email: "", password: "" }
      : { email: "", password: "" };

  const formik = useForm(
    initialValues,
    (values) => {
      console.log(values);
    },
    name,
    "",
    validatinSchema
  );

  return (
    <>
      <form
        className="grid grid-cols-1 gap-y-5 w-[500px] text-center"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-yellow-500 text-5xl font-bold">{heading}</h1>
        {field.map((item, i) => (
        <div>
              <Input
            key={i}
            placeholder={item.name}
            type={item.type}
            icon={item.icon}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            name={item.name}
            value={formik.values[item.name]}
            error={formik.errors[item.name]}
          />
          <span className="text-red-400 text-sm text-left">
          {formik.touched[item.name] && formik.errors[item.name]}
        </span>
        </div>

        ))}
     
        <div className="text-center">
          <Button
            name={"submit"}
            type={"submit"}
            className={"w-50 bg-yellow-400 rounded-3xl"}
          />
        </div>
      </form>
    </>
  );
}

export default Auth;
