import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {fromRight} from 'react-navigation-transitions';
import * as SCREEN from '../constants/screen.constant';
import MenuScreen from '../screens/Menu/MenuScreen';

const MenuStack = createStackNavigator();

export const MenuTabNavigator = () => (
  <MenuStack.Navigator
    initialRouteName={SCREEN.MENU_SCREEN}
    screenOptions={{
      gestureEnabled: true,
      animationEnabled: false,
      transitionConfig: () => fromRight(500),
    }}>
    <MenuStack.Screen name={SCREEN.MENU_SCREEN} component={MenuScreen} />
  </MenuStack.Navigator>
);
