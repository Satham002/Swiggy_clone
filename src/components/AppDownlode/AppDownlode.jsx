import React from 'react'
import './AppDownlode.css'
import { assets } from '../../assets/assets'

const AppDownlode = () => {
    return (
        <div className='app-downlode' id='appdownlode'>
            <p>For Better Experience Downlode <br /> Tomato app </p>
            <div className='app-downlode-platforms'>
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownlode
