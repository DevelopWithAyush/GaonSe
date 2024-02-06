import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"
const ProductCard = (props) => {
    const {product} = props;

    const discountper = (((product.mrp -product.discountPrice)/product.mrp)*100).toFixed(1);

  return (
    <div className='itemcard' to={`/singleproduct/${product._id}`}>
    {discountper > 0.0?<p className='offer'>{discountper}%</p>:<></>}
    <div className='card-img'>
    <img src={product.imgUrls[0]} className='item-card-img' alt="" />

    </div>
    <div className="product-detail">
      <p className='product-name'>{product.productName}</p>
      <p className='review'>⭐⭐⭐⭐ 120 review</p>
      <div className="price">
        <p className='offerprice'>&#8377; {product.discountPrice}</p>
        <p className='mrp'>&#8377;{product.mrp} </p>

      </div>
 <div className="product-item-btn">
 <i class="fa-solid fa-trash"></i>
 <i class="fa-solid fa-pen-to-square"></i>

 </div>
    </div>
    
  </div>
  )
}

export default ProductCard
