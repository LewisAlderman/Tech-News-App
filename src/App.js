import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsFeed } from "./data/actions";
import NewsFeed from "./components/NewsFeed";
import Article from "./components/Article";
import Nav from "./components/Nav";
import FourOhFour from "./components/FourOhFour";
import Loading from "./components/Loading";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { Object } from "core-js";

// component

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
		this.handleNewsFeedLoad = this.handleNewsFeedLoad.bind(this);
	}

	componentDidMount() {
		this.props.onLoad();
		this.handleNewsFeedLoad();
	}

	handleNewsFeedLoad() {
		this.setState({ loading: false });
	}

	componentDidUpdate() {
		if (Object.values(this.props.articles).length && window.pageYOffset < 250) {
			let items = document.querySelectorAll("article");

			items.forEach((item, i) => {
				setTimeout(() => {
					item.className = "animated fadeInUp";
				}, i * 100);
			});
		}
	}

	render() {
		console.log("App: render");
		let { articles } = this.props;

		if (Object.values(this.props.articles).length && window.pageYOffset < 250) {
			let items = document.querySelectorAll("article");

			items.forEach(x => (x.className = "hidden"));
		}

		return (
			<Router>
				<React.Fragment>
					<Route render={props => <Nav {...props} />} />

					<div className="container">
						{this.state.loading ? (
							<Loading />
						) : (
							<Switch>
								<Route exact path="/" render={() => <NewsFeed />} />
								<Route
									exact
									path="/articles/:id"
									render={({ match, history }) => {
										return articles[match.params.id] ? (
											<Article id={+match.params.id} />
										) : (
											<FourOhFour />
										);
									}}
								/>
								<Redirect from="/articles" to="/" />

								<Route component={FourOhFour} />
							</Switch>
						)}
					</div>
				</React.Fragment>
			</Router>
		);
	}
}

// container
const mapStateToProps = state => {
	return {
		articles: state.articles,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(getNewsFeed()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
