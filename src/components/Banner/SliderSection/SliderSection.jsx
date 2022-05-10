import React from 'react';

const SliderSection = (props) => {
  return (
    <section className={`swiper-slide promo ${props.classData}`}>
      <h1 className='promo-title'>{props.title}</h1>
      <p className='promo-text'>{props.description}</p>
    </section>
  );
};

export default SliderSection;