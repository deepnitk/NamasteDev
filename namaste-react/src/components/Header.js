import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [headerText, setHeaderText] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-4 sm:bg-yellow- lg:bg-green-200">
            <div className="logo-container">
                <img 
                    className = "w-56"
                    src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center space-x-10">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4 "><Link to="/">Home</Link></li>
                    <li className="px-4 "><Link to="/about">About</Link></li>
                    <li className="px-4 "><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 "><Link to="/cart">Cart</Link></li>
                    <li className="px-4 "><Link to="/grocery">Grocery</Link></li>
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