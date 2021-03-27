import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, ImageBackground, Text } from 'react-native';
import { ListItem, Icon, Card  } from 'react-native-elements'
import Login from '../components/Login';

import image from '../../assets/halfbackground.png';

const LoginScreen = () => {
    
    const [shouldLogin, setShouldLogin] = useState(false);
    
    return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
        <Card style={{ borderRadius: 8 }}>          
            <Text style={styles.textStyle}>
            In order to take full advantage of our app, you first need to create an account on Imgur Platform.
            </Text>
              <Login />
              <Card.Divider/>
            <Text>If you already have an Imgur account, login here.
            </Text>
        </Card>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       },
    textStyle: {
      justifyContent: 'center',
      fontSize: 15,
      margin: 10,
    },
    image: {
      flex: 1,
      width: 'auto',
      height: '60%',
      justifyContent: "center"
    },
});

export default LoginScreen;