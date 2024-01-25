import React from 'react'
import "./Category.css"
import { Link } from 'react-router-dom'
import img from "../../Assets/nbm.png"
const Category = () => {
  return (
    <div className='categorysection'>
        <div className="categorycontext">
            <h1>category</h1>
            <Link to="/product" className='sidelink' >view all</Link>
        </div>
        <div className="categorybox">
        <Link className="categorycard">
            <img className='categoryimg' src={img} alt="" />
            <div className='linkbox'><Link className='catlink'>jaggery</Link></div>
        </Link>
        <Link className="categorycard">
            <img className='categoryimg' src={img} alt="" />
            <div className='linkbox'><Link className='catlink'>jaggery</Link></div>
        </Link>
        </div>
      
    </div>
  )
}

export default Category;
