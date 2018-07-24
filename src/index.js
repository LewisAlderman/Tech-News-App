import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./data/reducer";
import thunk from "redux-thunk";

const store = createStore(
	reducer,
	{ articles: {} },
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__
			? window.__REDUX_DEVTOOLS_EXTENSION__()
			: f => f
	)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
