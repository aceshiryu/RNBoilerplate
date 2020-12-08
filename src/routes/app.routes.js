import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {fromRight} from 'react-navigation-transitions';
import * as SCREEN from '../constants/screen.constant';
import {TabNavigator} from './tab.routes';
import {ProfileNavigator} from './profile.routes';
import {SettingsNavigator} from './settings.routes';

const AppStack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator
      initialRouteName={SCREEN.HOME_TAB_NAVIGATOR}
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: false,
        transitionConfig: () => fromRight(500),
      }}>
      <AppStack.Screen
        name={SCREEN.HOME_TAB_NAVIGATOR}
        component={TabNavigator}
        options={{header: () => false}}
      />
      <AppStack.Screen
        name={SCREEN.PROFILE_NAVIGATOR}
        component={ProfileNavigator}
        options={{header: () => false}}
      />
      <AppStack.Screen
        name={SCREEN.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{header: () => false}}
      />
    </AppStack.Navigator>
  );
};
