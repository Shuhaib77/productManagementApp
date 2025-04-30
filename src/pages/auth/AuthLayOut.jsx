import React from "react";
import { Outlet } from "react-router-dom";
import AuthSidebar from "./common/AuthSidebar";

function AuthLayOut() {
  return (
    <>
      <div className="">
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayOut;
