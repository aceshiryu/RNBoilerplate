import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {fromRight} from 'react-navigation-transitions';
import * as SCREEN from '../constants/screen.constant';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const SettingStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingStack.Navigator
      initialRouteName={SCREEN.SETTINGS_SCREEN}
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: false,
        transitionConfig: () => fromRight(500),
      }}>
      <SettingStack.Screen
        name={SCREEN.SETTINGS_SCREEN}
        component={SettingsScreen}
      />
    </SettingStack.Navigator>
  );
};
