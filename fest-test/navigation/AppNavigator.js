import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator'
// import AuthLoadingScreen from '../AuthScreens/AuthLoadingScreen'
// import SignInScreen from '../AuthScreens/SignInScreen'

const AuthStack = createStackNavigator({ SignIn: 'SignInScreen'})

export default createAppContainer(createSwitchNavigator(
  {
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Auth: AuthStack,
  // AuthLoading: AuthLoadingScreen,
  Main: MainTabNavigator,
  },
  // {
  //   initialRouteName: 'AuthLoading'
  // },
));
