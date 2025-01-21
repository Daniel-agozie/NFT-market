import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { Principal } from "@dfinity/principal";
import ItemProvider from './Content/ItemProvider';

const CURRENT_USER_ID = Principal.fromText("2vxsx-fae");
export default CURRENT_USER_ID;

createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      {/* <ItemProvider> */}
        <App />
      {/* </ItemProvider> */}
    </React.StrictMode>,
  </Router>

);
