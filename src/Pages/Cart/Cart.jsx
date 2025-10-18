import React, { useContext } from 'react'
import "./Cart.css"
import { AllContext } from '../../Components/AllContext/AllContext'
import { useParams } from 'react-router-dom'

export default function Cart() {
    const {cart, setCart, total, setTotal} = useContext(AllContext)
    
    const handleSubmit = (e) => {
      e.preventDefault();
      Navigate("/payment-success");
    };
    const resetCart = ()=>{
      setCart([])
    }

  return (
    <>
    <div className="cartContainer flex flex-col-reverse justify-between lg:flex-row items-center flex-wrap ">
        <div className="paymentContainer">
                  <h1 className="paymentTitle">Payment</h1>
                  <div className="paymentForm flex flex-col gap-10">
                    <div className="paymentLogos w-full justify-end flex gap-5 text-5xl">
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="formContainer grid grid-cols-2 gap-4">
                        <div className="formGroup">
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" name="name" placeholder='Card Name' required />
                        </div>
                        <div className="formGroup">
                          <label htmlFor="cardNumber">Card Number</label>
                          <input
                            type="number"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="0000 0000 0000 0000"
                            required
                          />
                        </div>
                        <div className="formGroup">
                          <label htmlFor="cardNumber">Expire Date</label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div className="formGroup">
                          <label htmlFor="cvv">CVV</label>
                          <input type="number" id="cvv" name="cvv" required />
                        </div>
                      </div>
                      <button type="submit" className="o-btn submitBtn">
                        Pay Now
                      </button>
                    </form>
                  </div>
        </div>
        <div className="orderSummaryContainer sm:order-1">
          <p className="orderSummaryTitle">Order Summary</p>
          <ul className="orderDetails">
            {cart.map(item=>{
              return <li className="orderDetailsItem gap-4">
                <img src={item.img} className='rounded-lg' alt="" />
                 <div class="flex flex-col">
                  <a href={`/RestaurantExample/menu/${item.id}`} class="cartProductName">{item.name}</a>
                  <span class="cartProductPrice">${item.price}</span>
                </div>
              </li>
            })}
          </ul>
          <hr style={{ marginTop: "1rem" }} />
          <div className="cartTotalContainer">
            <span className="cartTotalText">Total</span>
            <span className="cartTotal">
              ${parseFloat(total).toFixed(2)}
            </span>
          </div>
          <br />
          <div className="couponReset_c flex justify-between items-center flex-wrap gap-4">
            <span className="couponCodeLink">
              <a href="#">Do you have a coupon code?</a>
            </span>
            <button onClick={resetCart} className="o-btn resetCart">
              Remove All
            </button>
          </div>
        </div>
    </div>
    </>
  )
}
