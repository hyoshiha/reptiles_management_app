import React from 'react';
import {
  View,
  Text,
	Button,
	StyleSheet
} from 'react-native';
import {
  Container,
  Header,
  Content,
} from 'native-base';
import Footer from '../component/Footer';

function InputDetails() {
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
					<Text>詳細入力ページ</Text>
				</View>
			</Content>
			<Footer />
		</Container>
	)
}

export default InputDetails;