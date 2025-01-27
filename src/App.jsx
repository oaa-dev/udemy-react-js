import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import { getUser } from "./services/userServices";

const App = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		try {
			const jwtUser = getUser(jwt);

			if (Date.now() >= jwtUser.exp * 1000) {
				localStorage.removeItem("_token");
				location.reload();
			} else {
				setUser(jwtUser);
			}
		} catch (error) {}
	}, []);

	return (
		<div className="app">
			<Navbar user={user} />
			<main>
				<Routing />
			</main>
		</div>
	);
};

export default App;
