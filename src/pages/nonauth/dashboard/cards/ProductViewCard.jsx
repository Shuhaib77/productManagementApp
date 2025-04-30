import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../../../../redux/productSlice";
import { useNavigate } from "react-router-dom";

function ProductViewCard() {
  const { data } = useSelector((state) => state.productData);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData(""));
  }, []);

  console.log(data, "lll");

  return (
    <div className="flex flex-wrap p-4 gap-x-5">
      {data.map((item) => (
        <div
          key={item._id}
          className="w-[300px] h-auto border border-gray-200 shadow-md rounded cursor-pointer"
          onClick={() => navigate(`/productdetail/${item._id}`)}
        >
          <div className="h-[150px] flex justify-center items-center p-5">
            <img
              className="h-full object-cover"
              src={item?.image[0]}
              alt={item.title}
            />
          </div>
          <div className="p-5 space-y-2">
            <h1 className="font-semibold text-lg">{item.title}</h1>

            {item.varient && item.varient.length > 0 ? (
              <div className="space-y-1">
                {item.varient.map((v) => (
                  <div key={v._id} className="text-sm text-gray-700">
                    <p>
                      {v.varientName} - ₹{v.price}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No variants available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductViewCard;
