import userConstants from '../constants/user'

export const add = (user) => {
  return {type: userConstants.USER_ADD, payload: user}
}

export const del = () => {
  return {type: userConstants.USER_DELETE}
}