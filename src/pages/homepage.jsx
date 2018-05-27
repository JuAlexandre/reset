import React from 'react';
import { Container, Row, Col, Button , Label, Input, Form } from 'reactstrap';
import Link from 'gatsby-link';
import NavbarApp from './../components/navbarApp';

const HomepagePage = () => (
    <div className='homepage'>
        <div className="title">
            <h4>RESET</h4>
        </div>
        <Container>
            <Row className='d-flex justify-content-center mt-5 mb-3'>
                <img src="./static/imgs/default-user-profile.svg" alt="profile img"/>
            </Row>
            <Row className='d-flex justify-content-center mb-3'>
                <h1>Bienvenue <span className='primaryColor'>John</span>.</h1>
            </Row>
            <Row className='d-flex justify-content-center'>
                <p>
                    Prochaine réservation le <span className='primaryColor'>28/05/2018</span> à <span className='primaryColor'>12h45</span>.
                </p>
                <p className='text-center mx-3'>Vous avez sélectionné l'ambiance <span className='primaryColor'>nature</span>, vous pouvez modifier votre choix à tout moment dans vos paramètres.</p>
            </Row>
        </Container>
        <NavbarApp className="marginBottom" />
    </div>
);

export default HomepagePage;