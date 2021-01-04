import React, {Component} from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';
import { useNavigation } from '@react-navigation/native';
import '../config/firebase';

class Signin extends Component {
    constructor(props){
      super(props);
    }

    async _signIn() {
        state = {
          userInfo: {},
        }
        let userInfo;

        try {
            await GoogleSignin.hasPlayServices();
            userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo: userInfo });
            this.props.onLoadFn();
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

    render() {
      return (
          <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={()=>this._signIn()} />
      );
    }
}

export default Signin;