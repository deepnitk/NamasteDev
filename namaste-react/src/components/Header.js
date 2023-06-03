import { LOGO_URL } from "../utils/constants";
import {useEffect, useState} from "react";

const Header = () => {
    const [headerText, setHeaderText] = useState('Login');


    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className = "logo"
                    src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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