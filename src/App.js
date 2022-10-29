import Login from "./pages/User/Login/Login";
import Register from "./pages/User/Register/Register";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./compornents/layout/AuthLayout";
import "./App.css";
import ProductList from "./pages/User/ProductList/ProductList";
import ProductDetails from "./pages/User/ProductDetails/ProductDetails";
import ProductCart from "./pages/User/ProductCart/ProductCart";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route path="userLogin" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="adminLogin" element={<AdminLogin/>}/>
        </Route>
        <Route path="/productsList" element={<ProductList/>}/>
        <Route path="/productDetail" element={<ProductDetails/>}/>
        <Route path="/productCart" element={<ProductCart/>}/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
