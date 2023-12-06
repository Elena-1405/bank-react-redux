import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';


const defaultState = {
  cash: 0,
}
const reducer = (state = defaultState, action) => {   //here we define the actions, R is a pure action that takes state and action and returns the new obj of state
    switch (action.type) {
      case 'ADD_CASH':
        return {...state, cash: state.cash + action.payload}
      case 'GET_CASH':
        return {...state, cash: state.cash - action.payload}
      default:
        return state
    }    
}

const store = createStore(reducer)
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}> 
    <App />
  </Provider>
);  //given to the react-comps


