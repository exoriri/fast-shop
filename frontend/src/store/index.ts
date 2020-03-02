  
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from '../reducers';

export function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware))
}