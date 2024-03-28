import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import Category1 from "../Assets/images/category_0.jpg"
import Category2 from "../Assets/images/category_1.jpg"
import Category3 from "../Assets/images/category_2.jpg"
import Category4 from "../Assets/images/category_3.jpg"
import Category5 from "../Assets/images/category_4.jpg"
import Category6 from "../Assets/images/category_5.jpg"

const CarouselCategory = () => {
  return (
    <div className='bg-white m-3'>
        <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}     
       >
        <SwiperSlide>
            <img src={Category1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Category2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Category3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Category4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Category5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Category6} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default CarouselCategory
