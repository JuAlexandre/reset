import React from 'react';
import { Button } from 'reactstrap';

const TryApp = () => {
  return (
    <div className="try__app">
      <h1>Tester notre application</h1>
      <p>
        <Button className="button" color="primary">
          Ouvrir avec Expo
        </Button>
      </p>
      <p>
        <strong>ou</strong>
      </p>
      <p>Scannez ce QR code pour l'ouvrir avec l'application mobile Expo</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Qrcode_wikipedia_fr_v2clean.png/440px-Qrcode_wikipedia_fr_v2clean.png"
        alt=""
      />
    </div>
  );
};

export default TryApp;
