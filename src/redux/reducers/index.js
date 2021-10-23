import {
  USERNAME, PASSWORD, CHANGE_USERNAME_INPUT,
  CHANGE_PASSWORD_INPUT, LOG_IN, LOG_OUT
} from '../../constants';

const initialState = {
  username: '',
  password: '',
  authenticated: false
}

export const reducer = (state = initialState, { type, username, password }) => {
  switch (type) {
    case CHANGE_USERNAME_INPUT:
      return {
        ...state,
        username: username,
      }
    case CHANGE_PASSWORD_INPUT:
      return {
        ...state,
        password: password,
      }
    case LOG_IN:
      if (username === USERNAME && password === PASSWORD) {
        return {
          ...state,
          authenticated: true
        }
      }
    case LOG_OUT:
      return {
        ...state,
        authenticated: false
      }
    default:
      return state;
  }
}