import React, { useEffect, useState } from "react";
import { getProductById } from "../../../../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../common/components/button/Button";

function ProductDescription({ id }) {
  const { product, varients } = useSelector((state) => state.productData);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const dispatch = useDispatch();

  // set the first variant as default
  useEffect(() => {
    if (varients?.length > 0 && !selectedVariant) {
      setSelectedVariant(varients[0]);
    }
  }, [varients, selectedVariant]);

  // dispatch product data based on id
  useEffect(() => {
    dispatch(getProductById(id));
  }, [id, dispatch]);

  // handle variant selection
  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="md:w-1/2 p-6 md:p-10 flex flex-col gap-6">
      <div className="mb-6">
        {selectedVariant && (
          <div className="mt-4 p-6 bg-white rounded-xl shadow-md border border-gray-200 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800">
              {product?.title}
            </h2>
            <p className="text-sm text-gray-600">
              {product?.description || "No description available"}
            </p>
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              Selected Variant Details:
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Variant Name:</span>{" "}
              {selectedVariant?.varientName}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Price:</span>{" "}
              {selectedVariant?.price}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Stock:</span>{" "}
              {selectedVariant?.stock}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Description:</span>{" "}
              {selectedVariant?.description || "No description"}
            </p>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 gap-y-5">
        <div className="flex gap-3 flex-wrap">
          {varients?.map((item, i) => (
            <div
              key={i}
              onClick={() => handleVariantClick(item)}
              className={`text-sm border px-4 py-1 rounded cursor-pointer ${
                selectedVariant?.varientName === item.varientName
                  ? "bg-white text-black font-semibold"
                  : "bg-transparent hover:bg-white hover:text-black"
              }`}
            >
              {item.varientName}
            </div>
          ))}
        </div>
        <div className="flex gap-x-5 justify-between items-center mt-6">
          <Button
            name={"Buy Now"}
            className={"bg-yellow-400 w-30 rounded-xl"}
          />
          <Button
            name={"Add to Cart"}
            className={"bg-yellow-400 w-30 rounded-xl"}
          />
          <i className="fa-regular fa-heart fa-2xl text-red-500 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
