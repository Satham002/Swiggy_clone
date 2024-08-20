import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({ setshowLogin }) => {
    const [currentState, setCurrentState] = useState("signup")
    return (
        <div className='Login-popup'>
            <form action="" className='login-popup-container'>
                <div className='login-pop-title'>
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} onClick={() => { setshowLogin(false) }} alt="" />
                </div>
                <div className='login-popup-inputs'>
                    {currentState === "login" ? <></> : <input type="text" placeholder='Yours name' required />}
                    <input type="email" placeholder='Yours Email' required />
                    <input type="password" placeholder='Yours Password' required />
                </div>
                <button>{currentState === "signup" ? "Create account" : "Log in"}</button>
                <div className='login-popup-countion'>
                    <input type="checkbox" required />
                    <p>I agree to the terms and privacy policy.</p>
                </div>
                {currentState === "login" ?
                    <p>Create a  new account? <span onClick={()=>{setCurrentState("signup")}}>Click here</span></p>
                    :
                    <p>Already have an account? <span onClick={()=>{setCurrentState("login")}}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
