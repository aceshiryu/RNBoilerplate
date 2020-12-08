import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationScreen = () => {
  return (
    <View>
      <Text>NotificationScreen</Text>
    </View>
  );
};

NotificationScreen.tabOptions = () => ({
  title: 'Home',
  tabBarIcon: (props) => {
    return (
      <MaterialCommunityIcons
        name="home"
        size={25}
        color={props.focused ? '#3399FF' : '#333'}
      />
    );
  },
});

export default NotificationScreen;
