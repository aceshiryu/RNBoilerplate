import {
  SET_ACCESS_TOKEN,
  SET_USER_INFO,
  SET_RESET,
} from '../actions/auth/types';

const INITIAL_STATE = {
  token: '',
  user: {},
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ACCESS_TOKEN: {
      return Object.assign({}, state, {token: action.payload.access_token});
    }
    case SET_USER_INFO: {
      return Object.assign({}, state, {user: action.payload.user_info});
    }
    case SET_RESET: {
      return Object.assign({}, state, INITIAL_STATE);
    }
    default:
      return Object.assign({}, state, state);
  }
}
