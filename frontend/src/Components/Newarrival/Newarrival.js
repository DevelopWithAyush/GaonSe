import React from 'react'
import "./Newarrival.css"
import { Link } from 'react-router-dom'
import Itemcard from "../ItemCard/ItemCard"
const Newarrival = () => {
  return (
    <div className='newarrivalsection'>
      <div className="newarrivalcontext">
      <h1>new arrivals</h1>
            <Link to="/product" className='sidelink' >view all</Link>
      </div>
      <div className="newarrivalbox">
        <Itemcard></Itemcard>
        <Itemcard></Itemcard>
        <Itemcard></Itemcard>
        <Itemcard></Itemcard>
        <Itemcard></Itemcard>
        <Itemcard></Itemcard>
      </div>

    </div>
  )
}

export default Newarrival
