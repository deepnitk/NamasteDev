import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [headerText, setHeaderText] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className = "logo"
                    src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login-btn" 
                    onClick={() => headerText === 'Login' ? setHeaderText('LogOut') : setHeaderText('Login')}>
                            {headerText}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;