import React from "react";
import Auth from "../common/Auth";
import AuthSidebar from "../common/AuthSidebar";

function Login() {
  return (
    <>
      <div className="flex justify-between items-center h-screen">
        <div className="flex justify-center items-center w-full h-full">
          <Auth name={"Login"} heading={"Sign In to Your Account"} />
        </div>
        <AuthSidebar
          name={"Login"}
          heading={"Hello Friend!"}
          paragraph={
            "Enter your personal details and start your journey with us"
          }
        />
      </div>
    </>
  );
}

export default Login;
