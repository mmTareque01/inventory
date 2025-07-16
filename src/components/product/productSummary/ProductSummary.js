import React, { useEffect } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4, BsCartX } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import InfoBox from "../../infoBox/InfoBox";
import { useDispatch, useSelector } from "react-redux";
// import {
//   CALC_CATEGORY,
//   CALC_OUTOFSTOCK,
//   CALC_STORE_VALUE,
//   selectCategory,
//   selectOutOfStock,
//   selectTotalStoreValue,
// } from "../../../redux/features/product/productSlice";

// Icons
const earningIcon = <AiFillDollarCircle size={40} className="text-white" />;
const productIcon = <BsCart4 size={40} className="text-white" />;
const categoryIcon = <BiCategory size={40} className="text-white" />;
const outOfStockIcon = <BsCartX size={40} className="text-white" />;

// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductSummary = ({ products }) => {
  const dispatch = useDispatch();
  const totalStoreValue = 10000;
  const outOfStock = 10;

  // const totalStoreValue = useSelector(selectTotalStoreValue);
  // const outOfStock = useSelector(selectOutOfStock);
  // const category = useSelector(selectCategory);

  // useEffect(() => {
  //   dispatch(CALC_STORE_VALUE(products));
  //   dispatch(CALC_OUTOFSTOCK(products));
  //   dispatch(CALC_CATEGORY(products));
  // }, [dispatch, products]);

  return (
    <div className="w-full">
      <h3 className="mt-1 text-4xl font-bold">Inventory Stats</h3>
      <div className="flex flex-wrap">
        <InfoBox
          icon={productIcon}
          title="Total Products"
          count="39"
          bgColor="bg-[#b624ff]"
        />
        <InfoBox
          icon={earningIcon}
          title="Total Store Value"
          count={`$${formatNumbers(totalStoreValue.toFixed(2))}`}
          bgColor="bg-[#32963d]"
        />
        <InfoBox
          icon={outOfStockIcon}
          title="Out of Stock"
          count={outOfStock}
          bgColor="bg-[#c41849]"
        />
        <InfoBox
          icon={categoryIcon}
          title="All Categories"
          count="7"
          bgColor="bg-[#03a5fc]"
        />
      </div>
    </div>
  );
};

export default ProductSummary;