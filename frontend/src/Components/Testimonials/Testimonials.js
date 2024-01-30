import React from 'react'
import "./Testimonials.css"
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Testimonials = () => {
  return (
    <div className='Testimonials-section'>
        <h3 className='Testimonials-section-heading'>⭐Testimonials⭐</h3>

        <div className="slideshow">
      <div className="custom-prev fa-solid fa-angle-left"></div>
        <Swiper
        slidesPerView={"auto"}
        spaceBetween={50}            
        loop = {true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation ={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
          clickable:true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
         className="Testimonials-section-box">
          <SwiperSlide className='testimonialBox'> <TestimonialsCard/></SwiperSlide>
          <SwiperSlide className='testimonialBox'> <TestimonialsCard/></SwiperSlide>
          <SwiperSlide className='testimonialBox'> <TestimonialsCard/></SwiperSlide>
          <SwiperSlide className='testimonialBox'> <TestimonialsCard/></SwiperSlide>
      </Swiper>
      <div className="custom-next fa-solid fa-angle-right"></div>
      </div>
    </div>
  )
}

export default Testimonials
