import "./Contact.css"
import restaurantImg from "../../assets/images/restaurantImg.webp"

export default function Contact() {
  return (
    <div className="cP contactContainer grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center">
        <div className="contactImg_c rounded-lg overflow-hidden">
            <img src={restaurantImg} alt="" />
        </div>
        <div className="contactContent_c p-5 flex flex-col gap-5">
            <p className="contactTitle text-4xl">About</p>
            <p className="contactSince italic text-gray-600">Since 1998</p>
            <p className="contactTitle text-gray-500">
                Adress: {<br/>}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Soluta, provident voluptates consectetur asperiores,
                porro itaque magnam recusandae ipsam esse, voluptate laborum.
                Explicabo similique sapiente ad amet dolore error earum fugit!
            </p>
            <iframe
                title="Map"
                src="https://www.google.com/maps?output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
            >
            </iframe>
        </div>
    </div>
  )
}
