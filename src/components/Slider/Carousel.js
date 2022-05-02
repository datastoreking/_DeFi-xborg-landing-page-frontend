import "./sliderxborg.css";
import 'react-multi-carousel/lib/styles.css';

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react"
import NFT1 from "../../assets/slides/1.png";
import NFT2 from "../../assets/slides/2.png";
import NFT3 from "../../assets/slides/3.png";
import NFT4 from "../../assets/slides/4.png";
import NFT5 from "../../assets/slides/5.png";
import NFT6 from "../../assets/slides/6.png";
import NFT7 from "../../assets/slides/7.png";
import NFT8 from "../../assets/slides/8.png";
import NFT9 from "../../assets/slides/9.png";
import NFT10 from "../../assets/slides/10.png";

const Carousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 8000,
    slidesToShow: 5,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    arrows:false,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1224,
        settings: { slidesToShow: 4 }
      }
    ]
  };
  return (
    <div className="swiper-section">
      <Slider {...settings}>
        <img alt="1" src={NFT1}></img>
        <img alt="2" src={NFT2}></img>
        <img alt="3" src={NFT3}></img>
        <img alt="4" src={NFT4}></img>
        <img alt="5" src={NFT5}></img>
        <img alt="6" src={NFT6}></img>
        <img alt="7" src={NFT7}></img>
        <img alt="8" src={NFT8}></img>
        <img alt="9" src={NFT9}></img>
        <img alt="10" src={NFT10}></img>
      </Slider>
    </div>
  );
};

export default Carousel;