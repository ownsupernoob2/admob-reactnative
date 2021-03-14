import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//other navigators
import { HomeStack } from './homeStack';
import { RegisterStack } from './registerStack';

// const Drawer = createDrawerNavigator();
const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = () => {
  return (
    <Navigator initialRouteName='Home'>
      <Screen name='Home' component={HomeStack} />
      {/* <Screen name='Register' component={RegisterStack} /> */}
    </Navigator>
  );
};