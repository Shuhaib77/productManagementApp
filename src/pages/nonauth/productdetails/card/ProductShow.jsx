import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../../../redux/productSlice";

function ProductShow({ id }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { product, varients } = useSelector((state) => state.productData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product?.image?.length) {
      setSelectedImage(product.image[0]);
    }
  }, [product]);
  useEffect(() => {
    dispatch(getProductById(id));
  }, [id, dispatch]);

  return (
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
  );
}

export default ProductShow;
