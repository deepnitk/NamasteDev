import React from "react";
import ReactDOM from "react-dom/client";

const title =  (
    <h1>It's a Title!</h1>
);

const HeadingComponent = () => {
    return (
        <div>
            {title}
            <h1>{100+200}</h1>
            <h1>Naamaste react 🚀 Functional Component!</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

