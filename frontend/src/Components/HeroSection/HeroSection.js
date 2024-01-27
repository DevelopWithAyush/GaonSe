import React from 'react';
import "./HeroSection.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from "../../Assets/gaonSe main banner-1.png"
import banner2 from "../../Assets/main banner2.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HeroSection() {
  return (
    <>
    <div className="herosection">
        
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper fordesktop"
    
      >
        <SwiperSlide><img src={banner1} alt="" className='banner'/></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" className='banner'/></SwiperSlide>
       
      </Swiper>
      </div>

    </>
  );
}
