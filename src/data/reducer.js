const setNewsFeed = (state, { articles }) => {
	return {
		...state,
		articles,
	};
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "SET_NEWSFEED":
			return setNewsFeed(state, action);
		default:
			return state;
	}
};
