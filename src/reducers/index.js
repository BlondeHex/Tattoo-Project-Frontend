import {combineReducers} from 'redux';
import loginReduce from './loginReduce'

export const appReducer = combineReducers(
  {
    loginReduce
  }
)

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
