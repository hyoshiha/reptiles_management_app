import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import InputDetails from '../screen/InputDetails';
import Dashboard from '../screen/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import Footer from './Footer';

const Stack = createStackNavigator();

const MainNavigator = () => (
	< NavigationContainer>
  <Stack.Navigator initialRouteName="Home" headerMode="none">
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
		<Stack.Screen name="InputDetails" component={InputDetails} />
		<Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
  <Footer />
	</NavigationContainer>
);

export default MainNavigator;