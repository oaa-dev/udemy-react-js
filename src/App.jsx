import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import { getUser } from "./services/userServices";

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
	};

	return (
		<div className="app">
			<Navbar user={user} cartCount={cart.length} />
			<main>
				<Routing addToCart={addToCart} />
			</main>
		</div>
	);
};

export default App;
