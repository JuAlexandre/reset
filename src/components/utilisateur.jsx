import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Link from 'gatsby-link';


const Utilisateur = props => {
  return (
    <div>
        <Link to="/homepage">
          <FontAwesome name="user" size="2x" />
        </Link>
    </div>
  );
};

export default Utilisateur;