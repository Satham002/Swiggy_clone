import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
const LoginPopup = ({ setshowLogin }) => {
    const { url, setToken } = useContext(StoreContext)
    const [currentState, setCurrentState] = useState("login")

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;

        if (currentState === "login") {
            newUrl += '/api/user/login'
        }

        if (currentState === "signup") {
            newUrl += "/api/user/register"
        }

        const responce = await axios.post(newUrl, data)

        if (responce.data.result) {
            setToken(responce.data.token);
            localStorage.setItem("token", responce.data.token)
            setshowLogin(false)
        }
        else {
            alert("you got error")
        }
    }

    return (
        <div className='Login-popup'>
            <form onSubmit={onLogin} className='login-popup-container'>
                <div className='login-pop-title'>
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} onClick={() => { setshowLogin(false) }} alt="" />
                </div>
                <div className='login-popup-inputs'>
                    {currentState === "login" ?
                        <></> :
                        <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Yours name' required />
                    }
                    <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Yours Email' required />
                    <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Yours Password' required />
                </div>
                <button type='submit'>{currentState === "signup" ? "Create account" : "Log in"}</button>
                <div className='login-popup-countion'>
                    <input type="checkbox" required />
                    <p>I agree to the terms and privacy policy.</p>
                </div>
                {currentState === "login" ?
                    <p>Create a  new account? <span onClick={() => { setCurrentState("signup") }}>Click here</span></p>
                    :
                    <p>Already have an account? <span onClick={() => { setCurrentState("login") }}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
