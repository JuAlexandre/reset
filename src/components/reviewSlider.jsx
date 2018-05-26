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
      <Review 
          img="http://via.placeholder.com/100x100" 
          name="John DOE" 
          role="role0" 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam voluptatibus aliquam aperiam dolor in quia enim non quidem repellendus velit voluptatum consectetur inventore quasi porro mollitia, sit vero asperiores!"
        />
        <Review 
          img="http://via.placeholder.com/100x100" 
          name="Zen HITUDE" 
          role="role1" 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam voluptatibus aliquam aperiam dolor in quia enim non quidem repellendus velit voluptatum consectetur inventore quasi porro mollitia, sit vero asperiores!"
        />
        <Review 
          img="http://via.placeholder.com/100x100" 
          name="Roger RABBIT" 
          role="role2" 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam voluptatibus aliquam aperiam dolor in quia enim non quidem repellendus velit voluptatum consectetur inventore quasi porro mollitia, sit vero asperiores!"
        />
      </Slider>
    );
  }
}