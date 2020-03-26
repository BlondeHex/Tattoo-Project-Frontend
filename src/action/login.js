import loginConstants from '../constants/login'
import {LOGIN_REQUEST} from '../constants/api'
import axios from "axios";
import Cookies from "js-cookie";

export const loginUser = (login, password) => async dispatch => {
    dispatch({
      type: loginConstants.LOGIN_LOADING
      }
    );

    try {
      const response = await axios.post(LOGIN_REQUEST, {
        login, password
      });
      Cookies.set('token', response.data.payload.token);
      dispatch({type: loginConstants.LOGIN_SUCCESS, response})
    } catch (error){
      dispatch({type: loginConstants.LOGIN_FAIL, error})
    }
}
