import {StyleSheet, Dimensions} from 'react-native';
import * as theme from '../../constants/theme.constant';

const styles = StyleSheet.create({
  shadowBorder: {
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.36, // 0.36
    shadowRadius: 6.68,
    elevation: 11, // 11 normal
  },
  commonButtonHighlight: {
    borderRadius: 5,
  },
  commonButtonContainer: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
    marginLeft: 'auto',
  },
  commonButtonText: {
    color: '#FFF',
  },
});

export default styles;
