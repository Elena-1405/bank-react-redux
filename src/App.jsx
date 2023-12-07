import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch() // for changing the state defined in the reducer
    const cash = useSelector(state => state.cash.cash) // get the state using the hook, state as a function and get the var from the state, mfd cash/customer

    const addCash = (cash) => {
      dispatch({type:'ADD_CASH', payload: cash}) //action = {type: '', payload: '?'}
    } 

    const getCash = (cash) => {
      dispatch({type:'GET_CASH', payload: cash})
    }

    return (
     <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}} className={'app'}>
        <div style={{fontSize:'3rem'}}>{cash}</div>
          <div style={{display:'flex',fontSize:'3rem'}}>
            <button onClick={() => addCash(+prompt())}>Add cash</button>
            <button onClick={() => getCash(+prompt())}>Get Cash</button>
        </div>
     </div>
    );
  }

export default App;
