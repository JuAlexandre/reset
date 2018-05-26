import React from 'react';
import { Jumbotron, Container, Col, Button } from 'reactstrap';

const Jumbo = props => {
  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <Container fluid>
          <Col md={6}>
            <h1 className="">Fluid jumbotron</h1>
            <p className="">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
            <Button className="button" color="primary">
              En savoir plus
            </Button>
          </Col>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
