import React from 'react';
import imglogo from '../../../assets/images/logo.png';
import './Welcome.scss';

const Welcome = () => {
  return (
    <div className="we-con">
      <h1 className="wel">WELCOME</h1>
      <img src={imglogo} className="img-logo" alt="imgl" />
    </div>
  );
};

export default Welcome;
