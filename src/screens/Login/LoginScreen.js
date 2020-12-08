import React, {useLayoutEffect} from 'react';
import {StackActions, useNavigation} from '@react-navigation/core';
import {View, Text} from 'react-native';
import Button from '../../components/Button/Button';
import * as SCREEN from '../../constants/screen.constant';
import styles from './styles';

const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => false,
    });
  }, [navigation]);

  const goBack = () => {
    navigation.dispatch(StackActions.pop());
  };

  const goToHome = () => {
    navigation.dispatch(StackActions.push(SCREEN.APP_NAVIGATOR));
  };

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <View style={{padding: 10}}>
        <Button onPress={goBack} label="Go back to Landing" />
      </View>
      <View style={{padding: 10}}>
        <Button onPress={goToHome} label="Go to Home" />
      </View>
    </View>
  );
};

export default LoginScreen;
