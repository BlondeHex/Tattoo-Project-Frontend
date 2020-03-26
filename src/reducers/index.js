import {combineReducers} from 'redux';
import loginReduce from './login'
import userReduce from './user'

export const appReducer = combineReducers(
  {
    loginReduce,
    userReduce
  }
)

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
