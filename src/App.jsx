import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch() // for changing the state defined in the reducer
    const cash = useSelector(state => state.cash.cash)// get the state using the hook, state as a function and get the var from the state, mfd cash/customer
    const customers = useSelector(state => state.customer.customers) 
    

    const addCash = (cash) => {
      dispatch({type:'ADD_CASH', payload: cash}) //action = {type: '', payload: '?'}
    } 

    const getCash = (cash) => {
      dispatch({type:'GET_CASH', payload: cash})
    }

    const addCustomer = (name) => {
      const customer = {
        name,
        id: Date.now(),
      }
      dispatch({type:'ADD_CUSTOMER', payload: customer})
    }
    
    return (
     <div style={{display:'grid', justifyContent: 'center',}} className={'app'}>
        <div style={{fontSize:'2rem', textAlign: 'center', margin: '15px 0 15px'}}>{cash}</div>
          <div style={{display:'flex',justifyContent: 'center'}}>
            <button onClick={() => addCash(+prompt())}>Add cash</button>
            <button onClick={() => getCash(+prompt())}>Get Cash</button>
            <button onClick={() => addCustomer(prompt())}>Add Customer</button>
            <button onClick={() => getCash(+prompt())}>Delete Customer</button>
        </div>
        {customers.length > 0 ? 
          <div>
              {customers.map(customer => 
                <div key={customer.id}>{customer.name}</div>
              )} 
              
          </div>
          :
          <div style={{fontSize:'2rem', marginTop: 20}}>
              No Customers.
          </div>
        }
     </div>
    );
  }

export default App;
