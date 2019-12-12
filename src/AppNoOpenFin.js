import React from 'react';

const AppNoOpenFin = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.4em',
        color: 'red',
        margin: 40,
      }}>
      This application can only be run in an OpenFin container
    </div>
  );
};

export default AppNoOpenFin;
