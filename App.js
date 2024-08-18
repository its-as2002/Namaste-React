import React from "react";
import ReactDOM from "react-dom/client";

let parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child1" }, [
		React.createElement("h1", { id: "h1" }, "heading 1"),
		React.createElement("h2", { id: "h2" }, "heading 2"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", { id: "h1" }, "heading 1"),
		React.createElement("h2", { id: "h2" }, "heading 2"),
	]),
]);
let root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);
