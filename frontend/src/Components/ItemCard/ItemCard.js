import React from 'react'
import "./ItemCard.css"
import { Link } from 'react-router-dom'
import cardimg from "../../Assets/5964.png"

const ItemCard = () => {
  return (
    <Link  className='itemcard' >
      <p className='offer'>50%</p>
      <div className='card-img'>
      <img src={cardimg} className='item-card-img' alt="" />

      </div>
      <div className="product-detail">
        <p className='product-name'>this is product</p>
        <div className="price">
          <p className='offerprice'>&#8377; 99.00</p>
          <p className='mrp'>&#8377;

 199.00</p>

        </div>
      </div>
      
    </Link>
  )
}

export default ItemCard
