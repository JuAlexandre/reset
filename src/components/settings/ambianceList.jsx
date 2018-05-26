import React from 'react';
import Slider from 'react-slick';

import Ambiance from './ambiance';

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1.3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
    };
    return (
      <div className="text-center">
        <h2>
          <strong>RESET</strong> SETTINGS
        </h2>
        <Slider {...settings}>
          <Ambiance
            image="http://via.placeholder.com/650x650"
            title="Zen"
            description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme"
          />
          <Ambiance
            image="http://via.placeholder.com/650x650"
            title="Nature"
            description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme"
          />
          <Ambiance
            image="http://via.placeholder.com/650x650"
            title="Océanique"
            description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme"
          />
        </Slider>
      </div>
    );
  }
}