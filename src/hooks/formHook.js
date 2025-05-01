import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { addProduct, getProductData } from "../../redux/productSlice";
import { useDispatch } from "react-redux";
import { addCatogery } from "../../redux/catogerySlice";
import { addSubCatogery } from "../../redux/subCatogeryslice";
import { login, register } from "../service/auth";

function useForm(initialValue, onsubmit, name, setShowModal) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: async (values) => {
      console.log(values, "Form Values");
      if (name === "product") {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("subCatogery", values.subCatogery);
        if (values.images && values.images.length > 0) {
          values.images.forEach((image, index) => {
            formData.append("images", image);
            console.log(`Image ${index + 1} appended:`, image.name);
          });
        }
        formData.append("varients", JSON.stringify(values.varients));
        console.log("Form data entries:");
        for (let pair of formData.entries()) {
          console.log(
            pair[0] + ": " + (pair[1] instanceof File ? pair[1].name : pair[1])
          );
        }
        dispatch(addProduct(formData));
      } else if (name === "Register") {
        await register(values);
        setShowModal(false);
      } else if (name === "search") {
        dispatch(getProductData(values));
        setShowModal(false);
      } else if (name === "category") {
        dispatch(addCatogery(values));
        setShowModal(false);
      } else if (name === "subCategory") {
        dispatch(addSubCatogery(values));
      } else {
        await login(values, navigate);
      }
    },
  });

  return formik;
}

export default useForm;
