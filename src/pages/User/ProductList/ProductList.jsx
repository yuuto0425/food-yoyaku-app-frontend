import React from "react";
import Navbar from "../../../compornents/parts/Navbar";
import "./ProductList.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { userRequest } from "../../../requestMethods";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await userRequest.get("/product/get");
      setProducts(res.data);
      // console.log(products);
    };
    getProducts();
  }, []);

  return (
    <div className="productsListPage">
      <Navbar />
      <div className="productsListContainer">
        <ul className="productsListItems">
          {products.map((product) => (
            <Link to={`/productDetails/${product._id}`} key={product._id}>
              <li className="productsListItem" >
                <article>
                  <figure>
                    <img src={product.img || "./assets/img/noimage.png" } alt="" />
                  </figure>
                  <div className="productsListItemBody">
                    <h3 className="productsListItemTitle">{product.productName}</h3>
                    <p className="productsListItemTxt">{product.desc}</p>
                  </div>
                </article>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
