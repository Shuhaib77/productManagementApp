import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayOut from "./pages/auth/AuthLayOut";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import HomeLayOut from "./pages/nonauth/dashboard/HomeLayOut";
import ProdctLayOut from "./pages/nonauth/productdetails/ProdctLayOut";

function UserRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLayOut />}>
          <Route index  element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route path="/home" element={<HomeLayOut />}></Route>
        <Route path="/productdetail/:id" element={<ProdctLayOut />}></Route>
      </Routes>
    </div>
  );
}

export default UserRouter;
