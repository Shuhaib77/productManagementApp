import React from "react";
import ProductShow from "../card/ProductShow";
import ProductDescription from "../card/ProductDescription";

function ProductDetails({ id }) {
  return (
    <div className="flex flex-col md:flex-row h-full md:h-[90vh] p-20">
      <ProductShow id={id} />
      <ProductDescription id={id} />
    </div>
  );
}

export default ProductDetails;
