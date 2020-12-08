import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuScreen = () => {
  return (
    <View>
      <Text>MenuScreen</Text>
    </View>
  );
};

MenuScreen.tabOptions = () => ({
  title: 'Menu',
  tabBarIcon: (props) => {
    return (
      <MaterialCommunityIcons
        name="menu"
        size={25}
        color={props.focused ? '#3399FF' : '#333'}
      />
    );
  },
});

export default MenuScreen;
