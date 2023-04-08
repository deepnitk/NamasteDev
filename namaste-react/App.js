import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h1 className="title" tabIndex="5">It's a Title!</h1>;
}
const HeadingComponent = () => {
    return (
        <div>
            <Title/>
            <h1>Naamaste react 🚀 Functional Component!</h1>;
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

