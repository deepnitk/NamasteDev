// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", {id: "parent"},
                React.createElement("div", {id: "child"},
                    [React.createElement("h1", {id: "heading"}, "I am first h1 tag inside a nested div!"),
                    React.createElement("h2", {id: "heading"}, "I am sibling of above h1 tag!")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);