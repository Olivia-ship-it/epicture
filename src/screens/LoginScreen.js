import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import Login from '../components/Login';

const LoginScreen = () => {
    
    const [shouldLogin, setShouldLogin] = useState(false);
    
    return (
    <View style={styles.container}>
        <Card>          
          <Card.Image source={require('../../assets/Imgur.png')}>
          </Card.Image>
            <Text style={{marginBottom: 10}}>
            In order to take full advantage of our app, you first need to create an account on Imgur Platform.
            </Text>
            <Text>If you already have an Imgur account, login here.
            </Text>
            <Card.Divider/>
              <Login />
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       },
    buttonContainer: {
      margin: 20,
      justifyContent: 'center'
    },
    buttonStyle: {
      marginTop: 20,
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }, 
    textStyle: {
      justifyContent: 'center',
    }
});

export default LoginScreen;