import React, { useState } from 'react'
import "./Navbar.css"
import {Link, useLocation } from "react-router-dom"
import logo from "../../Assets/logo.png"

const Navbar = () => {
  
  const location = useLocation()
  const [wapper,Setwapper] = useState ({top:"-100%"})
  const [signform,Setsignform] = useState ({top:"-50%"})
  const [firstthird,Setfirstthird] = useState({transform:"scaleX(1)"})
  const [secline1,Setsecline1] = useState({transform:"rotate(0deg)"})
  const [secline2,Setsecline2] = useState({transform:"rotate(0deg)"})
  const [menubar,setmenubar] = useState({top:"-1000%"})
  const handleonclose = ()=>{
    Setwapper({top:"-100%"})
    Setsignform({top:"-50%"})
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
  setmenubar({top:"-1000%"})
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
            <img src={logo} alt="logo"  className='headerlogo'/>
            <nav className="navbar" style={menubar}>
            <Link to="/" className={`navlink ${location.pathname === "/"?"active":""}`}>home</Link>
            <Link to="/product"  className={`navlink ${location.pathname === "/product"?"active":""}`}>Product</Link>
            <Link to="/about"  className={`navlink ${location.pathname === "/about"?"active":""}`}>about</Link>
            <Link to="/contact"  className={`navlink ${location.pathname === "/contact"?"active":""}`}>contact us</Link>
            </nav>
        </div>
        <div className="right">
          <button class="fa-solid fa-bag-shopping headbutton"></button>
          <button className='sign headbutton' onClick={handleonopen}>sign in</button>
        </div>
    </header>
    {/* header end here  */}
    <div className="singinwapper" onClick={handleonclose} style={wapper}></div>
    {/* this is modal of sign in  */}
      <form className='signinform' style={signform} >
      <i class="fa-solid fa-xmark" onClick={handleonclose}></i>
      </form>
      {/* modal end here  */}
{/* this is menu wapper  */}
      
 
    </>
  )

}

export default Navbar
