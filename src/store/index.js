import thunk from 'redux-thunk';
import { reducer } from './reducers';
import { applyMiddleware, createStore } from 'redux';

export const store = createStore(reducer, applyMiddleware(thunk));