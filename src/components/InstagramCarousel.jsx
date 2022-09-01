import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperStyle.css";
import "../styles/index.css";

// import required modules
import {Autoplay } from "swiper";

const InstagramCarousel = () => {

    return (
        <>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            navigation={false}
            autoplay={true}
            className="mySwiper"
          >
            <SwiperSlide><img src="https://i.pinimg.com/originals/23/e2/50/23e2501b3872ce775196f3e22a75bc65.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.pinimg.com/736x/3c/a2/8d/3ca28d4df210079c63230db9f04e19d8.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.pinimg.com/564x/c1/fa/00/c1fa00727ba410034bdd0263f0f305f7.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://nextluxury.com/wp-content/uploads/Skater-Fashion-for-Men/Pants/Pants%20Skater%20Fashion%20for%20Men%20-_718hana.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.pinimg.com/originals/c6/ff/2f/c6ff2ff5b51e5fa2b622640d4164eaf2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://ridestore.imgix.net/catalog/product/s/t/style-20418-front.jpg" alt="" /></SwiperSlide>
          </Swiper>
        </>
        
  )
}

export default InstagramCarousel