import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Features = props => {
    return (
        <div className='features'>
            <h1 className='text-center'><strong>About</strong> Appone</h1>
            <p className='text-center mb-5'>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>

            <Row>
                <Col md={6} className='mb-5'>
                    <div><i class="fab fa-dropbox"></i></div>
                    <h5 className='text-center'>Exclusive Design</h5>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                </Col>
                <Col md={6} className='mb-5'>
                    <div></div>
                    <h5 className='text-center'>Easy to Customize</h5>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                </Col>
                <Col md={6} className='mb-5'>
                    <div></div>
                    <h5 className='text-center'>Awesome Features</h5>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incididunt ugt labore.</p>
                </Col>
            </Row>
        </div>
    );
};

export default Features;
