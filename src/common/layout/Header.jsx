import React, { useEffect, useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { useDispatch } from "react-redux";
import { getProductData } from "../../../redux/productSlice";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(getProductData(searchTerm));
    }, 500)

    return () => clearTimeout(delayDebounce)
  }, [searchTerm]);

  return (
    <div className="flex h-[10vh] bg-[#143D60]">
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
            // You can remove this button or disable it
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="w-1/2 flex justify-center gap-x-4 items-center">
        <h1>dede</h1>
        <h1>def</h1>
      </div>
    </div>
  );
}

export default Header;
