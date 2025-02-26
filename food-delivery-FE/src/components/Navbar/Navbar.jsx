import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin,setSearchQuery }) => {
    const [menu, setMenu] = useState("home");
    const [searchBar, setSearchBar] = useState(false);
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }
    const [query,setQuery] = useState('');
    return (
        <div className='navbar'>
            <Link to="/"><img className='logo' src={assets.logo} alt="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className='navbar-right'>
                <img onClick={() => setSearchBar(prev => !prev)} src={assets.search_icon} alt="" />
                {searchBar && <div className='navbar-search-bar'>
                    <input type="text" placeholder="Search for food, coffe, etc..." onChange={(e)=>setSearchQuery(e.target.value)}/>
                </div>}
                <div className='navbar-search-icon'>
                    <Link to="/cart"><img className='navbar-search-icon-basket' src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
                        : <div className='navbar-profile'>
                            <img src={assets.profile_icon} alt="" />
                            <ul className='nav-profile-dropdown'>
                                <li onClick={() => navigate("/myorders")}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                                <hr />
                                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                            </ul>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
