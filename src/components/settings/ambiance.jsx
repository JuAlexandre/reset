import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Ambiance = props => {
    return (
        <div>
            <Card inverse>
                <CardImg width="100%" src={props.image} />
            <CardImgOverlay>
                <CardTitle>{props.title}</CardTitle>
                <CardText>
                   {props.description}
                </CardText>
            </CardImgOverlay>
            </Card>
        </div>
    );
};

export default Ambiance;