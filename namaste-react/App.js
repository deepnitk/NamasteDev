import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id: "parent"},
                React.createElement("div", {id: "child"},
                    [React.createElement("h1", {id: "heading"}, "I love Javascript!"),
                    React.createElement("h2", {id: "heading"}, "I Love React Library!")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);