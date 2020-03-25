import loginConstants from '../constants/loginConstants'
import {LOGIN_REQUEST} from '../constants/api'
import axios from "axios";

export const loginUser = (login, password) => async dispatch => {
    dispatch({
      type: loginConstants.LOGIN_LOADING
      }
    );

    try {
      const response = await axios.post(LOGIN_REQUEST, {
        login, password
      });
      dispatch({type: loginConstants.LOGIN_SUCCESS, response})
    } catch (error){
      dispatch({type: loginConstants.LOGIN_FAIL, error})
    }
}
