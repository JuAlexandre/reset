import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './../components/header';
import Jumbo from './../components/jumbotron';
import Features from '../components/features';

const IndexPage = () => (
  <div>
    <Container fluid className="main">
      <Container>
        <Header />
        <Jumbo />
      </Container>
    </Container>
    <Container>
      <Features />
    </Container>
  </div>
);

export default IndexPage;
