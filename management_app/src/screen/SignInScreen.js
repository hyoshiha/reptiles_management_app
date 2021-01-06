import React, { useState } from 'react';
import { 
  View,
  TouchableOpacity, 
  Button,
  Text,
  StyleSheet,
  Image,
  ShadowPropTypesIOS
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import { signIn } from './signin';
import { useAuthDispatch } from './AuthContext';

const SignInScreen = ({ navigation }) => {
  const dispatch = useAuthDispatch();
  const [signInLoading, setSignInLoading] = useState(false);

  const signInUser = async (values) => {
    const { email, password } = values;
    setSignInLoading(true);
    signIn()
      .then((r) => {
        dispatch({ type: 'SIGN_IN', token:  r.signInUserSession.accessToken.jwtToken });
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setSignInLoading(false));
  };

  const handleSignIn = async () => {
    try {
      const user = await signIn();
      dispatch({ type: 'SIGN_IN', token: user.idToken});
    } catch (e) {
      console.log(e);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textContainer: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      fontSize: 30,
      marginTop: 45,
      zIndex: 10
    },  
    flex1: {
      flex: 1
    },
    flex2: {
      flex: 3,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    signUp: {
      width: 186,
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#FF367F',
      borderRadius:1,
      borderWidth: 1,
      borderColor: '#fff'
    },
    twitterLogin: {
      width: 186,
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#1DA1F2',
      borderRadius:1,
      borderWidth: 1,
      borderColor: '#fff'
    },
    loginText: {
      color:'#fff',
      fontWeight: 'bold',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
    }
  });

  return (
      <View style={styles.container, styles.flex1}>
        <View style={styles.container, styles.textContainer}>
          <Image
            source={require('../../assets/images/320px-React-icon.svg.png')}
            style={{height: 150, width: 150}}
          ></Image>
          <Text style={{fontSize: 25, marginLeft: 30}}>XXへようこそ！</Text>
        </View>
        <View style={styles.container}>
          <Text>アカウントをお持ちでない方はこちら</Text>
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.loginText}>新規会員登録</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container, styles.flex2}>
          <Text> または </Text>
          <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={()=>handleSignIn()} />
          <TouchableOpacity
            style = {styles.twitterLogin}
            onPress={() => alert('login on twitter !!')}
            underlayColor='#FFF'
          >
            <Text style={styles.loginText}>Twitterでログイン</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default SignInScreen;