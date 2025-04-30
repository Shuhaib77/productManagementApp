import React from "react";
import Header from "../../../common/layout/Header";
import ProductDetails from "./card/ProductDetails";
import { useParams } from "react-router-dom";

function ProductLayout() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <ProductDetails id={id} />
    </>
  );
}

export default ProductLayout;
