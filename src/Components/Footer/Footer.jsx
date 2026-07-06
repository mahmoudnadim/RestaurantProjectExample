import React from 'react'
import "./Footer.css"
import logo from "../../assets/images/logo.svg"

export default function Footer() {
    return (
        <div className='footer'>
        <div className="c footer_c flex md:flex-row items-center flex-wrap">
            <div className="footerMain flex flex-col">
                <div className="footerLogo"><img src={logo} alt="" /></div>
                <p className="footerDesc">
                    Welcome to Burger Bliss,
                    where we take your cravings
                    to a whole new level! Our mouthwatering
                    burgers are made from 100% beef
                </p>
                <div className="footerSub flex flex-col">
                    <p className="footerSubsText">Subscribe Our Newletter</p>
                    <div className="footerSubsInputs flex flex-col md:flex-row">
                        <input type="text" placeholder='Enter Your Email'/>
                        <button className='btn footerBtn'>Send</button>
                    </div>
                </div>
            </div>
            <div className="footerList">
                <a href='/' className="footerListTitle">Home</a>
                <div className="footerLinks flex flex-col">
                    <a className='footerLink' href="/">Testimonatls</a>
                    <a className='footerLink' href="/">Cookie settings</a>
                    <a className='footerLink' href="/">Testimonatls</a>
                    <a className='footerLink' href="/">Testimonatls</a>
                </div>
            </div>
            <div className="footerList">
                <a href='/menu' className="footerListTitle">Menu</a>
                <div className="footerLinks flex flex-col">
                    <a className='footerLink' href="/">Hot Drink</a>
                    <a className='footerLink' href="/">Humburger</a>
                    <a className='footerLink' href="/">Cold Drink</a>
                    <a className='footerLink' href="/">Chicken</a>
                </div>
            </div>
            <div className="footerList">
                <a href='/contact' className="footerListTitle">Contact Us</a>
                <div className="footerLinks flex flex-col">
                    <a className='footerLink' href="/">Help & Support</a>
                    <a className='footerLink' href="/">Terms of Service</a>
                    <a className='footerLink' href="/">Social Impact</a>
                    <a className='footerLink' href="/">Partnerships</a>
                </div>
            </div>
        </div>
        <p className="copyRight border-t-2 border-t-gray-500 text-center p-2">All Rights Reserved {new Date().getFullYear()} ©</p>
        </div>
    )
}
