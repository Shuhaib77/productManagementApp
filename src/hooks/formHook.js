import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getData, login, register } from "../service/auth";
import { getProductData } from "../../redux/productSlice";
import { useDispatch } from "react-redux";

function useForm(initialValue, onsubmit, name) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: async (values, navigate) => {
        console.log(values);
        
      name === "Register"
        ? await register(values)
        : name === "search"
        ? await dispatch(getProductData(values))
        : await login(values, navigate);
    },
  });
  return formik;
}

export default useForm;
