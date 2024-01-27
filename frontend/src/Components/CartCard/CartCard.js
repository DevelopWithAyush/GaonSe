import React,{useContext, useEffect, useState} from 'react'
import "./CartCard.css"
import { ProductContext } from '../../Context/ProductContext/ProductState'

const CartCard = (props) => {
    const context = useContext(ProductContext)
    const {carts} = props
    const {disprice,setDisprice} = context;
    useEffect(()=>{
        setDisprice(disprice + carts.product.discountPrice*carts.quantity)
 // eslint-disable-next-line 
    },[])
    const [mathsforincdec,setmathsforincdec] = useState(carts.quantity)
    const discountper = (((carts.product.mrp -carts.product.discountPrice)/carts.product.mrp)*100).toFixed(1);
    return (
        <div className="cart-card">
            <div className="cart-img">
                <img src={carts.product.imgUrls[0]} alt="" />
            </div>
            <div className="cart-context">
                <p>{carts.product.productName}</p>
                <div className="single-price">
                    <p className='offerprice'>&#8377;{carts.product.discountPrice} </p>
                    <p className='mrp'>&#8377; {carts.product.mrp} </p>
                    <p className='single-offer'> {discountper} % off</p>

                </div>
                <div className="incdecbtn">
                    <button onClick={()=>{ mathsforincdec>1?setmathsforincdec(mathsforincdec-1): setmathsforincdec(mathsforincdec)}}>-</button><span>{mathsforincdec}</span><button onClick={()=>{ carts.product.stocks>mathsforincdec?setmathsforincdec(mathsforincdec+1): setmathsforincdec(mathsforincdec)}}>+</button>
                </div>
            </div>
            <div className="delete"><i class="fa-solid fa-trash"></i></div>
        </div>
    )
}

export default CartCard
