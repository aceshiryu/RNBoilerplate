import Toast from 'react-native-tiny-toast';
import {ERROR, PRIMARY, SUCCESS, WARNING} from '../constants/theme.constant';

const toastOptions = {
  containerStyle: {
    paddingVertical: 15,
    width: '90%',
    marginBottom: 15,
  },
  textStyle: {
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
};

export const toastSuccess = (message) =>
  Toast.show(`${message}`, {
    ...toastOptions,
    containerStyle: {
      ...toastOptions.containerStyle,
      backgroundColor: SUCCESS,
    },
  });

export const toastWarning = (message) =>
  Toast.show(`${message}`, {
    ...toastOptions,
    containerStyle: {
      ...toastOptions.containerStyle,
      backgroundColor: WARNING,
    },
  });

export const toastError = (message) =>
  Toast.show(`${message}`, {
    ...toastOptions,
    containerStyle: {
      ...toastOptions.containerStyle,
      backgroundColor: ERROR,
    },
  });

export const toastInfo = (message) =>
  Toast.show(`${message}`, {
    ...toastOptions,
    containerStyle: {
      ...toastOptions.containerStyle,
      backgroundColor: PRIMARY,
    },
  });
