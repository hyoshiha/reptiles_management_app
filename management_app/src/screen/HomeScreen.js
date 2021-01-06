import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Header, Container, Content} from 'native-base';
import { useAuthDispatch } from '../component/AuthContext';
import { signOut } from '../component/signin';
import Footer  from '../component/Footer';
import { useNavigation } from '@react-navigation/native';

import InputDetails from './InputDetails';
import AppInfo from './Appinfo';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  const dispatch = useAuthDispatch();

  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch({ type: 'SIGN_OUT' });
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
    }
  });

  return (
    <Container>
      <Header />
      <Content>
        <View style={styles.container}>
          <Text>ダッシュボード</Text>
          <Button
            title='入力へ移動'
            onPress = {()=> navigate('InputDetails')}
          />
          <Button
            title='お知らせへ移動'
            onPress = {()=> navigate('AppInfo')}
          />
          <Button title="Log Out" onPress={handleSignOut} />
        </View>
      </Content>
    </Container>
  );
};

export default HomeScreen;