import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import useForm from "../../../hooks/formHook";

function Modal({ showModal, setShowModal, field, className, fields }) {
  const [previewImages, setPreviewImages] = useState([]);

  const initialvalues =
    fields === "category"
      ? { name: "" }
      : fields === "product"
      ? {
          title: "",
          description: "",
          subCatogery: "",
          images: [],
          varients: [{ varientName: "", price: "", stock: "" }],
        }
      : { selectCategory: "", subCategoryName: "" };

  const formik = useForm(
    initialvalues,
    (values) => {
      console.log("Form Submitted:", values);
    },
    fields
  );
  const addVariant = () => {
    formik.setFieldValue("varients", [
      ...formik.values.varients,
      { varientName: "", price: "", stock: "" },
    ]);
  };
  const removeVariant = (index) => {
    const updated = [...formik.values.varients];
    updated.splice(index, 1);
    formik.setFieldValue("varients", updated);
  };
  const removeImage = (index) => {
    const updatedPreviews = [...previewImages];
    updatedPreviews.splice(index, 1);
    setPreviewImages(updatedPreviews);
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };
  const handleChange = (e) => {
    if (e.target.type === "file") {
      const files = Array.from(e.target.files);
      if (files.length > 0) {
        const newPreviews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages([...previewImages, ...newPreviews]);
        const currentImages = formik.values.images || [];
        formik.setFieldValue("images", [...currentImages, ...files]);
        console.log(`${files.length} files selected`);
      }
    } else {
      formik.handleChange(e);
    }
  };

  const getTitle = () => {
    if (fields === "category") return "Add Category";
    if (fields === "subCategory") return "Add Subcategory";
    return "Add Product";
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
          <div
            className={`bg-white p-6 rounded-lg shadow-xl z-10 ${className}`}
          >
            <h2 className="text-xl font-semibold mb-4">{getTitle()}</h2>

            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                {field.map((item, i) => {
                  if (item.name === "varients") {
                    return (
                      <div key={i}>
                        <p className="font-semibold mb-1">Variants</p>
                        {formik.values.varients.map((variant, index) => (
                          <div key={index} className="flex gap-2 mb-2">
                            {item.data.map((variantItem, j) => (
                              <Input
                                key={j}
                                placeholder={variantItem.name}
                                type={variantItem.type}
                                name={`varients[${index}].${variantItem.name}`}
                                value={variant[variantItem.name]}
                                handleChange={formik.handleChange}
                              />
                            ))}
                            <Button
                              className="text-black px-2"
                              onClick={() => removeVariant(index)}
                              name="X"
                            />
                          </div>
                        ))}
                        <Button
                          className="bg-blue-500 text-white px-4 py-1 rounded"
                          onClick={addVariant}
                          name="Add Variant"
                        />
                      </div>
                    );
                  } else if (item.name === "image") {
                    return (
                      <div key={i}>
                        <label className="font-semibold">Upload Images</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleChange}
                          className="border p-2 w-full mt-1"
                          name="images"
                          multiple
                        />
                        <p className="text-sm text-gray-600">
                          {previewImages.length > 0
                            ? `${previewImages.length} image(s) selected`
                            : "No images selected"}
                        </p>
                        {previewImages.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {previewImages.map((preview, idx) => (
                              <div key={idx} className="relative">
                                <img
                                  src={preview}
                                  alt={`Preview ${idx + 1}`}
                                  className="w-24 h-24 object-cover rounded"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                  onClick={() => removeImage(idx)}
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  } else {
                    return (
                      <Input
                        key={i}
                        placeholder={item.name}
                        type={item.type}
                        name={item.name}
                        value={formik.values[item.name]}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        errors={formik.errors[item.name]}
                      />
                    );
                  }
                })}
              </div>

              <div className="flex gap-x-5 justify-end mt-4">
                <Button
                  type="submit"
                  className="px-4 py-2 bg-gray-300 text-black hover:text-white rounded hover:bg-yellow-400"
                  name="Add"
                />
                <Button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-black hover:text-white rounded hover:bg-yellow-400"
                  name="Discard"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
