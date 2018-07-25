import React from "react";

const Loading = () => {
	console.log("Spinner: render");
	var Spinner = require("react-spinkit");
	return <Spinner name="ball-pulse-sync" color="#eee" fadeIn="none" />;
};

export default Loading;
