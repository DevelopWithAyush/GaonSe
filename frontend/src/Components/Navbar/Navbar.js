import React, {  useContext, useState } from 'react'
import "./Navbar.css"
import {Link, useLocation } from "react-router-dom"
import logo from "../../Assets/logo.png"
import CartCard from '../CartCard/CartCard'
import { ProductContext } from '../../Context/ProductContext/ProductState'

const Navbar = () => {
  const context = useContext(ProductContext)
  const {carts,disprice} = context
  const location = useLocation()
  const [wapper,Setwapper] = useState ({top:"-100%"})
  const [signform,Setsignform] = useState ({top:"-100%"})
  const [firstthird,Setfirstthird] = useState({transform:"scaleX(1)"})
  const [secline1,Setsecline1] = useState({transform:"rotate(0deg)"})
  const [secline2,Setsecline2] = useState({transform:"rotate(0deg)"})
  const [menubar,setmenubar] = useState({top:"-10000%"})
  const [cart,setCart] = useState({right:"-100%"})
  const handleonclose = ()=>{
    Setwapper({top:"-100%"})
    Setsignform({top:"-100%"})
    setCart({right:"-100%"})
  }
  const handleonopen = ()=>{
    Setwapper({top:"0%"})
    Setsignform({top:"50%"})
  }
  const handlemenubtn =()=>{
if(firstthird.transform === "scaleX(1)"){
  Setfirstthird({transform:"scaleX(0)"})
  Setsecline1({transform:"rotate(45deg)"})
  Setsecline2({transform:"rotate(-45deg)"})
  setmenubar({top:"0%"})
}else if(firstthird.transform === "scaleX(0)"){
   Setfirstthird({transform:"scaleX(1)"})
  Setsecline1({transform:"rotate(0deg)"})
  Setsecline2({transform:"rotate(0deg)"})
  setmenubar({top:"-10000%"})
}
  }
  return (<>
  {/* header start from here  */}
    <header className='header'>
      <div className="menubtn" onClick={handlemenubtn}>
        <span className='firstline line' style={firstthird}></span>
        <div className="secline">
          <span className='secline1 line'style={secline1}></span>
          <span className='secline2 line' style={secline2}></span>
        </div>
        <span className='thirdline line' style={firstthird}></span>
      </div>
        <div className="lefthead">
           <Link to="/" ><img src={logo} alt="logo"  className='headerlogo'/> </Link> 
            <nav className="navbar" style={menubar}>
            <Link onClick={handlemenubtn} to="/" className={`navlink ${location.pathname === "/"?"active":""}`}>home</Link>
            <Link onClick={handlemenubtn} to="/product"  className={`navlink ${location.pathname === "/product"?"active":""}`}>Product</Link>
            <Link onClick={handlemenubtn} to="/about"  className={`navlink ${location.pathname === "/about"?"active":""}`}>about</Link>
            <Link onClick={handlemenubtn} to="/contact"  className={`navlink ${location.pathname === "/contact"?"active":""}`}>contact us</Link>
          {/* <Link to="/loginsignup" className={`navsign navlink ${location.pathname === "loginsignup"?"active":""}`} >sign in </Link> */}
            </nav>
        </div>
        <div className="right">
          <button  className='headbutton fa-regular fa-user' onClick={handleonopen} ></button>
          <button className="fa-solid fa-bag-shopping headbutton" onClick={()=>{setCart({right:"0%"});Setwapper({top:"0%"})}}></button>
          </div>
    </header>
    {/* header end here  */}
    <div className="singinwapper" onClick={handleonclose} style={wapper}></div>
    {/* this is modal of sign in  */}
      <form className='signinform' style={signform} >
      <i className="fa-solid fa-xmark" onClick={handleonclose}></i>
      </form>

      <section className="cart-section " style={cart}>
        <div className="cart-head">
          <p>Shopping cart</p>
          <i class="fa-solid fa-xmark" onClick={handleonclose} ></i>
          </div>
        <div className="cart-card-section">
          {carts.map((carts)=>{
            return  <CartCard carts = {carts}/>
           
          })}
       
       
        </div>
        <button className="checkout">
          <p>{disprice}</p>
          proceed to checkout</button>
      </section>
 
    </>
  )

}

export default Navbar
