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
                --> Image
                --> Name
                --> Price
                --> Description
                --> Star Rating
    --> Footer
        --> Copyrights
        --> Links
        --> Address
        --> Contact
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className = "logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OCbzvRLLbTMEOxv1E5fFBQ4N2cfJW-PSg6MeEtLJ&s" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ReastuarantCard = () => {
    return (
        <div className="res-card">
            <img
                className="res-card-logo"
                alt="res-logo" 
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hzn6pp3knfahfphywcqr" />
            <h3>Bharti chopati</h3>
            <h4>Pav Bhaji, chineese, shakes</h4>
            <h4>4.3 stars</h4>
            <h4> 38 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
                <ReastuarantCard />
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

