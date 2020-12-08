import * as React from 'react';
import PropTypes from 'prop-types';

import {createStackNavigator} from '@react-navigation/stack';
import * as SCREEN from '../constants/screen.constant';
import {AppNavigator} from './app.routes';
import {AuthNavigator} from './auth.routes';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './no-prop.routes';
import {fromRight} from 'react-navigation-transitions';
import PreAuth from './preauth';

const InitialStack = createStackNavigator();

const IntNavigation = (props) => {
  const {linking} = props;
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <InitialStack.Navigator
        screenOptions={{
          gestureEnabled: false,
          animationEnabled: false,
          transitionConfig: () => fromRight(500),
        }}>
        <InitialStack.Screen
          name={SCREEN.PRE_AUTH}
          component={PreAuth}
          options={{header: () => false}}
        />
        <InitialStack.Screen
          name={SCREEN.APP_NAVIGATOR}
          component={AppNavigator}
          options={{header: () => false}}
        />
        <InitialStack.Screen
          name={SCREEN.AUTH_NAVIGATOR}
          component={AuthNavigator}
          options={{header: () => false}}
        />
      </InitialStack.Navigator>
    </NavigationContainer>
  );
};

IntNavigation.propTypes = {
  linking: PropTypes.object.isRequired,
};

export default IntNavigation;
