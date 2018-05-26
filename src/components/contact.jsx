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
    <div>
      <h1>Réaliser un devis</h1>
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
                <FA fixedWidth name="map-marker" />LAB’O Village<br /> 1 Avenue
                du Champ de Mars<br />45074 Orléans
              </li>
              <li>
                <FA fixedWidth name="phone" />01 12 19 21 92
              </li>
              <li>
                <FA fixedWidth name="envelope" />hello@reset.co
              </li>
            </ul>
          </p>
        </Col>
        <Col md={6}>
          <Form className="form">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Numéro de télephone</Label>
              <Input type="number" name="number" id="number" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Sujet</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
