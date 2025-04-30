import React from "react";
import Auth from "../common/Auth";
import AuthSidebar from "../common/AuthSidebar";

function Register() {
  return (
    <>
      <div className="flex justify-between items-center h-screen">
        <AuthSidebar
          name={"Register"}
          heading={"Welcome Back!"}
          paragraph={
            "To keep connected with us plase login with your personal info"
          }
        />
        <div className="flex justify-center items-center w-full h-full">
          <Auth name={"Register"} heading={"Create Account"} />
        </div>
      </div>
    </>
  );
}

export default Register;
