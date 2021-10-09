import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'relay-hooks';
import App from './App';
import env from './services/relayEnv';

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={env}>
      <App />
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

