import React from "react";
import Accordion from "../components/accordion/Accordion";

function Sidebar({ catData,getSubcatData,subCatdata }) {
  console.log(catData,"oo");
  return (
    <div className="w-[290px] h-[90vh] shadow-md flex flex-col gap-4 items-start p-2 overflow-y-auto">
      <h2>allcatogeriess</h2>
      <h1>Catogeries</h1>
      {catData?.map((item) => (
       <Accordion catogery={item.name} subCatdata={subCatdata} handleClick={() => getSubcatData(item._id)}/>
      ))}

      <div className="w-full">
        {/* <h1 className="text-lg font-bold mb-2">{item.title}</h1>
          <ul className="ml-4">
            {item.subcategories?.map((item, j) => (
              <li key={j} className="mb-2">
                <h1 className="font-semibold">{item.title}</h1>
                <ul className="ml-4 list-disc">
                  {item.items?.map((item, k) => (
                    <li key={k} className="capitalize">
                      {item.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul> */}
      
      </div>
    </div>
  );
}

export default Sidebar;
