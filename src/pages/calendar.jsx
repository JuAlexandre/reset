import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import NavbarApp from './../components/navbarApp';
import Calendar from './../components/calendar/calendar';

const CalendarPage = () => (
  <div>
    <div className="title">
      <h4>Réservation</h4>
      <p>Réservez votre Cocon</p>
    </div>
    <Container fluid className="marginBottom">
      <Row className="d-flex justify-content-center mt-5">
        <Calendar />
      </Row>
      <Row className="d-flex justify-content-center mt-5">
          <Button className="button-inverse">Réserver</Button>
      </Row>
    </Container>
    <NavbarApp />
  </div>
);

export default CalendarPage;
