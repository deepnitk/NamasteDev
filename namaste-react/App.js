import React from "react";
import ReactDOM from "react-dom/client";

/* 
    --> Header
        --> Logo
        --> Nav Items
    --> Body
        --> Search
        --> ReastuarantContaoner
            --> ReastuarantCard
    --> Footer
        --> Copyrights
        --> Links
        --> Address
        --> Contact
 */


const elm = <span>I am a span!</span>
const Title = () =>  {
    return (<h1>
        It's a Title!
        {elm}
    </h1>)
};

const HeadingComponent = () => {
    return (
        <div>
            {Title()}
            <h1>{100+200}</h1>
            <h1>Naamaste react 🚀 Functional Component!</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

