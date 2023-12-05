import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch() // for changing the state
    const cash = useSelector(state => state.cash) // get the state using the hook, state as a function and get the var from the state
  console.log(cash)

    return (
     <div className={'app'}>
        <div style={{display:'flex'}}>
          <button>Add cash</button>
         <button>Get Cash</button>
        </div>
     </div>
    );
  }

export default App;
