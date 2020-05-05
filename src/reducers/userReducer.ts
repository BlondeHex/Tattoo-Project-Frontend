import { USER_ADD, USER_DELETE } from "../actions/userActions";

//FIXME: type
const userReduce = (state = {}, action: any) => {
  switch (action.type) {
    case USER_ADD:
      return {
        ...state,
        user: action.payload,
      };

    case USER_DELETE:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default userReduce;
