import React from 'react';
import { Button } from 'reactstrap';

const TryApp = () => {
  return (
    <div className="try__app">
      <h2>Tester notre application</h2>
      <p>
        <Button className="button" color="primary">
          Ouvrir l'application
        </Button>
      </p>
    </div>
  );
};

export default TryApp;
