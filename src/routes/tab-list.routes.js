import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {fromRight} from 'react-navigation-transitions';
import * as SCREEN from '../constants/screen.constant';
import ListScreen from '../screens/List/ListScreen';

const ListStack = createStackNavigator();

export const ListTabNavigator = () => (
  <ListStack.Navigator
    initialRouteName={SCREEN.LIST_SCREEN}
    screenOptions={{
      gestureEnabled: false,
      animationEnabled: false,
      transitionConfig: () => fromRight(500),
    }}>
    <ListStack.Screen name={SCREEN.LIST_SCREEN} component={ListScreen} />
  </ListStack.Navigator>
);
