import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

export const appReducer = combineReducers({
  login: loginReducer,
});


// FIXME: types
export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
