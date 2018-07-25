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

	return (
		<nav>
			<h1 className="animated fadeIn">
				<a
					onClick={
						props.location.pathname !== "/"
							? () => props.history.goBack()
							: null
					}
				>
					{props.location.pathname === "/" ? (
						"Latest"
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="animated fadeInRight feather feather-arrow-left-circle"
						>
							<circle cx="12" cy="12" r="10" />
							<polyline points="12 8 8 12 12 16" />
							<line x1="16" y1="12" x2="8" y2="12" />
						</svg>
					)}
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
