import React from "react";
import Navbar from "../../../compornents/parts/Navbar";
import "./ProductCart.css";

const ProductCart = () => {
  return (
    <div className="productCartPage">
      <Navbar />
      <div className="productCartContainer">
        <ul className="productCartItems">
          <li className="productCartItem">
            <article>
              <figure>
                <img src="./assets/img/AdobeStock_512633492.jpeg" alt="" />
              </figure>
              <div className="productCartItemBody">
                <div className="productCartItemTitle">商品のタイトル</div>
                <div className="productCartItemCount">個数<span>1</span></div>
                <div className="productCartButtonArea">
                  <button className="productRemove">削除</button>
                  <button className="productAdd">追加</button>
                  <button className="productReservation">予約する</button>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCart;
