import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//component
const NewsFeed = ({ articles, onLoad }) => {
	return articles.map((article, i) => {
		return (
			<article className={"article-" + i} key={article.id} onLoad={onLoad}>
				<Link to={"/articles/" + article.id}>
					<div className="img-container">
						<img src={article.urlToImage} alt="Source provided imagery" />
					</div>
					<h2 className="headline">
						{article.title.length < 120
							? article.title
							: article.title.slice(1, 120) + "..."}
					</h2>
				</Link>
			</article>
		);
	});
};

// container
const mapStateToProps = state => {
	return {
		articles: Object.values(state.articles),
	};
};

export default connect(mapStateToProps)(NewsFeed);
