import React from 'react'
import "./TestimonaltBox.css"
import CustomerPhoto from "../../assets/images/CustomerPhoto.png"

export default function TestimonaltBox() {
    return (
        <div className="testimonaltsBox flex flex-col">
            <p className="testimonaltText">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                1500s.
            </p>
            <div className="testimonaltAbout_c flex items-center">
                <img src={CustomerPhoto} alt="" className="testimonaltPhoto" />
                <div className="testimonaltAbout flex flex-col">
                    <p className="testimonaltName">Lorem Ipsum</p>
                    <p className="testimonaltJob">Customer</p>
                </div>
            </div>
        </div>
    )
}
