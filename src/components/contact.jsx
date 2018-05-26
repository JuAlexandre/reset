import React from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import FA from 'react-fontawesome';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Réaliser un devis</h2>
      <Row>
        <Col md={6}>
          <p>
            Le concept vous plait et vous souhaitez implementer RESET dans votre
            entreprise ? Contactez-nous et obtenez une proposition dès
            aujourd'hui.
          </p>
          <p>
            <ul className="list">
              <li>
                <FA fixedWidth name="map-marker" className="mb-3" />
                <a href="https://www.google.fr/search?q=labo%20orleans&oq=labo+or&aqs=chrome.0.0l3j69i57j69i60j0.3911j0j7&sourceid=chrome&ie=UTF-8&safe=off&npsic=0&rflfq=1&rlha=0&rllag=47906586,1909304,1806&tbm=lcl&rldimm=5913632827547863933&ved=0ahUKEwjItdv3kqTbAhVJWxQKHdmeCYUQvS4IaDAG&rldoc=1&tbs=lrf:!2m4!1e17!4m2!17m1!1e2!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2#rlfi=hd:;si:5913632827547863933;mv:!1m3!1d43261.01427433345!2d1.9069675!3d47.8795062!2m3!1f0!2f0!3f0!3m2!1i178!2i388!4f13.1;tbs:lrf:!2m1!1e2!2m1!1e3!2m4!1e17!4m2!17m1!1e2!3sIAE,lf:1,lf_ui:2">
                  LAB’O Village
                </a>
              </li>
              <li>
                <FA fixedWidth name="phone" className="mb-3" />
                <a href="tel:+33-6-21-12-29-55">+33 6 21 12 29 55</a>
              </li>
              <li>
                <FA fixedWidth name="envelope" className="mb-3" />
                <a href="mailto:hello@reset.co">hello@reset.co</a>
              </li>
            </ul>
          </p>
        </Col>
        <Col md={6}>
          <Form className="form">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="email" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Télephone</Label>
                  <Input type="number" name="number" id="number" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleSelect">Sujet</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Location</option>
                <option>Achat</option>
                <option>Question technique</option>
                <option>SAV</option>
              </Input>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
