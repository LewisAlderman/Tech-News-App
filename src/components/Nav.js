import React from "react";

const Nav = props => {
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

	console.log("Nav: render");

	return (
		<nav>
			<h1>
				<a
					onClick={
						props.location.pathname !== "/"
							? () => props.history.goBack()
							: null
					}
				>
					{props.location.pathname === "/" ? "Latest" : "Back"}
				</a>
			</h1>

			<a
				href="https://github.com/LewisAlderman/Tech-News-App"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub
			</a>
		</nav>
	);
};

export default Nav;
