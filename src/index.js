import React from 'react';
import ReactDOM from 'react-dom';

import { AppRouter } from './AppRouter';
import AppNoOpenFin from './AppNoOpenFin';

const mountApp = () => {
  ReactDOM.render(<AppRouter />, document.getElementById('root'));
};

const mountNoOpenFin = () => {
  if (process.env.NODE_ENV === 'development') mountApp();
  else ReactDOM.render(<AppNoOpenFin />, document.getElementById('root'));
};

if (window.fin) {
  window.fin.desktop.main(mountApp);
} else {
  mountNoOpenFin();
}
