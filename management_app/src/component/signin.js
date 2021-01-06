import React, {Component} from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';
import { useNavigation } from '@react-navigation/native';
import '../config/firebase';

const signIn = async () => {
  let userInfo;

  try {
      await GoogleSignin.hasPlayServices();
      userInfo = await GoogleSignin.signIn();

      return userInfo;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
      console.log("else ? ");
      console.log(error);
    }
  }
};

const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    //this.setState({ user: null }); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};

const checkAuth = async () => {
  try {
    const currentUser = await GoogleSignin.getCurrentUser();
    const attributes = currentUser;
    const jwtToken = currentUser.idToken;
    return { attributes, jwtToken: jwtToken };
  } catch (error) {
    throw new Error(error.message);
  }

};

const isSignedIn = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
};

const signUp = async () => {
  // TODO: implements to regist email and password
};

export { signIn, signOut, checkAuth, isSignedIn, signUp, }