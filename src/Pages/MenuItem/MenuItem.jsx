import { useContext, useState } from 'react'
import "./MenuItem.css"
import data from '../../Data/data'
import { useParams } from 'react-router-dom'
import { AllContext } from '../../Components/AllContext/AllContext'

export default function MenuItem() {
    const {cart,setCart} = useContext(AllContext)
    const productId = useParams().id
    const [getProduct] = data.filter(item=>item.id==productId)
    const menuItems = getProduct.sauces;
    const [productPrice,setProductPrice] = useState(getProduct.price)
    
    const addCartBtn = ()=>{
        setCart([...cart, getProduct])
    }

    const getMenuItems = menuItems.map((item,i) => {
        return (
            <div key={i} className="menuItemCheckBox flex items-center justify-between">
                <div className='menuItemCheckBoxInput_c flex items-center' style={{ gap: ".5rem" }}>
                    <input type="checkbox" name={item.sauce} id={item.sauce} />
                    <label htmlFor={item.sauce}>{item.sauce}</label>
                </div>
                <p className='saucePrice'>${item.price}</p>
            </div>
        )
        
        
    })
    return (
        <>
            <div className="cP ManuItem_c grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="img_c menuItemLeft">
                    <img src={getProduct.img} alt="" />
                </div>
                <div className="menuItemRight flex flex-col">
                    <div className="menuItemTitle">Cheese Burger</div>
                    <div className="menuItemTime">10hr 35m</div>
                    <div className="menuItemCheckBoxes flex flex-col">
                        {getMenuItems}
                    </div>
                    <p className="menuItemTotal">${productPrice} USD</p>
                    <button onClick={addCartBtn} className="btn menuTotalBtn o-btn">Buy Now</button>
                </div>

            </div>
        </>
    )
}
