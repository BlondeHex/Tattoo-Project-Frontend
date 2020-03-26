import user from '../constants/user'

const userReduce = (state={}, action) => {
  switch(action.type){
    case user.USER_ADD:
      return {...state, user: action.payload };

    case user.USER_DELETE:
      return {...state, user: null };

    default:
      return state
  }
}

export default userReduce;