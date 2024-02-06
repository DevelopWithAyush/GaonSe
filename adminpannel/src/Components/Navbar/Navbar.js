import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {

  const location = useLocation()
  return (
<header className="header">
    <img src="https://res.cloudinary.com/dpqsatnvt/image/upload/v1707135376/logo_v7z9ah.png" alt="" />
    <nav className="navbar">
      {/* <Link className={`navlink ${location.pathname === "/"?"active":""} `} to="/">Dashboard</Link> */}
      <Link className={`navlink ${location.pathname === "/"?"active":""} `} to="/">Product</Link>
      <Link className={`navlink ${location.pathname === "/order"?"active":""} `} to="/order">order</Link>
      <Link className={`navlink ${location.pathname === "/review"?"active":""} `} to="/review">review</Link>
      <Link className={`navlink ${location.pathname === "/user"?"active":""} `} to="/user">users</Link>
    
    </nav>
</header>
  )
}

export default Navbar
