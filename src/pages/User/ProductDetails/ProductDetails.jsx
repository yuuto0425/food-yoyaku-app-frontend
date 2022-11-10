import React from "react";
import Navbar from "../../../compornents/parts/Navbar";
// import { Link, useLocation } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../../requestMethods";
import { useSelector } from "react-redux";
import { getUserCartCall } from "../../../redux/apiCalls";
import { userLogout } from "../../../redux/userSlice";

const ProductDetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [getCart, setGetCart] = useState({});
  const [quantityCount ,setQuantityCount] = useState(1);
  const user = useSelector((state) => state.user.user);
  const userId = user._id;
  const { _id, price } = product;
  useEffect(() => {
    const getUserCart = async () => {
      const res = await getUserCartCall(user._id);
      setGetCart(res.data);
    };
    user && getUserCart();
  }, [user,setGetCart]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get(`product/get/${id}`);
        console.log(res.data);
        setProduct(res.data);
        // console.log(product)
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, []);
  console.log(getCart);
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      // console.log(product);
      // console.log(getCart)
      const resResult = !getCart
        ? await userRequest.post("/cart", {
            userId: userId,
            products: [
              {
                productId: _id,
                quantity: quantityCount,
                price: price,
              },
            ],
            productId :_id
          })
        : await userRequest.put(`/cart/update/${getCart._id}`, {
            userId: userId,
            products: [ 
              ...getCart.products,
              {
                productId: _id,
                quantity: quantityCount,
                price: price,
              },
            ],
            productId :_id
          });
      // console.log(resResult);
      setGetCart(resResult.data);

      console.log(getCart);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.put(`/cart/delete?id=${getCart._id}`, {
        //deleteでrequestしないことに注意、bodyが載せられない為。
        products: [
          {
            productId: _id,
          },
        ],
      });
      setGetCart(res.data);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      console.log(getCart);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCount = (e ,type) => {
    e.preventDefault();
    if(type === "dec") {
      quantityCount > 1 && setQuantityCount(quantityCount -1);
    }
    else {
      setQuantityCount(quantityCount + 1);
    }
  }
  return (
    <div className="productsDetailsPage">
      <Navbar />
      <div className="productsDetailsContainer">
        <div className="productsDetailItem">
          <article>
            <figure>
              <img src={product.img} alt="" />
            </figure>
            <div className="productsDetailItemBody">
              <button
                onClick={(e) => handleRemoveProduct(e)}
                className="productRemove"
              >
                削除
              </button>
              <button
                onClick={(e) => handleAddProduct(e)}
                className="productAdd"
              >
                追加
              </button>
              <button className="productDecCount" onClick={(e) => handleCount(e,"dec")}>-</button>
              <span className="productNumCount">{quantityCount}</span>
              <button className="productIncCount" onClick={(e) => handleCount(e,"inc")}>+</button>
              <h3 className="productsDetailItemTitle">{product.productName}</h3>
              <p className="productsDetailItemTxt">{product.desc}</p>
              <p className="productDetailItemPrice">{product.price}円</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
