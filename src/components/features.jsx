import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import FA from 'react-fontawesome';

const Features = props => {
  return (
    <div className="features">
      <h1 className="text-center">Un cocon qui vous veut du bien !</h1>
      <p className="text-center mb-5">
        Notre cocon détente s'accompagne d'une application mobile aux multiples
        fonctionnalités
      </p>

      <Row>
        <Col md={6} className="mb-5">
          <Row className="mb-5">
            <Col md={3} className="order-sm-2">
              <div className="text-center mb-4">
                <FA name="calendar" className="icon" />
              </div>
            </Col>
            <Col md={9}>
              <h5 className="text-center text-lg-right">Réserver</h5>
              <p className="text-center text-lg-right">
                Planifier vos temps de pause, par créneau de 15-20 minutes, le
                temps idéal pour un repos préparateur. Pas de file d’attente
                pour accéder au cocon !
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={3} className="order-sm-2">
              <div className="text-center mb-4">
                <FA name="sliders" className="icon" />
              </div>
            </Col>
            <Col md={9}>
              <h5 className="text-center text-lg-right">Personnaliser</h5>
              <p className="text-center text-lg-right">
                Envie d’une ambiance de dimanche pluivieux sous la couette ? Ou
                tout simplement envie d’écouter votre musique ? Choisissez votre
                ambiance ou créez la vôtre selon vos envies et votre état
                d’esprit.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="order-sm-2">
              <div className="text-center mb-4">
                <FA name="heartbeat" className="icon" />
              </div>
            </Col>
            <Col md={9}>
              <h5 className="text-center text-lg-right">Monitorer</h5>
              <p className="text-center text-lg-right">
                Suivez les bénéfices de vos temps de pause dans le cocon et
                adaptez vos prochaines sessions. Trouvez et optimiser votre
                équillibre réparateur.
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <img className="img-fluid" src="./static/imgs/phone.png" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Features;
