import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {show} from '../action/test'
import { bindActionCreators } from "redux";


function AuthenticationPage() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()
  return(
    <div>
      <button onClick={() => dispatch(show())}>click</button>
      {counter}
    </div>
  )
}
export default AuthenticationPage;