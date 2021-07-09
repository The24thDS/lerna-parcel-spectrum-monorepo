// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import App from './src/App';

ReactDOM.render(
  <Provider theme={defaultTheme}>
    <App />
  </Provider>,
  document.getElementById('root')
);
