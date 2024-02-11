import React, { useContext, useEffect } from 'react'
import "./CheakOut.css"
import CartCard from '../../Components/CartCard/CartCard'
import { CartContext } from '../../Context/CartContext/CartContext'
import ProfileForm from '../../Components/ProfileForm/ProfileForm'
import { CheckoutContext } from '../../Context/CheckoutContext/CheackoutContext'
const CheakOut = () => {

  const cartcontext = useContext(CartContext);
  const { carts } = cartcontext;
  const checkoutcontext = useContext(CheckoutContext);
  const {handleOnClick } = checkoutcontext;

  let totalMRP = 0;
  let totalDiscountPrice = 0;


  carts.forEach(item => {
    // Check if the product exists and has MRP and discount price
    if (item.product && item.product.mrp && item.product.discountPrice) {
      // Increment total MRP by product MRP * quantity
      totalMRP += item.product.mrp * item.quantity;
      // Increment total discount price by product discount price * quantity
      totalDiscountPrice += item.product.discountPrice * item.quantity;
    }
  });





  return (
    <section className="cheakout">
      <h1>cheackout</h1>

      <div className="cheakout-container">
        <div className="profile-card">
          <p>shipping address</p>
          <ProfileForm></ProfileForm>
        </div>

        <div className="cheackout-calculation">
          <p className='headName'>you orders</p>
          <div className="cheackout-cart">
            {carts.map((carts, index) => {
              return (<CartCard key={index} carts={carts} cartsquantity={carts.quantity} />
              )
            })}

          </div>
          <div className="checkout-price">
            <div className="cheackoutpice">
              <p>total MRP</p>
              <p>&#8377;{ totalMRP} </p>
            </div>
            <div className="cheackoutpice">
              <p>Discount on MRP</p>
              <p style={{ color: "green" }}>-&#8377; {totalMRP-totalDiscountPrice} </p>
            </div>
            <div className="cheackoutpice">
              <p>Subtotal</p>
              <p >&#8377; {totalDiscountPrice}</p>
            </div>
          </div>

          <div className="checkoutbtn">
            <button onClick={()=>{handleOnClick(totalDiscountPrice)}}>checkout</button>
          </div>


        </div>
      </div>

    </section>

  )
}

export default CheakOut
