import {combineReducers} from 'redux';
import authReducer from './auth.reducer';

const appReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
