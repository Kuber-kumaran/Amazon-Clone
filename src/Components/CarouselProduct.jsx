import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import product from "../Assets/images/noval.jpg";
import product1 from "../Assets/images/novel1.jpg";
import product2 from "../Assets/images/novel2.jpg";
import product3 from "../Assets/images/novel3.jpg";
import product4 from "../Assets/images/novel4.jpg";
import product5 from "../Assets/images/novel5.jpg";
import product6 from "../Assets/images/novel6.jpg";
import product7 from "../Assets/images/novel7.jpg";

const CarouselProduct = () => {

  const productData1 =

  [
    {
      id: 1,
      title: "Guinness World Records 2023",
      image: product,
      image_small: "../images/product_1_small.jpg",
      attribute: "Hardcover",
      brand: "Guinness World Records",
      description: "The 2023 edition takes readers on a journey that's out of this world! ",
      avgRating: 5,
      ratings: 929,
      price: 8.5,
      oldPrice: 22.0,
      quantity: 0,
      badge: "choice"
    },
    {
      id: 2,
      title: "One: Simple One-Pan Wonders",
      image: product1,
      image_small: "../images/product_2_small.jpg",
      attribute: "Paperback",
      brand: "Jamie Oliver",
      description: "Give them the simplest cookbook ever this Christmas . . . Jamie's back to basics with over 120 simple, delicious, ONE pan recipes",
      avgRating: 4,
      ratings: 2993,
      price: 13.0,
      oldPrice: 23.0,
      badge: "choice"
    },
    {
      id: 3,
      title: "The Bullet That Missed: (The Thursday Murder Club 3)",
      image: product2,
      image_small: "../images/product_3_small.jpg",
      attribute: "Paperback",
      description: "Except trouble is never far away where the Thursday Murder Club is concerned. ",
      brand: "Richard Osman",
      avgRating: 5,
      ratings: 29283,
      price: 10.0,
      oldPrice: 20.0
    },
    {
      id: 4,
      title: "Interesting Facts For Curious Minds",
      image: product3,
      image_small: "../images/product_4_small.jpg",
      attribute: "Hardcover",
      description: "Want to impress your friends and family with both useful, worthless but undeniably interesting facts? ",
      brand: "Jordan Moore",
      avgRating: 4,
      ratings: 885,
      price: 10.9,
      oldPrice: 13.99,
      badge: "limited"
    },
    {
      id: 5,
      title: "It Start with Us",
      image: product4,
      image_small: "../images/product_5_small.jpg",
      attribute: "Paperback",
      description: "Colleen Hoover tells fan favourite Atlas’s side of the story and shares what comes next in this long-anticipated sequel to the #1 Sunday Times bestseller It Ends with Us ",
      brand: "Colleen Hoover",
      avgRating: 4,
      ratings: 44402,
      price: 7.0,
      oldPrice: 14.99,
      badge: "choice"
    },
    {
      id: 6,
      title: "SPACEBOY",
      image: product5,
      image_small: "../images/product_6_small.jpg",
      attribute: "Paperback",
      description: "Go back to the Space Race with No.1 bestselling author David Walliams for a breathless cinematic adventure full of mystery, action, laughs and surprises ",
      brand: "David Walliams",
      avgRating: 5,
      ratings: 877,
      price: 7.0,
      oldPrice: 14.99,
      badge: "choice"
    },
    {
      id: 7,
      title: "Lessons in Chemistry",
      image: product6,
      image_small: "../images/product_7_small.jpg",
      attribute: "Hardcover",
      description: "Chemist Elizabeth Zott is not your average woman. In fact, Elizabeth Zott would be the first to point out that there is no such thing.",
      brand: "Bonnie Garmus",
      avgRating: 4,
      ratings: 62749,
      price: 8.0,
      oldPrice: 16.99
    },
    {
      id: 8,
      title: "2023 Guide to the Night Sky",
      image: product7,
      image_small: "../images/product_8_small.jpg",
      attribute: "Hardcover",
      description: "From the UK’s Number One Astronomy publisher, this is the bestselling stargazing handbook to the planets, stars and constellations visible from the northern hemisphere.",
      brand: "Storm Dunlop",
      avgRating: 4,
      ratings: 134,
      price: 4.79,
      oldPrice: 6.99,
      badge: "choice"
    },
   
    ]

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3 ">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="h-[250px]  "
      >
        {productData1.map((product, index) => (
                <SwiperSlide key={index}>
                    <Link to={`/product/${product.id}`}>
                        <img className="h-[100%] ml-2" src={product?.image} alt={product.title} />
                    </Link>
                </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
