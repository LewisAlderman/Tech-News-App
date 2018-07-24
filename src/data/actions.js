import axios from "./axios";

export const getNewsFeed = () => dispatch => {
	axios.get("/top-headlines").then(response => {
		let identifier = 0;
		let newState = response.data.articles.reduce((obj, item) => {
			identifier += 1;
			obj[identifier] = { ...item, id: identifier };
			return obj;
		}, {});
		dispatch(setNewsFeed(newState));
	});
};

export const setNewsFeed = articles => {
	return {
		type: "SET_NEWSFEED",
		articles: articles,
	};
};
