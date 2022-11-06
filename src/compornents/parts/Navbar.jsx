import React from "react";
import "./Navbar.css";
import RiceBowlRoundedIcon from "@mui/icons-material/RiceBowlRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import RememberMeOutlinedIcon from "@mui/icons-material/RememberMeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/apiCalls";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const handleLogout = async  (e) => {
    e.preventDefault();
    try {
      const result =  await logout(dispatch, user);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="nav">
      <div className="navContainer">
        <div className="navLogo">
          <h1>
            みんなの
            <br />
            予約注文アプリ
          </h1>
        </div>
        <ul className="navLists">
          <li className="navList">
            <Link to="/productsList">
              <RiceBowlRoundedIcon />
              商品一覧
            </Link>
          </li>
          <li className="navList">
            <Link to="/productCart">
              <ShoppingCartIcon />
              注文カート
            </Link>
          </li>
          <li className="navList">
            <ManageSearchIcon />
            注文履歴
          </li>
          <li className="navList">
            <RememberMeOutlinedIcon />
            会員情報
          </li>
          <li className="navList" onClick={handleLogout}>
            <LogoutOutlinedIcon />
            ログアウト
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
