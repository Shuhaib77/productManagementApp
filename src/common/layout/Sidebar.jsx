import React from "react";
import Accordion from "../components/accordion/Accordion";

function Sidebar({ catData, getSubcatData, subCatdata }) {
  console.log(catData, "oo");
  return (
    <div className="w-[290px] h-[85vh] shadow-md flex flex-col gap-4 items-start p-2 overflow-y-auto">
      <h2>allcatogeriess</h2>
      <h1>Catogeries</h1>

      {catData?.map((item) => (
        <Accordion
          catogery={item.name}
          subCatdata={subCatdata}
          handleClick={() => getSubcatData(item._id)}
        />
      ))}

      <div className="w-full"></div>
    </div>
  );
}

export default Sidebar;
