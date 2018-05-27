import React from 'react';
import { Container, Row, Col, Button , Label, Input, Form } from 'reactstrap';
import Link from 'gatsby-link';

const LoginPage = () => (
    <div className='loginBody'>
        <Container className="marginBottom mb-5">
            <Row className='d-flex justify-content-center pt-5 mb-5'>
                <img src="./static/imgs/logo_white.png" alt="reset" className='loginLogo'/>
            </Row>
            <hr/>
            <h2 className='text-center mt-5'>Connecte toi !</h2>
            <Form className='ml-3 mr-3'>
                <Row className='mb-3'>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" value="john.doe@gmail.com" />
                </Row>
                <Row className='mb-5'>
                    <Label for="examplePassword">Mot de passe</Label>
                    <Input type="password" name="password" id="examplePassword" value="password" />
                </Row>
                <div className='d-flex justify-content-center'>
                    <Row>
                        <Col>
                            <Link to="/homepage">
                                <Button className='button'>Se connecter</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <Row>
                        <Col>
                            <p>S'inscrire</p>
                        </Col>
                    </Row>
                </div>
            </Form>
        </Container>
    </div>
);

export default LoginPage;