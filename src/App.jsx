import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import ProductPages from "./components/Products/ProductsPage";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import CartPage from "./components/Cart/CartPage";
import MyOrderPage from "./components/MyOrder/MyOrderPage";
import LoginPage from "./components/Authentication/LoginPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductPages /> */}
        {/* <SingleProduct /> */}
        {/* <CartPage /> */}
        {/* <MyOrderPage /> */}
        <LoginPage />
      </main>
    </div>
  );
};

export default App;
