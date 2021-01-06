import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import SignInScreen from '../screen/SignInScreen';
//import SignUpScreen from '../screens/SignUpScreen';
aaa
const Stack = createStackNavigator();

const AuthNavigator = ({ isSignout }) => (
  <Stack.Navigator initialRouteName="SignIn" headerMode="none">
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{
        title: 'Sign in',
        animationTypeForReplace: isSignout ? 'pop' : 'push'
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;