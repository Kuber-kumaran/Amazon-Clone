import React from 'react';
import Carousel from './Carousel';
import HomepageCard from './HomepageCard';
import Card1 from '../Assets/images/home_grid_1.jpg'
import Card2 from '../Assets/images/home_grid_2.jpg'
import Card3 from '../Assets/images/home_grid_3.jpg'
import Card4 from '../Assets/images/home_grid_4.jpg'
import Card5 from '../Assets/images/home_grid_5.jpg'
import Card6 from '../Assets/images/home_grid_6.jpg'
import Card7 from '../Assets/images/home_grid_7.jpg'
import Card8 from '../Assets/images/home_grid_8.jpg'
import Banner from "../Assets/images/banner_image.jpg"
import Banner2 from '../Assets/images/banner_image_2.jpg'
import CarouselProduct from './CarouselProduct';
import CarouselCategory from './CarouselCategory';

const HomePage = () => {
  return (
    <div className=' bg-amazonClone-background'>
        <div className='min-w-[1000px] max-w-[1500px] m-auto'> 
         <Carousel />
         <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
           <HomepageCard title={"We have surprise for you"}
           img={Card1}  link={"see terms and conditions"}
           />
           <HomepageCard title={"Watch The Rings of Power"}
           img={Card2}  link={"Start Streaming now"}
           />
           <HomepageCard title={"Unlimited Streaming"}
           img={Card3}  link={"Find out more"}
           />
           <HomepageCard title={"More titles to explore"}
           img={Card4}  link={"Browse Kindle Unlimited"}
           />
           <HomepageCard title={"Shpo pet Supplies"}
           img={Card5}  link={"see mores"}
           />
           <HomepageCard title={"Spring Sale"}
           img={Card6}  link={"See the deals"}
           />
           <HomepageCard title={"Echo Buds"}
           img={Card7}  link={"See more"}
           />
           <HomepageCard title={"Family Plan: 3 months free"}
           img={Card8}  link={"Learn more"}
           />
           <div className='m-3 pt-8'>
            <img className='xl:hidden' src={Banner2} alt="" />
           </div>
         </div>
         <CarouselProduct/>
         <CarouselCategory/>
         <div className='h-[200px]'>
          <img className='h-[100%] m-auto' src={Banner} alt="" />
         </div>
         
            
        </div>
    </div>
  )
}

export default HomePage
