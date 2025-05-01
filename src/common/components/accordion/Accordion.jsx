import React, { useState } from "react";
import CheckBox from "../input/CheckBox";
import { useDispatch } from "react-redux";
import { getProductData } from "../../../../redux/productSlice";

function Accordion({ catogery, subCatdata, handleClick }) {
  const [open, setOpen] = useState(false);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const dispatch = useDispatch();

  //filtersetupp
  const handleCheckboxChange = (subCatId) => {
    const updated = selectedSubCats.includes(subCatId)
      ? selectedSubCats.filter((id) => id !== subCatId) 
      : [...selectedSubCats, subCatId]; 

    setSelectedSubCats(updated);
    dispatch(getProductData({ search: "", subCatIds: updated })); 
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-2">
        <h1>{catogery}</h1>
        <h1 onClick={() => { setOpen(!open); handleClick(); }}>
          {open ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </h1>
      </div>

      {open && (
        <div className="transition-all duration-300 ease-in-out p-2">
          <ul className="list-disc pl-4">
            {subCatdata?.map((item) => (
              <CheckBox
                key={item._id}
                name={item.name}
                type="checkbox"
                onClick={() => handleCheckboxChange(item._id)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Accordion;
