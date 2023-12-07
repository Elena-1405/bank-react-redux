import { legacy_createStore as createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from '@redux-connected-devtools';


const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())