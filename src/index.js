import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import {store} from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}> 
    <App />
  </Provider>
);  //given to the react-comps


