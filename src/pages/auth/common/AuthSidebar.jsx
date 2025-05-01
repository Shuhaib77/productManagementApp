import React from "react";
import image from "../../../assets/login.png";
import Button from "../../../common/components/button/Button";
import { useNavigate } from "react-router-dom";

function AuthSidebar({ name, heading, paragraph }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="h-screen w-[500px] object-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="text-center w-1/2 grid grid-cols-1 gap-y-3">
          <h1 className="text-4xl font-bold text-white">{heading}</h1>
          <p className="text-white">{paragraph}</p>
          <Button
            onClick={() => {
              name === "Register"
                ? navigate("/auth/login")
                : navigate("/auth/register");
            }}
            name={name === "Register" ? "Login" : "Register"}
            className={"border border-white w-[250px] text-white rounded-2xl"}
          />
        </div>
      </div>
    </div>
  );
}

export default AuthSidebar;
