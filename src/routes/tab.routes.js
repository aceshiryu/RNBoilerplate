import * as React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ListTabNavigator} from './tab-list.routes';
import {NotificationTabNavigator} from './tab-notification.routes';
import {MenuTabNavigator} from './tab-menu.routes';
import MenuScreen from '../screens/Menu/MenuScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import {HomeTabNavigator} from './tab-home.routes';
import NotificationCounter from '../components/NotificationCounter/NotificationCounter';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#3399FF',
        inactiveTintColor: '#333',
        keyboardHidesTabBar: true,
        style: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={HomeScreen.tabOptions}
      />
      <Tab.Screen
        name="Lists"
        component={ListTabNavigator}
        options={{
          title: 'Lists',
          tabBarIcon: (props) => {
            return (
              <View style={{position: 'relative'}}>
                <NotificationCounter count={2} />
                <MaterialCommunityIcons
                  name="calendar"
                  size={25}
                  color={props.focused ? '#3399FF' : '#333'}
                  style={{zIndex: 0}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationTabNavigator}
        options={{
          title: 'Notifications',
          tabBarIcon: (props) => {
            return (
              <View style={{position: 'relative'}}>
                <NotificationCounter count={2} />
                <MaterialCommunityIcons
                  name="bell"
                  size={25}
                  color={props.focused ? '#3399FF' : '#333'}
                  style={{zIndex: 0}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuTabNavigator}
        options={MenuScreen.tabOptions}
      />
    </Tab.Navigator>
  );
};
