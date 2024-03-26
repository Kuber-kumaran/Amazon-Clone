import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import imageOne from "../Assets/images/carousel_1.jpg"
import imageTwo from "../Assets/images/carousel_2.jpg"
import imageThree from  "../Assets/images/carousel_4.jpg"
import imageFour from "../Assets/images/carousel_5.jpg"
import  M_Video from "../Assets/images/carousel_vid.mp4"

const Carousel = () => {
  return (
    <div className='h-[600px] bg-white'>
      <Swiper
         loop={true}
         spaceBetween={0}
         navigation={true}
         modules={[Navigation,Autoplay]}
         autoplay={{
            delay: 4500
         }}
         className='h-[50%]'
      >
        <SwiperSlide>
            <img src={imageOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imageTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide className='bg-black'>
            <video controls muted="muted">
                <source  src={M_Video} type='video/mp4'/>
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <img src={imageThree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imageFour} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className='h-[50%] bg-gradient-to-b from-stone-900'/>
    </div>
  )
}

export default Carousel
