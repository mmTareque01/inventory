import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({ value, onChange }) => {
  return (
    <div className="relative flex-1 my-1">
      <BiSearch
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
      />
      <input
        type="text"
        placeholder="Search products"
        value={value}
        onChange={onChange}
        className="w-full block text-[1.6rem] font-light px-4 pl-10 py-2 border border-gray-500 rounded-md outline-none my-4"
      />
    </div>
  );
};

export default Search;
