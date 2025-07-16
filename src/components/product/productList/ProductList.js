import React, { useEffect, useState } from "react";
import { SpinnerImg } from "../../loader/Loader";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import Search from "../../search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_PRODUCTS,
  selectFilteredPoducts,
} from "../../../redux/features/product/filterSlice";
import ReactPaginate from "react-paginate";
// import { confirmAlert } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css";
// import {
//   deleteProduct,
//   getProducts,
// } from "../../../redux/features/product/productSlice";
import { Link } from "react-router-dom";

const ProductList = ({ products, isLoading }) => {
  const [search, setSearch] = useState("");
  const filteredProducts =[] //useSelector(selectFilteredPoducts);
  const dispatch = useDispatch();

  const shortenText = (text, n) => {
    if (text.length > n) {
      return text.substring(0, n).concat("...");
    }
    return text;
  };

  const delProduct = async (id) => {
    // await dispatch(deleteProduct(id));
    // await dispatch(getProducts());
  };

  const confirmDelete = (id) => {
    // confirmAlert({
    //   title: "Delete Product",
    //   message: "Are you sure you want to delete this product.",
    //   buttons: [
    //     {
    //       label: "Delete",
    //       onClick: () => delProduct(id),
    //     },
    //     {
    //       label: "Cancel",
    //     },
    //   ],
    // });
  };

  // Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(FILTER_PRODUCTS({ products, search }));
  }, [products, search, dispatch]);

  return (
    <div className="text-gray-800">
      <hr className="my-4" />
      <div className="p-2 w-full overflow-x-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <h3 className="text-xl font-semibold">Inventory Items</h3>
          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-72"
          />
        </div>

        {isLoading && <SpinnerImg />}

        <div className="w-full overflow-x-auto">
          {!isLoading && products.length === 0 ? (
            <p className="py-4">No product found, please add a product...</p>
          ) : (
            <table className="w-full text-sm md:text-base border-collapse">
              <thead className="border-t-2 border-b-2 border-blue-300">
                <tr>
                  <th className="p-2 border border-gray-200 text-left">s/n</th>
                  <th className="p-2 border border-gray-200 text-left">Name</th>
                  <th className="p-2 border border-gray-200 text-left">Category</th>
                  <th className="p-2 border border-gray-200 text-left">Price</th>
                  <th className="p-2 border border-gray-200 text-left">Quantity</th>
                  <th className="p-2 border border-gray-200 text-left">Value</th>
                  <th className="p-2 border border-gray-200 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((product, index) => {
                  const { _id, name, category, price, quantity } = product;
                  return (
                    <tr 
                      key={_id} 
                      className="border-b border-gray-300 hover:bg-blue-100 hover:bg-opacity-30 transition-colors"
                    >
                      <td className="p-2 border border-gray-200">{index + 1}</td>
                      <td className="p-2 border border-gray-200">{shortenText(name, 16)}</td>
                      <td className="p-2 border border-gray-200">{category}</td>
                      <td className="p-2 border border-gray-200">${price}</td>
                      <td className="p-2 border border-gray-200">{quantity}</td>
                      <td className="p-2 border border-gray-200">${price * quantity}</td>
                      <td className="p-2 border border-gray-200">
                        <div className="flex items-center space-x-3">
                          <Link to={`/product-detail/${_id}`}>
                            <AiOutlineEye size={25} className="text-purple-600 hover:text-purple-800" />
                          </Link>
                          <Link to={`/edit-product/${_id}`}>
                            <FaEdit size={20} className="text-green-600 hover:text-green-800" />
                          </Link>
                          <button onClick={() => confirmDelete(_id)}>
                            <FaTrashAlt size={20} className="text-red-600 hover:text-red-800" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center items-center mt-6 space-x-2"
          pageLinkClassName="px-3 py-1 border rounded hover:bg-gray-200"
          previousLinkClassName="px-3 py-1 border rounded hover:bg-gray-200"
          nextLinkClassName="px-3 py-1 border rounded hover:bg-gray-200"
          activeLinkClassName="bg-blue-500 text-white border-blue-500"
          disabledLinkClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default ProductList;