import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderSection from './SliderSection/SliderSection';
import banners from '../../utils/bannersData';
import { v4 } from 'uuid';

const Banner = () => {
  const settings = {
    // Just a reminder
    /*dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,*/
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className='container-promo swiper'>
      <div className='swiper-wrapper'>
        <Slider {...settings}>
          {banners.map(item => <SliderSection key={v4()} {...item} />)}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;