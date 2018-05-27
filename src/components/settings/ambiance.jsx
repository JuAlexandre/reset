import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Ambiance = props => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={props.image} />
        <CardImgOverlay className="d-flex align-items-center justify-content-center">
          <CardTitle>{props.title}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default Ambiance;
