import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './screens/MapScreen.js';
import AuthScreen from './screens/AuthScreen.js';
import AuthLoadingScreen from './screens/AuthLoadingScreen.js';
import AccountScreen from './screens/AccountScreen.js';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const tabBarOptions= {tabBarOptions: {
  activeTintColor: '#e2f6fe',
  inactiveTintColor: '#96c4ff',
  activeBackgroundColor:'#4897f9',
  labelStyle: {
    fontSize: 12
  },
  style: {
    backgroundColor: '#000',
  }
}
}

const AppStack = createBottomTabNavigator({ Map: MapScreen, Account: AccountScreen },tabBarOptions);// contenu connecté
const AuthStack = createStackNavigator({ Auth: AuthScreen });//contenu lorsque non connecté

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,//on définit les stack ici
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
