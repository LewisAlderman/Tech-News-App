import React, { Component } from "react";
import Loading from "./Loading";

class FourOhFour extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}

	componentDidMount() {
		setTimeout(() => this.setState({ loading: false }), 400);
	}

	render() {
		return this.state.loading ? (
			<Loading />
		) : (
			<React.Fragment>
				<h1 className="animated fadeInUp" style={stylish}>
					404
				</h1>
				<h3>Page not found</h3>
			</React.Fragment>
		);
	}
}

const stylish = {
	fontWeight: "400",
	fontSize: "20vw",
	color: "#ddd",
	marginBottom: "0",
};

export default FourOhFour;
