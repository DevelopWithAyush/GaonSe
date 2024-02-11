import React, { useContext } from 'react'
import "./Category.css"
import { Link } from 'react-router-dom'
import img from "../../Assets/nbm.png"
import { ProductContext } from '../../Context/ProductContext/ProductState'





import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Category = () => {

  const context = useContext(ProductContext)
  const { category } = context;


  return (
    <div className='categorysection'>
      <div className="categorycontext">
        <h1>Shop By Category</h1>
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
        className="categorybox">

{category.map((cat,index)=>{
  return       <SwiperSlide className='categorycard' key={index}>  <Link  to = "/product">
  <img className='categoryimg' src={img} alt="" />
  <div className='linkbox'><p className='catlink'>{cat.category}</p></div> </Link>
</SwiperSlide>
})}


      </Swiper>
      <div className="custom-next fa-solid fa-angle-right"></div>
      </div>


    </div>
  )
}

export default Category;
