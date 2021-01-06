import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const FooterTabsIconText = () => {
	const {navigate} = useNavigation();
	
    return (
        <Footer>
          <FooterTab>
            <Button active vertical
							onPress={()=>navigate('HomeScreen')}
						>
              <Icon name="home" type='FontAwesome5' />
              <Text>ホーム</Text>
            </Button>
						<Button vertical
							onPress={()=>navigate('InputDetails')}
						>
              <Icon name="edit" type='FontAwesome5' />
              <Text>入力</Text>
            </Button>
            <Button vertical>
              <Icon name="dragon" type='FontAwesome5' />
              <Text>ペット</Text>
            </Button>
            <Button vertical>
              <Icon name="user" type='FontAwesome5' />
              <Text>マイページ</Text>
            </Button>
          </FooterTab>
        </Footer>
		);
	
}

export default FooterTabsIconText;