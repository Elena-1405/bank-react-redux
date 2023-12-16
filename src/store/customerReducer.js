import React from 'react';

 const defaultState = {
    customers: [],
  }

  const ADD_CUSTOMER = 'ADD_CUSTOMER'
  const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
  const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

 export const customerReducer = (state = defaultState, action) => {   //here we define the actions, R is a pure action that takes state and action and returns the new obj of state
    switch (action.type) {
      case ADD_MANY_CUSTOMERS:
        return {...state, customers:[...state.customers, ...action.payload]}
      case ADD_CUSTOMER:
        return {...state, customers: [...state.customers, action.payload]}//возвр новый обж, в кот разворачиваем старое состояние, присваиваем новый массив, в кот разворачиваем уже сущ массив и к нему добавл обж кот прердаем чз action
      case REMOVE_CUSTOMER:
        return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
      default:
        return state
    }    
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})