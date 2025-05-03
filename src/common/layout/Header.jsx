import React, { useEffect, useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../../redux/productSlice";
import ModalSidebar from "../components/modal/ModalSidebar";
import { getWishlist } from "../../../redux/wishlistSlice";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { wishlistData } = useSelector((state) => state.wishlistData);

  //search
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(getProductData({ search: searchTerm, subCatId: "" }));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  //getwishlistData
  useEffect(() => {
    dispatch(getWishlist());
  }, [isOpen]);

  return (
    <div className="flex h-[8vh] bg-[#143D60]">
      <div className="w-1/2 flex justify-end items-center">
        <div className="w-[400px] flex">
          <Input
            className={"w-full rounded-sm"}
            placeholder={"search"}
            handleChange={(e) => setSearchTerm(e.target.value)}
            name="search"
          />
          <Button
            name={"Search"}
            className={"bg-yellow-400 rounded-2xl w-22"}
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="w-1/2 flex justify-center gap-x-4 items-center">
        <h1 onClick={() => setIsOpen(true)}>
          <i class="fa-solid fa-heart fa-lg " style={{ color: "white" }}></i>
        </h1>
        <h1>
          <i
            class="fa-solid fa-cart-shopping fa-lg"
            style={{ color: "white" }}
          ></i>
        </h1>
      </div>
      {isOpen && (
        <ModalSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          wishlistData={wishlistData}
        />
      )}
    </div>
  );
}

export default Header;
