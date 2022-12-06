import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getProduct } from "../../../redux/features/product/productSlice";
import Card from "../../card/Card";
import { SpinnerImg } from "../../loader/Loader";
import "./ProductDetail.scss";
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
    //   return <span className="--color-success">In Stock</span>;
    // }
    // return <span className="--color-danger">Out Of Stock</span>;
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
    <div className="product-detail">
      <h3 className="--mt">Product Detail</h3>
      <Card cardClass="card">
        {/* {isLoading && <SpinnerImg />} */}
        {/* {product && ( */}
          <div className="detail">
            {/* <Card cardClass="group">
              {product?.image ? (
                <img
                  src={product.image.filePath}
                  alt={product.image.fileName}
                />
              ) : (
                <p>No image set for this product</p>
              )}
            </Card> */}

<Card cardClass="group">
         
                <img
                  src={img1}
                  alt={'image one'}
                />
            
            </Card>

            {/* <h4>Product Availability: {stockStatus(product.quantity)}</h4> */}
            <h4>Product Availability: 20</h4>
            <hr />
            <h4>
              {/* <span className="badge">Name: </span> &nbsp; {product.name} */}
              <span className="badge">Name: </span> &nbsp; Pure Coke
            </h4>
            <p>
              <b>&rarr; SKU : </b>  20
              {/* {product.sku} */}
            </p>
            <p>
              {/* <b>&rarr; Category : </b> {product.category} */}
              <b>&rarr; Category : </b> Coke
            </p>
            <p>
              <b>&rarr; Price : </b> {"$"}
              {/* {product.price} */} 3.50
            </p>
            <p>
              <b>&rarr; Quantity in stock : </b> 19
              
              {/* {product.quantity} */}
            </p>
            <p>
              <b>&rarr; Total Value in stock : </b> {"$"} 19*3.50
              {/* {product.price * product.quantity} */}
            </p>
            <hr />
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize("Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart,"),
                // __html: DOMPurify.sanitize(product.description),
              }}
            ></div>
            <hr />
            <code className="--color-dark">
              Created on: 20 Jan, 2022
              {/* {product.createdAt.toLocaleString("en-US")} */}
            </code>
            <br />
            <code className="--color-dark">
              Last Updated: 23 Mar, 2022
              {/* {product.updatedAt.toLocaleString("en-US")} */}
            </code>
          </div>
        {/* )} */}
      </Card>
    </div>
  );
};

export default ProductDetail;
