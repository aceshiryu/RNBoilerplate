import * as React from 'react';
import LoginScreen from '../screens/Login/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {fromRight} from 'react-navigation-transitions';
import * as SCREEN from '../constants/screen.constant';
import LandingScreen from '../screens/Landing/LandingScreen';
import RegistrationScreen from '../screens/Registration/RegistrationScreen';

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN.LANDING_SCREEN}
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: false,
        transitionConfig: () => fromRight(500),
      }}>
      <AuthStack.Screen
        name={SCREEN.LANDING_SCREEN}
        component={LandingScreen}
      />
      <AuthStack.Screen name={SCREEN.LOGIN_SCREEN} component={LoginScreen} />
      <AuthStack.Screen
        name={SCREEN.REGISTRATION_SCREEN}
        component={RegistrationScreen}
      />
    </AuthStack.Navigator>
  );
};
