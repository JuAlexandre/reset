import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import FA from 'react-fontawesome';

const Features = props => {
    return (
        <div className='features'>
            <h1 className='text-center mb-5'><strong>About</strong> Appone</h1>
            <p className='text-center mb-5'>Description.</p>

            <Row>
                <Col md={6} className='mb-5'>
                    <Row className='mb-5'>
                        <Col md={3}  className='order-sm-2'>
                            <div className='text-center mb-4'>
                                <FA name='dropbox' className='icon' />
                            </div>
                        </Col>
                        <Col md={9}>
                            <h5 className='text-center text-lg-right'>Exclusive Design</h5>
                            <p className='text-center text-lg-right'>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                        </Col>
                    </Row>
                   
                    <Row className='mb-5'>
                        <Col md={3}  className='order-sm-2'>
                            <div className='text-center mb-4'>
                                <FA name='dropbox' className='icon' />
                            </div>
                        </Col>
                        <Col md={9}>
                            <h5 className='text-center text-lg-right'>Exclusive Design</h5>
                            <p className='text-center text-lg-right'>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
                        <Col md={3}  className='order-sm-2'>
                            <div className='text-center mb-4'>
                                <FA name='dropbox' className='icon' />
                            </div>
                        </Col>
                        <Col md={9}>
                            <h5 className='text-center text-lg-right'>Exclusive Design</h5>
                            <p className='text-center text-lg-right'>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className='mb-5'>
                    Jolies photos
                </Col>
            </Row>
        </div>
    );
};

export default Features;
