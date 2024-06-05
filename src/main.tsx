import React from 'react';
import ReactDOM from 'react-dom/client';
import { Web3ModalProvider } from './web3';
import App from './App.tsx';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Web3ModalProvider>
      <App />
    </Web3ModalProvider>
  </React.StrictMode>
);
