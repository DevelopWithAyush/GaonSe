import React, { useState ,useContext,useEffect} from 'react'
import "./Product.css"
import ItemCard from '../../Components/ItemCard/ItemCard'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../../Context/ProductContext/ProductState'

const Product = () => {
  const context = useContext(ProductContext)
  const {getProducts,product,lowtohigh,hightolow} = context;
  useEffect(()=>{
getProducts()
// eslint-disable-next-line
  },[])

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
        <div className="product-left-section"> <Link className='navigation-link'>home</Link><Link to ="/product" className='navigation-link'>{location.pathname}</Link></div>
        <div className="product-right-section">
          <p className='no-of-item'>3 items</p>
          <div className='sortbtn' onClick={handleopensort}>
            <button className='the-btn'><p>sort by </p><i className="fa-solid fa-angle-down"></i></button>
            <div className="dropdown" style={dropdown}>
              <button onClick={()=>{handleopensort();lowtohigh()} }>price:low to high</button>
              <button onClick={()=>{handleopensort();hightolow()}} >price: high to low</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="productbox">
        {product.map((product)=>{
          return <ItemCard product = {product} key ={product._id} />
        })}
       
      </div>
      
    </div>
  )
}

export default Product
