import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';

const Jumbo = props => {
  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <Container fluid>
          <Row>
            <Col xs={12} className="mobile text-center mb-5">
              <img src="./static/imgs/bg.png" alt="" />
            </Col>
            <Col sm={6}>
              <h1 className="">Make Your Reset</h1>
              <p className="">
                Créez votre ambiance, ressourcer vous dans ce cocon et ressortez
                booster pour le reste de la journée !
              </p>
              <div className="button-container">
                <Button
                  href="#features"
                  className="mobile text-center button"
                  color="primary"
                >
                  En savoir plus
                </Button>
              </div>
            </Col>
            <Col sm={6} className="desktop text-center mb-5">
              <img src="./static/imgs/bg.png" alt="" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
