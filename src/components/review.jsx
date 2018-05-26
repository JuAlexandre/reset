import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const Review = props => {
  return (
    <div className="review">
        <Container fluid className="text-center">
            <Container >
                <Col>
                    <img src="http://via.placeholder.com/100x100" className="rounded-image mt-5" />
                    <p className="pt-5">
                        <FontAwesome name="quote-left" className="iconQuote" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate molestias dolor quos temporibus reprehenderit veritatis, vel numquam perferendis voluptatem qui rem quaerat quasi culpa modi iusto error distinctio pariatur. Nostrum.
                    </p>
                    <h4>John Doe</h4>
                    <h5>Consultant</h5>
                </Col>
            </Container>
        </Container>
    </div>
  );
};

export default Review;
