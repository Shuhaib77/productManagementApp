import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../../../../redux/productSlice";
import { useNavigate } from "react-router-dom";
import { addWishlists } from "../../../../../redux/wishlistSlice";

function ProductViewCard() {
  const { data } = useSelector((state) => state.productData);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  //getprodtdata
  useEffect(() => {
    dispatch(getProductData(""));
  }, []);

  console.log(data, "lll");

  return (
    <div className="flex flex-wrap p-4 gap-x-5">
      {data?.map((item) => (
        <div
          key={item?._id}
          className="w-[300px] h-auto border border-gray-200 shadow-md rounded cursor-pointer"
        >
          <h1
            className="text-right p-3"
            onClick={() => {
              dispatch(addWishlists(item?._id));
            }}
          >
            <i class="fa-solid fa-heart"></i>
          </h1>
          <div
            className="h-[150px] flex justify-center items-center p-5"
            onClick={() => navigate(`/productdetail/${item?._id}`)}
          >
            <img
              className="h-full object-cover"
              src={item?.image[0]}
              alt={item?.title}
            />
          </div>
          <div className="p-5 space-y-2">
            <h1 className="font-semibold text-lg">{item?.title}</h1>

            {item?.varient && item?.varient?.length > 0 ? (
              <div className="space-y-1">
                {item?.varient?.map((item) => (
                  <div key={item?._id} className="text-sm text-gray-700">
                    <p>
                      {item?.varientName} - {item?.price}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">no variants available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductViewCard;
