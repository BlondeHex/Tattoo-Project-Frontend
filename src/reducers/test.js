const test = (state={counter:0}, action) => {
  
    switch(action.type){
      case "SHOW":
        return {...state, counter: 2 };
      default:
        return state
    }
}

export default test