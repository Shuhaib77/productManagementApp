import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  addProduct,
  editProduct,
  getProductById,
  getProductData,
} from "../../redux/productSlice";
import { useDispatch } from "react-redux";
import { addCatogery, getCatogery } from "../../redux/catogerySlice";
import { addSubCatogery, getsubCatogery } from "../../redux/subCatogeryslice";
import { login, register } from "../service/auth";

function useForm(
  initialValue,
  onsubmit,
  name,
  setShowModal,
  validationSchema,
  productId
) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    validationSchema,
    initialValues: initialValue,
    onSubmit: async (values) => {
      console.log("Form Values:", values);
      console.log("Product ID:", productId);

      if (name === "Add product" || name === "update Product") {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("subCatogery", values.subCatogery);

        if (values.images && values.images.length > 0) {
          values.images.forEach((image) => {
            if (typeof image === "string") {
              // Skip already uploaded image URLs
              return;
            }
            formData.append("images", image);
          });
        }

        formData.append("varients", JSON.stringify(values.varients));

        if (name === "Add product") {
          await dispatch(addProduct(formData));
          dispatch(getProductData());
        } else {
          await dispatch(editProduct({ formData, productId }));
          dispatch(getProductById(productId));
        }

        setShowModal(false);
      } else if (name === "Register") {
        await register(values);
        setShowModal(false);
      } else if (name === "search") {
        dispatch(getProductData(values));
        setShowModal(false);
      } else if (name === "Add category") {
       await dispatch(addCatogery(values));
        dispatch(getCatogery())
        setShowModal(false);
      } else if (name === "Add subCategory") {
        await dispatch(addSubCatogery(values));
        dispatch(getsubCatogery())
      } else {
        await login(values, navigate);
      }
    },
  });

  return formik;
}

export default useForm;
