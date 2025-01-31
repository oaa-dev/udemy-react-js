import React, { useEffect, useState } from "react";
import "./MyOrderPage.css";
import Table from "../Common/Table";
import { getMyOrderAPI } from "../../services/orderServices";
import useData from "../../hooks/useData";
import Loader from "../Common/Loader";

const MyOrderPage = () => {
	// const [orders, setOrders] = useState([]);
	const { data: orders, error, isLoading } = useData("/order");

	const getProductString = (order) => {
		const productStringArr = order.products.map(
			(item) => `${item.product.title}(${item.quantity})`
		);

		return productStringArr.join(", ");
	};
	// useEffect(() => {
	// 	getMyOrderAPI()
	// 		.then((res) => {
	// 			setOrders(res.data);
	// 		})
	// 		.catch((err) => {
	// 			toast.error("Something went wrong");
	// 		});
	// }, []);

	return (
		<section className="align_center myorder_page">
			{isLoading && <Loader />}
			{error && <em className="form_error">{error}</em>}
			{orders && (
				<Table headings={["Order", "Products", "Total", "Status"]}>
					<tbody>
						{orders.map((order, index) => (
							<tr key={order._id}>
								<td>{index + 1}</td>
								<td>{getProductString(order)}</td>
								<td>${order.total}</td>
								<td>{order.status}</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</section>
	);
};

export default MyOrderPage;
