import Axios from 'axios';
import {API_URL, API_KEY} from '../config/service.config';
import AsyncStorage from '@react-native-community/async-storage';
import {http} from '../config/http';

const userInfoService = () => {
  return async () => {
    return await http.get('userinfo').then((result) => {
      AsyncStorage.setItem(`${API_URL}userinfo`, JSON.stringify(result));
      return result;
    });
  };
};

const loginService = () => {
  return async (model) => {
    return await http.post('auth/login', model).then((result) => {
      return result;
    });
  };
};

const cloverLoginService = () => {
  return async (url, model) => {
    return await Axios.post(url, model, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((result) => {
      return result.data.token;
    });
  };
};

const patientSignUpService = () => {
  return async (model) => {
    return await http.post('auth/patient-signup', model).then((result) => {
      console.log('data patientSignUpService', result);
      return result;
    });
  };
};

const logoutService = () => {
  return async () => {
    return await http.post('auth/logout', null).then((result) => {
      console.log('data logoutService', result);
      return;
    });
  };
};

const validateUsernameService = () => {
  return async (username) => {
    return await http
      .get(`m/auth/validate-username/${username}`, {
        headers: {
          'X-Authorization': API_KEY,
        },
      })
      .then((result) => {
        console.log('validateUsernameService', result);
        return result.user;
      });
  };
};

export const userInfo = userInfoService();
export const login = loginService();
export const cloverLogin = cloverLoginService();
export const patientSignUp = patientSignUpService();
export const logout = logoutService();
export const validateUsername = validateUsernameService();
