import React, { useContext } from 'react'
import "./Newarrival.css"
import { Link } from 'react-router-dom'
import Itemcard from "../ItemCard/ItemCard"
import { ProductContext } from '../../Context/ProductContext/ProductState'
const Newarrival = () => {
  const context = useContext(ProductContext);
  const {product} = context;
  return (

    <div className='newarrivalsection'>
      <div className="newarrivalcontext">
      <h1>new arrivals</h1>
            <Link to="/product" className='sidelink' >view all</Link>
      </div>
      <div className="newarrivalbox">
      {product.map((product)=>{
        return <Itemcard product = {product} key={product._id} ></Itemcard>
      })}

      
       
      </div>

    </div>
  )
}

export default Newarrival
