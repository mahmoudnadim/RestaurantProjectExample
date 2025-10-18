import React from 'react'
import "./OurPhoto.css"

export default function OurPhoto() {
    return (
        <div className="ourPhoto_c flex justify-center items-center">
            <div className="ourPhotoContent flex flex-col text-center items-center py-5">
                <p className="ourPhotoTitle">Our Photo Gallery</p>
                <p className="ourPhotoText flex">
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    ndustry s standard dummy text ever since the 1500s when
                    an unknown printer took a galley of type and scrambled
                </p>
            </div>
        </div>
    )
}
