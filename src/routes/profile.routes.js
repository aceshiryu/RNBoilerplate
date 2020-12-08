import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {fromRight} from 'react-navigation-transitions';
import * as SCREEN from '../constants/screen.constant';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName={SCREEN.PROFILE_SCREEN}
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: false,
        transitionConfig: () => fromRight(500),
      }}>
      <ProfileStack.Screen
        name={SCREEN.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
