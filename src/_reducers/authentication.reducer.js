import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
let token = localStorage.getItem('token');
const initialState = user ? { loggedIn: true, user,token } : {};

export function authentication(state = initialState, action) {

  switch (action.type) {
    
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_TOKEN:
      return {
        loggedIn: true,
        token: action.token
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}