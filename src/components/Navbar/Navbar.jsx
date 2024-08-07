import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { assets } from '../../assets/assets';
const Navbar = () => {
    const [menu, setMenu]=useState("home");
    return (
        <div className='Navbar'>
            <img src={assets.logo} alt="" className='logo' />
            <ul className="navbar-menu">
                <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                <a href='#appdownlode' onClick={()=>setMenu("mobile_app")} className={menu==="mobile_app"?"active":""}>mobile app</a>
                <a href='#footer' onClick={()=>setMenu("contect_us")} className={menu==="contect_us"?"active":""}>contect us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    <img src={assets.basket_icon} alt="" />
                    <div className='dot'>
                    </div>
                </div>
                <button>signin</button>
            </div>
        </div>
    )
}

export default Navbar
