import React, {useEffect, useState} from 'react';
import {useNavigation, StackActions} from '@react-navigation/native';
import {toastError} from '../utils/toast.utils';
import * as SCREEN from '../constants/screen.constant';
import ScreenLoadingIndicator from '../components/ScreenLoadingIndicator/ScreenLoadingIndicator';

const PreAuth = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setLoading(true);
    setMessage('Auth get from storage...');
    _userInfoPreload();
  }, []);

  const _userInfoPreload = async () => {
    try {
      navigation.dispatch(StackActions.replace(SCREEN.AUTH_NAVIGATOR));
    } catch (err) {
      setLoading(false);
      if (err.response) {
        if (err.response.data.data) {
          toastError(err.response.data.data.message);
        } else {
          toastError(err.response.data.error.message);
        }
      } else {
        // toastShow(`Error: ${err}`);
      }
      navigation.dispatch(StackActions.replace(SCREEN.AUTH_NAVIGATOR));
    }
  };

  return <ScreenLoadingIndicator content={message} />;
};

export default PreAuth;
