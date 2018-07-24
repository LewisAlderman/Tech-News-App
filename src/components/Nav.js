import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	if (document.querySelector("nav")) {
		const nav = document.querySelector("nav");
		let originalScrollPos = window.scrollY;
		var _ = require("lodash");

		window.addEventListener(
			"scroll",
			_.throttle(() => {
				if (originalScrollPos < window.scrollY && window.scrollY > 50) {
					nav.classList.add("hidden");
				} else {
					nav.classList.remove("hidden");
				}

				originalScrollPos = window.scrollY;
			}, 1000)
		);
	}

	return (
		<nav>
			<h1>
				<Link to="/">Home</Link>
			</h1>

			<a href="http://github.com" target="_blank" rel="noopener noreferrer">
				GitHub
			</a>
		</nav>
	);
};

export default Nav;
