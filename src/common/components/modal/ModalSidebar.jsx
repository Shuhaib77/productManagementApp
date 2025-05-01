import React, { useEffect } from "react";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteWishlists, getWishlist } from "../../../../redux/wishlistSlice";

function ModalSidebar({ setIsOpen, isOpen, wishlistData }) {
  const dispatch = useDispatch();
  //wishlist view
  useEffect(() => {
    if (isOpen) {
      dispatch(getWishlist());
    }
  }, [isOpen, dispatch]);

  //   delete wishlist
  const handleDelete = (id) => {
    try {
      dispatch(deleteWishlists(id));
      dispatch(getWishlist());
    } catch (error) {}
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Open Sidebar
      </Button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b bg-blue-900 text-white">
          <div className="flex justify-between items-center gap-x-3">
            <i class="fa-solid fa-heart fa-lg " style={{ color: "white" }}></i>
            <h2 className="text-lg font-semibold">Wishlist</h2>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            className="text-white text-xl hover:text-yellow-400"
            name={"    ×"}
          />
        </div>
        <div className="p-4 h-full flex flex-col gap-y-4 overflow-y-auto">
          {wishlistData?.length > 0 ? (
            wishlistData.map((item) => (
              <div
                key={item._id}
                className="border rounded-lg flex items-center gap-2 p-2"
              >
                <div className="w-20 h-20 flex-shrink-0">
                  <img
                    src={item.image[0]}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                <div className="flex-grow">
                  <h1 className="text-sm font-medium">{item.title}</h1>
                </div>
                <Button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-500 hover:text-red-700 text-xl"
                  title="Remove from wishlist"
                  name={<i className="fa-regular fa-circle-xmark"></i>}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">your wishlist empty</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ModalSidebar;
