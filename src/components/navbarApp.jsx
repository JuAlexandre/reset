import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Link from 'gatsby-link';

const navbarApp = () => {
    return (
        <div>
            <Container fluid className='navbarApp'>
                <Row>
                    <Col className='side d-flex justify-content-center align-items-center' col={4}>
                        <Link to="/calendar">
                            <FontAwesome fixedWidth name="calendar" size="2x" />
                        </Link>
                    </Col>
                    <Col className='center d-flex justify-content-center align-items-center' col={4}>
                        <Link to="/settings">
                            <FontAwesome fixedWidth name="sliders" size="2x" />
                        </Link>
                            
                    </Col>
                    <Col className='side d-flex justify-content-center align-items-center' col={4}>
                        <Link to="/monitoring">
                            <FontAwesome fixedWidth name="heartbeat" size="2x" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default navbarApp;