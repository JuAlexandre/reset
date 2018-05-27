import React from 'react';
import Slider from 'react-slick';

import Ambiance from './ambiance';

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
    };
    return (
      <div className="text-center">
        <Slider {...settings}>
          <Ambiance image="./static/imgs/1.png" title="Nature" />
          <Ambiance image="./static/imgs/2.png" title="Océan" />
          <Ambiance image="./static/imgs/3.png" title="Zen" />
        </Slider>
      </div>
    );
  }
}
