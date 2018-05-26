import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import FA from 'react-fontawesome';

const Features = props => {
    return (
        <div className='features'>
            <h1 className='text-center mb-5'><strong>About</strong> Appone</h1>
            <p className='text-center mb-5'>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>

            <Row>
                <Col md={6} className='mb-5'>
                    <Col md={12}>
                        <div className='text-center mb-4'>
                            <FA name='dropbox' className='icon' />
                        </div>
                        <h5 className='text-center'>Exclusive Design</h5>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                    </Col>
                    <Col md={12}>
                        <div className='text-center mb-4'>
                            <FA name='cogs' className='icon' />
                        </div>
                        <h5 className='text-center'>Easy to Customize</h5>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                    </Col>
                    <Col md={12}>
                        <div className='text-center mb-4'>
                            <FA name='scissors' className='icon' />
                        </div>
                        <h5 className='text-center'>Awesome Features</h5>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                    </Col>

                    
                </Col>
                <Col md={6} className='mb-5'>
                    Jolies photos
                </Col>
            </Row>
        </div>
    );
};

export default Features;
