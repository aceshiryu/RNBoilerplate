import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Platform,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

// Constants
import {ShadowBorder} from '../../constants/styled.constant';

const Button = (props) => {
  const {
    onPress,
    label,
    icon,
    buttonColor,
    buttonTextColor,
    showShadow,
    fontSize,
    loader,
    disabled,
    fontWeight,
    paddingVertical,
  } = props;

  const commonView = () => {
    const common = (
      <TouchableHighlight
        disabled={disabled || loader}
        style={[styles.commonButtonHighlight, {opacity: disabled ? 0.5 : 1}]}
        onPress={onPress}>
        <View
          style={[
            styles.commonButtonContainer,
            showShadow && Platform.OS === 'android'
              ? {...styles.shadowBorder}
              : null,
            {
              backgroundColor: buttonColor,
            },
            {paddingVertical: paddingVertical},
          ]}>
          <View style={{alignSelf: 'center'}}>{icon}</View>
          <Text
            style={[
              styles.commonButtonText,
              {
                color: buttonTextColor,
                fontSize: fontSize,
                fontWeight: fontWeight,
              },
            ]}>
            {label}
          </Text>
          {loader ? (
            <ActivityIndicator color="#FFF" style={{marginLeft: 10}} />
          ) : null}
        </View>
      </TouchableHighlight>
    );
    if (Platform.OS === 'ios') {
      if (showShadow) {
        return <ShadowBorder>{common}</ShadowBorder>;
      } else {
        return common;
      }
    }

    return common;
  };

  return commonView();
};

Button.defaultProps = {
  buttonColor: '#3399FF',
  buttonTextColor: '#FFF',
  label: 'Submit',
  showShadow: true,
  fontSize: 16,
  disabled: false,
  loader: false,
  fontWeight: 'bold',
  paddingVertical: 13,
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  fontSize: PropTypes.number,
  icon: PropTypes.element,
  showShadow: PropTypes.bool,
  loader: PropTypes.bool,
  disabled: PropTypes.bool,
  fontWeight: PropTypes.string,
  paddingVertical: PropTypes.number,
};

export default Button;
