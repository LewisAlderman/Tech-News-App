import React, { Component } from "react";
import Loading from "./Loading";

class FourOhFour extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}

	shouldComponentUpdate(nextState) {
		setTimeout(() => this.setState({ loading: false }), 400);
		return !(nextState === this.state);
	}

	render() {
		return this.state.loading ? (
			<Loading />
		) : (
			<div className="animated fadeIn fourohfour">
				<h1 className="animated fadeInUp">404</h1>
				<h3>Page not found</h3>
				<a
					href="https://github.com/LewisAlderman/Tech-News-App/issues"
					target="_blank"
					rel="noopener noreferrer"
				>
					Report on Github
				</a>
			</div>
		);
	}
}

export default FourOhFour;
