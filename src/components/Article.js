import React from "react";
import { connect } from "react-redux";
import moment from "moment";
// component
class Article extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		let { article } = this.props;
		let published = date => moment(date).fromNow();

		return (
			<article className="animated fadeIn" id="article">
				<div className="img-container">
					<img src={article.urlToImage} alt="source imagery" />
				</div>
				<h1 className="article-title">{article.title}</h1>
				<p className="article-body">{article.description}</p>
				<a href={article.url} target="_blank" rel="noopener noreferrer">
					Read full story
				</a>
				<footer>
					<p>
						<span className="author">{article.author}</span>{" "}
						<span className="seperator" /> {article.source.name}{" "}
						<span className="seperator" />
						{published(article.publishedAt)}
					</p>
				</footer>
			</article>
		);
	}
}

// container
const mapStateToProps = (state, { id }) => {
	return {
		article: state.articles[id],
	};
};

export default connect(mapStateToProps)(Article);
