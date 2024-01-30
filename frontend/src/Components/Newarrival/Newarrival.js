import React, { useContext } from 'react'
import "./Newarrival.css"
import { Link } from 'react-router-dom'
import Itemcard from "../ItemCard/ItemCard"
import { ProductContext } from '../../Context/ProductContext/ProductState'

// swiper 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Newarrival = () => {
  const context = useContext(ProductContext);
  const {product} = context;
  return (

    <div className='newarrivalsection'>
      <div className="newarrivalcontext">
      <h1>new arrivals</h1>
            <Link to="/product" className='sidelink' >view all</Link>
      </div>
      <div className="slideshow">
      <div className="custom-prev fa-solid fa-angle-left"></div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={50}            
        navigation ={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
          clickable:true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
       className="newarrivalbox">
      {product.map((product)=>{
        return <SwiperSlide className='itembox'><Itemcard product = {product} key={product._id} ></Itemcard>
     </SwiperSlide> })}
      </Swiper>
      <div className="custom-next fa-solid fa-angle-right"></div>
      </div>
    </div>
  )
}

export default Newarrival
