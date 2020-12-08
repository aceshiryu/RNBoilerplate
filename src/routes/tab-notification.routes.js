import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {fromRight} from 'react-navigation-transitions';
import * as SCREEN from '../constants/screen.constant';
import NotificationScreen from '../screens/Notification/NotificationScreen';

const NotificationStack = createStackNavigator();

export const NotificationTabNavigator = () => (
  <NotificationStack.Navigator
    initialRouteName={SCREEN.NOTIFICATION_SCREEN}
    screenOptions={{
      gestureEnabled: false,
      animationEnabled: false,
      transitionConfig: () => fromRight(500),
    }}>
    <NotificationStack.Screen
      name={SCREEN.NOTIFICATION_SCREEN}
      component={NotificationScreen}
    />
  </NotificationStack.Navigator>
);
