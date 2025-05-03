import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../../../../redux/productSlice";
import { useNavigate } from "react-router-dom";
import { addWishlists } from "../../../../../redux/wishlistSlice";
import Button from "../../../../common/components/button/Button";


function ProductViewCard() {
  const { data } = useSelector((state) => state.productData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(getProductData(""));
  }, [dispatch]);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  //paginationlogic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-x-5 gap-y-6">
        {currentItems?.map((item) => (
          <div
            key={item?._id}
            className="w-[300px] h-auto border border-gray-200 shadow-md rounded cursor-pointer"
          >
            <h1
              className="text-right p-3"
              onClick={() => dispatch(addWishlists(item?._id))}
            >
              <i className="fa-solid fa-heart"></i>
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
                  {item?.varient?.map((v) => (
                    <div key={v?._id} className="text-sm text-gray-700">
                      <p>
                        {v?.varientName} - {v?.price}
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

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-3">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, idx) => (
          <Button
            key={idx}
            className={`px-3 py-1 border rounded ${
              currentPage === idx + 1 ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setCurrentPage(idx + 1)}
            name=   {idx + 1}
         />
       
    
        ))}
        <Button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          name={" Next"}
        />
    
       
      </div>
    </div>
  );
}

export default ProductViewCard;
