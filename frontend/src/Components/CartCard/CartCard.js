import React, { useState } from 'react'
import "./CartCard.css"

const CartCard = (props) => {
    let { carts, cartsquantity } = props


    const [mathsforincdec, setmathsforincdec] = useState(cartsquantity)
    const discountper = (((carts.product?.mrp - carts.product?.discountPrice) / carts.product?.mrp) * 100).toFixed(1);
    return (
        carts.product === null ? null : <div className="cart-card">
            <img src={carts.product?.imgUrls[0]} alt="" className='cart-card-img' />
            <p className='product-name'>{carts.product?.productName}</p>
            <div className="incdecbtn">
                <button onClick={() => { mathsforincdec > 1 ? setmathsforincdec(mathsforincdec - 1) : setmathsforincdec(mathsforincdec) }}>-</button><span>{mathsforincdec}</span><button onClick={() => { carts.product?.stocks > mathsforincdec ? setmathsforincdec(mathsforincdec + 1) : setmathsforincdec(mathsforincdec) }}>+</button>
            </div>
            <div className="singleprice">
                <p className='offerprice'>&#8377;{carts.product?.discountPrice} </p>
                <p className='mrp'>&#8377; {carts.product?.mrp} </p>
                <p className='single-offer'> {discountper} % off</p>
            </div>
            <i className="fa-solid fa-trash delete"></i>
        </div>
    )
}

export default CartCard
