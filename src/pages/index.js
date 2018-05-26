import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './../components/header';
import Jumbo from './../components/jumbotron';
import TryApp from './../components/tryapp';
import Contact from './../components/contact';
import ReviewSlider from './../components/reviewSlider';
import Features from '../components/features';

const IndexPage = () => (
  <div>
    <Container fluid className="main">
      <Container>
        <Header />
        <Jumbo />
      </Container>
    </Container>
    <Container className="pt-5 pb-5">
      <Features />
    </Container>
    <Container fluid className="main">
      <Container className="pt-5 pb-5">
        <TryApp />
      </Container>
    </Container>
    <Container className="text-center pt-5 pb-5">
      <ReviewSlider />
    </Container>
    <Container fluid className="grey">
      <Container className="pt-5 pb-5">
        <Contact />
      </Container>
    </Container>
  </div>
);

export default IndexPage;
