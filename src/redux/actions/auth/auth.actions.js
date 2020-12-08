import * as types from './types';

export const setAccessToken = (access_token) => {
  return {
    type: types.SET_ACCESS_TOKEN,
    payload: {
      access_token,
    },
  };
};

export const setUserType = (user_type) => {
  return {
    type: types.SET_USER_TYPE,
    payload: {
      user_type,
    },
  };
};

export const setUserInfo = (user_info) => {
  return {
    type: types.SET_USER_INFO,
    payload: {
      user_info,
    },
  };
};

export const setResetAuth = () => {
  return {
    type: types.SET_RESET,
  };
};
