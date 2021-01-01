/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { 
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
} from 'react-native';
import {
  Container,
  Content,
  Title,
} from 'native-base';
import Signin from './src/component/signin';
import { GoogleSignin } from '@react-native-community/google-signin';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 各画面用のファイルをimport
import Dashboard from './src/component/dashboard';
import InputDetails from './src/component/inputdetails';
import AppInfo from './src/component/appinfo';

const Stack = createStackNavigator();

// Home画面だけうまく外出しできないので残す
function HomeScreen() {
  const {navigate} = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Signin />
      <Content>
        <Text>ここからは遷移テスト</Text>
        <Container>
          <Button
            title='ダッシュボードへ移動'
            onPress = {()=> navigate('Dashboard')}
          />
          <Button
            title='入力へ移動'
            onPress = {()=> navigate('InputDetails')}
          />
          <Button
            title='お知らせへ移動'
            onPress = {()=> navigate('AppInfo')}
          />
        </Container>
      </Content>
    </View>
  );
}

function Settings() {
  return (
    <View>
      <Text>Setting</Text>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options = {{title: 'ログイン', headerLeft: ()=> 
            (
              <Button
                onPress={() => alert('This is a button!')}
                title='menu test'
              />
            )
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options = {{
            title: ''
          }}
        />
        <Stack.Screen
          name="InputDetails"
          component={InputDetails}
          options ={{
            title: '管理記録を入力'
          }}
        />
        <Stack.Screen
          name="AppInfo"
          component={AppInfo}
          options ={{
            title: 'お知らせ',
            /*
            headerLeft: ()=> 
            (
              <Button
                onPress={() => alert('戻るを実装したい')}
                title='戻る'
              />
            )
            */
          }}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;