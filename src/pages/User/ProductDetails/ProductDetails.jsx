import React from "react";
import Navbar from "../../../compornents/parts/Navbar";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="productsDetailsPage">
      <Navbar />
      <div className="productsDetailsContainer">
        <div className="productsDetailItem">
          <article>
            <figure>
              <img src="./assets/img/AdobeStock_512633492.jpeg" alt="" />
            </figure>
            <div className="productsDetailItemBody">
              <button className="productRemove">削除</button>
              <button className="productAdd">追加</button>
              <h3 className="productsDetailItemTitle">商品のタイトル</h3>
              <p className="productsDetailItemTxt">商品の説明</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
