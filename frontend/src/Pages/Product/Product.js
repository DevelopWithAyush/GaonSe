import React, { useState } from 'react'
import "./Product.css"
import ItemCard from '../../Components/ItemCard/ItemCard'
import { useLocation } from 'react-router-dom'

const Product = () => {

  const location = useLocation()
  const [dropdown,SetDropdown] = useState({display:"none"})
  const handleopensort = ()=>{
    if(dropdown.display === "none"){
      SetDropdown({display:"flex"})
    }else if(dropdown.display === "flex"){
      SetDropdown({display:"none"})
    }

  }
  return (
    <div className='productsection' onClick={handleopensort}>
      <div className="productcontext">
        <div className="product-left-section"> <p>home{location.pathname}</p></div>
        <div className="product-right-section">
          <p className='no-of-item'>3 items</p>
          <div className='sortbtn' onClick={handleopensort}>
            <button className='the-btn'><p>sort by </p><i class="fa-solid fa-angle-down"></i></button>
            <div className="dropdown" style={dropdown}>
              <button onClick={handleopensort} >newest</button>
              <button onClick={handleopensort} >price:low to high</button>
              <button onClick={handleopensort} >price: high to low</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="productbox">
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
       
      </div>
      
    </div>
  )
}

export default Product
