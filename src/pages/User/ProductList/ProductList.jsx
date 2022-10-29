import React from "react";
import Navbar from "../../../compornents/parts/Navbar";
import "./ProductList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="productsListPage">
      <Navbar />
      <div className="productsListContainer">
        <ul className="productsListItems">
          <Link to="/productDetail">
            <li className="productsListItem">
              <article>
                <figure>
                  <img src="./assets/img/AdobeStock_512633492.jpeg" alt="" />
                </figure>
                <div className="productsListItemBody">
                  <h3 className="productsListItemTitle">商品のタイトル</h3>
                  <p className="productsListItemTxt">商品の説明</p>
                </div>
              </article>
            </li>
          </Link>
          <Link to="/productDetail">
            <li className="productsListItem">
              <article>
                <figure>
                  <img src="./assets/img/AdobeStock_512633492.jpeg" alt="" />
                </figure>
                <div className="productsListItemBody">
                  <h3 className="productsListItemTitle">商品のタイトル</h3>
                  <p className="productsListItemTxt">商品の説明</p>
                </div>
              </article>
            </li>
          </Link>
          <Link to="/productDetail">
            <li className="productsListItem">
              <article>
                <figure>
                  <img src="./assets/img/AdobeStock_512633492.jpeg" alt="" />
                </figure>
                <div className="productsListItemBody">
                  <h3 className="productsListItemTitle">商品のタイトル</h3>
                  <p className="productsListItemTxt">商品の説明</p>
                </div>
              </article>
            </li>
          </Link>
          <Link to="/productDetail">
            <li className="productsListItem">
              <article>
                <figure>
                  <img src="./assets/img/AdobeStock_512633492.jpeg" alt="" />
                </figure>
                <div className="productsListItemBody">
                  <h3 className="productsListItemTitle">商品のタイトル</h3>
                  <p className="productsListItemTxt">商品の説明</p>
                </div>
              </article>
            </li>
          </Link>
          <Link to="/productDetail">
            <li className="productsListItem">
              <article>
                <figure>
                  <img src="./assets/img/AdobeStock_512633492.jpeg" alt="" />
                </figure>
                <div className="productsListItemBody">
                  <h3 className="productsListItemTitle">商品のタイトル</h3>
                  <p className="productsListItemTxt">商品の説明</p>
                </div>
              </article>
            </li>
          </Link>
          <Link to="/productDetail">
            <li className="productsListItem">
              <article>
                <figure>
                  <img src="./assets/img/AdobeStock_512633492.jpeg" alt="" />
                </figure>
                <div className="productsListItemBody">
                  <h3 className="productsListItemTitle">商品のタイトル</h3>
                  <p className="productsListItemTxt">商品の説明</p>
                </div>
              </article>
            </li>
          </Link>
          <Link to="/productDetail">
            <li className="productsListItem">
              <article>
                <figure>
                  <img src="./assets/img/AdobeStock_512633492.jpeg" alt="" />
                </figure>
                <div className="productsListItemBody">
                  <h3 className="productsListItemTitle">商品のタイトル</h3>
                  <p className="productsListItemTxt">商品の説明</p>
                </div>
              </article>
            </li>
          </Link>
          <Link to="/productDetail">
            <li className="productsListItem">
              <article>
                <figure>
                  <img src="./assets/img/AdobeStock_512633492.jpeg" alt="" />
                </figure>
                <div className="productsListItemBody">
                  <h3 className="productsListItemTitle">商品のタイトル</h3>
                  <p className="productsListItemTxt">商品の説明</p>
                </div>
              </article>
            </li>
          </Link>
          <Link to="/productDetail">
            <li className="productsListItem">
              <article>
                <figure>
                  <img src="./assets/img/AdobeStock_512633492.jpeg" alt="" />
                </figure>
                <div className="productsListItemBody">
                  <h3 className="productsListItemTitle">商品のタイトル</h3>
                  <p className="productsListItemTxt">商品の説明</p>
                </div>
              </article>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
