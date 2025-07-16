import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getProduct } from "../../../redux/features/product/productSlice";
import Card from "../../card/Card";
import { SpinnerImg } from "../../loader/Loader";
import DOMPurify from "dompurify";

// importing for demo
import img1 from '../../../assets/img.jpeg'

const ProductDetail = () => {
  useRedirectLoggedOutUser("/login");
  // const dispatch = useDispatch();
  // const { id } = useParams();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const { product, isLoading, isError, message } = useSelector(
  //   (state) => state.product
  // );

  const stockStatus = (quantity) => {
    // if (quantity > 0) {
    //   return <span className="text-green-600">In Stock</span>;
    // }
    // return <span className="text-red-600">Out Of Stock</span>;
  };

  // useEffect(() => {
  //   if (isLoggedIn === true) {
  //     dispatch(getProduct(id));
  //   }
  //   if (isError) {
  //     console.log(message);
  //   }
  // }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div className="mb-20 w-full max-w-[500px]">
      <h3 className="mt-4">Product Detail</h3>
      <Card className="w-full max-w-[500px] p-4">
        {/* {isLoading && <SpinnerImg />} */}
        {/* {product && ( */}
          <div className="space-y-4">
            <Card className="border border-blue-900 p-1">
              <img src={img1} alt={'image one'} />
            </Card>

            <h4>Product Availability: 20</h4>
            <hr className="border-t border-gray-300" />
            <h4>
              <span className="bg-red-600 text-white px-1 rounded">Name: </span> &nbsp; Pure Coke
            </h4>
            <p>
              <b className="text-blue-900">&rarr; SKU : </b> 20
            </p>
            <p>
              <b className="text-blue-900">&rarr; Category : </b> Coke
            </p>
            <p>
              <b className="text-blue-900">&rarr; Price : </b> {"$"}3.50
            </p>
            <p>
              <b className="text-blue-900">&rarr; Quantity in stock : </b> 19
            </p>
            <p>
              <b className="text-blue-900">&rarr; Total Value in stock : </b> {"$"}{19*3.50}
            </p>
            <hr className="border-t border-gray-300" />
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize("Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart,"),
              }}
            ></div>
            <hr className="border-t border-gray-300" />
            <code className="text-gray-900">
              Created on: 20 Jan, 2022
            </code>
            <br />
            <code className="text-gray-900">
              Last Updated: 23 Mar, 2022
            </code>
          </div>
        {/* )} */}
      </Card>
    </div>
  );
};

export default ProductDetail;