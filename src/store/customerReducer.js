import React from 'react';

 const defaultState = {
    customers: [],
  }

 export const customerReducer = (state = defaultState, action) => {   //here we define the actions, R is a pure action that takes state and action and returns the new obj of state
    switch (action.type) {
      case 'ADD_CUSTOMER':
        return {...state, cash: state.cash + action.payload}
      case 'GET_CUSTOMER':
        return {...state, cash: state.cash - action.payload}
      default:
        return state
    }    
}
