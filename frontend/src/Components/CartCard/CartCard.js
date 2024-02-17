import React, { useContext, useState } from 'react';
import "./CartCard.css";
import { CartContext } from '../../Context/CartContext/CartContext';

const CartCard = (props) => {
    let { carts } = props;
    const { updatecart, deleteCartProduct } = useContext(CartContext);

        let [cartquantity,setcartquantity] =useState(carts.quantity) ;
    const discountper = (((carts.product?.mrp - carts.product?.discountPrice) / carts.product?.mrp) * 100).toFixed(1);

    return (
        carts.product === null ? null : <div className="cart-card">
            <img src={carts.product?.imgUrls[0]} alt="" className='cart-card-img' />
            <p className='product-name'>{carts.product?.productName}</p>
            <div className="incdecbtn">
                <button onClick={() => {
                     if(carts.product.stocks > cartquantity){
                       setcartquantity(cartquantity-1)
                      }else{
                          cartquantity = carts.quantity
                      }
                }}>-</button>
                <span>{carts.quantity}</span>
                <button onClick={() => {
                    if(carts.product.stocks > cartquantity){
                        setcartquantity(cartquantity+1)
                    }else{
                        cartquantity = carts.quantity
                    }
                    console.log(cartquantity)
                }}>+</button>
            </div>
            <div className="singleprice">
                <p className='offerprice'>&#8377;{carts.product?.discountPrice} </p>
                <p className='mrp'>&#8377; {carts.product?.mrp} </p>
                <p className='single-offer'> {discountper} % </p>
            </div>
            <i className="fa-solid fa-trash delete" onClick={() => { deleteCartProduct(carts._id) }} ></i>
        </div>
    );
};

export default CartCard;
