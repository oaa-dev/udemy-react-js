import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import { getJwt, getUser } from "./services/userServices";
import setAuthToken from "./utils/setAuthToken";
import { addToCartAPI, getCartAPI } from "./services/cartServices";

import "react-toastify/dist/ReactToastify.css";

setAuthToken(getJwt());

const App = () => {
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		try {
			const jwtUser = getUser();

			if (Date.now() >= jwtUser.exp * 1000) {
				localStorage.removeItem("_token");
				location.reload();
			} else {
				setUser(jwtUser);
			}
		} catch (error) {}
	}, []);

	const addToCart = (product, quantity) => {
		// setCart([
		// 	...cart,
		// 	{
		// 		product: product,
		// 		quantity: quantity,
		// 	},
		// ]);

		const updatedCart = [...cart];

		const productIndex = updatedCart.findIndex(
			(item) => item.product._id === product._id
		);

		if (productIndex === -1) {
			updatedCart.push({ product: product, quantity: quantity });
		} else {
			updatedCart[productIndex].quantity += quantity;
		}

		setCart(updatedCart);

		addToCartAPI(product._id, quantity)
			.then((res) => {
				// console.log(res.data);
				toast.success("Product Added Successfully!");
				// toast.error("Product Added Successfully!");
				// toast.warning("Product Added Successfully!");
				// toast.info("Product Added Successfully!");
				// toast("Product Added Successfully!");
			})
			.catch((err) => {
				toast.error("Failed to add product!");
				setCart(cart);
			});
	};

	const getCart = () => {
		getCartAPI()
			.then((res) => {
				setCart(res.data);
			})
			.catch((err) => {
				toast.error("Something went wrong");
			});
	};

	useEffect(() => {
		if (user) {
			getCart();
		}
	}, [user]);

	return (
		<div className="app">
			<Navbar user={user} cartCount={cart.length} />
			<main>
				<ToastContainer position="bottom-right" />
				<Routing addToCart={addToCart} cart={cart} />
			</main>
		</div>
	);
};

export default App;
