import login from '../constants/loginConstants'

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
        return {...state, user: action.payload, isLoading: false };
        
      default:
        return state
    }
}

export default loginReduce