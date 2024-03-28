import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import Product_1 from '../Assets/images/product_0_small.jpg'
import Product_2 from '../Assets/images/product_1_small.jpg'
import Product_3 from '../Assets/images/product_2_small.jpg'
import Product_4 from '../Assets/images/product_3_small.jpg'
import Product_5 from '../Assets/images/product_4_small.jpg'
import Product_6 from '../Assets/images/product_5_small.jpg'
import Product_7 from '../Assets/images/product_6_small.jpg'
import Product_8 from '../Assets/images/product_7_small.jpg'
import Product_9 from '../Assets/images/product_8_small.jpg'


const CarouselProduct = () => {
  return (
    <div className='bg-white m-3'>
      <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <Swiper
          slidesPerView={7}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}     
       >
            <SwiperSlide >
                <img src={Product_1} alt="" />            
            </SwiperSlide>
            <SwiperSlide >
                <img src={Product_2} alt="" />            
            </SwiperSlide>
            <SwiperSlide >
                <img src={Product_3} alt="" />            
            </SwiperSlide>
            <SwiperSlide >
                <img src={Product_4} alt="" />            
            </SwiperSlide>
            <SwiperSlide >
                <img src={Product_5} alt="" />            
            </SwiperSlide>
            <SwiperSlide >
                <img src={Product_6} alt="" />            
            </SwiperSlide>
            <SwiperSlide >
                <img src={Product_7} alt="" />            
            </SwiperSlide>
            <SwiperSlide >
                <img src={Product_8} alt="" />            
            </SwiperSlide>
            <SwiperSlide >
                <img src={Product_9} alt="" />            
            </SwiperSlide>


            

       </Swiper>
    </div>
  )
}

export default CarouselProduct
