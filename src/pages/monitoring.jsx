import React from 'react';
import { Container, Row, Col, Button, Progress } from 'reactstrap';
import NavbarApp from './../components/navbarApp';
import Lol from './../components/lol';
import Utilisateur from './../components/utilisateur';


const MonitoringPage = () => (
  <div>
  <Container fluid className="title">
      <Row>
        <Col col={10}>
          <h4>Suivi</h4>
          <p>Suivez et analysez votre sommeil</p>
        </Col>
        <Col col={2} className="d-flex align-items-center justify-content-end pr-5">
          <Row>
            <Utilisateur />
          </Row>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-baseline">
          <span>
            <strong>Efficacité du sommeil</strong>
          </span>
          <span className="nb">92%</span>
        </div>
        <Progress className="progress" value={92} />
      </div>
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-baseline">
          <span>
            <strong>Rythme cardiaque moyen</strong>
          </span>
          <span className="nb">49PPM</span>
        </div>
        <Progress className="progress" value={55} />
      </div>
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-baseline">
          <span>
            <strong>Tension musculaire</strong>
          </span>
          <span className="nb">98</span>
        </div>
        <Progress className="progress" value={75} />
      </div>
      <Lol />
    </Container>
    <NavbarApp className="marginBottom" />
  </div>
);

export default MonitoringPage;
