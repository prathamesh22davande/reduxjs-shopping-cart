import React from 'react';
import Backdrop from './Backdrop';

const Spinner = () => {
  return (
    <div
      style={{
        width: '100%',
        background: 'rgba(0,0,0,0.75)'
      }}
    >
      <div
        className="spinner-border text-success"
        role="status"
        style={{
          zIndex: 1000
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
