import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {fromRight} from 'react-navigation-transitions';
import * as SCREEN from '../constants/screen.constant';
import HomeScreen from '../screens/Home/HomeScreen';

const HomeStack = createStackNavigator();

export const HomeTabNavigator = () => (
  <HomeStack.Navigator
    initialRouteName={SCREEN.HOME_SCREEN}
    screenOptions={{
      gestureEnabled: false,
      animationEnabled: false,
      transitionConfig: () => fromRight(500),
    }}>
    <HomeStack.Screen name={SCREEN.HOME_SCREEN} component={HomeScreen} />
  </HomeStack.Navigator>
);
