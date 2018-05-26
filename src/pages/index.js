import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './../components/header';
import Jumbo from './../components/jumbotron';

const IndexPage = () => (
  <div>
    <Container fluid className="main">
      <Container>
        <Header />
        <Jumbo />
      </Container>
    </Container>
    <Container>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Container>
  </div>
);

export default IndexPage;
