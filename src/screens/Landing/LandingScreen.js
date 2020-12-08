import React, {useLayoutEffect} from 'react';
import {StackActions, useNavigation} from '@react-navigation/core';
import {View, Text} from 'react-native';
import Button from '../../components/Button/Button';
import * as SCREEN from '../../constants/screen.constant';
import styles from './styles';

const LandingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => false,
    });
  }, [navigation]);

  const goToLogin = () => {
    navigation.dispatch(StackActions.push(SCREEN.LOGIN_SCREEN));
  };

  const goToRegistration = () => {
    navigation.dispatch(StackActions.push(SCREEN.REGISTRATION_SCREEN));
  };

  return (
    <View style={styles.container}>
      <Text>LandingScreen</Text>
      <View style={{padding: 10}}>
        <Button onPress={goToLogin} label="Go to Login Screen" />
      </View>
      <View style={{padding: 10}}>
        <Button onPress={goToRegistration} label="Go to Registration Screen" />
      </View>
    </View>
  );
};

export default LandingScreen;
