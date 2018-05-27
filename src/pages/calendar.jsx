import React from 'react';
import { Container, Row, Col, Button, Label, Input, FormGroup } from 'reactstrap';

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
      
      <Row className="mt-5 d-flex justify-content-center">
        <h3>Crénaux disponibles</h3>
      </Row>
      <Row className="d-flex justify-content-around mt-4">
        <FormGroup check className="mx-3" >
          <Label check>
            <Input type="checkbox" />{' '}
              11:55
          </Label>
        </FormGroup>
        <FormGroup check className="mx-3" >
          <Label check>
            <Input type="checkbox" />{' '}
              12:05
          </Label>
        </FormGroup>
        <FormGroup check className="mx-3" >
          <Label check>
            <Input type="checkbox" />{' '}
              12:10
          </Label>
        </FormGroup>
      </Row>
      <Row className="d-flex justify-content-around mt-4">
        <FormGroup check className="mx-3" >
          <Label check>
            <Input type="checkbox" />{' '}
              12:55
          </Label>
        </FormGroup>
        <FormGroup check className="mx-3" >
          <Label check>
            <Input type="checkbox" />{' '}
              13:15
          </Label>
        </FormGroup>
      </Row>
      <Row className="d-flex justify-content-center mt-5">
          <Button className="button-inverse">Réserver</Button>
      </Row>
    </Container>
    <NavbarApp />
  </div>
);

export default CalendarPage;
