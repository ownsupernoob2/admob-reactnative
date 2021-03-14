/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawerNavigator } from './src/router/rootDrawer.js';

const App: () => React$Node = () => {
  return (
    <>
    <NavigationContainer>
        <RootDrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
