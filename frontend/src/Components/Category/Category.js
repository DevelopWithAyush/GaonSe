import React, { useContext } from 'react'
import "./Category.css"
import { Link } from 'react-router-dom'
import img from "../../Assets/nbm.png"
import { ProductContext } from '../../Context/ProductContext/ProductState'
const Category = () => {
  const context = useContext(ProductContext)
  const {category} =context;
  
 
  return (
    <div className='categorysection'>
        <div className="categorycontext">
            <h1>Shop By Category</h1>
            <Link to="/product" className='sidelink' >view all</Link>
        </div>
        <div className="categorybox">
     {category.map((cat)=>{
      return  <Link className="categorycard" key={cat.category} to="/product" >
      <img className='categoryimg' src={img} alt="" />
      <div className='linkbox'><Link className='catlink'>{cat.category}</Link></div>
  </Link>
     })}
    
           
        </div>
      
    </div>
  )
}

export default Category;
