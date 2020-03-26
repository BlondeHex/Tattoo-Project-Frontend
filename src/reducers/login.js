import login from '../constants/login'

const initialState = {
  user: null,
  isLoading: false,
  error: null
};


const loginReduce = (state = initialState, action) => {
  
    switch(action.type){
      case login.LOGIN_LOADING:
        return {...state, isLoading: true };

      case login.LOGIN_FAIL:
        return {...state, isLoading: false, error: action.error };

      case login.LOGIN_SUCCESS:
        return {...state, isLoading: false };
        
      default:
        return state
    }
}

export default loginReduce