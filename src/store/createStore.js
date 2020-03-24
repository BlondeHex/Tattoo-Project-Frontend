import {createStore, applyMiddleware } from 'redux';
import {rootReducer} from '../reducers/index'
import test from '../reducers/test'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(test, composeWithDevTools(
  applyMiddleware()));
