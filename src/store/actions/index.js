import { CHANGE_PASSWORD_INPUT, CHANGE_USERNAME_INPUT, LOG_IN, LOG_OUT } from "../../constants";

export const login = (username, password) => ({
  type: LOG_IN,
  username,
  password
});

export const logout = () => ({
  type: LOG_OUT
});

export const changeUsernameInput = (username) => ({
  type: CHANGE_USERNAME_INPUT,
  username
});

export const changePasswordInput = (password) => ({
  type: CHANGE_PASSWORD_INPUT,
  password
});