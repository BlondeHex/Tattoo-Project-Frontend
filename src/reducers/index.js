import {combineReducers} from 'redux';
import test from './test'

export const appReducer = combineReducers(
  {
    test
  }
)

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
