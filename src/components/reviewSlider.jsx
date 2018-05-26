import React from 'react';
import Slider from 'react-slick';

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
      autoplaySpeed: 3000,
    };
    return (
      <div>
        <h2>Ils en parlent mieux que nous</h2>
        <Slider {...settings}>
          <Review
            img="./static/imgs/gilles_renouard.jpg"
            name="Gilles Renouard"
            role="Responsable RH - Christian Dior"
            text="Un concept original pour développer l’efficacité de nos équipes."
          />
          <Review
            img="./static/imgs/yannick_bernard.jpg"
            name="Yannick Bernard"
            role="Responsable Service Clients - L’Oréal Luxe France"
            text="Hâte de découvrir et tester ce cocon après mon déjeuner (si j’en avais un) !"
          />
          <Review
            img="./static/imgs/baptiste_pame.jpg"
            name="Baptiste Pame"
            role="role2"
            text="Lorem ipsum"
          />
        </Slider>
      </div>
    );
  }
}
