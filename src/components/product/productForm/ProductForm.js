import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="mb-20 ">
      <Card className="w-full max-w-[500px] px-4">
        <form onSubmit={saveProduct} className=" ">
          <Card className="border border-blue-900 p-1">
            <label className="block text-lg font-medium text-gray-900">Product Image: 
            <code className="text-gray-900">
              {" Supported Formats: jpg, jpeg, png"}
            </code></label>
            <input
              type="file"
              name="image"
              className="block w-full text-base font-light p-4 my-4 border border-gray-500 rounded-md outline-none"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="w-full h-full max-h-[280px] bg-blue-900 p-4 rounded-md overflow-hidden transition-all duration-300">
                <img src={imagePreview} alt="product" className="w-full" />
              </div>
            ) : (
              <p>No image set for this poduct.</p>
            )}
          </Card>
          <label className="block text-lg font-medium text-gray-900">Product Name:</label>
          <input
            type="text"
            placeholder="Product name"
            name="name"
            className="block w-full text-base font-light p-4 my-4 border border-gray-500 rounded-md outline-none"
            // value={product?.name}
            value={'Pure Coke'}
            onChange={handleInputChange}
          />

          <label className="block text-lg font-medium text-gray-900">Product Category:</label>
          <input
            type="text"
            placeholder="Product Category"
            name="category"
            className="block w-full text-base font-light p-4 my-4 border border-gray-500 rounded-md outline-none"
            // value={product?.category}
            value={'Coke'}
            onChange={handleInputChange}
          />

          <label className="block text-lg font-medium text-gray-900">Product Price:</label>
          <input
            type="text"
            placeholder="Product Price"
            name="price"
            className="block w-full text-base font-light p-4 my-4 border border-gray-500 rounded-md outline-none"
            // value={product?.price}
            value={'3.50'}
            onChange={handleInputChange}
          />

          <label className="block text-lg font-medium text-gray-900">Product Quantity:</label>
          <input
            type="text"
            placeholder="Product Quantity"
            name="quantity"
            className="block w-full text-base font-light p-4 my-4 border border-gray-500 rounded-md outline-none"
            // value={product?.quantity}
            value={'19'}
            onChange={handleInputChange}
          />

          <label className="block text-lg font-medium text-gray-900">Product Description:</label>
          <ReactQuill
            theme="snow"
            // value={description}
            value={'Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart,'}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />

          <div className="my-6">
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
              Save Product
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;