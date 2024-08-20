import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
const Navbar = ({setshowLogin}) => {
    const [menu, setMenu]=useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)
    return (
        <div className='Navbar'>
            <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className="navbar-menu">
                <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                <a href='#appdownlode' onClick={()=>setMenu("mobile_app")} className={menu==="mobile_app"?"active":""}>mobile app</a>
                <a href='#footer' onClick={()=>setMenu("contect_us")} className={menu==="contect_us"?"active":""}>contect us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()=== 0?"":'dot'}>
                    </div>
                </div>
                <button onClick={()=>setshowLogin(true)}>signin</button>
            </div>
        </div>
    )
}

export default Navbar
