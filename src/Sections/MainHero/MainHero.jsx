import React from 'react'
import "./MainHero.css"
import heroImg from "../../assets/images/heroImgBurger.jpg"

export default function MainHero() {
    return (
        <div className="c hero_c flex flex-col-reverse md:flex-row">
            <div className="heroLeft flex">
                <h1 className="heroTitle">Lorem Ipsum simply dummy</h1>
                <div className="heroContent flex">
                    <p className="heroText">LOREM IPSUM</p>
                    <p className="heroDesc">
                        Welcome to Burger Bliss, where we take your cravings
                        to a whole new level! Our mouthwatering burgers
                        are made from 100% beef
                    </p>
                    <button className="btn heroBtn o-btn">Order Now</button>
                </div>
            </div>
            <div className="img_c heroRight">
                <img src={heroImg} alt=""/>
            </div>
        </div>
    )
}
