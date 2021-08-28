import React from 'react';

const Backdrop = props => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 10,
        background: 'rgba(0,0,0,0.75)'
      }}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
