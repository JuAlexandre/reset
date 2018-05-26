import React from "react";
import Slider from "react-slick";

import Review from './../components/review';

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <Slider {...settings}>
        <Review />
        <Review />
        <Review />
      </Slider>
    );
  }
}