import React, { useState } from "react";
import CheckBox from "../input/CheckBox";

function Accordion({catogery,subCatogry,handleClick,subCatdata}) {
  const [open, setOpen] = useState(false);

  console.log(subCatdata,"klklkl");
  
  return (
    <>
     <div className=" w-full">
     <div className="flex justify-between items-center p-2 " >
        <h1>{catogery}</h1>
        <h1
          onClick={() => {
            setOpen(!open);
            handleClick()

            
          }}
        >
          {open?<i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-angle-down"></i>}
        </h1>
       
      </div>
      {open && (
          <div className="transition-all duration-300 ease-in-out p-2">
          <ul className="list-disc pl-4">
            {subCatdata?.map((item) => (
           <CheckBox name={item.name} type={"checkbox"}/>
            ))}
          </ul>
        </div>
        )}
     </div>
    </>
  );
}

export default Accordion;
