import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Naamaste React 🚀");
const jsxHeading = <h1>Naamaste react 🚀</h1>
const HeadingComponent = () => {
    return <h1>Naamaste react 🚀 Functional Component!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

