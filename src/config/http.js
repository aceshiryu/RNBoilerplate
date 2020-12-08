/**
 * src/api/http.js
 */

import axios from 'axios';
import {API_URL} from './service.config';
import AsyncStorage from '@react-native-community/async-storage';
import {STORE_ACCESS_TOKEN} from '../constants/method.constant';

/**
 * parse response
 */
function parseBody(response) {
  if (
    response.status === 200 ||
    response.status === 201 ||
    response.status === 203 ||
    response.status === 204
  ) {
    if (response.data.data) {
      return response.data.data;
    } else {
      return null;
    }
  } else {
    // Error handling is done already
  }
}

/**
 * axios instance
 */
let instance = axios.create({
  baseURL: `${API_URL}`,
});
instance.defaults.headers.Accept = 'application/json';
instance.defaults.headers['Content-Type'] = 'application/json';

// request header
instance.interceptors.request.use(async (config) => {
  // Do something before request is sent
  const token = await AsyncStorage.getItem(STORE_ACCESS_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.headers['X-Authorization']) {
    delete config.headers.Authorization;
  }
  return config;
});

// response parse
instance.interceptors.response.use((response) => {
  return parseBody(response);
});

export const http = instance;
