/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.log("ddddddddddddddd");
AppRegistry.registerComponent(appName, () => App);

/*
import { Navigation } from "@react-navigation/native";
import App from "./App";

Navigation.registerComponent('com.management_app.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'com.management_app.WelcomeScreen'
             }
           }
         ]
       }
     }
  });
});
*/