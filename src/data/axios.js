import axios from "axios";

export default axios.create({
	baseURL: "https://newsapi.org/v2",
	params: {
		apiKey: "4dfac3162dd84ba8afaf01afd7e5c0d4",
		language: "en",
		sources: "techcrunch,techradar,the-verge,wired",
	},
	headers: {
		Accept: "application/json",
	},
});
