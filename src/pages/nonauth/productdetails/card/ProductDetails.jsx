import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../../../redux/productSlice";
import Button from "../../../../common/components/button/Button";

function ProductDetails({ id }) {
  const { product, varients } = useSelector((state) => state.productData);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (product?.image?.length) {
      setSelectedImage(product.image[0]);
    }
  }, [product]);

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="flex flex-col md:flex-row h-full md:h-[90vh] p-20">
      <div className="md:w-1/2 p-10 md:p-10 flex flex-col items-center gap-6">
        <div className="w-full max-w-[500px] h-[300px] md:h-[350px] border rounded-md p-10">
          <img
            className="w-full h-full object-cover rounded"
            src={selectedImage}
            alt="Selected"
          />
        </div>
 <div className="flex flex-wrap justify-center gap-4 overflow-auto">
          {product?.image?.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(item)}
              className="cursor-pointer border w-[150px] h-[80px] hover:scale-105 transition p-5 rounded"
            >
              <img
                className="w-full h-full object-cover"
                src={item}
                alt={`thumb-${i}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2  p-6 md:p-10 flex flex-col gap-6">
        <h2 className="text-xl font-bold">Variants</h2>
        {selectedVariant && (
          <div className="mt-4 p-4 text-black rounded shadow border-b-2">
            <h3 className="text-lg font-bold">Selected Variant Details:</h3>
            <p>
              <strong>Variant Name:</strong> {selectedVariant.varientName}
            </p>
            <p>
              <strong>Price:</strong> ${selectedVariant.price}
            </p>
            <p>
              <strong>Stock:</strong> {selectedVariant.stock}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {selectedVariant.description || "No description"}
            </p>
          </div>
        )}
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
          <div className="flex gap-x-5 justify-around items-center">
            <Button name={"kjje"} className={"bg-yellow-400 w-30 rounded-xl"} />
            <Button name={"kjje"} className={"bg-yellow-400 w-30 rounded-xl"} />
            <i class="fa-regular fa-heart fa-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
