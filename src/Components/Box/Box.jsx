import { useContext } from "react";
import "./Box.css"
import { FaStar } from "react-icons/fa";
import { AllContext } from "../AllContext/AllContext";
import data from "../../Data/data";
import { NavLink } from "react-router-dom";

export default function Box(props) {
    const {cart,setCart} = useContext(AllContext)
    const [getProduct] = data.filter(item=>{return item.id==props.id})
    
    const addCartBtn = ()=>{
        const [getProduct] = data.filter(item=>{return item.id==props.id})
        setCart([...cart,getProduct])
    }
    return (
        <div className="box homeBox flex flex-col">
            <img src={props.img} alt="" />
            <div className="boxContent flex flex-col">
                <div className="boxTop flex justify-between items-center">
                    <p className="boxHour">{props.time}</p>
                    <p className="boxRate flex items-center">
                        <FaStar /> <span>5.0</span>
                    </p>
                </div>
                <NavLink to={`/menu/${props.id}`} className="boxTitle">{props.name}</NavLink>
                <div className="boxDown flex justify-between items-center">
                    <p className="boxPrice">${props.price}</p>
                    <button className="btn boxBtn o-btn" onClick={addCartBtn}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
