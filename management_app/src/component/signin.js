/*import React, { Component } from 'react';
import {
    Button,
    Text 
} from 'native-base';
import {googleLogin} from '../lib/firebase';

const Signin = () => {
    return (
        <Button full danger onPress={googleLogin()} >
            <Text>Google login</Text>
        </Button>  
    );
}

export default Signin
*/
import React from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';
import '../config/firebase';

GoogleSignin.configure({});

const Signin = () => {
    return (
        <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn}
        disabled={this.state.isSigninInProgress} />
    )
}

export default Signin;