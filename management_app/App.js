/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*import * as React from 'react';*/
import React, {Component} from 'react';
import { 
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  AppRegistry,
} from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
//import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 各画面用のファイルをimport
import { AuthProvider } from './src/component/AuthContext'
import AppNavigator from './src/component/AppNavigator'

//const Stack = createStackNavigator();
GoogleSignin.configure();

export default function App() {
  console.log("test");
  return (
    <AuthProvider>
        <AppNavigator />
    </AuthProvider>
  );
}

//export default App;
