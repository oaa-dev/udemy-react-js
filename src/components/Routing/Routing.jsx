import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../Home/HomePage";
import ProductPages from "../Products/ProductsPage";
import SingleProduct from "../SingleProduct/SingleProduct";
import CartPage from "../Cart/CartPage";
import MyOrderPage from "../MyOrder/MyOrderPage";
import LoginPage from "../Authentication/LoginPage";
import SignupPage from "../Authentication/SignupPage";
import Logout from "../Authentication/Logout";

const Routing = ({ addToCart }) => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/products" element={<ProductPages add />} />
			<Route
				path="/product/:id"
				element={<SingleProduct addToCart={addToCart} />}
			/>
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/cart" element={<CartPage />} />
			<Route path="/myorders" element={<MyOrderPage />} />
			<Route path="/logout" element={<Logout />} />
		</Routes>
	);
};

export default Routing;
