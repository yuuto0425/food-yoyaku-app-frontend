import Login from "./pages/User/Login/Login";
import Register from "./pages/User/Register/Register";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./compornents/layout/AuthLayout";
import "./App.css";
import ProductList from "./pages/User/ProductList/ProductList";
import ProductDetails from "./pages/User/ProductDetails/ProductDetails";
import ProductCart from "./pages/User/ProductCart/ProductCart";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

//画面を際レンダリング(更新)するためにuseDispatchが必要。

function App() {
  const adminUser = true;
  const user = useSelector( (state) => state.user.user );
  console.log(user);
  useEffect(()=> {
    const getUserCart = async () => {

    }
    user && getUserCart();
  },[user]);
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* adminのpageを後で追加 url(例 : adminLogin*/}
          {/* Navigateと三項演算子で表示コンポーネント管理 */}
          <Route path="/" element={<AuthLayout />}>
            <Route
              path="userLogin"
              element={user ? <Navigate to="/productsList" /> : <Login />}
            />
            <Route path="register" element={<Register />} />
            <Route path="adminLogin" element={<AdminLogin />} />
            <Route path="/" element={user ? <Navigate to="/productsList" />:<Navigate  to="/userLogin"/>}/>
          </Route>
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/productsList" element={user ? <ProductList />:<Navigate to="/userLogin"/>} />
          <Route path="/productDetails/:id" element={user ? <ProductDetails />:<Navigate to="/userLogin"/>} />
          <Route path="/productCart" element={user ?<ProductCart />:<Navigate  to="/userLogin"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
