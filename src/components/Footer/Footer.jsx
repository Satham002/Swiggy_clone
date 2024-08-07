import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt maxime pariatur vel corporis suscipit, eligendi libero voluptatum repellat cupiditate.</p>
                    <div className='footer-social-icon'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />

                    </div>
                </div>

                <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+91 1236457890</li>
                        <li>dummy@email.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
                Copyrights-2024 - All rights reserved
            </p>
        </div>
    )
}

export default Footer
