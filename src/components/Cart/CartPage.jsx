import React, { useState, useEffect, useContext } from "react";
import "./CartPage.css";
import remove from "../../assets/img/remove.png";
import Table from "../Common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";

import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";
import { checkoutAPI } from "../../services/orderServices";
import { toast } from "react-toastify";

const CartPage = () => {
	const [subTotal, setSubTotal] = useState(0);
	const user = useContext(UserContext);
	const { cart, removeFromCart, setCart } = useContext(CartContext);

	useEffect(() => {
		let total = 0;

		cart.forEach((item) => {
			total += item.product.price * item.quantity;
		});

		setSubTotal(total);
	}, [cart]);

	const checkout = () => {
		const oldCart = [...cart];

		setCart([]);
		checkoutAPI()
			.then((res) => {
				toast.success("Order placed successfully");
			})
			.catch((err) => {
				toast.error("Something went wrong");
				setCart(oldCart);
			});
	};
	return (
		<section className="align_center cart_page">
			<div className="align_center user_info">
				<img
					src={`http://localhost:5000/profile/${user?.profilePic}`}
					alt="user profile"
				/>
				<div>
					<p className="user_name">Name: {user?.name} </p>
					<p className="user_email">Email: {user?.email}</p>
				</div>
			</div>

			{/* cart table */}

			<Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
				<tbody>
					{cart.map((item) => (
						<tr key={item.product._id}>
							<td>{item.product.title}</td>
							<td>{item.product.price}</td>
							<td className="align_center table_quantity_input">
								<QuantityInput
									quantity={item.quantity}
									stock={item.product.stock}
								/>
							</td>
							<td>{item.product.price * item.quantity}</td>
							<td>
								<img
									src={remove}
									alt="remove icon"
									className="cart_remove_icon"
									onClick={() => removeFromCart(item.product._id)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			<table className="cart_bill">
				<tbody>
					<tr>
						<td>Subtotal</td>
						<td>${subTotal}</td>
					</tr>
					<tr>
						<td>Shipping Charge</td>
						<td>$5</td>
					</tr>
					<tr className="cart_bill_final">
						<td>Total</td>
						<td>${subTotal + 5}</td>
					</tr>
				</tbody>
			</table>

			<button
				className="search_button checkout_button"
				onClick={() => checkout()}
			>
				Checkout
			</button>
		</section>
	);
};

export default CartPage;
