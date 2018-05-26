import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const Review = props => {
  return (
    <div className="review">
      <Container fluid className="text-center">
        <Container>
          <Col>
            <img
              src={props.img}
              className="imagereview rounded-image mt-5 mx-auto"
            />
            <p className="pt-5">
              <FontAwesome name="quote-left" className="iconQuote" />
              {props.text}
            </p>
            <h4>{props.name}</h4>
            <h5>{props.role}</h5>
          </Col>
        </Container>
      </Container>
    </div>
  );
};

export default Review;
