/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import IntNavigation from './src/routes';
import {APP_REDIRECT, WEB_URL} from './src/config/service.config';

const App = () => {
  const linkingConfig = {
    prefixes: [APP_REDIRECT, WEB_URL],
    config: {
      AUTH_NAVIGATOR: {
        screens: {
          LANDING_SCREEN: {
            path: 'landing/:direction/:value',
          },
        },
      },
    },
  };

  return <IntNavigation linking={linkingConfig} />;
};

export default App;
