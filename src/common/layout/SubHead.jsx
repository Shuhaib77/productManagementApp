import React, { useState } from "react";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";

function SubHead() {
  const [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState("");

  const category = [{ name: "name", type: "text" }];
  const subCategory = [
    { name: "name", type: "text" },
    { name: "catogery", type: "text" },
  ];
  const product = [
    { name: "title", type: "text" },
    {
      name: "varients",
      data: [
        { name: "varientName", type: "text" },
        { name: "price", type: "number" },
        { name: "stock", type: "number" },
      ],
    },
    { name: "subCatogery", type: "text" },
    { name: "description", type: "text" },
    { name: "image", type: "file" },
  ];

  // Set form fields based on selected type
  const field =
    fields === "category"
      ? category
      : fields === "subCategory"
      ? subCategory
      : product;

  // Dynamically change modal width
  const className = fields === "product" ? "w-[600px]" : "w-[400px]";

  return (
    <div>
      <div className="flex justify-between shadow-sm h-[6vh] items-center px-4">
        <h1 className="text-lg font-semibold">Home</h1>
        <div className="flex gap-x-5">
          <Button
            name={"Add Category"}
            className={"bg-yellow-400 rounded-md"}
            onClick={() => {
              setShowModal(true);
              setFields("category");
            }}
          />
          <Button
            name={"Add Subcategory"}
            className={"bg-yellow-400 rounded-md"}
            onClick={() => {
              setShowModal(true);
              setFields("subCategory");
            }}
          />
          <Button
            name={"Add Product"}
            className={"bg-yellow-400 rounded-md"}
            onClick={() => {
              setShowModal(true);
              setFields("product");
            }}
          />
        </div>
      </div>

      {showModal && (
        <Modal
          field={field}
          showModal={showModal}
          setShowModal={setShowModal}
          className={className}
          fields={fields}
        />
      )}
    </div>
  );
}

export default SubHead;
