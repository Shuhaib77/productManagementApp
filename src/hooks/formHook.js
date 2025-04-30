import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { addProduct, getProductData } from "../../redux/productSlice";
import { useDispatch } from "react-redux";
import { addCatogery } from "../../redux/catogerySlice";
import { addSubCatogery } from "../../redux/subCatogeryslice";
import { login, register } from "../service/auth";

function useForm(initialValue, onsubmit, name) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: async (values) => {
      console.log(values, "Form Values");
      
      if (name === "product") {
        // Create a new FormData instance
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("subCatogery", values.subCatogery);
        
        // Handle multiple images - append each one with the same field name
        if (values.images && values.images.length > 0) {
          values.images.forEach((image, index) => {
            formData.append("images", image);
            console.log(`Image ${index+1} appended:`, image.name);
          });
        }
        
        // Need to stringify the varients array for form data
        formData.append("varients", JSON.stringify(values.varients));
        
        // Log the form data to verify
        console.log("Form data entries:");
        for (let pair of formData.entries()) {
          console.log(pair[0] + ": " + (pair[1] instanceof File ? pair[1].name : pair[1]));
        }
        
        // Dispatch with the formData
        dispatch(addProduct(formData));
      } else if (name === "Register") {
        await register(values);
      } else if (name === "search") {
        dispatch(getProductData(values));
      } else if (name === "category") {
        dispatch(addCatogery(values));
      } else if (name === "subCategory") {
        dispatch(addSubCatogery(values));
      } else {
        await login(values,navigate);
      }
    },
  });
  
  return formik;
}

export default useForm;