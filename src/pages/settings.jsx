import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import RangeSlider from 'react-rangeslider';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import AmbianceList from './../components/settings/ambianceList';
import LightSlider from './../components/settings/lightSlider';
import MusiqueDropdown from './../components/settings/musiqueDropdown';
import NavbarApp from './../components/navbarApp';
import Utilisateur from './../components/utilisateur';

const SettingPage = () => (
  <div>
  <Container fluid className="title">
      <Row>
        <Col col={10}>
          <h4>Ambiance</h4>
          <p>Choisissez votre ambiance</p>
        </Col>
        <Col col={2} className="d-flex align-items-center justify-content-end pr-5">
          <Row>
            <Utilisateur />
          </Row>
        </Col>
      </Row>
    </Container>
    <Container fluid className="marginBottom">
      <Row>
        <Col>
          <AmbianceList />
        </Col>
      </Row>
      <Row className="mt-5 rowfix">
        <Col xs={12} className="d-flex justify-content-between">
          <span>
            <strong>Lumière</strong>
          </span>
          <Toggle icons={false} onChange={() => { }} />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <LightSlider />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} className="d-flex justify-content-between mb-3">
          <span>
            <strong>Ambiance sonore</strong>
          </span>
          <Toggle icons={false} onChange={() => { }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MusiqueDropdown />
        </Col>
      </Row>
      <Row>
        <Col>
          <LightSlider />
        </Col>
      </Row>
    </Container>
    <NavbarApp />
  </div>
);

export default SettingPage;
