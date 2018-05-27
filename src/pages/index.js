import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './../components/header';
import Jumbo from './../components/jumbotron';
import TryApp from './../components/tryapp';
import Contact from './../components/contact';
import ReviewSlider from './../components/reviewSlider';
import Features from '../components/features';
import Prototype from '../components/proto';
const IndexPage = () => (
  <div>
    <Container fluid className="main" id="home">
      <Container>
        <Header />
        <Jumbo />
      </Container>
    </Container>
    <Container id="cocon">
      <Prototype />
    </Container>
    <Container className="pt-5 pb-0" id="features">
      <Features />
    </Container>
    <Container fluid className="main" id="try">
      <Container className="pt-5 pb-5">
        <TryApp />
      </Container>
    </Container>
    <Container className="text-center pt-5 pb-5" id="avis">
      <ReviewSlider />
    </Container>
    <Container fluid className="grey" id="contact">
      <Container className="pt-5 pb-5">
        <Contact />
      </Container>
    </Container>
    <div className="text-center pt-4 pb-4 footer">
      Créer avec ❤ pendant le{' '}
      <a href="https://www.facebook.com/sworleans/">
        <br />
        <strong>StartupWeekend Orléans #7</strong>
      </a>
    </div>
  </div>
);

export default IndexPage;
